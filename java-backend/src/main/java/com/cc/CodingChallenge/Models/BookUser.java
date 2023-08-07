package com.cc.CodingChallenge.Models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class BookUser {
    @Id
    public String userName;
    @ManyToMany
    public List<Book> bookList;

    public BookUser(){
        this.bookList = new ArrayList<>();
    }
}
