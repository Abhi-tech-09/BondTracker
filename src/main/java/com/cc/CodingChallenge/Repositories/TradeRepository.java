package com.cc.CodingChallenge.Repositories;

import com.cc.CodingChallenge.Models.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TradeRepository extends JpaRepository<Trade, String> {

}
