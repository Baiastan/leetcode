import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import java.beans.XMLDecoder;
import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.lang.module.FindException;
import java.lang.reflect.Array;
import java.util.*;

public class searchInsertPos {
    public static void main(String[] args) {

        int[] nums ={47,18,68,54,60,67,73,93,57,11,36,79,38,73,49,55,58,
                2,66,1,7,51,20,20,65,37,79,96,94,6,15,3,58,89,4,46,37,80,26,
                7,35,28,95,52,53,40,69,12,87,10,40,11,59,28,18,6,81,73,25,13,
                44,51,95,7,40,84,65,3,25,32,94,71,15,70,16,3,68,31,6,19,71,67,
                35,20,33,25,25,45,57,87,7,32,32,100,56,96,4,69,77,21};

                    //   boxes, units
        int[][] boxType = {{5,  10},
                           {2,  5},
                           {4,  7},
                           {3, 9}};

        int[] input = {3,2};


        System.out.println("Total days: " + dayOfYear("1900-05-02"));

    }




    public static int dayOfYear(String date){

        int totalDays = 0;

        String[] dd = date.split("-", 3);

        int year = Integer.parseInt(dd[0]);
        int month = Integer.parseInt(dd[1]);
        int days = Integer.parseInt((dd[2]));

        if(month == 1){
            return days;
        }

        boolean isLeapYear = isLeapYear(year);

        System.out.println(isLeapYear);

        if(isLeapYear && month > 2){
            totalDays = 1;
        }
        int[] daysInMonth = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        for(int i = 0; i < month -1; i++){

            totalDays += daysInMonth[i];

        }

        totalDays += days;


        return totalDays;
    }
    public static boolean isLeapYear(int year){

        return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    }


    public static int tribonacci(int n){

        if(n == 1 || n == 2){
            return 1;
        }
        int sum = 0;

        int t0 = 0;
        int t1 = 1;
        int t2 = 1;

        for(int i = 1; i < n-1;i++){

            sum = t0 + t1+ t2;
            t0 = t1;
            t1 = t2;
            t2 = sum;

        }



        return sum;
    }

    public static int climStairs(int n){

        if(n == 2){
            return 1;
        }else if(n == 1){
            return 1;
        }

        int sum = 0;
        int first = 0;
        int second = 1;

        for(int i = 1; i < n; i++){

            sum = first + second;
            first = second;
            second = sum;

        }

        System.out.println(sum);
        return sum;
    }
    public static int recursiveFactorial(int num){
        if(num == 0){
            return 1;
        }

        return num * recursiveFactorial(num - 1);
    }

    public static int[] sortArrayByParityII(int[] nums){
        int[] sorted = new int[nums.length];

        int even = -2;
        int odd = -1;
        while(odd < nums.length-2 || even < nums.length-2) {

            for (int i = 0; i < nums.length; i++) {

            if (nums[i] % 2 == 0) {

                sorted[even+=2] = nums[i];
            }else{
                sorted[odd+=2] = nums[i];
            }

            }

        }
        return sorted;
    }


    //loading till limit
    public static int maximumUnitsFaster(int[][] boxTypes, int truckSize){

        Arrays.sort(boxTypes, (b1, b2) -> b2[1] - b1[1]);

        int units = 0, boxes = 0, i = 0;
        while(i < boxTypes.length && boxes < truckSize){
            int num_of_boxes = boxTypes[i][0];
            int j = 0;
            while(boxes < truckSize && j < num_of_boxes){
                units += boxTypes[i][1];
                boxes++;
                j++;
            }
            i++;
        }
        return units;

    }

