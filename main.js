const Itens = []
let contadorID = 0
function addElement(){
    console.clear()
    let antigoNome
    let antigaRegiao
    const corpoTabela = document.querySelector("tbody")
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

    corpoTabela.appendChild(novaLinha)
    novaLinha.appendChild(novaLinhaID)
    novaLinha.appendChild(novaColunaNome)
    novaLinha.appendChild(novaColunaRegiao)

    Itens.push([contadorID-1,valorNome,valorRegiao])
    antigoNome = valorNome 
    antigaRegiao = valorRegiao
    console.log(Itens)
}

function removeLastItem(){
    console.clear()
    const linhaAtual = document.querySelector("tbody").lastChild
    linhaAtual.remove()
    Itens.pop()
    contadorID--
}

function clearList(){
    console.clear()
    for(let i=0;i<Itens.length;i--){
        if(Itens.length < 1){
            break
        }else {
            const linhaAtual = document.getElementById("novaLinhaAdicionada")
            linhaAtual.remove()
            Itens.pop()
            contadorID--
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
