package com.cc.CodingChallenge.Controllers;

import com.cc.CodingChallenge.Models.Security;
import com.cc.CodingChallenge.Services.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("security")
public class SecurityController {
    @Autowired
    SecurityService securityService;

    @GetMapping("/allSecurities")
    public ResponseEntity<List<Security>> getAllSecurities(){
        return new ResponseEntity<>(securityService.getAllSecurities(), HttpStatus.OK);
    }
}
