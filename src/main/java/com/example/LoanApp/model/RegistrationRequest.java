package com.example.LoanApp.model;

import lombok.Getter;
import org.antlr.v4.runtime.misc.NotNull;


@Getter
public class RegistrationRequest {
    @NotNull
    private String firstname;

    @NotNull
    private String password;
    @NotNull
    private String email;
}