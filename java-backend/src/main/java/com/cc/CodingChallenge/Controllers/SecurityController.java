package com.cc.CodingChallenge.Controllers;

import com.cc.CodingChallenge.Models.Security;
import com.cc.CodingChallenge.Services.SecurityService;
import io.vavr.control.Either;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.DateTimeException;
import java.util.List;

@RestController
@RequestMapping("security")
@CrossOrigin(origins = "http://localhost:3000")
public class SecurityController {
    @Autowired
    SecurityService securityService;

    @GetMapping("/allSecurities")
    public ResponseEntity<List<Security>> getAllSecurities(){
        return new ResponseEntity<>(securityService.getAllSecurities(), HttpStatus.OK);
    }

    @GetMapping("/liveSecurities")
    public ResponseEntity<List<Security>> getAllLiveSecurities(){
        return new ResponseEntity<>(securityService.getLiveSecurities(), HttpStatus.OK);
    }

    @GetMapping("/securityById/{id}")
    public ResponseEntity<Security> getSecurityById(@PathVariable("id") int id) {
        return new ResponseEntity<>(securityService.getSecurityById(id), HttpStatus.OK);
    }

    @GetMapping("/securityByDates")
    public ResponseEntity<List<Security>> getSecurityByDate(@RequestParam(name = "startDate",required = false, defaultValue = "") String startDate, @RequestParam(name="endDate",required = false, defaultValue = "") String endDate){
        List<Security> securityList;
        try{
            securityList = securityService.getByDateRange(startDate,endDate);
        }
        catch (DateTimeException e){
            return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(securityList,HttpStatus.OK);
    }

    @PostMapping("/createSecurity")
    public ResponseEntity<Security> createSecurity(@RequestBody Security securityReq){
        Either<String, Security> eitherResponse = securityService.createSecurity(securityReq);
        if(eitherResponse.isLeft()){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(eitherResponse.get(),HttpStatus.CREATED);
    }

    @PostMapping(value = "/updateSecurity",  produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Security> updateSecurity(@RequestBody Security securityReq){
        Either<String, Security> eitherResponse = securityService.updateSecurity(securityReq);
        if(eitherResponse.isLeft()){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(eitherResponse.get(),HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/deleteSecurity/{id}")
    public ResponseEntity<Security> deleteSecurity(@PathVariable("id") int id){
        Either<String,Security> eitherResponse = securityService.deleteSecurity(id);
        if(eitherResponse.isLeft()){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(eitherResponse.get(),HttpStatus.ACCEPTED);
    }

}