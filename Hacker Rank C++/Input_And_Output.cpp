#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int value;
    int sum = 0;
    int flag = 0;
    while (flag != 3) {
        cin >> value;
        sum += value;
        flag++;
    }
    cout << sum;
    return 0;
}
