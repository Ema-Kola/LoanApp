//package com.example.LoanApp.controller;
////
////import com.example.LoanApp.dao.ClientRepository;
////import com.example.LoanApp.model.Client;
////
////import org.springframework.web.bind.annotation.*;
////
////import java.util.List;
////
////@RestController
////@RequestMapping("/clients")
////public class ClientController {
////
////    private final ClientRepository clientRepository;
////
////    public ClientController(ClientRepository clientRepository) {
////        this.clientRepository = clientRepository;
////    }
////
////    @GetMapping
////    public List<Client> getClients() {
////        return clientRepository.findAll();
////    }
////
////
////
////}
//
//
//import com.example.LoanApp.dao.LoanRepository;
//import com.example.LoanApp.dao.UserRepository;
//import com.example.LoanApp.model.LoanApplication;
//import com.example.LoanApp.model.User;
//import com.example.LoanApp.service.LoanApplicationService;
//import com.example.LoanApp.service.UserService;
//import com.example.LoanApp.service.UserServiceImpl;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/client")
//public class ClientController {
//
//    @Autowired
//    private LoanApplicationService loanApplicationService;
//
//    @Autowired
//    LoanRepository loanRepository;
//
//    @Autowired
//    private UserServiceImpl userService;
//    @Autowired
//    private UserRepository userRepository;
//
//
//    private User getCurrentUser() {
//        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
////        return userService.loadUserByUsername(userDetails.getUsername());
//        return userRepository.findByEmail(userDetails.getUsername());
//    }
//
//
//    @PostMapping("/loan-application")
//    public ResponseEntity<LoanApplication> submitLoanApplication(@RequestBody LoanApplication loanApplication) {
//        User currentUser = getCurrentUser();
//        loanApplication.setClient(currentUser);
//        loanApplication.setLoanStatus("Applied");
//        LoanApplication savedApplication = loanRepository.save(loanApplication);
//        return new ResponseEntity<>(savedApplication, HttpStatus.CREATED);
//    }
//
//
//    @GetMapping("/loan-applications")
//    public ResponseEntity<List<LoanApplication>> getAllLoanApplications() {
//        User currentUser = getCurrentUser();
//        List<LoanApplication> loanApplications = loanApplicationService.findByUser(currentUser);
//        return new ResponseEntity<>(loanApplications, HttpStatus.OK);
//    }
//
//    // Get a specific loan application by ID
//    @GetMapping("/loan-application/{id}")
//    public ResponseEntity<LoanApplication> getLoanApplication(@PathVariable("id") Long id) {
//        LoanApplication loanApplication = loanApplicationService.findById(id);
//        if (loanApplication == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        return new ResponseEntity<>(loanApplication, HttpStatus.OK);
//    }
//
//    // Update an existing loan application (for example, to change loan status)
//    @PutMapping("/loan-application/{id}")
//    public ResponseEntity<LoanApplication> updateLoanApplication(@PathVariable("id") Long id,
//                                                                 @RequestBody LoanApplication loanApplication) {
//        Optional<LoanApplication> existingLoanApplication = loanRepository.findById(id);
//        if (existingLoanApplication == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        // Update the fields as needed
//        existingLoanApplication.setLoanAmount(loanApplication.getLoanAmount());
//        existingLoanApplication.setLoanStatus(loanApplication.getLoanStatus());
//        existingLoanApplication.setLoanDate(loanApplication.getLoanDate());
//
//        LoanApplication updatedApplication = loanRepository.save(existingLoanApplication);
//        return new ResponseEntity<>(updatedApplication, HttpStatus.OK);
//    }
//
//    // Delete a loan application
//    @DeleteMapping("/loan-application/{id}")
//    public ResponseEntity<Void> deleteLoanApplication(@PathVariable("id") Long id) {
//        LoanApplication loanApplication = loanApplicationService.findById(id);
//        if (loanApplication == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        loanApplicationService.delete(id);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
//}
//
