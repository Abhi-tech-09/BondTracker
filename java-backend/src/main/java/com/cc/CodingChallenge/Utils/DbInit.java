package com.cc.CodingChallenge.Utils;

import com.cc.CodingChallenge.Models.*;
import com.cc.CodingChallenge.Repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
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

        //create books
        Book book1 = new Book();
        Book book2 = new Book();
        Book book3 = new Book();

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


        

        //add users in books
        List<BookUser> tempVarBookUserList = book1.bookUserList;
        tempVarBookUserList.add(bookUser1);
        tempVarBookUserList.add(bookUser2);
        bookRepository.save(book1);

        tempVarBookUserList = book2.bookUserList;
        tempVarBookUserList.add(bookUser1);
        bookRepository.save(book2);

        tempVarBookUserList = book3.bookUserList;
        tempVarBookUserList.add(bookUser2);
        bookRepository.save(book3);
        
        
      //add books in users
        List<Book> tempVarBookList = bookUser1.bookList;
        tempVarBookList.add(book1);
        tempVarBookList.add(book2);
        bookUserRepository.save(bookUser1);

        tempVarBookList = bookUser2.bookList;
        tempVarBookList.add(book1);
        tempVarBookList.add(book3);
        bookUserRepository.save(bookUser2);



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

            Trade trade = new Trade("Trade-"+i,counterParty,security);
            tradeRepository.save(trade);
        }
    }
}
