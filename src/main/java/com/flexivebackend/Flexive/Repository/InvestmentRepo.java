package com.flexivebackend.Flexive.Repository;

import com.flexivebackend.Flexive.Model.Investment;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InvestmentRepo extends JpaRepository<Investment,Integer> {

}
