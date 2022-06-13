package com.example.shop.dao;

import com.example.shop.model.Category;
import javax.persistence.EntityManager;

public class CategoryDAO {
    private final EntityManager em;

    public CategoryDAO(EntityManager em) {
        this.em = em;
    }

    public void insert(Category category) {
        em.persist(category);
    }

    public void update(Category category) {
        em.merge(category);
    }

    public void remove(Category category) {
        category = em.merge(category);
        em.remove(category);
    }

    public Category findById(Long id) {
        return em.find(Category.class, id);
    }
}
