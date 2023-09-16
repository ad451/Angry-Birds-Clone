 document.getElementById("restart").addEventListener("click", (event) => {
    
    event.target.style.display = "none";

    setTimeout(() => {
        window.location.reload();
    }, 150)

})