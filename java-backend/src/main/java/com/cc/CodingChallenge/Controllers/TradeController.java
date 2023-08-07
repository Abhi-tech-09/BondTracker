package com.cc.CodingChallenge.Controllers;

import com.cc.CodingChallenge.Models.Security;
import com.cc.CodingChallenge.Models.Trade;
import com.cc.CodingChallenge.Services.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TradeController {
    @Autowired
    TradeService tradeService;

    //TODO REMOVE THIS DUMMY METHOD
    @GetMapping("createDummy")
    public String createTrade(){
        tradeService.createDummy();
        return "Created";

    }
    @GetMapping("/trades")
    public List<Trade> fetchAllTrades(){
        List<Trade> tradeList = tradeService.findAllTrades();
        return tradeList;
    }
}
