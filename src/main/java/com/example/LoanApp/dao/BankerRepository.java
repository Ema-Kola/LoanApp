package com.example.LoanApp.dao;

import com.example.LoanApp.model.Banker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankerRepository extends JpaRepository<Banker, Integer> {
}
