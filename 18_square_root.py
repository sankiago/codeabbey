data_amount = int(input())
nums = []
for datum in range(data_amount):
    nums.append(list(map(lambda str: int(str), input().split(' '))))

def sqrt(num, steps):
    aprox_root = 1
    for _ in range(steps):
        aprox_division = num / aprox_root
        roots_average = (aprox_division + aprox_root) / 2
        aprox_root = roots_average
    return aprox_root


square_roots = list(map(lambda pair : sqrt(pair[0],pair[1]).__str__(), nums))
print(' '.join(square_roots))