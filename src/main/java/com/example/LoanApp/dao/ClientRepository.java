package com.example.LoanApp.dao;

import com.example.LoanApp.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer > {
}
