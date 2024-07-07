document.querySelectorAll(".image-container img").forEach(image => {

    image.onclick=()=>{

        document.querySelector(".popud-image").style.display="block";
        document.querySelector(".popud-image img").src= image.getAttribute("src");


    }
});

document.querySelector(".popud-image span").onclick=()=>{

    document.querySelector(".popud-image").style.display="none";
}