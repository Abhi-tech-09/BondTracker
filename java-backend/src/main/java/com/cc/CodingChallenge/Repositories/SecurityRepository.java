package com.cc.CodingChallenge.Repositories;

import com.cc.CodingChallenge.Models.Security;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Locale;

@Repository
public interface SecurityRepository extends JpaRepository<Security, Integer> {

    @Query("select s from Security s where s.securityStatus = 0")
    List<Security> findAllActive();

    @Query("select s from Security s where s.maturityDate >= ?1")
    List<Security> findAllWithMaturityDateAfter(LocalDate startDate);

    @Query("select s from Security s where s.maturityDate <= ?1")
    List<Security> findAllWithMaturityDateBefore(LocalDate endDate);

    @Query("select s from Security s where s.maturityDate >= ?1 and s.maturityDate<=?2")
    List<Security> findAllWithMaturityDateBetween(LocalDate startDate,LocalDate endDate);
}
