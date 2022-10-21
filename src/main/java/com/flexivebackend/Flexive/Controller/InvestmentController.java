package com.flexivebackend.Flexive.Controller;

import com.flexivebackend.Flexive.Model.Investment;
import com.flexivebackend.Flexive.Model.User;
import com.flexivebackend.Flexive.Service.InvestmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/investments")
public class InvestmentController {

    @Autowired
    private InvestmentService investmentService;

    @PostMapping("")
    public ResponseEntity<?> createInvestment (@AuthenticationPrincipal User user){
        Investment newinvestment = investmentService.save(user);
        return ResponseEntity.ok(newinvestment);
    }

}
