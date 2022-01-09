arr = [1, 2, 3, 4, 5]
print(arr)

print(arr[-1])
print(arr[1:])
arr.append(6)
print(arr)
arr.pop()
print(arr)
print('new list', arr.copy())

print('length', len(arr))


def cb(n):
    print(f'current item {n}')
    return n


mappedList = map(cb, arr)
print(list(mappedList))  # parse to list

duplicatedList = list(map(lambda n: n * 2, arr))
#  lambda ~= (n) => n * 2
print(duplicatedList)


def odd_filter(n):
    if n % 2 != 0:
        return True
    else:
        return False


odd = filter(odd_filter, arr)
print(list(odd))

even = filter(lambda n: True if n % 2 == 0 else False, arr)  # lambda with ternary
#  ternary operator: 1st_value if condition else 2st_value

print(list(even))
