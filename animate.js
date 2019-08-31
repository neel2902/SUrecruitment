setTimeout(function(){
    var ele=document.getElementById("red");
    ele.remove();
},4000);

var heading=document.querySelector("h3");

var betches=document.getElementById("betches");
var allpro=document.getElementById("allpro");
var cornerstone=document.getElementById("cornerstone");
var taylor=document.getElementById("taylor");
var modernmd=document.getElementById("modernmd");

function removal(){
    betches.classList.remove("textcolor");
    allpro.classList.remove("textcolor");
    cornerstone.classList.remove("textcolor");
    taylor.classList.remove("textcolor");
    modernmd.classList.remove("textcolor");
}

function normal(){
    betches.classList.add("textcolor");
    allpro.classList.add("textcolor");
    cornerstone.classList.add("textcolor");
    taylor.classList.add("textcolor");
    modernmd.classList.add("textcolor");
}


    betches.addEventListener("mouseover", function(){
    document.querySelector(".main").classList.add("first");
    removal();
    heading.classList.remove("h3def");
    heading.classList.add("violet");
    allpro.classList.add("muted");
    cornerstone.classList.add("muted");
    taylor.classList.add("muted");
    modernmd.classList.add("muted");

    betches.classList.add("bright");

});

betches.addEventListener("mouseout", function(){
    document.querySelector(".main").classList.remove("first");
    allpro.classList.remove("muted");
    cornerstone.classList.remove("muted");
    taylor.classList.remove("muted");
    modernmd.classList.remove("muted");
    heading.classList.remove("violet");
    heading.classList.add("h3def");
    betches.classList.remove("bright");
    normal();
    
});





allpro.addEventListener("mouseover", function(){
    document.querySelector(".main").classList.add("second");
    removal();

    allpro.classList.add("bright");
    heading.classList.remove("h3def");
    heading.classList.add("violet");
    betches.classList.add("muted");
    cornerstone.classList.add("muted");
    taylor.classList.add("muted");
    modernmd.classList.add("muted");
});

allpro.addEventListener("mouseout", function(){
    document.querySelector(".main").classList.remove("second");
    allpro.classList.remove("bright"); 
    betches.classList.remove("muted");
    cornerstone.classList.remove("muted");
    taylor.classList.remove("muted");
    modernmd.classList.remove("muted");
    heading.classList.remove("violet");
    heading.classList.add("h3def");
    normal();
});






cornerstone.addEventListener("mouseover", function(){
    document.querySelector(".main").classList.add("third");
    removal();
    heading.classList.remove("h3def");
    heading.classList.add("violet");
    betches.classList.add("muted");
    allpro.classList.add("muted");
    taylor.classList.add("muted");
    modernmd.classList.add("muted");
    cornerstone.classList.add("bright")
});

cornerstone.addEventListener("mouseout", function(){
    document.querySelector(".main").classList.remove("third");
    betches.classList.remove("muted");
    allpro.classList.remove("muted");
    taylor.classList.remove("muted");
    modernmd.classList.remove("muted");
    cornerstone.classList.remove("bright");
    heading.classList.remove("violet");
    heading.classList.add("h3def");
    normal();
});






taylor.addEventListener("mouseover", function(){
    document.querySelector(".main").classList.add("fourth");
    removal();
    heading.classList.remove("h3def");
    heading.classList.add("violet");
    betches.classList.add("muted");
    allpro.classList.add("muted");
    cornerstone.classList.add("muted");
    modernmd.classList.add("muted");

    taylor.classList.add("bright");
});

taylor.addEventListener("mouseout", function(){
    document.querySelector(".main").classList.remove("fourth");
    betches.classList.remove("muted");
    allpro.classList.remove("muted");
    cornerstone.classList.remove("muted");
    modernmd.classList.remove("muted");
    heading.classList.remove("violet");
    heading.classList.add("h3def");
    taylor.classList.remove("bright");
    normal();
});






modernmd.addEventListener("mouseover", function(){
    document.querySelector(".main").classList.add("fifth");
    removal();
    heading.classList.remove("h3def");
    heading.classList.add("violet");
    betches.classList.add("muted");
    allpro.classList.add("muted");
    cornerstone.classList.add("muted");
    taylor.classList.add("muted");

    modernmd.classList.add("bright");
});

modernmd.addEventListener("mouseout", function(){
    document.querySelector(".main").classList.remove("fifth");

    betches.classList.remove("muted");
    allpro.classList.remove("muted");
    cornerstone.classList.remove("muted");
    taylor.classList.remove("muted");
    modernmd.classList.remove("bright");
    heading.classList.remove("violet");
    heading.classList.add("h3def");
    normal();
});