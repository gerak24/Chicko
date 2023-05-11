using System.Net;
using Hellang.Middleware.ProblemDetails;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OOOAntei.Data;
using OOOAntei.Data.AuthConfiguration;

namespace OOOAntei;

public class Startup
{
    private IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();

        #region Auth

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = AuthOptions.Issuer,
                    ValidateAudience = true,
                    ValidAudience = AuthOptions.Audience,
                    ValidateLifetime = true,
                    IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                    ValidateIssuerSigningKey = true,
                };
            });

        #endregion

        #region Database

        services.AddDbContext<DataContext>(builder =>
            builder.UseNpgsql(Configuration.GetConnectionString("Database")));

        #endregion
        
        #region Other stuff

        // Configure proxy
        services.Configure<ForwardedHeadersOptions>(options =>
        {
            options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
            options.RequireHeaderSymmetry = false;
            options.ForwardLimit = 10;
            options.KnownProxies.Clear();
            options.KnownNetworks.Clear();
        });

        #endregion

        #region ProblemDetails

        services.AddProblemDetails(options =>
        {
            options.Map<BusinessException>(exception =>
                new ProblemDetails
                {
                    Title = exception.Message,
                    Status = (int) HttpStatusCode.BadRequest,
                    Type = "https://schema.Antei.api/problems",
                });
            options.Map<EntityNotFoundException>(exception =>
                new ProblemDetails
                {
                    Title = exception.Message,
                    Status = (int) HttpStatusCode.NotFound,
                    Type = "https://schema.Antei.api/problems/404"
                });
        });
        #endregion
    }


    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
            app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
        }

        app.UseForwardedHeaders();

        app.UseRouting();

        app.UseAuthentication();

        app.UseAuthorization();

        app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
    }
}