## Lesson-7

1. Nullish colasing operator:
2. Conditional operators:
3. Loops 




- if , else
- if , else if , else
- ternary operator
- switch case 

```

let day = +prompt("Enter a day number:");

switch (day) {
    case 1:
        console.log("D");
        break;
    case 2:
        console.log("S");
        break;
    case 3:
        console.log("T");
        break;
    case 4:
        console.log("W");
        break;
    default:
        console.log("Unknown");
}


let cond = false;

if (!cond) {
     console.log("YES");
} else {
    console.log("No");
}

console.log((!cond ? "" : "No") ? "DOWNLOAD" : "ERROR");





```

//nullish colasing operator

```
// nullish value : null , undefined

console.log(undefined ?? "topilmadi"); 


```

LOOPS:

```
 
  while (n <= 100) {
    if (n % 2 == 1) {
        console.log(n);
    }
    n++;
}

do {
    console.log(n); // 0 / 1
    n++; // 1 // 2
} while (n <= 10);

for (let i = 0; i < 100; i++) {
    console.log(i);
}

```


- Named functions
1. function decloration
2. Function expression 
3. Arrow function 

4. IIFE 
5. PIPE
6. CURRYING
7. GENERATOR FUNTSION
8. FaCTORY Function
9. Constructor function



