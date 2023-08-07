package com.cc.CodingChallenge.Models;

import org.w3c.dom.css.Counter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CounterParty {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public int id;

    public String name;

    public CounterParty(){}

    public CounterParty(String name){
        this.name = name;
    }

}
