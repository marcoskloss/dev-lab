#include <stdlib.h>
#include <stdio.h>
#include <assert.h>
#include "linked_list.h"

struct list_node {
   struct list_node *prev, *next;
   ll_data_t data;
};

struct list {
   struct list_node *first, *last;
};

struct list_node* new_node(ll_data_t data)
{
    struct list_node* node = (struct list_node*) malloc(sizeof(struct list_node));
    node->data = data;
    node->next = NULL;
    node->prev = NULL;
    return node;
}

int is_empty(struct list* list)
{
    return list->first == NULL;
}

// constructs a new (empty) list
struct list *list_create(void)
{
    struct list* list = (struct list*) malloc(sizeof(struct list));
    list->first = NULL;
    list->last = NULL;
    return list;
}

// destroys an entire list
// list will be a dangling pointer after calling this method on it
void list_destroy(struct list *list)
{
    struct list_node* node = list->first;
    struct list_node* aux = NULL;
    while (node != NULL) {
        aux = node->next;
        free(node);
        node = aux;
    }

    free(list);
}

// inserts item at back of a list
void list_push(struct list *list, ll_data_t item_data)
{
    struct list_node* node = new_node(item_data);
    if (is_empty(list)) {
        list->first = node;
        list->last = node;
    } else {
        list->last->next = node;
        node->prev = list->last;
        list->last = node;
    }
}

// removes item from back of a list
ll_data_t list_pop(struct list *list)
{
    if (is_empty(list)) {
        printf("[ERROR]: cannot pop an empty list\n");
        exit(1);
    }

    struct list_node* target = list->last;
    ll_data_t data = target->data;

    if (target == list->first) {
        list->last = NULL;
        list->first = NULL;
    } else {
        list->last = target->prev;
        list->last->next = NULL;
    }
    free(target);
    return data;
}

// inserts item at front of a list
void list_unshift(struct list *list, ll_data_t item_data)
{
    struct list_node* node = new_node(item_data);
    if (is_empty(list)) {
        list->first = node;
        list->last = node;
    } else {
        node->next = list->first;
        list->first = node;
    }
}

// removes item from front of a list
ll_data_t list_shift(struct list *list)
{
    if (is_empty(list)) {
        printf("[ERROR]: cannot unshift an empty list\n");
        exit(1);
    }

    struct list_node* target = list->first;
    ll_data_t data = target->data;

    if (target == list->last) {
        list->first = NULL;
        list->last = NULL;
    } else {
        list->first = target->next;
        list->first->prev = NULL;
    }
    free(target);
    return data;
}

// counts the items on a list
size_t list_count(const struct list *list)
{
    size_t count = 0;
    struct list_node* node = list->first;
    while (node != NULL) {
        node = node->next;
        count += 1;
    }
    return count;
}

// deletes a node that holds the matching data
void list_delete(struct list *list, ll_data_t data)
{
   if (is_empty(list)) return; 

    struct list_node* found = list->first;
    while (found != NULL && found->data != data) {
        found = found->next;
    }

    if (found == NULL) return;

    int is_first = found == list->first;
    int has_next = found->next != NULL;

    if (is_first) {
        if (has_next) {
            list->first = found->next;
            list->first->prev = NULL;
        } else {
            list->last = NULL;
            list->first = NULL;
        }
    } else {
        found->prev->next = found->next;
        if (has_next) {
            found->next->prev = found->prev;
        } else {
            list->last = found->prev;
        }
    }
    free(found);
}

