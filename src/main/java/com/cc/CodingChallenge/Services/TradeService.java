package com.cc.CodingChallenge.Services;

import com.cc.CodingChallenge.Models.Security;
import com.cc.CodingChallenge.Models.Trade;
import com.cc.CodingChallenge.Repositories.CounterpartyRepository;
import com.cc.CodingChallenge.Repositories.SecurityRepository;
import com.cc.CodingChallenge.Repositories.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradeService {
    @Autowired
    TradeRepository tradeRepository;

    @Autowired
    SecurityRepository securityRepository;
    
    @Autowired
    CounterpartyRepository counterpartyRepository;

    //TODO REMOVE BELOW
    public void createDummy(){
        Security security = new Security();
        security.name = "sec1";
        security = securityRepository.save(security);
        Trade trade = new Trade();
        trade.name = "trade1";
        trade.security = security;
        tradeRepository.save(trade);

    }
    public List<Trade> findAllTrades(){
        return tradeRepository.findAll();
    }
}
