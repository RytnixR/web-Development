console.log("loops understanding");

let a = 1;

for (let i = 0; i < 10; i++) {
    console.log(a + i);
    
}

let obj = {
    name : "rajeev",
    role : "programer",
    salary : "42 lpa"
}

for (const key in obj ) {  // forin  this is for object
    console.log(key)
}

for (const c of "rajeev") {   // forof this is for array
    console.log(c)
}

let i = 3;

while (i < 6) {  // while loop
    console.log(i)
    i++;
    
}

i = 10
do {  // do-while loop
    console.log(i);
    i++;
} while (i<8);
