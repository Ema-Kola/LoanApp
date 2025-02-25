//package com.example.LoanApp.controller;
//
//import com.example.LoanApp.dao.LoanRepository;
//import com.example.LoanApp.dao.UserRepository;
//import com.example.LoanApp.model.*;
//import com.example.LoanApp.service.LoanApplicationService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.net.URI;
//import java.net.URISyntaxException;
//import java.util.List;
//
//
//@RestController
//@RequestMapping("/api")
//public class LoanController {
//
//    @Autowired
//    private LoanRepository loanRepository;
//
//    @Autowired
//    private UserRepository userRepository;
//
//
//    @Autowired
//    private LoanApplicationService loanService;
//
//
//    @GetMapping("/client/{clientId}/applications")
//    public List<LoanApplication> getClientApplications(@PathVariable Long clientId) {
//        return loanRepository.findByClientId(clientId);
//    }
//
//
////    @PostMapping("/application")
////    ResponseEntity<LoanApplication> createApplication(@RequestBody LoanApplication loan) throws URISyntaxException {
//////        log.info("Request to create group: {}", loan);
////        LoanApplication result = loanRepository.save(loan);
////        return ResponseEntity.created(new URI("/api/application/" + result.getId()))
////                .body(result);
////    }
//
////    @PutMapping("/application/{id}")
////    public ResponseEntity<LoanApplication> updateApplication(@PathVariable Long id, @RequestBody LoanApplication loan) {
////        // Set the loan ID explicitly to ensure it is updated correctly
////        loan.setId(id);
////        LoanApplication result = loanRepository.save(loan);
////        return ResponseEntity.ok().body(result);
////    }
//
//
////    @PutMapping("/application/{id}")
////    ResponseEntity<LoanApplication> updateApplication(@RequestBody LoanApplication loan) {
//////        log.info("Request to update group: {}", loan);
////        LoanApplication result = loanRepository.save(loan);
////        return ResponseEntity.ok().body(result);
////    }
//    @DeleteMapping("/application/{id}")
//    public ResponseEntity<?> deleteApplication(@PathVariable Long id) throws Exception {
//        LoanApplication loan = loanRepository.findById(id).orElseThrow(() ->
//                new Exception("Loan application not found with id " + id)
//        );
//
//        if (!"APPLIED".equals(loan.getLoanStatus())) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                    .body("Loan application can only be deleted if the status is 'APPLIED'.");
//        }
//
//        loanRepository.deleteById(id);
//        return ResponseEntity.ok().build();
//    }
//
//
////    @PostMapping("/application")
////    public ResponseEntity<LoanApplication> createApplication(@RequestBody LoanApplication loan) throws URISyntaxException {
////        if (loan.getClient() == null || loan.getClient().getId() == null) {
////            return ResponseEntity.badRequest().body(null);
////        }
////
////        LoanApplication result = loanRepository.save(loan);
////        return ResponseEntity.created(new URI("/api/application/" + result.getId())).body(result);
////    }
//
//
//@PostMapping("/application")
//public ResponseEntity<LoanApplication> createApplication(@RequestBody LoanApplication loan) throws URISyntaxException {
//    if (loan.getClient() == null || loan.getClient().getId() == null) {
//        return ResponseEntity.badRequest().body(null);
//    }
//    System.out.println(loan);
//
//    try {
//        LoanApplication result = loanRepository.save(loan);
//        return ResponseEntity.created(new URI("/api/application/" + result.getId())).body(result);
//    } catch (Exception e) {
//        System.err.println("Error saving loan application: " + e.getMessage());
//        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
//
//    }
//}
//
//    @PutMapping("/application/{id}")
//    public ResponseEntity<LoanApplication> updateApplication(@PathVariable Long id, @RequestBody LoanApplication loan) {
//        if (!loanRepository.existsById(id)) {
//            return ResponseEntity.notFound().build();
//        }
//        System.out.println(loan);
//        loan.setId(id);
//        LoanApplication result = loanRepository.save(loan);
//        return ResponseEntity.ok().body(result);
//    }
//
//    @GetMapping("/application/{id}")
//    public ResponseEntity<LoanApplication> getLoanApplication(@PathVariable Long id) {
//        LoanApplication loanApplication = loanService.getLoanById(id);
//        return ResponseEntity.ok(loanApplication);
//    }
//
//    @GetMapping("/applications")
//    public List<LoanApplication> getAllApplications() {
//        return loanRepository.findAll();
//    }
//
//    @PutMapping("/application/{id}/status")
//    public ResponseEntity<LoanApplication> updateLoanStatus(@PathVariable Long id, @RequestParam String status) {
//        LoanApplication loan = loanRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Loan application not found with id " + id));
//
//        loan.setLoanStatus(status);
//        LoanApplication updatedLoan = loanRepository.save(loan);
//        return ResponseEntity.ok(updatedLoan);
//    }
//
//
//
//
//}
//


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


