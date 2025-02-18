
import java.util.Arrays;

class Solution {

    public int[] shuffle(int[] nums, int n) {
        int[] result = new int[nums.length];
        int index = 0;
        int middle = n;
        for (int i = 0; i < n ; i++) {
            result[index++] = nums[i];
            result[index++] = nums[middle++];
        }

        return result;
    }
}

public class Shuffle_the_Array {

    public static void main(String[] args) {
        Solution s = new Solution();
        int[] nums = {2, 5, 1, 3, 4, 7};
        int n = 3;
        System.out.println(Arrays.toString(s.shuffle(nums, n)));
    }

}
