function focusNome() {
    
    document.querySelector('.nomeInp').focus();

}

function valTudo() {

    let nome = formcadastro.nome.value;
    let nascimento = formcadastro.nascimento.value;
    let bairro = formcadastro.bairro.value;
    let anoAtual = new Date().getFullYear();

    if(nome == "") {

        alert("Campo 'Nome' é obrigatório!");
        formcadastro.nome.focus();
        return false;

    } else if(nascimento == "") {

        alert("Campo 'Ano de Nascimento' é obrigatório!");
        formcadastro.nascimento.focus();
        return false;

    } else if(nascimento.length > 4) {

        alert("Preencha o campo 'Ano de Nascimento' corretamente!");
        formcadastro.nascimento.focus();
        return false;

    } else if(nascimento < anoAtual - 110) {

        alert("Preencha o campo 'Ano de Nascimento' corretamente!");
        formcadastro.nascimento.focus();
        return false;

    } else if(bairro == "") {

        alert("Campo 'Bairro' é obrigatório!");
        formcadastro.bairro.focus();
        return false;

    } else {

        alert(`Sua idade é, aproximadamente: ${anoAtual - nascimento} anos.`);

    }
}

function valNome() {

    let tecla = event.keyCode;

    if(tecla >= 48 && tecla <= 57) {

        alert("O campo 'Nome' não pode conter números!");

        return false;

    } else {

        return true;

    } 

}

function valBairro() {

    let tecla = event.keyCode;

    if(tecla >= 48 && tecla <= 57) {

        alert("O campo 'Bairro' não pode conter números!");

        return false;

    } else {

       return true;

    }

}