//    @PostMapping("/application")
//    ResponseEntity<LoanApplication> createApplication(@RequestBody LoanApplication loan) throws URISyntaxException {
////        log.info("Request to create group: {}", loan);
//        LoanApplication result = loanRepository.save(loan);
//        return ResponseEntity.created(new URI("/api/application/" + result.getId()))
//                .body(result);
//    }

//    @PutMapping("/application/{id}")
//    public ResponseEntity<LoanApplication> updateApplication(@PathVariable Long id, @RequestBody LoanApplication loan) {
//        // Set the loan ID explicitly to ensure it is updated correctly
//        loan.setId(id);
//        LoanApplication result = loanRepository.save(loan);
//        return ResponseEntity.ok().body(result);
//    }


    //    @PutMapping("/application/{id}")
//    ResponseEntity<LoanApplication> updateApplication(@RequestBody LoanApplication loan) {
////        log.info("Request to update group: {}", loan);
//        LoanApplication result = loanRepository.save(loan);
//        return ResponseEntity.ok().body(result);
//    }
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


//    @PostMapping("/application")
//    public ResponseEntity<LoanApplication> createApplication(@RequestBody LoanApplication loan) throws URISyntaxException {
//        if (loan.getClient() == null || loan.getClient().getId() == null) {
//            return ResponseEntity.badRequest().body(null);
//        }
//
//        LoanApplication result = loanRepository.save(loan);
//        return ResponseEntity.created(new URI("/api/application/" + result.getId())).body(result);
//    }


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



//    @PutMapping("/application/{id}/status")
//    public ResponseEntity<LoanApplication2> updateLoanStatus(@PathVariable Long id, @RequestParam String status, @RequestParam(required = false) String comment) {
//        LoanApplication2 loan = loanRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Loan application not found with id " + id));
//
//        // Set the status of the loan application
//        loan.setLoanStatus(status);
//
//        if ("RETURNED".equals(status) && comment != null) {
//            // Handle the comment if the status is 'RETURNED'
//            ReturnedApplication returnedApplication = new ReturnedApplication();
//            returnedApplication.setLoan(loan);
//            returnedApplication.setComment(comment);
//            returnedLoanRepository.save(returnedApplication);
//        }
//
//        LoanApplication2 updatedLoan = loanRepository.save(loan);
//        return ResponseEntity.ok(updatedLoan);
//    }




//    @PutMapping("/application/{id}/return")
//    public ResponseEntity<LoanApplication2> returnLoan(@PathVariable Long id, @RequestParam String comment) {
//        LoanApplication2 loan = loanRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Loan application not found with id " + id));
//
//
//        loan.setLoanStatus("RETURNED");
//        loanRepository.save(loan);
//
//
//        ReturnedApplication returnedApplication = new ReturnedApplication();
//        returnedApplication.setLoan(loan);
//        returnedApplication.setComment(comment);
//        returnedLoanRepository.save(returnedApplication);
//
//        return ResponseEntity.ok(loan);
//    }

    @GetMapping("/application/{id}/returned")
    public ResponseEntity<ReturnedApplication> getReturnedApplication(@PathVariable Long id) {
        Optional<ReturnedApplication> returnedApplication = returnedLoanRepository.findByLoan_Id(id);

        return returnedApplication.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }





}

