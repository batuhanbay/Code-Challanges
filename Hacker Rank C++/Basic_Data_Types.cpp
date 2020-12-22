#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    // Complete the code.
    int number;
    long number1;
    char ch;
    float number2;
    double number3;

    scanf_s("%d %ld %c %f %lf", &number, &number1, &ch, &number2, &number3);
    printf("%d\n%ld\n%c\n%.3f\n%lf", number, number1, ch, number2, number3);
    return 0;
}
