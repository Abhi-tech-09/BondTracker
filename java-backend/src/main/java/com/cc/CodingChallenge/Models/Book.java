package com.cc.CodingChallenge.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

//TODO Relations table can be named properly
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public int id;

    public String name;

    @OneToMany
    public List<Trade> tradeList;

    @ManyToMany(mappedBy = "bookList")
    @JsonIgnore
    public List<BookUser> bookUserList;
    public Book(){
        this.bookUserList = new ArrayList<>();
        this.tradeList = new ArrayList<>();
    }

}
