package com.example.shop.model;

import javax.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

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

    @ManyToOne(fetch = FetchType.LAZY)
    private Category category;

    @OneToMany(mappedBy = "product") // informando o relacionamento do outro lado (OrderItem) para evitar que o
    // hibernate gere a tabela de join automaticamente
    private List<OrderItem> orderItems = new ArrayList<>();

    public Product() {}

    public Product(String name, String description, BigDecimal price, Category category) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }

    public void addOrderItem(OrderItem item) {
        orderItems.add(item);
        item.setProduct(this);
    }

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
