package com.cc.CodingChallenge.Controllers;

import com.cc.CodingChallenge.Models.Book;
import com.cc.CodingChallenge.Repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("book")
//TODO Create bookService
public class BookController {
    @Autowired
    BookRepository bookRepository;

    @GetMapping("/books")
    public List<Book> getAllBooks(){
        List<Book> bookList = bookRepository.findAll();
        return bookList;
    }
}
