#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int numOfArr;
    int numOfQuery;
    int sizeOfArr;
    int valueOfQuery1;
    int valueOfQuery2;
    cin >> numOfArr >> numOfQuery;
    int** A = new int* [numOfArr];

    for (int i = 0; i < numOfArr; i++) {
        cin >> sizeOfArr;
        A[i] = new int[sizeOfArr];
        for (int j = 0; j < sizeOfArr; j++) {
            cin >> A[i][j];
        }
    }
    for (int i = 0; i < numOfQuery; i++) {
        cin >> valueOfQuery1 >> valueOfQuery2;
        cout << A[valueOfQuery1][valueOfQuery2] << endl;
    }
    return 0;
}
