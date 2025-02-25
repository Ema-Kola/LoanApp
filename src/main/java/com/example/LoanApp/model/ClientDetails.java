package com.example.LoanApp.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@Entity
@Table(name = "client_details")
public class ClientDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private User client;

    private String name;
    private String surname;
    private String fatherName;
    private Date birthDate;
    private String birthPlace;
    private String email;
    private String phone;
    private String education;
    private String maritalStatus;
}
