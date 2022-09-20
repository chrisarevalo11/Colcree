const copyPhone = () => {
    const phoneSpan = document.getElementById("phone");
    navigator.clipboard.writeText(phoneSpan.textContent);

    phoneSpan.title = "copiado!"
}