package com.example.LoanApp.service;
//
//
//import com.example.LoanApp.dao.UserRepository;
//import com.example.LoanApp.model.Token;
//import com.example.LoanApp.model.User;
//import lombok.AllArgsConstructor;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.UUID;
//
//@Service
//@AllArgsConstructor
//public class UserService implements UserDetailsService {
//
//
//    private final UserRepository appUserRepository;
//    private final TokenService tokenService;
//    private final BCryptPasswordEncoder bCryptPasswordEncoder;
//    private final static String USER_NOT_FOUND_MSG = "user with email %s not found";
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        return appUserRepository.findByEmail(email)
//                .orElseThrow(()->
//                        new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG,email)));
//    }
//    public String signUpUser(User appUser){
//        boolean userExists = appUserRepository.findByEmail((appUser.getEmail())).isPresent();
//        if(userExists){
//            throw new IllegalStateException("User already exists");
//        }
//
//        // Create an encrypted password.
//        String encodedPassword = bCryptPasswordEncoder.encode(appUser.getPassword());
//
//        appUser.setPassword(encodedPassword);
//        appUserRepository.save(appUser);
//
//        String token = UUID.randomUUID().toString();
//        Token confirmationToken = new Token(
//                token,
//                LocalDateTime.now(),
//                LocalDateTime.now().plusMinutes(10),
//                appUser
//        );
//
//        tokenService.saveConfirmationToken(confirmationToken);
//        return token;
//    }
//    public int enableAppUser(String email) {
//        return appUserRepository.enableAppUser(email);
//    }
//}

import com.example.LoanApp.model.User;

import java.util.List;

public interface UserService {
    public List<User> getAllUser()  ;

    public User findUserProfileByJwt(String jwt);

    public User findUserByEmail(String email) ;

    public User findUserById(String userId) ;

    public List<User> findAllUsers();



}