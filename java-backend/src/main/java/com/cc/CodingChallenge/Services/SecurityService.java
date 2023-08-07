package com.cc.CodingChallenge.Services;

import com.cc.CodingChallenge.Models.Security;
import com.cc.CodingChallenge.Repositories.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SecurityService {
    @Autowired
    SecurityRepository securityRepository;
    public List<Security> getAllSecurities(){
        return securityRepository.findAll();
    }
}
