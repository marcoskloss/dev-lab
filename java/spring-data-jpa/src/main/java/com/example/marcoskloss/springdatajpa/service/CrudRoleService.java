package com.example.marcoskloss.springdatajpa.service;

import com.example.marcoskloss.springdatajpa.orm.Role;
import com.example.marcoskloss.springdatajpa.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Scanner;

@Service
public class CrudRoleService {
    @Autowired
    private RoleRepository roleRepository;

    private void showMenu(Scanner s) {
        System.out.println("0 - Voltar");
        System.out.println("1 - Inserir");
        System.out.println("2 - Editar");
        System.out.println("3 - Visualizar");
        System.out.println("4 - Excluir");
        System.out.println("5 - Listar");
    }

    public void crud(Scanner s) {
        System.out.println("Escolha uma operacao: \n");
        showMenu(s);
        int action = s.nextInt();
        switch (action) {
            case 1:
                save(s);
                break;
            case 2:
                update(s);
                break;
            case 3:
                show(s);
                break;
            case 4:
                remove(s);
                break;
            case 5:
                list();
        }
    }

    private void show(Scanner s) {
        System.out.println("Informe o Id do registro a ser alterado:\n");
        Long id = s.nextLong();
        Optional<Role> optRole = roleRepository.findById(id);
        if (optRole.isEmpty()) {
            System.out.println("Role de id " + id + " não encontrada.");
            return;
        }
        System.out.println(optRole.get());
    }

    private void list() {
        Iterable<Role> roleList = roleRepository.findAll();
        roleList.forEach(System.out::println);
    }

    private void remove(Scanner s) {
        System.out.println("Informe o Id do registro a ser excluido:\n");
        Long id = s.nextLong();
        Optional<Role> optRole = roleRepository.findById(id);
        if (optRole.isEmpty()) {
            System.out.println("Role de id " + id + " não encontrada.");
            return;
        }
        roleRepository.delete(optRole.get());
        System.out.println("Removido");
    }

    private void update(Scanner s) {
        System.out.println("Informe o Id do registro a ser alterado:\n");
        Long id = s.nextLong();
        Optional<Role> optRole = roleRepository.findById(id);
        if (optRole.isEmpty()) {
            System.out.println("Role de id " + id + " não encontrada.");
            return;
        }
        System.out.println("Informe a descricao atualizada: \n");
        String description = s.next();
        Role role = optRole.get();
        role.setDescription(description);
        roleRepository.save(role);
        System.out.println("Atualizado");
    }

    private void save(Scanner s) {
        System.out.println("Descricao da role: ");
        String description = s.next();
        Role role = new Role(description);
        roleRepository.save(role);
        System.out.println("Salvo");
    }
}
