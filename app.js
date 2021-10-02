setTimeout( () =>document.querySelector('.name').style.border = "0", 3800 )

const mySVG = document.querySelector('svg');
window.innerWidth <= "768"? mySVG.setAttribute("viewBox", "600 0 10 420"): null;
window.addEventListener("resize",()=>{
    window.innerWidth <= "768"? mySVG.setAttribute("viewBox", "600 0 10 420") : mySVG.setAttribute("viewBox", "0 0 1440 320") ;
});