    //first loading all boxes then unloading excess boxes
    public static int maximumUnits(int[][] boxType, int truckSize){
        int maxUnits = 0;
        int maxBoxes = 0;

        int[] units = new int[boxType.length];

        for(int i = 0; i < boxType.length; i++){

            units[i] = boxType[i][1];
            maxUnits += boxType[i][0] * boxType[i][1];
            maxBoxes += boxType[i][0];

        }
        if(maxBoxes == truckSize){
            return maxBoxes;
        }

       Arrays.sort(units);


        int min;
        int minPos = 0;
        while(maxBoxes >= truckSize){


            min = units[minPos++];

            for(int j = 0; j < boxType.length; j++){

                if(min == boxType[j][1]){
                    while(boxType[j][0] > 0){

                        maxUnits -= boxType[j][1];
                        boxType[j][0]--;
                        maxBoxes--;
                        if(maxBoxes == truckSize){
                            return maxUnits;
                        }

                    }

                }

            }

        }


        return maxUnits;

    }



    public static int[] sortedSquares(int[] nums){

        int[] sortedSquares = new int[nums.length];

        for(int i = 0; i < nums.length; i++){

            sortedSquares[i] = (int) Math.pow(nums[i], 2);

        }
        Arrays.sort(sortedSquares);

        return sortedSquares;

    }






    public static int findFinalValue(int[] nums, int original){

        boolean isOriginal = false;

            for (int i = 0; i < nums.length; i++) {


                if (original == nums[i]) {
                    isOriginal = true;
                    i = 0;
                }

                if(isOriginal){
                    original *= 2;
                }

                if(original != nums[i]){
                    isOriginal = false;
                }else{
                    isOriginal = true;

                }

            }

            if(!isOriginal){
                return original;
            }

        return original;
    }

    public static int[] kWeakestRows(int[][] mat, int k){

        int[] ans = new int[k];

        int[] counter = new int[mat.length];

        for(int i = 0; i < mat.length; i++){
            for(int j = 0; j < mat[i].length; j++){

                if(mat[i][j] == 1){
                    counter[i]++;
                }
            }
        }
        int[] origArray = Arrays.copyOf(counter, counter.length);

        int r = 0;
       for(int i: origArray){
           System.out.println("Row " + r + ": " + i);
           r++;
       }

        Arrays.sort(counter);
        for(int i = 0; i < ans.length; i++){
                int index = 0;
            for(int j = 0; j < counter.length; j++){

                if(counter[i] == origArray[j]){
                    index = j;
                    origArray[index] = -1;
                    break;
                }



            }
            ans[i] = index;
        }




        return ans;
    }





    public static int gcd(int a, int b){

        //int q = a / b;
        int r = a % b;
        if(r == 0){
            return b;
        }

        while(r != 0){

            a = b;
            b = r;
            r = a % b;

        }

        return b;
    }


    public static int thirdMaxOther(int[] nums){

        if(nums.length < 2){
            return nums[0];
        }
        if(nums.length == 2){
            return nums[getMax(nums)];
        }

        Set<Integer> set = new HashSet<>();


        int countMax = 0;
        while(countMax < 2) {


            int indexMax = getMax(nums);

            int tempMax = nums[indexMax];
            nums[indexMax] = 0;
            for(int i = indexMax; i < nums.length; i++){

                if(tempMax == nums[i]){
                    nums[i] = 0;

                }

            }
        countMax++;

        }

//        if(set.size() < 3){
//            System.out.println("Set");
//            for(int i: set){
//                System.out.println("Set Values: " + i);
//            }
//            return Collections.max(set);
//        }

        return nums[getMax(nums)];

    }

    public static int getMax(int[] nums){
        int max = 0;
        int indexMax = 0;
        for(int i = 0; i < nums.length; i++) {


            if (nums[i] > max) {
                max = nums[i];
                indexMax = i;

            }
        }
        return indexMax;
    }

    public static int thirdMax(int[] nums){

        //very slow solution
        quickSort(nums, 0, nums.length);

        LinkedHashSet<Integer> set = new LinkedHashSet<>();


        for(int i = 0; i < nums.length; i++){
            set.add(nums[i]);
        }

        if(set.size() < 3){
            return nums[nums.length-1];
        }

        int[] newArray = new int[set.size()];

        int j = 0;
        for(int i:set){
            newArray[j++] = i;
        }


        return newArray[newArray.length - 3];

    }

