createAnimal.prototype.makeSound=function(){
    return `the aminal is ${this.name} and the sound is ${this.sound}.`
}

function createAnimal(name,sound){
    let obj={}
    Object.setPrototypeOf(obj,createAnimal.prototype)
    obj.name=name;
    obj.sound=sound;
    
    return obj
}
let a1=createAnimal('dog','brak')
console.log(a1);
console.log(a1.makeSound());



createDog.prototype.fetch=function(){
    Object.setPrototypeOf(createDog.prototype,createAnimal.prototype)
    console.log(`${this.name} fetches the ball!"`);
}
function createDog(name,sound,bread){
    let obj=createAnimal(name,sound)
    Object.setPrototypeOf(obj,createDog.prototype)
    obj.bread=bread;

    return obj
}
let a2=createDog('Buddy','Woof','Labrador')
console.log(a2);
console.log(a2.fetch());
console.log(a2.makeSound());