import java.util.*;

public class removeDuplicates {
    public static void main(String[] args) {

        int[] nums = {0, 0, 1, 1, 2, 2, 3, 3, 4};

        int[] expectedNums = {0, 1, 2, 3, 4};

        removeDup(nums);

       // assert k == expectedNums.length : k = expectedNums.length;

        //System.out.println(k);


       // System.out.println();


    }

     static void removeDup(int[] nums){
        int k = 0;
        int cont = 0;
        int[] exNum = new int[10];
        System.arraycopy(nums, 0, exNum, 0, nums.length);
        for(int i = 0; i < exNum.length - 1; i++){
            int com = exNum[i];
            if(com != exNum[i + 1]){
                exNum[k] = com;
                k++;
            }else{
                cont++;
            }




        }

        for(int i : exNum){
            System.out.print(i + " ");
        }
         System.out.println(k);
         System.out.println(cont);


    }
}
