#include <stdlib.h>
#include <stdio.h>

int main(void) {
  while (1) {
    char *c = malloc(sizeof(char));
    *c = 0;
  }

  return 0;
}
