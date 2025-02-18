
class Solution {

    public int minimumOperations(int[] nums) {
        int result = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] % 3 != 0) {
                result++;
            }
        }

        return result;
    }
}

public class Find_Minimum_Operations_to_Make_All_Elements_Divisible_by_Three {

    public static void main(String[] args) {

        Solution s = new Solution();
        int[] nums = {1, 2, 3, 4};
        System.out.println("result: " + s.minimumOperations(nums));

    }

}
