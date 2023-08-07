package com.cc.CodingChallenge.Services;

import com.cc.CodingChallenge.Models.Security;
import com.cc.CodingChallenge.Repositories.SecurityRepository;
import com.cc.CodingChallenge.Utils.Constants;
import com.cc.CodingChallenge.Utils.DateTimeUtils;
import io.vavr.control.Either;
import io.vavr.control.Option;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class SecurityService {
    @Autowired
    SecurityRepository securityRepository;
    public List<Security> getAllSecurities(){
        return securityRepository.findAll();
    }

    public List<Security> getLiveSecurities(){
        return securityRepository.findAllActive();
    }

    public Security getSecurityById(int id){
        Optional<Security> securityOptional = securityRepository.findById(id);
        return securityOptional.orElse(null);
    }

    public List<Security> getByDateRange(String startDateString, String endDateString){
        List<Security> securityList;
        if(Objects.equals(startDateString, "") && Objects.equals(endDateString, "")){
            return null;
        }
        if(Objects.equals(endDateString, "")){
            LocalDate startDate = DateTimeUtils.stringToDateTime(startDateString);
            securityList = securityRepository.findAllWithMaturityDateAfter(startDate);
        }
        else if(Objects.equals(startDateString, "")) {
            LocalDate endDate = DateTimeUtils.stringToDateTime(endDateString);
            securityList = securityRepository.findAllWithMaturityDateBefore(endDate);
        }
        else{
            LocalDate startDate = DateTimeUtils.stringToDateTime(startDateString);
            LocalDate endDate = DateTimeUtils.stringToDateTime(endDateString);
            securityList = securityRepository.findAllWithMaturityDateBetween(startDate,endDate);
        }
        return securityList;
    }

    public Either<String, Security> createSecurity(Security security){
        try{
            security = securityRepository.save(security);
            return Either.right(security);
        }
        catch (Exception e){
            return Either.left("Internal Server Error Occured, Cannot save security");
        }
    }

    public Either<String, Security> updateSecurity(Security security){
        try{
            Optional<Security> securityOptional = securityRepository.findById(security.id);
            if(securityOptional.isEmpty()){
                return Either.left("No such Element");
            }
            Security securityObj = securityOptional.get();
            securityObj.isin = security.isin;
            securityObj.cusip = security.cusip;
            securityObj.coupon = security.coupon;
            securityObj.faceValue = security.faceValue;
            securityObj.issuer = security.issuer;
            securityObj.securityStatus = security.securityStatus;
            securityObj.securityType = security.securityType;
            securityObj.maturityDate = security.maturityDate;
            securityRepository.save(securityObj);
            return Either.right(securityObj);
        }
        catch(Exception e){
            return Either.left("Internal Server Error occurred");
        }
    }

    public Either<String, Security> deleteSecurity(int id){
        try{
            Optional<Security> securityOptional = securityRepository.findById(id);
            if(securityOptional.isEmpty() || securityOptional.get().securityStatus == Constants.SecurityStatus.DEAD){
                return Either.left("No such element or already deleted");
            }
            //Performing soft delete updating the status to DEAD
            Security securityObj = securityOptional.get();
            securityObj.securityStatus = Constants.SecurityStatus.DEAD;
            securityRepository.save(securityObj);
            return Either.right(securityOptional.get());
        }
        catch (Exception e){
            return Either.left("Internal Server");
        }
    }

}
