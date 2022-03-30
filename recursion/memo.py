import functools

@functools.lru_cache(maxsize=None) #128 by default
def fib(num):
    if num < 2:
        return num
    else:
        return fib(num-1) + fib(num-2)

l = [fib(n) for n in range(3000)]

for item in l:
    print(item)