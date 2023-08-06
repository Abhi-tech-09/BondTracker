package com.cc.CodingChallenge.Models;

import javax.persistence.*;

@Entity
@Table
public class Counterparty {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public int counterpartyid;
	
	public String name;

	public int getCounterpartyid() {
		return counterpartyid;
	}

	public void setCounterpartyid(int counterpartyid) {
		this.counterpartyid = counterpartyid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
