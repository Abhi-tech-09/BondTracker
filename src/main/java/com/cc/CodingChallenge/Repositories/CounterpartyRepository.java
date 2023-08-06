package com.cc.CodingChallenge.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cc.CodingChallenge.Models.Counterparty;

@Repository
public interface CounterpartyRepository extends JpaRepository<Counterparty, Integer> {

}
