const perguntas = [
{
    pergunta: "Você gosta de bacon?",
    opcoes: ["Sim", "Não"]
},
{
    pergunta: "Você gosta de ovo no hambúrguer?",
    opcoes: ["Sim", "Não"]
},
{
    pergunta: "Você prefere um hambúrguer simples ou bem recheado?",
    opcoes: ["Simples", "Bem recheado"]
},
{
    pergunta: "Você gosta de frango?",
    opcoes: ["Sim", "Não"]
},
{
    pergunta: "Você gosta de ingredientes diferentes como milho e cenoura?",
    opcoes: ["Sim", "Não"]
},
{
    pergunta: "Qual é o seu nível de fome?",
    opcoes: ["Pouca", "Média", "Muita"]
}
];

let perguntaAtual = 0;
let respostasUsuario = [];

const perguntaElemento = document.getElementById("pergunta");
const respostasElemento = document.getElementById("respostas");
const resultadoElemento = document.getElementById("resultado");
const botaoComecar = document.getElementById("comecar");
const quizContainer = document.getElementById("quiz-container");

botaoComecar.addEventListener("click", iniciarQuiz);

function iniciarQuiz(){

    botaoComecar.style.display = "none";

    quizContainer.style.display = "block";

    mostrarPergunta();

}

function mostrarPergunta(){

    const pergunta = perguntas[perguntaAtual];

    perguntaElemento.innerHTML = pergunta.pergunta;

    respostasElemento.innerHTML = "";

    pergunta.opcoes.forEach(opcao => {

        const botao = document.createElement("button");

        botao.classList.add("btn");
        botao.classList.add("btn-success");
        botao.classList.add("resposta");

        botao.innerText = opcao;

        botao.onclick = () => selecionarResposta(opcao);

        respostasElemento.appendChild(botao);

    });

}

function selecionarResposta(opcao){

    respostasUsuario[perguntaAtual] = opcao;

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){

        mostrarPergunta();

    }

    else{

        mostrarResultado();

    }

}

function mostrarResultado(){

    perguntaElemento.style.display = "none";
    respostasElemento.style.display = "none";

    let bacon = respostasUsuario[0];
    let ovo = respostasUsuario[1];
    let recheado = respostasUsuario[2];
    let frango = respostasUsuario[3];
    let ingredientes = respostasUsuario[4];
    let fome = respostasUsuario[5];

    let hamburguer = "";
    let descricao = "";

    if(frango === "Sim" && bacon === "Sim"){

        hamburguer = "Marylu";
        descricao = "Frango desfiado, ovo, bacon, muçarela, alface e tomate.";

    }

    else if(frango === "Sim"){

        hamburguer = "X-Frango";
        descricao = "Frango desfiado, parmesão, muçarela, alface e tomate.";

    }

    else if(ingredientes === "Sim"){

        hamburguer = "Bicho Guloso";
        descricao = "100g de carne, frango desfiado, presunto, ovo, bacon, muçarela, tomate, cenoura, batata, milho e salada maionese.";

    }

    else if(fome === "Muita" && bacon === "Sim"){

        hamburguer = "Guloso";
        descricao = "2 carnes de 100g, muçarela, ovo, presunto, bacon, salada maionese, alface e tomate.";

    }

    else if(bacon === "Sim" && ovo === "Sim"){

        hamburguer = "X-Egg Bacon";
        descricao = "100g de carne, ovo, bacon, muçarela, alface, tomate e batata palha.";

    }

    else if(bacon === "Sim"){

        hamburguer = "X-Bacon";
        descricao = "100g de carne, muçarela, bacon, alface, tomate e batata palha.";

    }

    else if(ovo === "Sim"){

        hamburguer = "Americano";
        descricao = "100g de carne, muçarela, presunto, ovo, alface, tomate e batata palha.";

    }

    else if(recheado === "Simples"){

        hamburguer = "Hambúrguer";
        descricao = "100g de carne, alface, tomate e batata palha.";

    }

    else{

        hamburguer = "X-Burguer";
        descricao = "100g de carne, muçarela, alface, tomate e batata palha.";

    }

    resultadoElemento.innerHTML = `
        <h3>🍔 Seu hambúrguer ideal é:</h3>
        <h2>${hamburguer}</h2>
        <p>${descricao}</p>
    `;
}

const botaoTema = document.getElementById("tema");

if(localStorage.getItem("tema") === "escuro"){

    document.body.classList.add("dark-mode");
    botaoTema.innerHTML = "☀️";

}

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        botaoTema.innerHTML = "☀️";

        localStorage.setItem("tema", "escuro");

    } else {

        botaoTema.innerHTML = "🌙";

        localStorage.setItem("tema", "claro");

    }

});