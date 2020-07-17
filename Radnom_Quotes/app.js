// Quote "Luck is what happens when preparation meets opportunity."

const quotes =[
    {
        id:1,
        author:"Seneca",
        text:"Luck is what happens when preparation meets opportunity."
    },
    {
        id:2,
        author:"Seneca",
        text:"Every new beginning comes from some other beginning's end.",
    },
    {
        id:3,
        author:"Seneca",
        text:"There are more things, Lucilius, that frighten us than injure us, and we suffer more in imagination than in reality."
    },
    {
        id:4,
        author:"Heraclitus",
        text:"Everything flows, and nothing abides, everything gives way, and nothing stays fixed."
    },
    {
        id:5,
        author:"Aristotle",
        text:"Quality is not an act, it is a habit."
    },
    {
        id:6,
        author:"Plutarch",
        text:"Know how to listen and you will profit even from those who talk badly"
    }
]

const selectBtn=document.querySelector(".modal-btn");
const closeBtn=document.querySelector(".close-btn");
const modalOverlay=document.querySelector(".modal-overlay");
const hero=document.querySelector(".hero");
const quote=document.getElementById("Quote");
const author=document.getElementById("Author");


selectBtn.addEventListener('click',function(){
    modalOverlay.classList.add('open-modal');
    let choice =Math.floor(Math.random()*quotes.length);
    showQuote(choice);
    
});

closeBtn.addEventListener('click',function(){
    modalOverlay.classList.remove('open-modal');
});

function showQuote(choice){
    item = quotes[choice];
    quote.textContent=item.text;
    author.textContent=item.author;
    document.body.style.backgroundColor="seneca.jpg";
}