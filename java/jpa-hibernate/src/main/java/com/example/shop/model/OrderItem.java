package com.example.shop.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "order_item")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    Integer quantity;
    @Column(name = "unit_price")
    BigDecimal unitPrice;

    @ManyToOne(fetch = FetchType.LAZY)
    Product product;
    @ManyToOne(fetch = FetchType.LAZY)
    Order order;

    public OrderItem() {}
    public OrderItem(Integer quantity, Product product, Order order) {
        this.quantity = quantity;
        this.product = product;
        this.order = order;
        this.unitPrice = product.getPrice();
    }

    public BigDecimal getUnitPrice() {return unitPrice;}

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
