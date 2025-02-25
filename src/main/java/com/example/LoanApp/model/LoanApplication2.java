package com.example.LoanApp.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@EqualsAndHashCode
@NoArgsConstructor
@Entity
@Table(name = "loan_application")
public class LoanApplication2 {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "client_id")
    User client;
    String name;
    String surname;
    String fatherName;
    Date birthDate;
    String birthPlace;
    String email;
    String phone;
    String education;
    String maritalStatus;
    String incomeType;
    float incomeAmount;
    String currency;
    Integer duration;
    String loanType;
    float loanAmount;
    String loanCurrency;
    Date loanDate;
    String loanStatus;
    Date incomeStart;

}
