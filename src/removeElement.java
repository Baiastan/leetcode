import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class removeElement {

    public static void main(String[] args) {

        int[] nums = {3, 2, 2, 3, 0, 34, 3, 7, 3, 0, 3};
        int val = 3;





        int k = removeElem(nums, val);




    }


    public static int removeElem(int[] nums, int val){
        ArrayList<Integer> newNums = new ArrayList<>();

        for(int i = 0; i < nums.length; i++){
            if(val != nums[i]){
                newNums.add(nums[i]);

            }
        }

        Collections.sort(newNums);
        for(int i = 0; i < newNums.size(); i++){
            System.out.print(newNums.get(i) + " ");
        }


        return newNums.size();
    }



    private static int removeElements(int[] nums, int val) {
        int[] newNums = new int[nums.length];
        int k = 0;
        for(int i = 0; i < nums.length; i++){
            if(val != nums[i]){

                k++;

            }
        }

        return k;
    }

//Solution for the problem
    public int removeElement(int[] nums, int val) {
        int i = 0;
        for (int elem: nums){
            if (elem != val){
                nums[i] = elem;
                i++;
            }
        }
        return i;
    }
}
