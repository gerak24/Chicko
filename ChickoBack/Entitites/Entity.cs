﻿namespace ChickoBack.Entitites;

public abstract class Entity
{
    protected Entity(Guid id)
    {
        Id = id;
    }

    public Guid Id { get; set; }
}