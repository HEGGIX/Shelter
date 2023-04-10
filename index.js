console.log("Проверьте, пожалуйста, по-возможности, в четверг, не успел всё выполнить в срок!) ")

const burger =  document.querySelector(".header-burger");
const menu = document.querySelector(".nav-conatiner");
const closeItem = document.querySelector(".burger-close");
const body = document.querySelector(".body");
const opacityBurger = document.querySelector(".opacity");

function showBurger(){
    burger.addEventListener("click",() => {
       menu.classList.add("nav-conatiner_active");
       burger.classList.add("header-burger_unactive");
       body.classList.add("body_active");
       opacityBurger.classList.add("opacity_active");

    })
    closeItem.addEventListener("click",() => {
        menu.classList.remove("nav-conatiner_active");
        burger.classList.remove("header-burger_unactive");
        body.classList.remove("body_active");
        opacityBurger.classList.remove("opacity_active");
    })
}
showBurger()

const leftBtnCarousel = document.querySelector(".left-arrow");
const rightBtnCarousel = document.querySelector(".right-arrow");
const slider = document.querySelector(".slider");
const itemLeft = document.querySelector(".slider-left");
const itemRight = document.querySelector(".slider-right");
const cardAll = document.querySelectorAll(".card");
const cardArr = Array.from(cardAll);

const createCardTemplate = () => {
    const card1 = document.createElement("div");
    const card = document.querySelector(".card");
    card1.innerHTML = card; 
    card1.classList.add("card");
    console.log(card1);
    return card1;
  }

function moveLeft() {
    slider.classList.add("transition-left");
    leftBtnCarousel.removeEventListener("click", moveLeft);
    rightBtnCarousel.removeEventListener("click", moveRight);
}

function moveRight() {
    slider.classList.add("transition-right");
    leftBtnCarousel.removeEventListener("click", moveLeft);
    rightBtnCarousel.removeEventListener("click", moveRight);
}

leftBtnCarousel.addEventListener("click", moveLeft);
rightBtnCarousel.addEventListener("click", moveRight);

function getRandomNum(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

slider.addEventListener("animationend", (animationEvent) =>{
    let changed;
    if(animationEvent.animationName === "move-left"){
        slider.classList.remove("transition-left");
        changed = itemLeft;
        document.querySelector(".slider-active").innerHTML = itemLeft.innerHTML;

    } else{
        slider.classList.remove("transition-right");
        changed = itemRight;
        document.querySelector(".slider-active").innerHTML = itemRight.innerHTML;
    }

    changed.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const card1 = createCardTemplate();
      card1.innerHTML = getRandomNum(cardArr);
      changed.appendChild(card1);
    }

    leftBtnCarousel.addEventListener("click", moveLeft);
    rightBtnCarousel.addEventListener("click", moveRight);
})



const petsObject = {
        Jennifer:{
            img: "images/pets-jennifer modal.png",
            name: "Jennifer",
            type: "Dog - Labrador",
            description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            age: "2 months",
            inoculations: ["none"],
            diseases: ["none"],
            parasites: ["none"],
        },
        Sophia: {
            img: "images/pets-spohia.png",
            name: "Sophia",
            type: "Dog - Shih tzu",
            description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            age: "1 month",
            inoculations: ["parvovirus"],
            diseases: ["none"],
            parasites: ["none"],
        },
        Woody: {
            img: "images/pets-woody.png",
            name: "Woody",
            type: "Dog - Golden Retriever",
            description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            age: "3 years 6 months",
            inoculations: ["adenovirus", "distemper"],
            diseases: ["right back leg mobility reduced"],
            parasites: ["none"],
      },
        Scarlett: {
            img: "images/pets-scarlet.png",
            name: "Scarlett",
            type: "Dog - Jack Russell Terrier",
            description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            age: "3 months",
            inoculations: ["parainfluenza"],
            diseases: ["none"],
            parasites: ["none"],
        },
        Katrine: {
            img: "images/pets-katrine.png",
            name: "Katrine",
            type: "Cat - British Shorthair",
            description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            age: "6 months",
            inoculations: ["panleukopenia"],
            diseases: ["none"],
            parasites: ["none"],
        },
        Timmy: {
            img: "images/pets-timmy.png",
            name: "Timmy",
            type: "Cat - British Shorthair",
            description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            age: "2 years 3 months",
            inoculations: ["calicivirus", "viral rhinotracheitis"],
            diseases: ["kidney stones"],
            parasites: ["none"],
        },
        Freddie: {
            img: "images/pets-ferddie.png",
            name: "Freddie",
            type: "Cat - British Shorthair",
            description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            age: "2 months",
            inoculations: ["rabies"],
            diseases: ["none"],
            parasites: ["none"],
        },
        Charly: {
            img: "images/pets-charly.png",
            name: "Charly",
            type: "Dog - Jack Russell Terrier",
            description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            age: "8 years",
            inoculations: ["bordetella bronchiseptica", "leptospirosis"],
            diseases: ["deafness", "blindness"],
            parasites: ["lice", "fleas"],
        },
}

const petsCrd = document.querySelectorAll(".card");
const petsArray = Array.from(petsCrd);

petsArray.forEach(element => {
    element.addEventListener("click",(event) =>{
        const petsTarget = event.target;
        const dataInfo = petsTarget.dataset.pets;
        const slider = document.querySelector(".slider");

        addPopup(dataInfo);

        slider.classList.add("hide");
    } )
})

function addPopup(dataInfo) {
    const popUp = document.querySelector(".pop-up");
    const popUpImg = document.querySelector(".pop-up-img");
    const titlePopUp = document.querySelector(".pets-title-pop-up");
    const petsType = document.querySelector(".pets-type");
    const petsText = document.querySelector(".pets-text");
    const petsAge = document.querySelector(".age");
    const inoculations = document.querySelector(".inoculations");
    const diseases = document.querySelector(".diseases");
    const parasites = document.querySelector(".parasites");
    const currentInfo = petsObject[dataInfo];
    popUpImg.innerHTML = currentInfo.img;
    titlePopUp.innerHTML = currentInfo.name;
    petsType.innerHTML = currentInfo.type;
    petsText.innerHTML = currentInfo.description;
    petsAge.innerHTML = currentInfo.age;
    inoculations.innerHTML = currentInfo.inoculations;
    diseases.innerHTML = currentInfo.diseases;
    parasites.innerHTML = currentInfo.parasites;

    petsBtn.addEventListener("click",() =>{
        popUp.classList.remove("hide");
    })
}
