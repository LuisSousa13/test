
    const nome = document.getElementById('nome').value.trim();
    const genero = document.getElementById('genero').value;
    const idade = document.getElementById('idade').value;
    const estadoCivil = document.getElementById('estadoCivil').value;
    const hobbies = document.getElementById('hobbies').value.trim();
    const escolaridade = document.getElementById('escolaridade').value;
    document.getElementById('Formulario').addEventListener('submit', function(event) {
        event.preventDefault()

    if (!nome) {
        alert("Campo nome não informado.");
        return;
    }

    if (!genero) {
        
    }

    if (!idade || idade < 1) {
        alert("Campo idade não informado.");
        return;
    }

    if (!estadoCivil) {
        
    }

    if (!hobbies) {
        
    }

    if (!escolaridade) {
        alert("Campo Escolaridade não informado.");
        return;
    }

 
    alert("Formulário enviado com sucesso!");

