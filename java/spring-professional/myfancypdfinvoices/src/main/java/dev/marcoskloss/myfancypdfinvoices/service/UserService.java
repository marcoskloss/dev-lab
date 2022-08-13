package dev.marcoskloss.myfancypdfinvoices.service;

import dev.marcoskloss.myfancypdfinvoices.model.User;

import java.util.UUID;

public class UserService {
    public User findById(String id) {
        String randomName = UUID.randomUUID().toString();
        return new User(id, randomName);
    }
}
