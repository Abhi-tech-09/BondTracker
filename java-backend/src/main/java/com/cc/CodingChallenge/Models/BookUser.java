package com.cc.CodingChallenge.Models;

import com.cc.CodingChallenge.Utils.Constants;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class BookUser {
    @Id
    public String userName;

    public String name;
    public String password;

    public Constants.Role role;
    @ManyToMany
    public List<Book> bookList;

    public BookUser(){
        this.bookList = new ArrayList<>();
    }
}
