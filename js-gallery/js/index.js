gsap.registerPlugin(Flip);

// let dogs = gsap.utils.toArray("figure");
// gsap.utils.toArray("") = Array.from(document.querySelectorAll("") 
let dogs = Array.from(document.querySelectorAll("figure"));
console.log(dogs);
let bigDog = dogs[0];

dogs.forEach((dog) => {
    dog.addEventListener("click", (e) => changeGrid(dog));
});

function changeGrid(dog) {
    console.log(dog);
    console.log(bigDog);
    if (dog === bigDog) return;

    // Save State id
    let state = Flip.getState(dogs);

    console.log(bigDog.dataset.grid = dog.dataset.grid);

    bigDog.dataset.grid = dog.dataset.grid;
    dog.dataset.grid = "img-1";
    bigDog = dog;

    Flip.from(state, {
        absolute: true,
        ease: "Power1.inOut"
    });
}