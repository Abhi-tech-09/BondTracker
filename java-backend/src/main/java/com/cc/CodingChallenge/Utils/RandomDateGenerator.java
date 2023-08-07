package com.cc.CodingChallenge.Utils;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.ThreadLocalRandom;

public class RandomDateGenerator {
	public static LocalDate randomDate() {
        // Get the current date
        LocalDate currentDate = LocalDate.now();

        // Generate a random number of days to add
        int randomDaysToAdd = ThreadLocalRandom.current().nextInt(1, 365);

        // Add the random number of days to the current date
        LocalDate randomDate = currentDate.plus(randomDaysToAdd, ChronoUnit.DAYS);

//        System.out.println("Current Date: " + currentDate);
//        System.out.println("Random Date After Current Date: " + randomDate);
        
        return randomDate;
    }
}
