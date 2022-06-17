package com.example.shop.model;

import javax.persistence.*;

@Entity
@Table(name = "client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    String cpf;

    public Client() {}
    public Client(String name, String cpf) {
        this.name =  name;
        this.cpf = cpf;
    }
}
