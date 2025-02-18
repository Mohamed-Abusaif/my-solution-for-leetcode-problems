
import java.util.Arrays;

class Solution {

    public int[] minOperations(String boxes) {

        //declarations:
        char[] ch = boxes.toCharArray();
        int[] boxesInt = new int[boxes.length()];
        int[] result = new int[boxes.length()];

        //conversion to integer 0,1
        for (int i = 0; i < ch.length; i++) {
            boxesInt[i] = Integer.parseInt(String.valueOf(ch[i]));
        }

        //solution
        int balls = 0;
        int moves = 0;
        for (int i = 0; i < boxesInt.length; i++) {
            result[i] = balls + moves;
            moves = moves + balls;
            balls += boxesInt[i];
        }
        balls = 0;
        moves = 0;
        for (int i = boxesInt.length - 1; i >= 0; i--) {
            result[i] += balls + moves;
            moves = moves + balls;
            balls += boxesInt[i];
        }

        return result;
    }
}

public class Minimum_Number_of_Operations_to_Move_All_Balls_to_Each_Box {

    public static void main(String[] args) {
        System.out.println("Hello, World!");

        Solution s = new Solution();
        String boxes = "001011";

        System.out.println(Arrays.toString(s.minOperations(boxes)));
    }

}
