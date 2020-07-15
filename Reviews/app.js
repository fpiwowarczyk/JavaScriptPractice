// local reviews data 
const reviews = [
    {
        id: 1,
        name: "filip piwowarczyk",
        job: "web developer",
        img: "fifa.jpg",
        text:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and "
    },
    {
        id: 2,
        name: "maja ",
        job: "graphic",
        img: "maja.jpeg",
        text:" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab"
    },
    {
        id: 3,
        name: "josh",
        job: "job less",
        img:"josh.jpeg",
        text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et"
    },
];

//items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn=document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set stargin item

let currentItem=0;
let prevItem=currentItem;
// Initial item loading 

window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
});



// Show person based on item 
function showPerson(person){
    console.log(person);
    const item = reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

//Show next person

nextBtn.addEventListener('click',function(){
    
    
    if(currentItem==reviews.length-1){
        currentItem=0;
    } else {
        currentItem++;
    }
    showPerson(currentItem);
});
//Show prev person 
prevBtn.addEventListener('click',function(){
    
    if(currentItem==0){
        currentItem=reviews.length-1;
    } else {
        currentItem--;
    }

    showPerson(currentItem);
});

// Show rnd person 
randomBtn.addEventListener('click',function(){
    prevItem=currentItem;
    while(prevItem==currentItem)
    {
        currentItem=Math.floor(Math.random()*reviews.length);
    }
    showPerson(currentItem);
});

