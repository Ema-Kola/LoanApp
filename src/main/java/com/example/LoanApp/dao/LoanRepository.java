package com.example.LoanApp.dao;


import com.example.LoanApp.model.LoanApplication2;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LoanRepository extends JpaRepository<LoanApplication2, Long> {
    List<LoanApplication2> findByClientId(Long clientId);

//    Optional<LoanApplication> findById(Long id);

}
