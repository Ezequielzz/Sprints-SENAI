const cep = document.querySelector('#cep');
const endereco = document.querySelector('#endereco');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const mensagem = document.querySelector('#mensagem');

cep.addEventListener('focusout', async () => {

    try {
        const apenasNumeros = /^[0-9]+$/;
        const cepValido = /^[0-9]{8}$/;

        if (!apenasNumeros.test(cep.value) || !cepValido.test(cep.value)) {
            throw { cep_error: 'CEP Invalido' };
        }

        const response = await fetch('viacep.com.br/ws/${cep.value}/json/')



    } catch (error) {

        if (error?.cep_error) {
            mensagem.textContent = error.cep_error;
            setTimeout(() => {
                mensagem.textContent = '';
            }, 5000);
        }
        console.log(error);
    }

    
})
