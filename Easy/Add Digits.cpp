#include <iostream>

using namespace std;

class Solution
{
public:
    int addDigits(int num)
    {
        // Direct Equation: Digital Root = 1 + ((n−1)mod9)
        num = 1 + ((num - 1) % 9);

        return num;
    }
};

int main()
{

    Solution s;
    int x = 12345;
    cout << s.addDigits(x) << endl;

    return 0;
}
