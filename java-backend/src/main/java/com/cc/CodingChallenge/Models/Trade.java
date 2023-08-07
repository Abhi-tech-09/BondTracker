package com.cc.CodingChallenge.Models;

import com.cc.CodingChallenge.Utils.Constants;

import javax.persistence.*;

@Entity
@Table
public class Trade {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public int id;

    public String name;

    @OneToOne
    public CounterParty counterParty;
    @ManyToOne
    public Security security;

    //TODO Discuss if any more states are to be added
    public Constants.TradeStatus tradeStatus;

    public Trade(){}

    public Trade(String name, CounterParty counterParty, Security security){
        this.name = name;
        this.counterParty = counterParty;
        this.security = security;
        this.tradeStatus = Constants.TradeStatus.ACTIVE;

    }

}
