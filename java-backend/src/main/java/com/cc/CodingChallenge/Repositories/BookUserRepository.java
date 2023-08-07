package com.cc.CodingChallenge.Repositories;

import com.cc.CodingChallenge.Models.BookUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookUserRepository extends JpaRepository<BookUser, String> {
    
}
