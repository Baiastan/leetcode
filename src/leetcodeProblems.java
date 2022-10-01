import java.util.*;


public class leetcodeProblems {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        String s = scan.next();

        System.out.println(romanToInt(s));


    }


    static public int romanToInt(String s){
        char[] ch = s.toCharArray();


        int num = 0;


        for(int i = 0; i < ch.length; i++) {


            if (i < ch.length - 1) {

                if (ch[i] == 'I' && ch[i + 1] == 'X') {
                    num -= 2;

                } else if (ch[i] == 'I' && ch[i + 1] == 'V') {
                    num -= 2;

                }


                if (ch[i] == 'X' && ch[i + 1] == 'L') {
                    num -= 20;

                } else if (ch[i] == 'X' && ch[i + 1] == 'C') {
                    num -= 20;

                }


                if (ch[i] == 'C' && ch[i + 1] == 'D') {
                    num -= 200;

                } else if (ch[i] == 'C' && ch[i + 1] == 'M') {
                    num -= 200;

                }

            }


            if(ch[i] == 'I') {
                num += 1;
            }

            if(ch[i] == 'V'){
                num += 5;
            }

            if(ch[i] == 'X'){
                num += 10;
            }

            if(ch[i] == 'L'){
                num += 50;
            }

            if(ch[i] == 'C'){
                num += 100;
            }

            if(ch[i] == 'D'){
                num += 500;
            }

            if(ch[i] == 'M'){
                num += 1000;
            }


        }

        return num;

    }

}