    public static int heightChecker(int[] heights){
        int ans = 0;

        int[] notSorted = Arrays.copyOf(heights, heights.length);

        quickSort(heights, 0, heights.length);

        for(int i = 0; i < heights.length; i++){
            if(heights[i] != notSorted[i]){
                ans++;
            }
        }

        return ans;
    }
    public static void quickSort(int[] input, int start, int end){
        if(end - start < 2){
            return;
        }

        int pivotIndex = partition(input, start, end);
        quickSort(input, start, pivotIndex);
        quickSort(input, pivotIndex + 1, end);
    }

    public static int partition(int[] input, int start, int end){

        int pivot = input[start];

        int i = start ;
        int j = end;

        while(i < j){
            //Note: empty loop
            while( i < j && input[--j] >= pivot);
            if(i < j) {
                input[i] = input[j];
            }
            //Note: empty loop
            while(i < j && input[++i] <= pivot);
            if(i < j){
                input[j] = input[i];
            }
        }
        input[j] = pivot;
        return j;
    }


    public static int[] sortArrayByParity(int[] nums){

        if(nums.length == 1){
            return nums;
        }
        //slow solution;

        int insertIndex = 0;
        int[] sortedArray = new int[nums.length];

        for(int i = 0; i < nums.length; i++){

            if(nums[i] % 2 == 0){

                sortedArray[insertIndex++] = nums[i];
            }

        }
        for(int i = 0; i < nums.length; i++){
            if(nums[i] % 2 != 0) {
                sortedArray[insertIndex++] = nums[i];
            }
        }

//        for(int i: sortedArray){
//            System.out.print(i + " ");
//        }

        return sortedArray;
    }


    public static int arrayPairSum(int[] nums){


        Arrays.sort(nums);
        int finalSum = 0;

        for(int i = 0; i < nums.length; i = i + 2){
            finalSum += nums[i];
        }

        return finalSum;

    }

    public static List<Integer> targetIndices(int[] nums, int target){
        List<Integer> indices = new ArrayList<>();

        if(nums.length == 0){
            return indices;
        }else if(nums.length == 1){
            if(nums[0] == target){
                indices.add(0);
                return indices;
            }else{
                return indices;
            }
        }

        Arrays.sort(nums);
        //48.19% faster
        for(int i = 0; i < nums.length; i++){

             if(target == nums[i]){
                 indices.add(i);
                 if(i < nums.length-1 && nums[i + 1] == target) {
                     while (target == nums[i+1] && i+1 < nums.length-1) {
                         indices.add(i+1);
                         i++;
                     }
                     if(target == nums[nums.length-1]){
                         indices.add(nums.length-1);
                     }
                     break;
                 }
             }
        }




//        for(int i: indices){
//            System.out.println(i);
//        }

        return indices;
    }

    public static int maxProductDifference(int[] nums){
        //slow 46.44% faster
        int maxDif;

       Arrays.sort(nums);

        int maxNum = nums[nums.length-1] * nums[nums.length-2];
        int minNum = nums[0] * nums[1];


        maxDif = maxNum - minNum;


        return maxDif;
    }

    public static void bin(long n){

        long i;
        System.out.print("0");
        for(i = 1 << 30; i > 0; i = i / 2){
            if((n % i) != 0){
                System.out.print("1");
            }else{
                System.out.print("0");
            }
        }


    }

