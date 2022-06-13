package com.example.shop.data;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

public class DbConnection {
    private final EntityManager entityManager;

    public DbConnection() {
        entityManager = Persistence
                .createEntityManagerFactory("shop")
                .createEntityManager();
    }

    public EntityManager getEntityManager() {
        return entityManager;
    }
}
