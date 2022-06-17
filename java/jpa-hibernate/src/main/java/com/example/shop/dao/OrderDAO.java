package com.example.shop.dao;

import com.example.shop.model.Order;

import javax.persistence.EntityManager;

public class OrderDAO {
    private final EntityManager em;

    public OrderDAO(EntityManager em) {
        this.em = em;
    }

    public void insert(Order order) {
        em.persist(order);
    }

    public Order findById(Long id) {
        return em.find(Order.class, id);
    }
}