    public static int missingNumber(int[] nums){
        //80% faster;
        int finalResult = 0;
        for(int i = 0; i <= nums.length; i++){
            finalResult += i;
        }
        int actualResult = 0;
        for(int i = 0; i < nums.length; i++){
            actualResult += nums[i];
        }

        System.out.println("80% faster:" + (finalResult - actualResult));

        //xor implementation;
        int n = nums.length;
        int t = 0;

        for(int res: nums){
            n ^= res;
            n ^= t;
            t++;
            System.out.println("res: " + n);
            System.out.println("t: " + n);
        }
        System.out.println("xor: " + n);





        //very slow solution
        int missingNumber = 0;
        if(nums.length == 1) {
            if (nums[0] == 0) {
                return 1;
            } else if (nums[0] == 1) {
                return 0;
            }
        }else if(nums.length == 2){
            if(nums[0] == 1 && nums[1] == 2 || nums[0] == 2 && nums[1] == 1){
                return 0;
            }else if(nums[0] == 0 && nums[1] == 2 || nums[0] == 2 && nums[1] == 0){
                return 1;
            }else if(nums[0] == 1 && nums[1] == 0 || nums[0] == 0 && nums[1] == 1){
                return 2;
            }
        }else {
            Arrays.sort(nums);
            if (nums[0] != 0) {
                return 0;
            } else {
                int j = nums[0] + 1;
                while (j <= nums[nums.length - 1]) {
                    boolean isMissing = true;
                    for (int i = 1; i < nums.length; i++) {

                        if (j == nums[i]) {
                            isMissing = false;
                            //System.out.println("false");
                        }

                    }
                    if (isMissing) {
                        missingNumber = j;
                        break;

                    } else {
                        missingNumber = nums[nums.length - 1] + 1;
                    }
                    j++;
                }
            }
        }


        return missingNumber;
    }


    public static int maxProfit(int[] prices){

        int smallest = 0;
        int highestDif;
        int max = 0;

        for(int i = 0; i < prices.length - 1; i++){
            //find smallest price and index of it;
           smallest = prices[i];
           highestDif = prices[i + 1] - smallest;
           // System.out.println("Difference: " + highestDif);
            if(highestDif > max){
                max = highestDif;
                System.out.println("Max: " + max);
            }
           if(smallest < prices[i+1]){
               prices[i+1] = smallest;
           }

        }

        System.out.println("Lowest Price: " + smallest);
        System.out.println("Max: " + max);


        return max;
    }




    public static void merge(int[] nums1, int m, int[] nums2, int n){




        //very slow implementation
            if(m == 0){
                for(int i = 0; i < nums2.length; i++){
                    nums1[i] = nums2[i];
                }
            }else {

                for (int i = 0; i < m + n; i++) {

                    nums1[i + m] = nums2[i];
                }
            }

            int j = 0;
            while (j < nums1.length) {
                for (int i = j + 1; i < nums1.length; i++) {

                    int temp = nums1[j];
                    if (temp > nums1[i]) {
                        nums1[j] = nums1[i];
                        nums1[i] = temp;
                    }

                }
                j++;
            }

            for (int i : nums1) {
                System.out.print(i + " ");
            }
        }






    public static void reverseString(String s){

        char[] c = s.toCharArray();

        int j = c.length-1;

        for(int i = 0; i < c.length/2; i++){

            char temp = c[i];
            c[i] = c[j];
            c[j] = temp;
            j--;
        }

        String str = String.valueOf(c);
        System.out.println(str);



    }


    public static boolean checkPerfectNumber(int num){

    //very slow
        int sum = 1;
        int divider = 2;
        while(divider < num){

            if(num % 2 != 0){
                return false;
            }
            if(num % divider == 0){
                sum += divider;
                if(sum > num){
                    return false;
                }
            }

            divider++;

        }

        return sum == num;
    }

    public static List<Integer> selfDrivingNumbers(int left, int right){
            List<Integer> selfDrivingNums = new ArrayList<>();

        for(int i = left; i <= right; i++){
            int number = i;
            boolean isSelfDriving = false;

            while(number != 0){
                int temp = number%10;
               // System.out.println("divider:" + temp);
                if(temp != 0) {
                    if (i % temp == 0) {
                        isSelfDriving = true;
                    } else {
                        isSelfDriving = false;
                        break;
                    }
                }else{
                    isSelfDriving = false;
                    break;
                }
                number/=10;

            }
            if(isSelfDriving){
                selfDrivingNums.add(i);
            }
        }
        return selfDrivingNums;
    }


    public static int numberOfSteps(int n){
        int steps = 0;

        while(n != 0){
            steps++;

            if(n % 2 == 0){
                n/=2;
            }else if(n % 2 != 0){
                n -=1;
            }


        }

        return steps;
    }

