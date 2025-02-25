package com.example.LoanApp.dao;

import com.example.LoanApp.model.ClientDetails;
import com.example.LoanApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientDetailsRepository extends JpaRepository<ClientDetails, Long> {
    Optional<ClientDetails> findByClient(User client);
}
