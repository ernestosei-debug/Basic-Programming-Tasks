#Simple implementation of recursion
def func(x):
    if(x == 0):
        print(0)
    else:
        print(x)
        func(x - 1)
func(10)
