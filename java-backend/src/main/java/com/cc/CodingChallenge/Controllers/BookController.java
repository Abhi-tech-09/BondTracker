package com.cc.CodingChallenge.Controllers;

import com.cc.CodingChallenge.Models.Book;
import com.cc.CodingChallenge.Services.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("book")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController{
    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return BookService.findAll();
    }

    @GetMapping(value = "/book/{id}")
    public Book getUser(@PathVariable("id") int id) {
        return BookService.findById(id);
    }
}