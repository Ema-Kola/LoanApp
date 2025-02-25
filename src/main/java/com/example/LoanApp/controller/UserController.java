package com.example.LoanApp.controller;

import com.example.LoanApp.dao.ClientDetailsRepository;
import com.example.LoanApp.dao.UserRepository;
import com.example.LoanApp.model.AuthResponse;
import com.example.LoanApp.model.ClientDetails;
import com.example.LoanApp.model.Role;
import com.example.LoanApp.model.User;
import com.example.LoanApp.service.UserServiceImpl;
import com.example.LoanApp.security.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserServiceImpl customUserDetails;
    @Autowired
    private ClientDetailsRepository clientDetailsRepository;


    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user, @RequestParam String surname) throws Exception {
        String email = user.getEmail();
        String password = user.getPassword();
        String fullName = user.getName();

        User isEmailExist = userRepository.findByEmail(email);
        if (isEmailExist != null) {
            throw new Exception("Email Is Already Used With Another Account");
        }

        User createdUser = new User();
        createdUser.setEmail(email);
        createdUser.setName(fullName);
        createdUser.setRole(Role.CLIENT);
        createdUser.setPassword(passwordEncoder.encode(password));

        User savedUser = userRepository.save(createdUser);
        userRepository.save(savedUser);

        ClientDetails clientDetails = new ClientDetails();
        clientDetails.setClient(savedUser);
        clientDetails.setName(fullName);
        clientDetails.setEmail(email);
        clientDetails.setSurname(surname);
        clientDetailsRepository.save(clientDetails);

        Authentication authentication = new UsernamePasswordAuthenticationToken(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = JwtProvider.generateToken(authentication, savedUser.getId());


        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setRole(Role.CLIENT.toString());
        authResponse.setMessage("Register Success");
        authResponse.setStatus(true);
        return new ResponseEntity<>(authResponse, HttpStatus.OK);

    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody User loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Authentication authentication = authenticate(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = userRepository.findByEmail(email);
        String token = JwtProvider.generateToken(authentication, user.getId());

        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setMessage("Login success");
        authResponse.setStatus(true);
        authResponse.setRole(user.getRole().name());
        authResponse.setName(user.getName());

        return new ResponseEntity<>(authResponse, HttpStatus.OK);
    }


    private Authentication authenticate(String username, String password) {
        System.out.println("Authenticating user: " + username);

        UserDetails userDetails = customUserDetails.findUserByEmail(username);
        if (userDetails == null) {
            throw new BadCredentialsException("Invalid username");
        }

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());
    }


}





