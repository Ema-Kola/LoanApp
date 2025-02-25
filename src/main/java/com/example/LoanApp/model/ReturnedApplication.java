package com.example.LoanApp.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Data
@EqualsAndHashCode
@NoArgsConstructor
@Entity

@Table(name = "returned__applications")
public class ReturnedApplication {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IDR")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "LOAN_ID")
    private LoanApplication2 loan;

    @Column(name = "comments")
    private String comment;


}
