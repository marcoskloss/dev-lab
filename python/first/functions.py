def add(n1, n2):
    return n1 + n2


print(add(1, 2))


def make_operation (op):
    def mult (n1, n2):
        return n1 * n2

    ops = {
        'mult': mult,
        'add': lambda n1, n2: n1 + n2,
        'sub': lambda n1, n2: n1 - n2
    }

    return ops[op]


add_fn = make_operation('add')
print('add fn', add_fn(5, 5))

mult = make_operation('mult')
print('mult fn ', mult(2, 11))
