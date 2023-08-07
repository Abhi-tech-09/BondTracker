package com.cc.CodingChallenge.Repositories;

import com.cc.CodingChallenge.Models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
