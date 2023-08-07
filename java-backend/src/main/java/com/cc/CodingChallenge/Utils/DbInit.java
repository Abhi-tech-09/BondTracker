package com.cc.CodingChallenge.Utils;

import com.cc.CodingChallenge.Models.*;
import com.cc.CodingChallenge.Repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.cc.CodingChallenge.Utils.RandomDateGenerator;

//Class to add some initial dummy values to database
//CommandLineRunner's run method is executed(by spring context) before application starts
@Component
public class DbInit implements CommandLineRunner {
    @Autowired
    TradeRepository tradeRepository;

    @Autowired
    SecurityRepository securityRepository;

    @Autowired
    CounterPartyRepository counterPartyRepository;

    @Autowired
    BookRepository bookRepository;

    @Autowired
    BookUserRepository bookUserRepository;


    @Override
    public void run(String... args) throws Exception {
        //create book user
        BookUser bookUser1 = new BookUser();
        bookUser1.userName = "user1";
        BookUser bookUser2 = new BookUser();
        bookUser2.userName = "user2";
        BookUser bookUser3 = new BookUser();
        bookUser3.userName = "user3";

        //create books
        Book book1 = new Book();
        book1.name = "book1";
        book1.bookUserList = new ArrayList<>(Arrays.asList(bookUser1, bookUser2));
        Book book2 = new Book();
        book2.name = "book2";
        book2.bookUserList = new ArrayList<>(Arrays.asList(bookUser2, bookUser3));
        Book book3 = new Book();
        book3.name = "book3";

        bookRepository.save(book1);
        bookRepository.save(book2);
        bookRepository.save(book3);


        /*
        *   Below example
        *
        *  user1-> book1, book2
        *  user2-> book1, book3
        *
        *  Conversely
        *
        *  book1-> user1, user2
        *  book2-> user1
        *  book3-> user2
        *
        * */


      //add books in users
        List<Book> tempVarBookList = bookUser1.bookList;
        tempVarBookList.add(book1);
        tempVarBookList.add(book2);
        bookUserRepository.save(bookUser1);

        tempVarBookList = bookUser2.bookList;
        tempVarBookList.add(book1);
        tempVarBookList.add(book3);
        bookUserRepository.save(bookUser2);

        bookUserRepository.save(bookUser3);


        //create trade
        for(int i = 0;i<10;i++){
            //crate security
        	LocalDate maturityDate = RandomDateGenerator.randomDate();
            Security security = new Security("ISIN-"+i, "CUSIP-"+i, "issuer-"+i, maturityDate,
            		i+5, i*1000);
            security = securityRepository.save(security);

            //create counterparty
            CounterParty counterParty = new CounterParty("counterParty-"+i);
            counterParty = counterPartyRepository.save(counterParty);
            
            LocalDate tradeDate = RandomDateGenerator.randomDate();

            Trade trade = new Trade(counterParty,security, i+2, i*1000, tradeDate, tradeDate);
            tradeRepository.save(trade);
            if(i%2==0){
                book1.tradeList.add(trade);
            }
            else{
                book2.tradeList.add(trade);
            }
        }
        bookRepository.save(book1);
        bookRepository.save(book2);
    }
}
