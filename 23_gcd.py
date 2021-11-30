data_amount = int(input())
numbers_to_calculate = []
for datum in range(data_amount):
    numbers_to_calculate.append(list(map(lambda str: int(str),input().split(' '))))

def gcd(a, b):
    if a % b == 0:
        return b
    return gcd(b, a % b)

def lcm(a, b):
    return int(a * b / gcd(a, b))

gcd_lcm = list(map(lambda pair : f'({gcd(pair[0],pair[1])} {lcm(pair[0],pair[1])})', numbers_to_calculate))
print(' '.join(gcd_lcm))