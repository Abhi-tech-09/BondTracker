package com.cc.CodingChallenge.Models;

import com.cc.CodingChallenge.Utils.Constants;

import java.time.LocalDate;

import javax.persistence.*;

@Entity
@Table
public class Trade {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public int id;
    
    //add many to one relation with book
    
    @OneToOne
    public CounterParty counterParty;
    @ManyToOne
    public Security security;
    
    public int quantity;

    //TODO Discuss if any more states are to be added
    public Constants.TradeStatus tradeStatus;
    
    public int price;
    
    public Constants.BuySell buySell;
    
    public LocalDate tradeDate;
    
    public LocalDate settlementDate;

    public Trade(){}

    public Trade(CounterParty counterParty, Security security, int quantity, int price, LocalDate tradeDate, LocalDate settlementDate ){
        
        this.counterParty = counterParty;
        this.security = security;
        this.quantity = quantity;
        this.tradeStatus = Constants.TradeStatus.ACTIVE;
        this.price = price;
        this.buySell = Constants.BuySell.BUY;
        this.tradeDate = tradeDate;
        this.settlementDate = settlementDate;
    }

}
