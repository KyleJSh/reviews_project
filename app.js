const reviews = [
  {
    id: 1,
    name: "miranda monkey",
    job: "web developer",
    img: "/images/person-1.jpg",
    text: "I like cats and dogs and raccoons, and I love Metallica and Dream Theater. This has nothing to do with web dev. I am learning all about JavaScript and CSS and it is so much fun."
  },
  {
    id: 2,
    name: "johnny jackson",
    job: "chef",
    img: "/images/person-2.jpg",
    text: "I like cooking and baking stuff in the kitchen, it is great. I've been cooking for many years and like to make chicken and beef and pies."
  },
  {
    id: 3,
    name: "sherry shrinkton",
    job: "realtor",
    img: "/images/person-3.jpg",
    text: "I sell houses and condos and help families start new lives. I've been in real estate for 20 years and enjoy it very much."
  },
  {
    id: 4,
    name: "mickie melons",
    job: "rock star",
    img: "/images/person-4.jpg",
    text: "I like to party and do wild things with wild people. I tend to go out and find trouble. If I can't find any, then I start some."
  }
]

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson();
});

// show previous person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});