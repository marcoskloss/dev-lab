package com.example.shop.dao;

import com.example.shop.model.Client;

import javax.persistence.EntityManager;

public class ClientDAO {
    private final EntityManager em;

    public ClientDAO(EntityManager em) {
        this.em = em;
    }

    public void insert(Client client) {
        em.persist(client);
    }

    public Client findById(Long id) {
        return em.find(Client.class, id);
    }
}
