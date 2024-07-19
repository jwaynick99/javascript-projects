// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name, age, mass = 54){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let tortoise = new Astronaut('Speedy', 120);
let fox = new Astronaut("Fox", 7, 12);
let hippo = new Astronaut("Hippo", 25, 1500)

console.log(typeof hippo, typeof fox)

console.log(tortoise.name, tortoise.age, tortoise.mass);
console.log(fox.name, fox.age, fox.mass)
console.log(hippo.name, hippo.age, hippo.mass)

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!