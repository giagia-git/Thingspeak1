var container_slides = document.querySelectorAll(".slides-div");
var image_slides = document.querySelector(".image-slider");
var imgUser_slides = document.querySelectorAll(".img");
var btnUser_slides = document.querySelectorAll(".button");
var intro_slides = document.querySelectorAll(".intro");
var introContent_slides = document.querySelectorAll(".intro p");
var indexClickImage = -1;

function setValuable_imagebutton(index,width,height,saturate) {
    btnUser_slides[index].style.width = width;
    btnUser_slides[index].style.height = height;
    btnUser_slides[index].style.filter = saturate;
    imgUser_slides[index].style.width = width;
    imgUser_slides[index].style.height = height;
    imgUser_slides[index].style.filter = saturate;
}

function setValuable_intro(index,width,height,opacity,bottom) {
    intro_slides[index].style.width = width;
    intro_slides[index].style.height = height;
    intro_slides[index].style.bottom = bottom;
    introContent_slides[index].style.opacity = opacity;
}

window.addEventListener("load", (event) => {

    // When user click slides It change to position img
    for(let i = 0 ; i < container_slides.length ; ++i) {
        container_slides[i].addEventListener("click", (event) => {
            
            if(indexClickImage != -1) {
                setValuable_imagebutton(indexClickImage,"240px","370px","saturate(10%)");
                setValuable_intro(indexClickImage,"240px","60px",0,"-5px");
            }

            switch(i) {
                case 0 :
                    indexClickImage = 0;
                    setValuable_imagebutton(0,"300px","450px","saturate(100%)");
                    setValuable_intro(0,"300px","120px",1,"-45px");
                    break;
                case 1 :
                    indexClickImage = 1;
                    setValuable_imagebutton(1,"300px","450px","saturate(100%)");
                    setValuable_intro(1,"300px","120px",1,"-45px");
                    break;
            }
        });
    }
});

let bg_body = document.querySelector("body");
let bg_header = document.querySelector(".header");
let bg_item_inner = document.querySelector(".inner");
let bg_main = document.querySelector(".main");