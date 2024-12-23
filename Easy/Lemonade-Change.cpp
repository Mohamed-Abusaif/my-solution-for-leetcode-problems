#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int netCount =5*(bills.size());
        int sumOfBills =0;
        for(int i=0; i<bills.size(); i++ ){
            sumOfBills = sumOfBills + bills[i];
        }
        if(netCount >= (sumOfBills - netCount) ){
            return true;
        }
        else{
            return false;
        }

    }
};

int main()
{
    Solution s;
    vector<int> bills = {5,5,10,10,20};
    cout<< s.lemonadeChange(bills) << endl;
    return 0;
}