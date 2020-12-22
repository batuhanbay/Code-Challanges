#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    // Complete the code.

    int a, b;
    string c[] = { "","one","two","three","four","five","six","seven","eight","nine" };
    cin >> a >> b;
    for (int i = a; i <= b; i++)
        cout << ((i <= 9) ? c[i] : ((i % 2 == 0) ? "even" : "odd")) << endl;
    return 0;
}
