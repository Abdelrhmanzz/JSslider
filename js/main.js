




var lightBoxContainer= document.getElementById("lightBoxContainer");
var lightBoxItem= document.getElementById("lightBoxItem");
var imgs= Array.from(document.getElementsByClassName("img-fluid"));
var closeIcon= document.getElementById("close");
var nextIcon= document.getElementById("next");
var prevIcon= document.getElementById("prev");
var currentSlideIndex;



for(var i=0; i<imgs.length; i++)
{
    imgs[i].addEventListener("click",openLightBox)

}

function openLightBox(e)
{
    lightBoxContainer.style.display="flex";
    var imgSrc= e.target.src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;

    currentSlideIndex = imgs.indexOf(e.target);
   
}

nextIcon.addEventListener("click",getNextSlide)

function getNextSlide()
{
    currentSlideIndex++;
    if(currentSlideIndex==imgs.length)
    {
        currentSlideIndex=0;
    }

    var imgSrc = imgs[currentSlideIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;

}

prevIcon.addEventListener("click",getPrevSlide)

function getPrevSlide()
{
    currentSlideIndex--;
    if(currentSlideIndex<0)
    {
        currentSlideIndex=imgs.length-1;
    }

    var imgSrc = imgs[currentSlideIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;

}

closeIcon.addEventListener("click",closeLightBox)

function closeLightBox()
{ 
    lightBoxContainer.style.display="none";
}

document.addEventListener("keydown",function(e)
{
    

    if (e.keyCode ==39)
    {
        getNextSlide();
    }
 

    else if(e.keyCode ==37)
    {
       getPrevSlide();
    }
    else if(e.keyCode ==27)
    {
       closeLightBox();
    }



})

lightBoxContainer.addEventListener("click",function(e)
{
    if(e.target!=lightBoxItem && e.target!=nextIcon && e.target!=prevIcon)
    {
        closeLightBox();
    }
})