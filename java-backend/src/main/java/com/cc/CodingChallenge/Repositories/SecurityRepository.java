package com.cc.CodingChallenge.Repositories;

import com.cc.CodingChallenge.Models.Security;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SecurityRepository extends JpaRepository<Security, Integer> {
}
