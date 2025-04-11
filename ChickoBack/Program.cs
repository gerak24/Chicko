using System.Net;
using ChickoBack.Data;
using Hellang.Middleware.ProblemDetails;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

#region Database

var dbConnString = $"Host={builder.Configuration.GetValue<string>("db:host")};" +
                   $"Port={builder.Configuration.GetValue("db:port", 5432)};" +
                   $"Database={builder.Configuration.GetValue<string>("db:name")};" +
                   $"Username={builder.Configuration.GetValue<string>("db:login")};" +
                   $"Password={builder.Configuration.GetValue<string>("db:password")};";

builder.Services.AddDbContext<DataContext>(dbBuilder =>
    dbBuilder.UseNpgsql(dbConnString));

#endregion

#region Other stuff

// Configure proxy
builder.Services.Configure<ForwardedHeadersOptions>(options =>
{
    options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
    options.RequireHeaderSymmetry = false;
    options.ForwardLimit = 10;
    options.KnownProxies.Clear();
    options.KnownNetworks.Clear();
});

#endregion

#region ProblemDetails

builder.Services.AddProblemDetails(options =>
{
    options.Map<BusinessException>(exception =>
        new ProblemDetails
        {
            Title = exception.Message,
            Status = (int)HttpStatusCode.BadRequest,
            Type = "https://schema.Antei.api/problems",
        });
    options.Map<EntityNotFoundException>(exception =>
        new ProblemDetails
        {
            Title = exception.Message,
            Status = (int)HttpStatusCode.NotFound,
            Type = "https://schema.Antei.api/problems/404"
        });
});

#endregion

builder.Services.AddControllers();


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseCors(cors => cors.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
}

using (var serviceScope = app.Services
           .GetRequiredService<IServiceScopeFactory>()
           .CreateScope())
{
    using (var context = serviceScope.ServiceProvider.GetService<DataContext>() ??
                         throw new BusinessException("Failed to migrate db"))
    {
        context.Database.Migrate();
    }
}

app.UseForwardedHeaders();

app.UseRouting();

app.UseProblemDetails();

app.UseAuthentication();

app.UseAuthorization();

app.Run();