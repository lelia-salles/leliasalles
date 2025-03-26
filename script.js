document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded Successfully!");

    const menu = document.getElementById("menu");

    if (menu) {
        const banner = document.createElement("div");
        banner.className = "banner"; 
        banner.innerHTML = `<img src="lelia linkedin.png" alt="Banner Portfolio Lelia Salles" style="width:100%; height:auto;">`;

        menu.insertAdjacentElement("beforebegin", banner);
    } else {
        console.warn("Elemento com ID 'menu' não encontrado!");
    }
});


