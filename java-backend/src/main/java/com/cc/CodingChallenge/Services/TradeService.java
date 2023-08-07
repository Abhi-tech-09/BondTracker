package com.cc.CodingChallenge.Services;

import com.cc.CodingChallenge.Models.Security;
import com.cc.CodingChallenge.Models.Trade;
import com.cc.CodingChallenge.Repositories.SecurityRepository;
import com.cc.CodingChallenge.Repositories.TradeRepository;

import io.vavr.control.Either;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TradeService {
    @Autowired
    TradeRepository tradeRepository;

    @Autowired
    SecurityRepository securityRepository;

    //TODO REMOVE BELOW
//    public void createDummy(){
//        Security security = new Security();
//        security = securityRepository.save(security);
//        Trade trade = new Trade();
//        trade.name = "trade1";
//        trade.security = security;
//        tradeRepository.save(trade);
//
//    }
    
    public Trade getTradeById(int id){
        Optional<Trade> tradeOptional = tradeRepository.findById(id);
        return tradeOptional.orElse(null);
    }
    
    public List<Trade> findAllTrades(){
        return tradeRepository.findAll();
    }

	public Either<String, Trade> createTrade(Trade trade) {
		try{
            trade = tradeRepository.save(trade);
            return Either.right(trade);
        }
        catch (Exception e){
            return Either.left("Internal Server Error Occured, Cannot save security");
        }
	}

	public Either<String, Trade> updateTrade(Trade trade) {
		try{
            Optional<Trade> tradeOptional = tradeRepository.findById(trade.id);
            if(tradeOptional.isEmpty()){
                return Either.left("No such Element");
            }
            Trade tradeObj = tradeOptional.get();
            
            tradeObj.buySell = trade.buySell;
            tradeObj.price = trade.price;
            tradeObj.quantity = trade.quantity;
            tradeObj.tradeStatus = trade.tradeStatus;
            tradeObj.tradeDate = trade.tradeDate;
            tradeObj.settlementDate = trade.settlementDate;
            
            tradeRepository.save(tradeObj);
            return Either.right(tradeObj);
        }
        catch(Exception e){
            return Either.left("Internal Server Error occurred");
        }
	}

	public List<Trade> getTradeBySecurityId(int id) {
		// TODO Auto-generated method stub
		return tradeRepository.findBySecurityId(id);
	}
}
