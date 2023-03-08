#include "sieve.h"
#include <stdlib.h>

// Refs: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

/// Calculate at most `max_primes` prime numbers in the interval [2,limit]
/// using the Sieve of Eratosthenes and store the prime numbers in `primes`
/// in increasing order.
/// The function returns the number of calculated primes.
uint32_t sieve(uint32_t limit, uint32_t *primes, size_t max_primes)
{
    uint32_t* range = calloc(limit, sizeof(uint32_t));

    for (uint32_t  i =  1; i < limit; i++) {
        range[i] = i + 1;
    }

    int primes_count = 0;

    for (uint32_t  i =  1; i < limit && max_primes > 0; i++) {
        uint32_t value = range[i];

        if (value == 0) continue;

        primes[primes_count++] = value;
        max_primes -= 1;

        for (uint32_t j = i + value; j < limit; j += value) {
            range[j] = 0;
        } 
    }
    free(range);
    return primes_count;
}

