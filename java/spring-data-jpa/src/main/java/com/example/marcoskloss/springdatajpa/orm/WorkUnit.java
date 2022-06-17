package com.example.marcoskloss.springdatajpa.orm;

import javax.persistence.*;

@Entity
@Table(name = "work_unit")
public class WorkUnit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private String address;

    public WorkUnit() {}
    public WorkUnit(String description, String address) {
        this.description = description;
        this.address = address;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "WorkUnit{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
