package com.example.shop.dao;

import com.example.shop.model.Product;
import javax.persistence.EntityManager;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public class ProductDAO {
    private final EntityManager em;

    public ProductDAO(EntityManager em) {
        this.em = em;
    }

    public void insert(Product product) {
        em.persist(product);
    }

    public void update(Product product) {
        em.merge(product);
    }

    public void remove(Product product) {
        product = em.merge(product);
        em.remove(product);
    }

    public Optional<Product> findById(Long id) {
        Product product = em.find(Product.class, id);
        return Optional.ofNullable(product);
    }

    public List<Product> findAll() {
        // like SQL but different :)
        String jpql = "SELECT p FROM Product AS p";
        return em.createQuery(jpql, Product.class).getResultList();
    }

    public Optional<Product> findByName(String name) {
        String jpql = "SELECT p FROM Product AS p WHERE p.name = :name";
        Product product = em.createQuery(jpql, Product.class)
                .setParameter("name", name)
                .getSingleResult();
        return Optional.ofNullable(product);
    }

    public Optional<BigDecimal> findPriceByProductName(String name) {
        String jpql = "SELECT p.price FROM Product AS p WHERE p.name = :name";
        BigDecimal price = em.createQuery(jpql, BigDecimal.class)
                .setParameter("name", name)
                .getSingleResult();
        return Optional.ofNullable(price);
    }

    public Optional<Product> findByCategoryName(String name) {
        // join
        String jpql = "SELECT p FROM Product AS p WHERE p.category.name = :name";
        Product product = em.createQuery(jpql, Product.class)
                .setParameter("name", name)
                .getSingleResult();
        return Optional.ofNullable(product);
    }
}
