let cinema = 'Cine House';
    const catalogo = require("./database/catalogo.json");

//Adicionar Filme
let adicionarFilme = lista => lista.push(({
    codigo: 3,
    titulo: 'Top Gun: Maverick',
    duracao: 2.11,
    atores: 'Tom Cruise, Val Kilmer, Miles Teller, Jennifer Connelly, Glen Powell',
    anoDeLancamento: 2022,
    emCartaz: true,
})) 

adicionarFilme(catalogo )
//console.log(catalogo )

//Buscar Filme
function buscarFilme(catalogo, codigo){
    for (let i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo == codigo){
            console.log(catalogo[i])
        }
    }
}

buscarFilme(catalogo, 0)


//Alterar Status em Cartaz
function alterarStatusEmCartaz (codigo){
        for (let i = 0; i < catalogo.length; i++){
        if (catalogo[i].codigo == codigo){
            catalogo[i].emCartaz = !catalogo[i].emCartaz
        }
    }
}
alterarStatusEmCartaz(2)
console.log(catalogo)
