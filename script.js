
function formataMoeda (conversao) {
    return conversao.toLocaleString('PT-BR', {
        style:'currency',
        currency: 'BRL'
    })
};

function clique() { 
let conversor = document.getElementById('conversor').value;
let resultado = document.getElementById('resultado');
let cotacao = 4.96;
let conversao = cotacao*conversor;

resultado.innerHTML = `O valor convertido para real é de ` + formataMoeda(conversao);
};










// let formataValor = valor => {
//    return valor.toLocaleString('PT-BT', {
//         style: 'currency',
//         currency: 'BRL'
//     })
// };



// console.log (formataValor(valor))


