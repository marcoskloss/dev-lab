package com.example.marcoskloss.springdatajpa;

import com.example.marcoskloss.springdatajpa.service.CrudRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Scanner;

@SpringBootApplication
public class SpringDataJpaApplication implements CommandLineRunner {
	private Boolean systemOn = true;
	@Autowired
	CrudRoleService crudRoleService;


	public static void main(String[] args) {
		SpringApplication.run(SpringDataJpaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Scanner s = new Scanner(System.in);
		while(systemOn) {
			System.out.println("Informe uma acao: \n");
			System.out.println("0 - Sair");
			System.out.println("1 - Cargo");
			int action = s.nextInt();
			if (action == 1)
				crudRoleService.crud(s);
			else
				systemOn = false;
		}

	}
}
