package com.flexivebackend.Flexive.Controller;

import com.flexivebackend.Flexive.Model.Investment;
import com.flexivebackend.Flexive.Model.User;
import com.flexivebackend.Flexive.Repository.InvestmentRepo;
import com.flexivebackend.Flexive.Service.InvestmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.Set;

@RestController
@RequestMapping("/api/investments")
public class InvestmentController {

    @Autowired
    private InvestmentService investmentService;
    private InvestmentRepo investmentRepo;

    @PostMapping("")
    public ResponseEntity<?> createInvestment ( @AuthenticationPrincipal User user){
        Investment newinvestment = investmentService.save(user);
        System.out.println(user);
        return ResponseEntity.ok(newinvestment);
    }

    @PutMapping("")
    public void change(@PathVariable Investment investment){
        investmentService.update(investment);
    }

    @GetMapping("")
    public ResponseEntity<?> getInvestments(@AuthenticationPrincipal User user){
        Set<Investment> investmentsByUser = investmentService.findByUser(user);
        return ResponseEntity.ok(investmentsByUser);
    }

}
