#include<iostream.h>
using namespace std;


class A 
{
    public:
    void dis();
}

class A::dis()
{

    cout << "Scope";

}



int main()
{

    A n1;
    n1.dis();
    return 0;
}