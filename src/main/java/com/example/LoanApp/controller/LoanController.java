package com.example.LoanApp.controller;

import com.example.LoanApp.dao.LoanRepository;
import com.example.LoanApp.dao.ReturnedLoanRepository;
import com.example.LoanApp.dao.UserRepository;
import com.example.LoanApp.model.*;
import com.example.LoanApp.service.LoanApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")
public class LoanController {

    @Autowired
    private LoanRepository loanRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReturnedLoanRepository returnedLoanRepository;


    @Autowired
    private LoanApplicationService loanService;


    @GetMapping("/client/{clientId}/applications")
    public List<LoanApplication2> getClientApplications(@PathVariable Long clientId) {
        return loanRepository.findByClientId(clientId);
    }


    @DeleteMapping("/application/{id}")
    public ResponseEntity<?> deleteApplication(@PathVariable Long id) throws Exception {
        LoanApplication2 loan = loanRepository.findById(id).orElseThrow(() ->
                new Exception("Loan application not found with id " + id)
        );

        if (!"APPLIED".equals(loan.getLoanStatus())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Loan application can only be deleted if the status is 'APPLIED'.");
        }

        loanRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }


    @PostMapping("/application")
    public ResponseEntity<LoanApplication2> createApplication(@RequestBody LoanApplication2 loan) throws URISyntaxException {
        if (loan.getClient() == null || loan.getClient().getId() == null) {
            return ResponseEntity.badRequest().body(null);
        }
        System.out.println(loan);

        try {
            LoanApplication2 result = loanRepository.save(loan);
            return ResponseEntity.created(new URI("/api/application/" + result.getId())).body(result);
        } catch (Exception e) {
            System.err.println("Error saving loan application: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);

        }
    }

    @PutMapping("/application/{id}")
    public ResponseEntity<LoanApplication2> updateApplication(@PathVariable Long id, @RequestBody LoanApplication2 loan) {
        if (!loanRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        System.out.println(loan);
        loan.setId(id);
        LoanApplication2 result = loanRepository.save(loan);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/application/{id}")
    public ResponseEntity<LoanApplication2> getLoanApplication(@PathVariable Long id) {
        LoanApplication2 loanApplication = loanService.getLoanById(id);
        return ResponseEntity.ok(loanApplication);
    }

    @GetMapping("/applications")
    public List<LoanApplication2> getAllApplications() {
        return loanRepository.findAll();
    }

    @PutMapping("/application/{id}/status")
    public ResponseEntity<LoanApplication2> updateLoanStatus(@PathVariable Long id, @RequestParam String status) {
        LoanApplication2 loan = loanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Loan application not found with id " + id));

        loan.setLoanStatus(status);
        LoanApplication2 updatedLoan = loanRepository.save(loan);
        return ResponseEntity.ok(updatedLoan);
    }

    @PostMapping("/application/{id}/return")
    public ResponseEntity<ReturnedApplication> returnLoan(@PathVariable Long id, @RequestParam String comment) {
        LoanApplication2 loan = loanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Loan application not found with id " + id));

        loan.setLoanStatus("RETURNED");
        System.out.println(loan);
        loanRepository.save(loan);

        ReturnedApplication returnedApplication = new ReturnedApplication();
        returnedApplication.setLoan(loan);
        returnedApplication.setComment(comment);
//        returnedApplication.setId(loan.getId());
        System.out.println(returnedApplication);

        ReturnedApplication savedReturnedApplication = returnedLoanRepository.save(returnedApplication);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedReturnedApplication);
    }



    @GetMapping("/application/{id}/returned")
    public ResponseEntity<ReturnedApplication> getReturnedApplication(@PathVariable Long id) {
        Optional<ReturnedApplication> returnedApplication = returnedLoanRepository.findByLoan_Id(id);

        return returnedApplication.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }





}

