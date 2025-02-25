package com.example.LoanApp.dao;

import com.example.LoanApp.model.LoanApplication2;
import com.example.LoanApp.model.ReturnedApplication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReturnedLoanRepository  extends JpaRepository<ReturnedApplication, Long> {

    Optional<ReturnedApplication> findByLoan_Id(Long loanId);

}
