
import java.util.Arrays;

class Solution {
    public int [] moveZeroes(int[] nums) {
        int n = nums.length;

        for (int i = 0; i < n - 1; i++) {

            for (int j = 0; j < n-1; j++) {
    
                if (nums[j ] == 0  ) {
            
                    int temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                }
            }

        }
         
        return nums;
    }
}

public class Move_Zeros {

    public static void main(String[] args) {

        Solution s = new Solution();
        int[] nums = { 4,2,4,0,0,3,0,5,1,0 };
        System.out.println(Arrays.toString(s.moveZeroes(nums)));
    }

}
