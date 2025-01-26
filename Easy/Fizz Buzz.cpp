#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution
{
public:
    vector<string> fizzBuzz(int n)
    {
        vector<string> answer(n);
        for (int i = 1; i <= n; i++)
        {

            if (i % 3 == 0 && i % 5 == 0)
            {
                answer[i - 1] = "FizzBuzz";
            }
            else if (i % 3 == 0)
            {
                answer[i - 1] = "Fizz";
            }
            else if (i % 5 == 0)
            {
                answer[i - 1] = "Buzz";
            }
            else
            {
                answer[i - 1] = to_string(i);
            }
        }
        for (int i = 1; i <= n; i++)
        {
            cout << answer[i - 1] << endl;
        }
        return answer;
    }
};

int main()
{
    Solution s;
    s.fizzBuzz(5);
    return 0;
}