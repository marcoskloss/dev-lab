#if 1 // BETTER APROACH

#include "secret_handshake.h"
#include <stdlib.h>

#define EVENTS_CAP 4

const char** commands(size_t number)
{
    const char** result = malloc(sizeof(char*) * EVENTS_CAP);
    int len = 0;  
    if ((number & 16) != 0) { // reverse
        if ((number & 8) != 0) result[len++] = "jump";
        if ((number & 4) != 0) result[len++] = "close your eyes";
        if ((number & 2) != 0) result[len++] = "double blink";
        if ((number & 1) != 0) result[len++] = "wink";
    } else {
        if ((number & 1) != 0) result[len++] = "wink";
        if ((number & 2) != 0) result[len++] = "double blink";
        if ((number & 4) != 0) result[len++] = "close your eyes";
        if ((number & 8) != 0) result[len++] = "jump";
    }
    return result;
}

#else // MY FIRST APROACH

#include "secret_handshake.h"
#include <stdlib.h>

#define MAX_NUM_BITS 5

//                            { 00001, 00010, 00100, 01000, 10000 }
size_t Events[MAX_NUM_BITS] = { 1, 2, 4, 8, 16 };
const char* EventsName[MAX_NUM_BITS] = { "wink", "double blink", "close your eyes", "jump", "reverse order" };

const char** commands(size_t number)
{ 
    const char** result = malloc(sizeof(char*) * MAX_NUM_BITS);
    int matches_count = 0, j = 0;
    bool need_to_reverse = false;

    for (int i = 0; i < MAX_NUM_BITS; i++) {
        if ((number & Events[i]) == 0) continue;

        if (Events[i] == 16) { // 16 -> reverse order, we don't put that on the result
            need_to_reverse = true;
        } else {
            matches_count += 1;
            result[j] = EventsName[i];
            j += 1;
        }
    }
    
    if (matches_count == 0) { // without this the tests on the platform won't pass
        result = realloc(result, sizeof(char*));
        result[0] = NULL;
    } else {
        // readjusting the size of the array according to 'matches_count'
        result = realloc(result, matches_count * sizeof(char*)); 
    }

    if (need_to_reverse) {
        reverse(result, matches_count);
    }

    return result;
}

void reverse(const char** arr, int size)
{
    if (size <= 1) return;
    const char* aux = NULL;
    for (int i = 0; i < size/2; i++) {
        int j = size - i - 1;
        aux = arr[j];
        arr[j] = arr[i];
        arr[i] = aux;
    }
}

#endif
