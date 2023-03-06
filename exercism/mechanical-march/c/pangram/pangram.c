#include "pangram.h"
#include <stdbool.h>
#include <stdio.h>

// We'll use an integer to store the alphabet flags
bool is_pangram_v2(const char *sentence)
{
    if (sentence == NULL) return false;
  
    int table = 0;

    for (int i = 0; sentence[i] != '\0'; i++) {
        char c = sentence[i];
        if (c >= 65 && c <= 90) { // is upper case A-Z
            c += 32; // to lower case
        }
        if (c >= 97 && c <= 122) { // is lower case a-z
            int idx = c - 97;

            int mask = 1;
            mask = mask << idx;
            table = table | mask;
        }
    }

    // all 26 bits setted to 1
    //           == 00000011111111111111111111111111
    return table == 67108863;
}

bool is_pangram(const char *sentence)
{
    if (sentence == NULL) return false;

    int table[26] = {0};

    for (int i = 0; sentence[i] != '\0'; i++) {
        char c = sentence[i];
        if (c >= 65 && c <= 90) { // is upper case A-Z
            c += 32; // to lower case
        }
        if (c >= 97 && c <= 122) { // is lower case a-z
            int idx = c - 97;
            table[idx] = 1;
        }
    }
    for (int i = 0; i < 26; i++) {
      if (table[i] == 0) return false;
    }
    return true;
}

