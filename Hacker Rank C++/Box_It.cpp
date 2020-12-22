#include<bits/stdc++.h>

using namespace std;
//Implement the class Box  
class Box {
private:
	int length;
	int breadth;
	int height;
public:
	Box() {
		length = 0;
		breadth = 0;
		height = 0;
	}
	Box(int length, int breadth, int height) {
		this->length = length;
		this->breadth = breadth;
		this->height = height;
	}
	Box(Box& B) {
		this->length = B.getLength();
		this->height = B.getHeight();
		this->breadth = B.getBreadth();
	}

	int getLength() {
		return length;
	}
	int getBreadth() {
		return breadth;
	}
	int getHeight() {
		return height;
	}
	long long CalculateVolume() {
		return (long long)this->height * this->breadth * this->length;
	}
	bool operator<(Box& b) {
		if (this->length < b.length) return true;
		else if (this->breadth < b.breadth && this->length == b.length) return true;
		else if (this->height < b.height && this->length == b.length && this->breadth == b.breadth) return true;
		return false;
	}
	friend ostream& operator<<(ostream& out, Box& B) {
		out << B.length << " " << B.breadth << " " << B.height;
		return out;
	}
};


void check2()
{
	int n;
	cin >> n;
	Box temp;
	for (int i = 0; i < n; i++)
	{
		int type;
		cin >> type;
		if (type == 1)
		{
			cout << temp << endl;
		}
		if (type == 2)
		{
			int l, b, h;
			cin >> l >> b >> h;
			Box NewBox(l, b, h);
			temp = NewBox;
			cout << temp << endl;
		}
		if (type == 3)
		{
			int l, b, h;
			cin >> l >> b >> h;
			Box NewBox(l, b, h);
			if (NewBox < temp)
			{
				cout << "Lesser\n";
			}
			else
			{
				cout << "Greater\n";
			}
		}
		if (type == 4)
		{
			cout << temp.CalculateVolume() << endl;
		}
		if (type == 5)
		{
			Box NewBox(temp);
			cout << NewBox << endl;
		}

	}
}

int main()
{
	check2();
}