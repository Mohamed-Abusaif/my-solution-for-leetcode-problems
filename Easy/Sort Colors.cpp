#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
    void sortColors(vector<int> &nums)
    {
        int maxNum = 2;
        vector<int> countArray(maxNum + 1, 0);
        for (int i = 0; i < nums.size(); i++)
        {
            countArray[nums[i]]++;
        }
        for (int i = 1; i <= maxNum; i++)
        {
            countArray[i] += countArray[i - 1];
        }
        vector<int> outputArray(nums.size());
        for (int i = nums.size() - 1; i >= 0; i--)

        {
            outputArray[countArray[nums[i]] - 1] = nums[i];
            countArray[nums[i]]--;
        }
        nums = outputArray;
    }
};

int main()
{
    Solution s;
    vector<int> testVec = {2, 0, 2, 1, 1, 0};
    s.sortColors(testVec);
    cout << testVec[0];
    
    return 0;
}