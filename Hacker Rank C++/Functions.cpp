#include <iostream>
#include <cstdio>
using namespace std;

/*
Add `int max_of_four(int a, int b, int c, int d)` here.
*/
int max_of_four(int a, int b, int c, int d) {
    int numbers[4] = { a,b,c,d };
    int max = numbers[0];
    int i = 0;
    while (i < 4) {
        if (numbers[i++] > max) {
            max = numbers[i - 1];
        }

    }
    return max;
}
int main() {
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);

    return 0;
}
