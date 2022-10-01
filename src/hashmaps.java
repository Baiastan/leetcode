import java.util.*;

public class hashmaps {
    public static void main(String[] args) {


        String s = "LVII";

        int out = 0;
        Map<Character, Integer> mp = new HashMap<>();
        mp.put('I', 1);
        mp.put('V', 5);
        mp.put('X', 10);
        mp.put('L', 50);
        mp.put('C', 100);
        mp.put('D', 500);
        mp.put('M', 1000);
        int i = 0;

        while (i < s.length()) {
            if (i == s.length() - 1 || mp.get(s.charAt(i)) >= mp.get(s.charAt(i + 1))) {
                out += mp.get(s.charAt(i));
            } else {
                out += mp.get(s.charAt(i + 1)) - mp.get(s.charAt(i));
                i++;
            }
            i++;


        }
        System.out.println(out);
    }
}

