const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputWhatsapp = document.querySelector('#whatsapp');
const form = document.querySelector('.formulario-cadastro');
const result = document.querySelector('.resultado');

form.onsubmit = async (e) => {
    e.preventDefault();

    try {
        const newRegister = {
            name: inputName.value,
            email: inputEmail.value,
            whatsapp: inputWhatsapp.value
        }

        console.log(newRegister);

        let success = '✅ Cadastro efetuado com sucesso!';
        result.innerHTML = success;
        result.style.display = "block";
        
    } catch (error) {
        let erro = '🟥 Não foi possível efetuar o cadastro!';
        result.innerHTML = erro;
        result.style.display = "block";

        console.log(error)
    } finally {
        setTimeout(() => {
            result.style.display = "none";
        }, 3000)
    }
}