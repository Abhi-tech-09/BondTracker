package com.cc.CodingChallenge.Controllers;

import com.cc.CodingChallenge.Models.Book;
import com.cc.CodingChallenge.Services.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "*")
public class BookController{
    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return BookService.findAll();
    }

    @GetMapping(value = "/{id}")
    public List<Book> getUser(@PathVariable("id") String userName) {
        return BookService.findByUserId(userName);
    }
}