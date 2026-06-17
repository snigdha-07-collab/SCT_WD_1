const navbar = document.getElementById("navbar");
const progressBar = document.getElementById("progress-bar");
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + "%";

    if(scrollTop > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

document.getElementById("theme-btn")
.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const words = [
    "Web Development",
    "Creative Design",
    "Responsive Websites",
    "Modern Solutions"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

    currentWord = words[i];

    if(!isDeleting){
        document.getElementById("typing").textContent =
        currentWord.substring(0,j++);
    }
    else{
        document.getElementById("typing").textContent =
        currentWord.substring(0,j--);
    }

    if(j === currentWord.length + 1){
        isDeleting = true;
        setTimeout(type,1000);
        return;
    }

    if(j === 0){
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type,isDeleting ? 50 : 100);
}

type();