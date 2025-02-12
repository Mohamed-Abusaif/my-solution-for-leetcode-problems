
import java.util.*;

class Solution {

    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {

        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> a1 = new ArrayList<>();
        List<Integer> a2 = new ArrayList<>();

        Set<Integer> intersection = new HashSet<>();

        Set<Integer> s1 = new HashSet<>();
        Set<Integer> s2 = new HashSet<>();

        for (int i : nums1) {
            s1.add(i);
            intersection.add(i);
        }
        for (int j : nums2) {
            s2.add(j);
        }

        s1.removeAll(s2);
        s2.removeAll(intersection);

        for (int i : s1) {
            a1.add(i);
        }
        for (int j : s2) {
            a2.add(j);
        }

        ans.add(a1);
        ans.add(a2);
        return ans;
    }
}

public class Find_the_Difference_of_Two_Arrays {

    public static void main(String[] args) {
        System.out.println("Hello, World!");

        int[] arr1 = {1, 2, 3};
        int[] arr2 = {2, 4, 6};

        Solution s = new Solution();
        s.findDifference(arr1, arr2);
    }

}
