package com.cc.CodingChallenge.Utils;


public final class Constants {
    public static enum TradeStatus{
        PENDING,
        REJECTED,
        SETTLED,
        UNSETTLED,
        ACTIVE,
    }
    
    public static enum SecurityStatus{
        LIVE,
        DEAD
    }
    public enum Role {
        ROLE_USER,
        ROLE_ADMIN
    }
    
    public static enum SecurityType{
        CORPORATE,
        MUNICIPAL,
        GOVERNMENT,
        AGENCY
    }
    
    public static enum BuySell {
    	BUY,
    	SELL
    }
}
