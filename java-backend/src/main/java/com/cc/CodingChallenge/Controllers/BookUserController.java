package com.cc.CodingChallenge.Controllers;

import com.cc.CodingChallenge.Models.BookUser;
import com.cc.CodingChallenge.Models.Security;
import com.cc.CodingChallenge.Repositories.BookUserRepository;
import com.cc.CodingChallenge.Utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static com.cc.CodingChallenge.Utils.Constants.Role.ROLE_USER;

@RestController
@RequestMapping("user")

//TODO Create bookUserService
public class BookUserController {
    @Autowired
    BookUserRepository bookUserRepository;


    @PostMapping("/login")
    public ResponseEntity<BookUser> login(@RequestBody BookUser bookUser, HttpSession httpSession){
        Optional<BookUser> bookUserOptional = bookUserRepository.findById(bookUser.userName);
        if(bookUserOptional.isEmpty()){
            return new ResponseEntity<>(new BookUser(), HttpStatus.NOT_FOUND);
        }
        BookUser bookUserObj = bookUserOptional.get();
        if(Objects.equals(bookUserObj.password, bookUser.password)){
            httpSession.setAttribute("user", bookUserObj);
            bookUserObj.password = "********";
            return new ResponseEntity<>(bookUserObj, HttpStatus.OK);
        }
        httpSession.setAttribute("user",null);
        httpSession.invalidate();
        return new ResponseEntity<>(new BookUser(), HttpStatus.UNAUTHORIZED);
    }

    @GetMapping("/users")
    public ResponseEntity<List<BookUser>> getAllUsers(HttpSession httpSession){
        BookUser bookUser = (BookUser) httpSession.getAttribute("user");
        if(bookUser.role == Constants.Role.ROLE_ADMIN){
            List<BookUser> bookUserList = bookUserRepository.findAll();
            return new ResponseEntity<>(bookUserList,HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }
    
    @GetMapping("/users/{userName}")

    public ResponseEntity<BookUser> getUserById(@PathVariable("userName") String userName) {
    	 Optional<BookUser> bookUserOptional = bookUserRepository.findById(userName);
         if(bookUserOptional.isEmpty()){
             return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
         }
         BookUser bookUserObj = bookUserOptional.get();
         
         return new ResponseEntity<>(bookUserObj, HttpStatus.OK);
    }
    

}
