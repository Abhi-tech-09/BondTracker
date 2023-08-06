
package com.cc.CodingChallenge.Models;

import java.util.Date;

import javax.persistence.*;
import javax.persistence.Id;

@Entity
@Table
public class Trade {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public int tradeid;
    
    public int bookid;
    public int counterpartyid;
    
    @ManyToOne
    public Security security;
    
    public int quantity;
    public String status;
    public float price;
    public String buy_sell;
    public Date tradedate;
    public Date settlementdate;
    public String name;
    
    
    public int getId() {
		return tradeid;
	}
	public void setId(int id) {
		this.tradeid = id;
	}
	public int getBookid() {
		return bookid;
	}
	public void setBookid(int bookid) {
		this.bookid = bookid;
	}
	public int getCounterpartyid() {
		return counterpartyid;
	}
	public void setCounterpartyid(int counterpartyid) {
		this.counterpartyid = counterpartyid;
	}
	public Security getSecurity() {
		return security;
	}
	public void setSecurity(Security security) {
		this.security = security;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getBuy_sell() {
		return buy_sell;
	}
	public void setBuy_sell(String buy_sell) {
		this.buy_sell = buy_sell;
	}
	public Date getTradedate() {
		return tradedate;
	}
	public void setTradedate(Date tradedate) {
		this.tradedate = tradedate;
	}
	public Date getSettlementdate() {
		return settlementdate;
	}
	public void setSettlementdate(Date settlementdate) {
		this.settlementdate = settlementdate;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

    
}
