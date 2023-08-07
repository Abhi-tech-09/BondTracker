package com.cc.CodingChallenge.Controllers;

import com.cc.CodingChallenge.Models.BookUser;
import com.cc.CodingChallenge.Repositories.BookUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
//TODO Create bookUserService
public class BookUserController {
    @Autowired
    BookUserRepository bookUserRepository;

    @GetMapping("/users")
    public List<BookUser> getAllUsers(){
        List<BookUser> bookUserList = bookUserRepository.findAll();
        return bookUserList;
    }

}
