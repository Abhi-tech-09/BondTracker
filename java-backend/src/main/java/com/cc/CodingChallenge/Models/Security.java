package com.cc.CodingChallenge.Models;

import java.time.LocalDate;

import javax.persistence.*;

import com.cc.CodingChallenge.Utils.Constants;

//This is the security/bond-definition as described in the entity schema of the doc
//TODO add/remove fields accordingly this is just an intial setup
//TODO map it to the Trade entity
@Entity
@Table
public class Security {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public int id;

    //12-digit alphanumeric
    public String isin;
    
    //9-digit alphanumeric
    public String cusip;
    
    public String issuer;
    
    public LocalDate maturityDate;
    
    public int coupon;
    
    public int faceValue;
    
    public Constants.SecurityType securityType;
    
    
    
    public Constants.SecurityStatus securityStatus;
    
    //public String name;
    //replaced name with isin

    public Security(){}

    public Security(String isin, String cusip, String issuer, LocalDate maturityDate, 
    		int coupon, int faceValue){
        this.isin = isin;
        this.cusip = cusip;
        this.issuer = issuer;
        this.maturityDate = maturityDate;
        this.coupon = coupon;
        this.faceValue = faceValue;
        this.securityType = Constants.SecurityType.CORPORATE;
        this.securityStatus = Constants.SecurityStatus.LIVE;
        
        
        
    }
}
