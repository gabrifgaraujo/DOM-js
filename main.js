const Itens = []
let contadorID = 1
function addElement(){
    let antigoNome
    let antigaRegiao
    const nomeItens = document.getElementById("nome")
    const regiaoItens = document.getElementById("regiao")
    const novaLinha = document.createElement("tr")
    let novaLinhaID = document.createElement("td")
    const novaColunaNome = document.createElement("td")
    const novaColunaRegiao = document.createElement("td")
    const valorNome = nomeItens.value
    const valorRegiao = regiaoItens.value

    novaColunaNome.textContent = valorNome
    novaLinha.className = "odd:bg-gray-900 even:bg-gray-800 border-gray-700"
    novaLinhaID.className = "px-6 py-4"
    novaColunaNome.className = "px-6 py-4"
    novaColunaRegiao.className = "px-6 py-4"
    novaColunaRegiao.textContent = valorRegiao

    novaLinhaID.textContent = contadorID
    contadorID++
    novaLinhaID.id = "novoIDadicionado"
    // if(novaLinhaID){
    //     novaLinhaID.id = "antigoIDadicionado"
    // }else if(!novaLinhaID){
    //     novaLinha.id = "ultimoIDadicionado"
    // }

    novaColunaNome.id = "nomeItemAdicionado"
    novaColunaRegiao.id = "regiaoItemAdicionado"
    novaLinha.id = "novaLinhaAdicionada"

    document.querySelector("table").appendChild(novaLinha)
    novaLinha.appendChild(novaLinhaID)
    novaLinha.appendChild(novaColunaNome)
    novaLinha.appendChild(novaColunaRegiao)

    Itens.push([contadorID-1,valorNome,valorRegiao])
    antigoNome = valorNome 
    antigaRegiao = valorRegiao
    console.log(Itens)
}

function removeLastItem(){
    console.log(Itens)
    const linhaAtual = novaLinhaAdicionada[novaLinhaAdicionada.length-1]
    linhaAtual.remove()
    Itens.pop()
    console.log(contadorID)
    contadorID-1
}

function clearList(){
    for(let i=0;i<Itens.length;i--){
        if(Itens.length < 1){
            break
        }else {
            const linhaAtual = document.getElementById("novaLinhaAdicionada")
            linhaAtual.remove()
            Itens.pop()
            contadorID = 1
        }
    }
    console.log(Itens) 
}

function update(){
    for(let i=0;i<Itens.length;i++){
        console.log(Itens)
        const linhaCriada = document.getElementById("novaLinhaAdicionada")
    }
}
