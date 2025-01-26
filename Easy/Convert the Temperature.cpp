#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
    vector<double> convertTemperature(double celsius)
    {
        double feh = (celsius * 1.80) + 32;
        double kel = celsius + 273.15;
        vector<double> deg = {};
        deg.push_back(kel);
        deg.push_back(feh);
        return deg;
    }
};

int main()
{
    Solution s;
    vector<double> solution = s.convertTemperature(36.50);
    for (double num : solution)
    {
        cout << num << endl;
    }

    return 0;
}
