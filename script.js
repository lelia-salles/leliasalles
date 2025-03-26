document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded Successfully!");

    // Seleciona o menu (supondo que tenha um ID 'menu')
    const menu = document.getElementById("menu");

    if (menu) {
        // Cria a div do banner
        const banner = document.createElement("div");
        banner.id = "banner";
        banner.innerHTML = `<img src="lelia linkedin.png" alt="Banner Portfolio Lelia Salles" style="width:100%; height:auto;">`;

        // Insere o banner logo depois do menu
        menu.insertAdjacentElement("afterend", banner);
    } else {
        console.warn("Elemento com ID 'menu' não encontrado!");
    }
});

