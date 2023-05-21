const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body")

const imagembotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoescuroEstaAtivo = body.classList.contains("modo-escuro")
    
    if(modoescuroEstaAtivo) {
  
        body.classList.remove("modo-escuro");
        
        imagembotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")

    } else {

    body.classList.add("modo-escuro");

    imagembotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});