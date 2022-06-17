package com.example.marcoskloss.springdatajpa.repository;

import com.example.marcoskloss.springdatajpa.orm.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
}