    public static void smallerNumbersThanCurrent(int[] nums){
        int[] smallerNumber = new int[nums.length];

        int j = 0;
        while(j < nums.length) {
            for (int i = j+1; i < nums.length; i++) {
                if(nums[j] > nums[i]){
                    smallerNumber[j]++;
                }else if(nums[j] < nums[i]){
                    smallerNumber[i]++;
                }

            }
            j++;
        }

        for(int i : smallerNumber){
            System.out.println(i + " ");
        }
    }

    public static int numIdenticalPairs(int[] nums){

        int count = 0;
        int j = 0;
        while (j < nums.length - 1) {
            for (int i = j + 1; i < nums.length; i++) {
                 if (nums[j] == nums[i]) {
                count++;
                }
            }
            j++;
         }
            return count;
    }
//    let count = 0;
//
//    let j = 0;
//  while (j < nums.length - 1) {
//        for (let i = j + 1; i < nums.length; i++) {
//            if (nums[j] === nums[i]) {
//                count++;
//            }
//        }
//        j++;
//    }
//  console.log(count);



    public static int maximumWealth(int[][] accounts){

        //faster than 100% of submissions
        int richest = 0;

        int client = 0;

        while(client < accounts.length) {
            int temp = 0;
            for (int i = 0; i < accounts[client].length; i++) {
                temp += accounts[client][i];

            }
            if(accounts.length == 1){
               return temp;

            }

            if(temp > richest){
                richest = temp;
            }

            client++;
        }

       return richest;

    }

    public static void runningSumOf1dArray(int[] nums){

        //faster than 100%
        int j = 0;
        int point = 0;
        while(j < nums.length) {
            int temp = 0;
            for (int i = point; i < j+1; i++) {

                temp+=nums[i];

            }

            nums[j] = temp;
            point = j;
            j++;
        }

        for(int i: nums){
            System.out.print(i + " ");
        }


        //slow solution
        int pointer = 0;
        int[] sumOfNums = new int[nums.length];

        while(pointer < nums.length) {
            int sum = 0;
            for (int i = 0; i < pointer+1; i++) {

                sum += nums[i];

            }
           // System.out.println("Sum:" + sum);
             sumOfNums[pointer] = sum;
            pointer++;
        }




    }

    private static int singleNumber(int[] nums) {

        int pointer = 0;

        boolean isSingle = true;
        do {
//            System.out.println();
//            System.out.print("Pointer: " + pointer);
            for (int i = pointer+1; i < nums.length; i++) {
                isSingle = true;
                if (nums[pointer] == nums[i]) {
                    int temp = nums[i];
                    nums[i] = nums[pointer + 1];
                    nums[pointer + 1] = temp;
                    pointer ++ ;
                    isSingle = false;
                        break;
                }

//
//                System.out.println();
//                System.out.print("Check: " + i);

            }




            if(isSingle){
//                System.out.println();
//                System.out.println("Single Number: " + (nums[pointer]));
                return nums[pointer];

            }

            pointer++;


        }while(pointer < nums.length-1);

//        if(!isSingle) {
//        System.out.println("Single Number: " + (nums[nums.length-1]));
//        }
//        for (int e : nums) {
//            System.out.print(e + " ");
//        }
        return nums[nums.length-1];
    }



        //faster way//


        ///Faster  way///40% faster of Java online submissions
//        if(nums.length == 1){
//            return nums[0];
//        }
//
//        //int indexOfSingle = 0;
//
//        Arrays.sort(nums);
//
//        if(nums[0] != nums[1]) return nums[0];
//
//        for(int i = 0; i < nums.length-1; i+=2){
//
//            if(i == nums.length-2) {
//
//                return nums[i];
//            }
//
//            if(nums[i] != nums[i + 1]) {
//
//                return nums[i];
//                // return nums[indexOfSingle];
//            }
//
//        }
//
//        return nums[nums.length-1];



