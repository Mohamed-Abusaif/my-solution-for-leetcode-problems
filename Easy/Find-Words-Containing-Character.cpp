#include <iostream>
#include <string>
#include <vector>

using namespace std;
class Solution
{
public:
    vector<int> findWordsContaining(vector<string> &words, char x)
    {
        vector<int> myVec;

        for (int i = 0; i < words.size(); i++)
        {
            int wordSize = words[i].length();
            for (int j = 0; j < wordSize; j++)
            {
                if (words[i][j] == x)
                {
                    myVec.push_back(i);
                    break;
                }
            }
        }

        return myVec;
    }
};

int main()
{
    Solution s;
    vector<string> words = {"Hello", "exercise"};
    char target = 'e';

    s.findWordsContaining(words, target);
    return 0;
}