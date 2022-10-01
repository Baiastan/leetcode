import javax.naming.TimeLimitExceededException;
import java.util.*;



public class happyNumber {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int n = scan.nextInt();

        System.out.println(isHappy(n));

    }



    private static boolean isHappy(int n) {

        Set<Integer> seen = new HashSet<>();

//        if(n == 1){
//            return true;
//        }

        do {
            seen.add(n);
            int sum = 0;
            while (n > 0) {
                int d = n % 10;
                n = n / 10;
                sum += d * d;
            }

            n = sum;

//            if(seen.contains(n)){
//                return false;
//            }
            System.out.println(n);

        } while (n != 1 && !seen.contains(n));


        return n == 1;
        //System.out.println(n);

    }
}
