package com.example.shop.model;

import javax.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity()
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private BigDecimal price;

    @Column(name = "created_at")
    private LocalDate createdAt = LocalDate.now();

    @ManyToOne
    private Category category;

    public void setCategory(Category category) { this.category = category; }
    public Category getCategory() { return category; }

    public void setId(Long id) { this.id = id; }
    public Long getId() { return id; }

    public LocalDate getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDate createdAt) { this.createdAt = createdAt; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
}
