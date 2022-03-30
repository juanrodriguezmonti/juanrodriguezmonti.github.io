def fibonacci_of(n):
    if n in {0, 1}:
        return n
    return fibonacci_of(n - 1) + fibonacci_of(n - 2)

l = [fibonacci_of(n) for n in range(40)]

for item in l:
    print(item)