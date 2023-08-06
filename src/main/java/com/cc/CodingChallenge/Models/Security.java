package com.cc.CodingChallenge.Models;

import java.util.Date;

import javax.persistence.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Id;

//This is the security/bond-definition as described in the entity schema of the doc
//TODO add/remove fields accordingly this is just an intial setup
//TODO map it to the Trade entity
@Entity
@Table
public class Security {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public int secid;
    
    @Column(unique=true)
    public int isin;
    
    @Column(unique=true)
    public int cusip;

    public String issuer;
    public Date maturitydate;
    private float coupon;
    public String type;
    public int facevalue;
    public String status;

	public String name;
    
    
    public int getId() {
		return secid;
	}
	public void setId(int id) {
		this.secid = id;
	}
	public int getIsin() {
		return isin;
	}
	public void setIsin(int isin) {
		this.isin = isin;
	}
	public int getCusip() {
		return cusip;
	}
	public void setCusip(int cusip) {
		this.cusip = cusip;
	}
	public String getIssuer() {
		return issuer;
	}
	public void setIssuer(String issuer) {
		this.issuer = issuer;
	}
	public Date getMaturitydate() {
		return maturitydate;
	}
	public void setMaturitydate(Date maturitydate) {
		this.maturitydate = maturitydate;
	}
	public float getCoupon() {
		return coupon;
	}
	public void setCoupon(float coupon) {
		this.coupon = coupon;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getFacevalue() {
		return facevalue;
	}
	public void setFacevalue(int facevalue) {
		this.facevalue = facevalue;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
    
    
}