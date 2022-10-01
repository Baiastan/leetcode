import java.util.Scanner;

public class binoProblem {
    public static void main(String[] args){

        Scanner scan = new Scanner(System.in);

        int n = scan.nextInt();
        int[] nums = new int[n];
       int[] counts = {0, 0, 0, 0};

        for(int i = 0; i < n; i++){
            int l = scan.nextInt();
            nums[i] = l;
            if(nums[i] % 2 == 0){
                counts[0]++;
            }
            if(nums[i] % 3 == 0){
                counts[1]++;
            }
            if (nums[i] % 4 == 0){
                counts[2]++;
            }
            if (nums[i] % 5 == 0){
                counts[3]++;
            }
        }



        System.out.println(counts[0] + " Multiplo(s) de 2");
        System.out.println(counts[1] + " Multiplo(s) de 3");
        System.out.println(counts[2] + " Multiplo(s) de 4");
        System.out.println(counts[3] + " Multiplo(s) de 5");
    }


}
