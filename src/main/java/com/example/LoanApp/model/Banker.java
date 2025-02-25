package com.example.LoanApp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@Entity
@Table(name = "bankers")
public class Banker {
    @Id
    @Column(name ="banker_id")
    private Integer bankerId;

    @Column(name ="name")
    private String name;

    @Column(name ="username")
    private String username;

    @Column(name ="password")
    private String password;


}
