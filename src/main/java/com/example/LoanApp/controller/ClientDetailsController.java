package com.example.LoanApp.controller;

import com.example.LoanApp.dao.ClientDetailsRepository;
import com.example.LoanApp.dao.UserRepository;
import com.example.LoanApp.model.ClientDetails;
import com.example.LoanApp.model.User;
import com.example.LoanApp.security.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/client")
public class ClientDetailsController {

    @Autowired
    private ClientDetailsRepository clientDetailsRepository;

    @Autowired
    private UserRepository userRepository;


    @GetMapping("/details")
    public ResponseEntity<ClientDetails> getClientDetails(Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        Optional<ClientDetails> clientDetails = clientDetailsRepository.findByClient(user);

        return clientDetails.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }



    @PostMapping("/details")
    public ResponseEntity<?> updateClientDetails(@RequestBody ClientDetails details, Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }

        Optional<ClientDetails> existingDetails = clientDetailsRepository.findByClient(user);
        ClientDetails clientDetails = existingDetails.orElse(new ClientDetails());
        clientDetails.setClient(user);

        // Update the details
        clientDetails.setName(details.getName());
        clientDetails.setSurname(details.getSurname());
        clientDetails.setFatherName(details.getFatherName());
        clientDetails.setBirthDate(details.getBirthDate());
        clientDetails.setBirthPlace(details.getBirthPlace());
        clientDetails.setEmail(details.getEmail());
        clientDetails.setPhone(details.getPhone());
        clientDetails.setEducation(details.getEducation());
        clientDetails.setMaritalStatus(details.getMaritalStatus());

        if (!user.getName().equals(details.getName())) {
            user.setName(details.getName());
            userRepository.save(user);
        }

        clientDetailsRepository.save(clientDetails);
        return ResponseEntity.ok(clientDetails);
    }
}
