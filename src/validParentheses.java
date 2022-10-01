import java.util.*;
public class validParentheses {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

            String s = scan.next();
            boolean isVal = false;
           // char[] ch = s.toCharArray();
            if(s.length() % 2 != 0){
                isVal = false;
            }

            Stack<Character> stack = new Stack<>();

            for(char c: s.toCharArray())
            {
                if(c=='('||c=='{'||c=='[')
                {
                    stack.push(c);
                }
                else if(c==')' && !stack.isEmpty() && stack.peek()=='(')
                {
                    stack.pop();
                }
                else if(c=='}' && !stack.isEmpty() && stack.peek()=='{')
                {
                    stack.pop();
                }
                else if(c==']' && !stack.isEmpty() && stack.peek()=='[')
                {
                    stack.pop();
                }
                else
                {
                    stack.push(c);
                }


            }

            isVal = stack.isEmpty();

        System.out.println(isVal);



    }
}
