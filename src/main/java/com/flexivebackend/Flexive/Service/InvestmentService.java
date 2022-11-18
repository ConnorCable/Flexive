package com.flexivebackend.Flexive.Service;

import com.flexivebackend.Flexive.Model.Investment;
import com.flexivebackend.Flexive.Model.User;
import com.flexivebackend.Flexive.Repository.InvestmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class InvestmentService {

    @Autowired
    private InvestmentRepo investmentRepo;

    public Investment update(Investment newInvestment){
        investmentRepo.findById(newInvestment.getId()).map(inv ->{
            inv.setName(newInvestment.getName());
            inv.setDescription(newInvestment.getDescription());
            inv.setTicker(newInvestment.getTicker());
            return investmentRepo.save(inv);
        }).orElseGet(() -> investmentRepo.save(newInvestment));

        return newInvestment;
    }
    public Investment save(User user){
        Investment investment = new Investment();
        investment.setUser(user);

       return  investmentRepo.save(investment);

    }

    public Set<Investment> findByUser (User user){
      return investmentRepo.findByUser(user);
    }
}
