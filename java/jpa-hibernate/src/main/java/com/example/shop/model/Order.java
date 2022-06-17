package com.example.shop.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders") // name = "order" causes an error :( because it's a reserved sql word
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date = LocalDate.now();
    @Column(name = "total_value") // unnecessary because it's the default behavior
    private BigDecimal totalValue = BigDecimal.valueOf(0);

    @ManyToOne(fetch = FetchType.LAZY)
    private Client client;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    // mappedBy: informando o relacionamento do outro lado (OrderItem) para evitar que o
    // hibernate gere a tabela de join automaticamente.
    private List<OrderItem> orderItems = new ArrayList<>();
    // cascadeAll: tudo que acontecer com o Order acontecerá com o OrderItem, assim não
    // será necessário salvar os OrderItems separadamente.

    public Order() {}
    public Order(Client client) {
        this.client = client;
    }

    public void addOrderItem(OrderItem item) {
        orderItems.add(item);
        item.setOrder(this);
        totalValue = totalValue.add(item.getUnitPrice());
    }

    public Long getId() { return id; }

    public List<OrderItem> getOrderItems() { return orderItems; }

    public LocalDate getDate() { return date;}

    public void setDate(LocalDate date) { this.date = date; }

    public BigDecimal getTotalValue() { return totalValue; }

    public void setTotalValue(BigDecimal totalValue) {
        this.totalValue = totalValue;
    }

    public Client getClient() { return client; }

    public void setClient(Client client) { this.client = client; }
}
