#include "binary_search.h"
#include <stdio.h>
#include <math.h>

const int *binary_search(int value, const int *arr, size_t length)
{
    int max = length - 1;
    int min = 0;
    int mid;

    while (min <= max) {
        mid = floor((max + min) / 2);

        int found = arr[mid];
        if (found == value) return &arr[mid];

        if (value < found) {
          max = mid - 1;
        } else {
          min = mid + 1;
        }
    }
    return NULL;
}
