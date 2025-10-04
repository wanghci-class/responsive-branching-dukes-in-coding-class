document.getElementById("os-default").addEventListener("click", function(event) {
    event.preventDefault();
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
})

document.getElementById("dark-mode").addEventListener("click", function(event) {
    event.preventDefault();
    document.body.classList.add("dark");
    document.body.classList.remove("light");
})

document.getElementById("light-mode").addEventListener("click", function(event) {
    event.preventDefault();
    document.body.classList.add("light");
    document.body.classList.remove("dark");
})