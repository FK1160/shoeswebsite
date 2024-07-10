const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
    id: 1,
    title: "Air Force",
    price: 119,
    colors:[
         {
        code: "white",
        img: "shoes/whiteAirForce.png",
    },
    {
        code: "skyblue",
        img: "shoes/blueAirForce.png",
    },
    ],
    },

    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
            code: "green",
            img: "shoes/greenJordan.png",
            },
            {
                code: "skyblue",
                img: "shoes/blueJordan.png",
            },
        ],
    },

    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "black",
                img: "shoes/blackBlazer.png",
            },
            {
                code: "burlywood",
                img: "shoes/brownBlazer.png",
            },
        ],
    },

    {
        id: 4,
        title: "Adidas",
        price: 129,
        colors: [
            {
                code: "darkblue",
                img: "shoes/blueAdidas.png",
            },
            {
                code: "pink",
                img: "shoes/pinkAdidas.png",
            },
        ],
    },

    {
        id: 5,
        title : "Air Max",
        price: 99,
        colors : [
            {
                code: "blue",
                img: "shoes/blueNike.png",
            },
            {
                code: "coral",
                img: "shoes/orangeNike.png",
            },
        ],
    },
];

let chosenProduct = products[0];

const cuurentProductImg = document.querySelector(".productImg");
const cuurentProductTitle = document.querySelector(".productTitle");
const cuurentProductPrice = document.querySelector(".productPrice");
const cuurentProductColors = document.querySelectorAll(".color");
const cuurentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index)=> {
    item.addEventListener("click", () => {
        // change the current slide
        console.log("you clicked" + index);
        wrapper.style.transform =`translateX(${-100 * index}vw)`

        // change the chosen product
        chosenProduct = products[index];

        // change texts of currentProduct
        cuurentProductTitle.textContent = chosenProduct.title;
        cuurentProductPrice.textContent = "$" + chosenProduct.price;
        cuurentProductImg.src = chosenProduct.colors[0].img;

        //assigning new colors
        cuurentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

cuurentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=> {
        cuurentProductImg.src = chosenProduct.colors[index].img;
    });
});


cuurentProductSizes.forEach((size, index)=> {
    size.addEventListener("click", ()=> {
        cuurentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex";
});

close.addEventListener("click", ()=> {
    payment.style.display = "none";
});