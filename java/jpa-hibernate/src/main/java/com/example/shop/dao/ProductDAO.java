package com.example.shop.dao;

import com.example.shop.model.Product;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    public List<Product> findByFitler(String name, BigDecimal price) {
        String jpql = "SELECT p FROM Product AS p WHERE 1=1 ";
        if (name != null && !name.trim().isEmpty()) {
            jpql += "AND p.name = :name ";
        }
        if (price != null) {
            jpql += "AND p.price = :price ";
        }
        TypedQuery<Product> query = em.createQuery(jpql, Product.class);
        if (name != null && !name.trim().isEmpty()) {
            query.setParameter("name", name);
        }
        if (price != null) {
            query.setParameter("price", price);
        }

        return query.getResultList();
    }

    public List<Product> findByFilterV2(String name, BigDecimal price) {
        HashMap<String, Object> filter = new HashMap<>();
        filter.put("name", name);
        filter.put("price", price);

        StringBuilder jpql = new StringBuilder("SELECT p FROM Product AS p WHERE 1=1 ");

        for (Map.Entry<String, Object> pair : filter.entrySet()) {
            String key = pair.getKey();
            Object value = pair.getValue();
            if (value != null) {
                jpql.append("AND " + "p.").append(key).append(" = :").append(key).append(" ");
            }
        }
        TypedQuery<Product> query = em.createQuery(jpql.toString(), Product.class);
        for (Map.Entry<String, Object> pair : filter.entrySet()) {
            String key = pair.getKey();
            Object value = pair.getValue();
            if (value != null) {
                query.setParameter(key, value);
            }
        }
        return query.getResultList();
    }

    public List<Product> findByFilterV3CriteriaAPI(String name, BigDecimal price) {
        CriteriaBuilder builder = em.getCriteriaBuilder();
        CriteriaQuery<Product> query = builder.createQuery(Product.class);
        Root<Product> productFrom = query.from(Product.class);
        query.select(productFrom); // não seria necessário já que o from e o select parte de Product

        Predicate filter = builder.and();
        if (name != null && !name.trim().isEmpty()) {
            filter = builder.and(
                    filter,
                    builder.equal(productFrom.get("name"), name)
            ); // AND p.name = :name;
        }
        if (price != null) {
            filter = builder.and(
                    filter,
                    builder.equal(productFrom.get("price"), price)
            ); // AND p.price = :price;
        }
        query.where(filter);
        return em.createQuery(query).getResultList();
    }
}
