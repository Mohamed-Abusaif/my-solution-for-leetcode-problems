
import java.util.*;

class Solution {

    public int[] countBits(int n) {

        int[] ans = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            String binI = Integer.toBinaryString(i);
            String[] strArrBin = binI.split("");
            int count = 0;
            for (String strArrBin1 : strArrBin) {
                if ("1".equals(strArrBin1)) {
                    count++;
                }
            }
            ans[i] = count;
        }

        return ans;
    }
}

public class Counting_Bits {

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(Arrays.toString(s.countBits(5)));
        // s.countBits(5);
    }

}
