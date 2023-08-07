package com.cc.CodingChallenge.Controllers;

import com.cc.CodingChallenge.Models.Security;
import com.cc.CodingChallenge.Models.Trade;
import com.cc.CodingChallenge.Services.SecurityService;
import com.cc.CodingChallenge.Services.TradeService;

import io.vavr.control.Either;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("trade")
public class TradeController {
    @Autowired
    TradeService tradeService;
    
    @Autowired
    SecurityService securityService;

    //TODO REMOVE THIS DUMMY METHOD
//    @GetMapping("createDummy")
//    public String createTrade(){
//        tradeService.createDummy();
//        return "Created";
//
//    }
    
    @GetMapping("/trades")
    public List<Trade> fetchAllTrades(){
        List<Trade> tradeList = tradeService.findAllTrades();
        return tradeList;
    }
    
    
    @GetMapping("/tradeById/{id}")
    public ResponseEntity<Trade> getTradeById(@PathVariable("id") int id) {
        return new ResponseEntity<>(tradeService.getTradeById(id), HttpStatus.OK);
    }
    
    
    //return security for a trade
    @GetMapping("/securityOfTrade/{id}")
    public ResponseEntity<Security> getSecurityOfTrade(@PathVariable("id") int id) {	
    	return new ResponseEntity<>(tradeService.getTradeById(id).security, HttpStatus.OK);
    }
    
    @GetMapping("/tradeOfSecurity/{id}")
    public ResponseEntity<List<Trade>> getTradeOfSecurity(@PathVariable("id") int id) {	
    	return new ResponseEntity<>(tradeService.getTradeBySecurityId(id), HttpStatus.OK);
    }
    
    
    @PostMapping("/createTrade")
    public ResponseEntity<Trade> createTrade(@RequestBody Trade tradeReq){
        Either<String, Trade> eitherResponse = tradeService.createTrade(tradeReq);
        if(eitherResponse.isLeft()){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(eitherResponse.get(),HttpStatus.CREATED);
    }
    
    @PostMapping(value = "/updateTrade",  produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Trade> updateTrade(@RequestBody Trade tradeReq){
        Either<String, Trade> eitherResponse = tradeService.updateTrade(tradeReq);
        if(eitherResponse.isLeft()){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(eitherResponse.get(),HttpStatus.ACCEPTED);
    }
    
    
}
