#include <iostream>
#include <string>
#include <unordered_map>

using namespace std;

class Solution
{
public:
    void firstUniqChar(string s)
    {
        unordered_map<char, int> frequencyMap;
        for (int i = 0; i < s.size(); i++)
        {
            frequencyMap[s[i]]++;
        }
        //search for first charachter with frequency of 1 , return 
        cout << frequencyMap[s[2]];
    }
};

int main()
{

    Solution s;
    string str= "Helllllo";
    s.firstUniqChar(str);
    return 0;
}
