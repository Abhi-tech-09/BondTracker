package com.cc.CodingChallenge.Utils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public final class DateTimeUtils {
    public static LocalDate stringToDateTime(String date){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        // Parse the string to a LocalDate object
        LocalDate localDate = LocalDate.parse(date, formatter);

        return localDate;
    }
}
