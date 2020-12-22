#include <sstream>
#include <vector>
#include <iostream>
using namespace std;

//How to return vector from function
// vector <int> foo(/*parameters here*/) { 
//     vector <int> temp_arr; 

//        write code here

//       return temp_arr; 
// }

vector<int> parseInts(string str) {

    vector<int> intfromstr;
    string temp;
    stringstream ss(str);
    int size = 0;
    while (getline(ss, temp, ',')) {//We can use getline() function to split a sentence on                                      the basis of a character which is ','.
        intfromstr.push_back(stoi(temp));//The stoi() function is used to convert a                                                 string to an integer in C++11
    }
    return intfromstr;
}

int main() {
    string str;
    cin >> str;
    vector<int> integers = parseInts(str);
    for (int i = 0; i < integers.size(); i++) {
        cout << integers[i] << "\n";
    }
    return 0;
}
