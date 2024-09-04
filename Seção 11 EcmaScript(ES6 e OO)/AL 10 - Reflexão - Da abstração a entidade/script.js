// Modelo Procedural

// let cadeiras = Array()

// cadeiras[0] = Array()
// cadeiras[0]['qtde_pernas'] = 4
// cadeiras[0]['giratoria'] = false
// cadeiras[0]['cor'] = 'Azul'

// cadeiras[1] = Array()
// cadeiras[1]['qtde_pernas'] = 1
// cadeiras[1]['giratoria'] = true
// cadeiras[1]['cor'] = 'Vermelho'

// function girar_cadeira(indice){
//     if(cadeiras[indice]['giratoria'] === true){
//         console.log('Girou')
// } else {
//     console.log('Cadeira não é Giratória')}
// }

// function adicionar_cadeira(qtde_pernas, giratoria, cor){
//     let cadeira = Array()

//     cadeira['qtde_pernas'] = qtde_pernas
//     cadeira['giratoria'] = giratoria
//     cadeira['cor'] = cor 

//     cadeiras.push(cadeira)
// }

// dicionar_cadeira(3, false, 'verde')
// console.log(cadeiras)

// Paradigma de OO
let cadeiras = Array()

class Cadeiras {
  constructor(qtdePernas, giratoria, cor) {s
    this.qtdePernas = qtdePernas
    this.giratoria = giratoria
    this.cor = cor
  }
}

function criarCadeira(qtdePernas, giratoria, cor) {
  return {
    qtdePernas,
    giratoria,
    cor
  };
}

function adicionarCadeira(qtdePernas, giratoria, cor, arrayCadeiras) {
  const novaCadeira = criarCadeira(qtdePernas, giratoria, cor);
  arrayCadeiras.push(novaCadeira);
}

function girarCadeira(indice) {
  if (indice >= 0 && indice < cadeiras.length) {
    if (cadeiras[indice].giratoria) {
      console.log('Girou');
    } else {
      console.log('Cadeira não é giratória');
    }
  } else {
    console.error('Índice de cadeira inválido.');
  }
}

// Criando cadeiras
adicionarCadeira(4, false, 'Azul', cadeiras);
adicionarCadeira(1, true, 'Vermelho', cadeiras);

// Adicionando uma nova cadeira
adicionarCadeira(3, false, 'verde', cadeiras);

// Girando a segunda cadeira
girarCadeira(1);

console.log(cadeiras);