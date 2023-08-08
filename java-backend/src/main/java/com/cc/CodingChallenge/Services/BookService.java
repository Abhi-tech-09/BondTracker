package com.cc.CodingChallenge.Services;

import com.cc.CodingChallenge.Models.Book;
import com.cc.CodingChallenge.Repositories.BookRepository;
import com.cc.CodingChallenge.Repositories.BookUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
 public class BookService{
    private static BookRepository bookRepo;
    private static BookUserRepository bookUserRepository;
    
    @Autowired
    public BookService(BookRepository bookRepo, BookUserRepository bookUserRepository){
        super();
        this.bookRepo = bookRepo;
        this.bookUserRepository = bookUserRepository;
    }

    public static List<Book> findAll(){
        return bookRepo.findAll();
    }

    public static List<Book> findByUserId(String userName) {

	  return bookUserRepository.findById(userName)
			    .orElseThrow(() ->new RuntimeException("Resource with "+userName +" Not Present")).bookList;
  }
    public static void addBookForUser(Book book, String userName) {
        bookUserRepository.findById(userName)
                .orElseThrow(() ->new RuntimeException("Resource with "+userName +" Not Present")).bookList.add(book);
    }

 }