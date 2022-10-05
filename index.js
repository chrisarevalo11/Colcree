const copyPhone = () => {
    const phoneSpan = document.getElementById("phone");
    navigator.clipboard.writeText(phoneSpan.textContent);

    phoneSpan.title = "copiado!";
}

const textAppear = () => {
    console.log("oe lok")
    const texto = document.getElementById("texto-insc");
    texto.classList.toggle("visible")
}