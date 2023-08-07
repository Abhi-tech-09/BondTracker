package com.cc.CodingChallenge.Repositories;

import com.cc.CodingChallenge.Models.Trade;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TradeRepository extends JpaRepository<Trade, Integer> {

	@Query("select t from Trade t where t.security.id = ?1")
	List<Trade> findBySecurityId(int id);

}
