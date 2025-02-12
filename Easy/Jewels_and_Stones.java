
import java.util.*;

class Solution {

    public int numJewelsInStones(String jewels, String stones) {
        String[] str1Parts = jewels.split("");
        String[] str2Parts = stones.split("");

        List<String> listParts = Arrays.asList(str1Parts);
        HashSet<String> hsetFromString = new HashSet<String>(listParts);
        Integer count = 0;

        for (int i = 0; i < str2Parts.length; i++) {
            if (hsetFromString.contains(str2Parts[i])) {
                count++;
            }
        }
        return count;
    }

}

public class Jewels_and_Stones {

    public static void main(String[] args) {

        String jewels = "z";
        String stones = "ZZ";
        Solution s = new Solution();
        s.numJewelsInStones(jewels, stones);

    }

}
