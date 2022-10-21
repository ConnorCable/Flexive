package com.flexivebackend.Flexive.Service;

import com.flexivebackend.Flexive.Model.Investment;
import com.flexivebackend.Flexive.Model.User;
import com.flexivebackend.Flexive.Repository.InvestmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvestmentService {

    @Autowired
    private InvestmentRepo investmentRepo;

    
    public Investment save(User user){
        Investment investment = new Investment();
        investment.setUser(user);

       return  investmentRepo.save(investment);

    }
}