        /////////////////////////Long Way////////
//        if(nums.length == 1){
//            //return nums[0];
//            System.out.println(nums[0]);
//        }
//        int singleIndex = 0;
//
//        for(int i = 0; i < nums.length; i++){
//            int temp = nums[i];
//            int count = 0;
//            for(int j = 0; j < nums.length; j++){
//                if(temp == nums[j]){
//                    count++;
//
//                }
//
//            }
//            if(count == 1){
//                singleIndex = i;
                        //break;
//            }
//        }
//        System.out.println(nums[singleIndex]);




    private static int[] plusOne(int[] digits) {


        boolean isLengthPlusOne = true;
        int length = digits.length;

        for (int i : digits) {
            if (i != 9) {
                isLengthPlusOne = false;
            }

        }
        //should we allocate one more space or not
        if (isLengthPlusOne) {
            length = digits.length + 1;
        }


        //copying to a new array of ints
        int[] newArray = new int[length];
        int index = 0;
        for (int i : digits) {
            newArray[index] = i;
            index++;
        }


        if (!isLengthPlusOne && newArray[length - 1] == 9) {
            int j = length - 1;
            for (int i = 0; i < length; i++) {


                if (newArray[j] == 9) {
                    newArray[j] = 0;
                } else if (newArray[j] != 9) {
                    newArray[j]++;
                    break;
                }
                j--;

            }
        } else if (newArray[length - 1] != 9 && !isLengthPlusOne) {

            newArray[length - 1]++;
        } else if (isLengthPlusOne) {
            for (int i = 1; i < length; i++) {
                newArray[i] = 0;
            }
            newArray[0] = 1;
        }


        //better and shorter version faster than 100%
        if (digits[digits.length - 1] != 9) {
            digits[digits.length - 1]++;
            return digits;
        }

        boolean isAll9 = false;
        for(int i: digits) {
            if (i == 9) {
                isAll9 = true;
            }else{
             isAll9 = false;
             break;
            }
        }

        if(isAll9){
            int[] extraSpaceArray = new int[digits.length + 1];
            for (int i = 1; i < extraSpaceArray.length; i++) {
                extraSpaceArray[i] = 0;
            }
            extraSpaceArray[0] = 1;
            return extraSpaceArray;
        }

        for (int i = digits.length - 1; i >= 0; i--) {

            if (digits[i] == 9) {
                digits[i] = 0;
            } else if (digits[i] != 9) {
                digits[i]++;
                break;
            }



        }
        return digits;

    }
    private static void climbStairs(int n){

        int[] combs = new int[n];

        int stepOne = 1;
        int stepTwo = 2;
        int sum = 0;
        int steps = 1;
        if(n == 1){
            System.out.println(n);
            //return n;
        }
        if(n % 2 == 0){
            steps++;
        }












        System.out.println("Steps: " + steps);


    }


    private static int searchInsertPosistion(int[] nums, int target) {
        int pos = 0;
        int k = 0;
        for(int i: nums){
            k++;
            if(target == i){
               pos = k - 1;
            }else if(target > i){
                pos = k;
            }

        }

        return pos;
    }


    private static int searchInsertPosistionBetter(int[] nums, int target) {

        int n = nums.length;
        int temp = 0;
        if(target<nums[0]) return 0;
        if(target>nums[n-1]) return n;

        for(int i = 0; i<n; i++){
            if(nums[i] == target) return i;
            if(i+1<n){
                if(nums[i]<target&& nums[i+1]>target) {
                    temp = i+1;
                }
            }
        }
        return temp;



    }

    private static int removeDuplicates(int[] nums){

        if(nums.length == 0 || nums.length == 1) return nums.length;

        int j = 0;
        for(int i = 0; i < nums.length-1; i++){
            if(nums[i] != nums[i + 1]){
                nums[j++] = nums[i];
            }
        }
        nums[j++] = nums[nums.length-1];

        return j;
//        for(int i: nums){
//            System.out.print(i + " ");
//        }
//        System.out.println();
//        System.out.println("size: " + j);
//

    }


}

