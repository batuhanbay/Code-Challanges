#include <iostream>
#include <string>
using namespace std;

int calcLength(string a) {

    return  a.size();
}

string add(string a, string b) {
    return a + b;
}


int main() {
    // Complete the program
    string a, b;
    char c;
    cin >> a >> b;
    cout << calcLength(a) << " " << calcLength(b) << endl;
    cout << add(a, b) << endl;

    c = a[0];
    a[0] = b[0];
    b[0] = c;
    cout << a << " " << b << endl;
}
