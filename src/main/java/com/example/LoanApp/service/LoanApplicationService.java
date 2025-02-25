package com.example.LoanApp.service;

import com.example.LoanApp.dao.LoanRepository;
import com.example.LoanApp.model.LoanApplication2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoanApplicationService {

    @Autowired
    private LoanRepository loanRepository;

    public LoanApplicationService(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    public LoanApplication2 getLoanById(Long id){

        Optional<LoanApplication2> loanApplication = loanRepository.findById(id);

        return loanApplication.orElseThrow(() -> new RuntimeException("Loan not found with id " + id));
    }

}
