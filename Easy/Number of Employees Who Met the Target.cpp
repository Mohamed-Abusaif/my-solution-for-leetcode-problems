#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    int numberOfEmployeesWhoMetTarget(vector<int>& hours, int target) {
    
        int numOfEmployees =0;
        for(int i=0; i< hours.size(); i++){
            if(hours[i]>=target){
                numOfEmployees++;
            }
        }
    return numOfEmployees;
    }
};

int main()
{
   Solution s;
   vector<int> hours={1,5,2,3,6};
   int target = 3;
   int numOfEmployees = s.numberOfEmployeesWhoMetTarget(hours, target);
   cout << numOfEmployees << endl;
    return 0;
}