const Itens = []

function update(){
    const nomeItens = document.getElementById("nome")
    const regiaoItens = document.getElementById("regiao")
    const novaLinha = document.createElement("tr")
    const novaColunaNome = document.createElement("td")
    const novaColunaRegiao = document.createElement("td")
    const valorNome = nomeItens.value
    const valorRegiao = regiaoItens.value
    let antigoNome
    let antigaRegiao
    novaColunaNome.textContent = valorNome
    novaLinha.className = "odd:bg-gray-900 even:bg-gray-800 border-gray-700"
    novaColunaNome.className = "px-6 py-4"
    novaColunaRegiao.className = "px-6 py-4"
    novaColunaRegiao.textContent = valorRegiao
    novaColunaNome.id = "nomeItemAdicionado"
    novaColunaRegiao.id = "regiaoItemAdicionado"
    novaLinha.id = "novaLinhaAdicionada"
    document.querySelector("table").appendChild(novaLinha)
    novaLinha.appendChild(novaColunaNome)
    novaLinha.appendChild(novaColunaRegiao)

    Itens.push([valorNome,valorRegiao])
    antigoNome = valorNome
    antigaRegiao = valorRegiao
    console.log(Itens)

    for(let i=0;i<=Itens.length;i++){
        nomesLista.remove()
        regiaoLista.remove()
    }
    console.log("lista atualizada")

    
}

function addElement(){
    const nomeItens = document.getElementById("nome")
    const regiaoItens = document.getElementById("regiao")
    const novaLinha = document.createElement("tr")
    const novaColunaNome = document.createElement("td")
    const novaColunaRegiao = document.createElement("td")
    const valorNome = nomeItens.value
    const valorRegiao = regiaoItens.value
    let antigoNome
    let antigaRegiao
    novaColunaNome.textContent = valorNome
    novaLinha.className = "odd:bg-gray-900 even:bg-gray-800 border-gray-700"
    novaColunaNome.className = "px-6 py-4"
    novaColunaRegiao.className = "px-6 py-4"
    novaColunaRegiao.textContent = valorRegiao
    novaColunaNome.id = "nomeItemAdicionado"
    novaColunaRegiao.id = "regiaoItemAdicionado"
    novaLinha.id = "novaLinhaAdicionada"
    document.querySelector("table").appendChild(novaLinha)
    novaLinha.appendChild(novaColunaNome)
    novaLinha.appendChild(novaColunaRegiao)

    Itens.push([valorNome,valorRegiao])
    antigoNome = valorNome
    antigaRegiao = valorRegiao
    console.log(Itens)
}

function removeLastItem(){
    Itens.pop()
    console.log(Itens)
    const nomesLista = document.getElementById("nomeItemAdicionado")
    const regiaoLista = document.getElementById("regiaoItemAdicionado")
    nomesLista.remove()
    regiaoLista.remove()
}

function clearList(){
    for(let i=0;i<Itens.length;i--){
        if(Itens.length < 1){
            break
        }else {
            const antigaLinha = document.getElementById("novaLinhaAdicionada")
            antigaLinha.remove()
            Itens.pop()
        }
    }
    console.log(Itens) 
}

function searchElement(){
    for(let i=0;i<Itens[i];i++){
        console.log(Itens[i])
    }
}
