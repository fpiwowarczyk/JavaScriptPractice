//items

const graphics= [
    {
        id:1,
        title:"Lazy Dude",
        category:"Graphics",
        price:10.99,
        img:"./images/item-1.jpg",
        info:"Lazy dude on sofa with beer"
    },
    {
        id:2,
        title:"Phone covers",
        category:"Other",
        price:20.99,
        img:"./images/item-2.jpg",
        info:"Few cool phone covers"
    },
    {
        id:3,
        title:"Danger Line ",
        category:"Graphics",
        price:15.99,
        img:"./images/item-3.jpg",
        info:"Lanes can be dangerou"
    },
    {
        id:4,
        title:"Bad duck",
        category:"Sketches",
        price:20.50,
        img:"./images/item-4.jpg",
        info:"These duck can kill eagle"
    },
    {
        id:5,
        title:"Im in Dot",
        category:"Sketches",
        price:1.00,
        img:"./images/item-5.jpg",
        info:"If you try rly hard u can squezze your self into dot "
    },
    {
        id:6,
        title:"I'm fcked up",
        category:"Sketches",
        price:100.00,
        img:"./images/item-6.jpg",
        info:"I don't care and walk away. Thats why ppl say im fcked up"
    },
    {
        id:7,
        title:"Bag of W.S.T.Y.D",
        category:"Sketches",
        price:3.00,
        img:"./images/item-7.jpg",
        info:"Why stay to your doom "
    },
    {
        id:8,
        title:"Strange mountain",
        category:"Graphics",
        price:10.00,
        img:"./images/item-8.jpg",
        info:"Strainge mountain with red caves and tree on top"
    },
    {
        id:9,
        title:"Plane",
        category:"Graphics",
        price:10000.00,
        img:"./images/item-9.jpg",
        info:"Print it and feel like pilot instead of feeling hopeless. "
    },
    {
        id:10,
        title:"Snake on arm",
        category:"Sketches",
        price:9.99,
        img:"./images/item-10.jpg",
        info:"I drew snake on my arm"
    }
];

const sectionCenter= document.querySelector('.section-center');

const containter=document.querySelector('.btn-container');



//Loading items
window.addEventListener('DOMContentLoaded',function(){
    displayGraphicsItems(graphics)

    displayFilterBtns(graphics);

});
//Filtring items



// Adding them to html
function displayGraphicsItems(GraphicsItems){
    let displayGraphics = GraphicsItems.map(function(item){

        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}"/>
        <div class="item-info">
            <header>
                <h4>${item.title}
                </h4>
                <h4 class="price">${item.price} $ </h4>
            </header>
            <p class="item-text">${item.info}</p>
        </div>
    </article>`;
    });
    displayGraphics=displayGraphics.join("");
    //console.log(displayGraphics);
    sectionCenter.innerHTML=displayGraphics;
}

function displayFilterBtns(GraphicsItems){
    const categories = graphics.reduce(function(values,item){

        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },['All']);

    const categoryBtns=categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join("");
    containter.innerHTML=categoryBtns;
    const fileterBtns=document.querySelectorAll('.filter-btn');

    fileterBtns.forEach(function(btn){
        btn.addEventListener('click',function(e){
            const category=e.currentTarget.dataset.id
    
            const graphicsCategory = graphics.filter(function(graphicsItem){
                if(graphicsItem.category===category){
                    return graphicsItem;
                }
            });
            if(category==='All'){
                displayGraphicsItems(graphics);
            }else {
                displayGraphicsItems(graphicsCategory);
            }
        });
    });
}