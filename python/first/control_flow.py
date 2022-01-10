import random

rand = random.randint(0, 10)

if rand == 0:
    print(f'{rand}', 'zero')
elif rand % 2 == 0:
    print(f'{rand}', 'even')
else:
    print(f'{rand}', 'odd')

arr = ['my', 'name', 'is', 'John', 'Cenaaa', '!']
for word in arr:
    print(word)

user = {'name': 'marcos', 'age': 20}
print(user.items())
for key, value in user.items():
    print(f'{key} => {value}')
print('--------')
for key, value in [['name', 'marcos'], ['age', 20]]:
    print(f'{key} => {value}')

for idx in range(2):
    print(idx)

print(list(range(-5, 10, 2)))
# range(start, end, step)
print(sum([3, 3, 3]))
print(sum(range(0, 10, 2)))

