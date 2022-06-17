package com.example.shop.dao;

import com.example.shop.model.Client;
import com.example.shop.model.OrderItem;

import javax.persistence.EntityManager;

public class OrderItemDAO {
    private final EntityManager em;

    public OrderItemDAO(EntityManager em) {
        this.em = em;
    }

    public void insert(OrderItem orderItem) {
        em.persist(orderItem);
    }

    public OrderItem findById(Long id) {
        return em.find(OrderItem.class, id);
    }
}
