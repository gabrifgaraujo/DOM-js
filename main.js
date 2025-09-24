const Itens = []
let contadorID = 0

function addElement(){
    console.clear()
    let antigoNome
    let antigoPreco
    let antigaCategoria
    let antigoPreco
    let antigaCategoria
    let antigaRegiao
    let antigoLote
    let antigaValidade
    let antigoLote
    let antigaValidade
    const corpoTabela = document.querySelector("tbody")
    const nomeItens = document.getElementById("nome")
    const precoItens = document.getElementById("preco")
    const categoriaItens = document.getElementById("categoria")
    const precoItens = document.getElementById("preco")
    const categoriaItens = document.getElementById("categoria")
    const regiaoItens = document.getElementById("regiao")
    const loteItens = document.getElementById("lote")
    const validadeItens = document.getElementById("validade")
    const loteItens = document.getElementById("lote")
    const validadeItens = document.getElementById("validade")
    const novaLinha = document.createElement("tr")
    let novaLinhaID = document.createElement("td")
    const novaColunaNome = document.createElement("td")
    const novaColunaPreco = document.createElement("td")
    const novaColunaCategoria = document.createElement("td")
    const novaColunaPreco = document.createElement("td")
    const novaColunaCategoria = document.createElement("td")
    const novaColunaRegiao = document.createElement("td")
    const novaColunaLote = document.createElement("td")
    const novaColunaValidade = document.createElement("td")
    const novaColunaEditar = document.createElement("td")
    const novaColunaLote = document.createElement("td")
    const novaColunaValidade = document.createElement("td")
    const novaColunaEditar = document.createElement("td")
    const valorNome = nomeItens.value
    const valorPreco = precoItens.value
    const valorCategoria = categoriaItens.value
    const valorPreco = precoItens.value
    const valorCategoria = categoriaItens.value
    const valorRegiao = regiaoItens.value
    const valorLote = loteItens.value
    const valorValidade = validadeItens.value
    const valorLote = loteItens.value
    const valorValidade = validadeItens.value

    novaColunaNome.textContent = valorNome
    novaColunaPreco.textContent = valorPreco
    novaColunaCategoria.textContent = valorCategoria
    novaColunaRegiao.textContent = valorRegiao
    novaColunaLote.textContent = valorLote
    novaColunaValidade.textContent = valorValidade
    novaColunaEditar.innerHTML = `
    <div class="gap-x-2 flex">
        <button type="button" onclick="editLine()" class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible-offset-2 focus-visible:outline-indigo-500 hover:bg-indigo-900">Editar Linha</button>

        <button type="button" onclick="update()" class="rounded-md bg-indigo-500 px-2 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible-offset-2 focus-visible:outline-indigo-500 hover:bg-indigo-900">Atualizar</button>
    </div>
    `
    novaColunaPreco.textContent = valorPreco
    novaColunaCategoria.textContent = valorCategoria
    novaColunaRegiao.textContent = valorRegiao
    novaColunaLote.textContent = valorLote
    novaColunaValidade.textContent = valorValidade
    novaColunaEditar.innerHTML = `
    <div class="gap-x-2 flex">
        <button type="button" onclick="editLine()" class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible-offset-2 focus-visible:outline-indigo-500 hover:bg-indigo-900">Editar Linha</button>

        <button type="button" onclick="update()" class="rounded-md bg-indigo-500 px-2 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible-offset-2 focus-visible:outline-indigo-500 hover:bg-indigo-900">Atualizar</button>
    </div>
    `
    novaLinha.className = "odd:bg-gray-900 even:bg-gray-800 border-gray-700"
    novaLinhaID.className = "px-6 py-4"
    novaColunaNome.className = "px-6 py-4"
    novaColunaPreco.className = "px-6 py-4"
    novaColunaCategoria.className = "px-6 py-4"
    novaColunaPreco.className = "px-6 py-4"
    novaColunaCategoria.className = "px-6 py-4"
    novaColunaRegiao.className = "px-6 py-4"
    novaColunaLote.className = "px-6 py-4"
    novaColunaValidade.className = "px-6 py-4"
    novaColunaEditar.className = "px-6 py-4"
    novaColunaLote.className = "px-6 py-4"
    novaColunaValidade.className = "px-6 py-4"
    novaColunaEditar.className = "px-6 py-4"

    novaLinhaID.textContent = contadorID
    contadorID++
    novaLinhaID.id = "novoIDadicionado"

    novaColunaNome.id = "nomeItemAdicionado"
    novaColunaPreco.id = "precoItemAdicionado"
    novaColunaCategoria.id = "categoriaItemAdicionado"
    novaColunaPreco.id = "precoItemAdicionado"
    novaColunaCategoria.id = "categoriaItemAdicionado"
    novaColunaRegiao.id = "regiaoItemAdicionado"
    novaColunaLote.id = "loteItemAdicionado"
    novaColunaValidade.id = "validadeItemAdicionado"
    novaColunaEditar.id = "editarColunaAdicionada"
    novaColunaLote.id = "loteItemAdicionado"
    novaColunaValidade.id = "validadeItemAdicionado"
    novaColunaEditar.id = "editarColunaAdicionada"
    novaLinha.id = "novaLinhaAdicionada"

    corpoTabela.appendChild(novaLinha)
    novaLinha.appendChild(novaLinhaID)
    novaLinha.appendChild(novaColunaNome)
    novaLinha.appendChild(novaColunaPreco)
    novaLinha.appendChild(novaColunaCategoria)
    novaLinha.appendChild(novaColunaPreco)
    novaLinha.appendChild(novaColunaCategoria)
    novaLinha.appendChild(novaColunaRegiao)
    novaLinha.appendChild(novaColunaLote)
    novaLinha.appendChild(novaColunaValidade)
    novaLinha.appendChild(novaColunaEditar)
    novaLinha.appendChild(novaColunaLote)
    novaLinha.appendChild(novaColunaValidade)
    novaLinha.appendChild(novaColunaEditar)

    Itens.push([contadorID-1,valorNome,valorPreco,valorCategoria,valorRegiao,valorLote,valorValidade])
    Itens.push([contadorID-1,valorNome,valorPreco,valorCategoria,valorRegiao,valorLote,valorValidade])
    antigoNome = valorNome 
    antigoPreco = valorPreco
    antigaCategoria = valorCategoria
    antigoPreco = valorPreco
    antigaCategoria = valorCategoria
    antigaRegiao = valorRegiao
    antigoLote = valorLote
    antigaValidade = valorValidade
    antigoLote = valorLote
    antigaValidade = valorValidade
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

function editLine(){
    const novaColunaNome = document.getElementById("nomeItemAdicionado")
    const novaColunaPreco = document.getElementById("precoItemAdicionado")
    const novaColunaCategoria = document.getElementById("categoriaItemAdicionado")
    const novaColunaRegiao = document.getElementById("regiaoItemAdicionado")
    const novaColunaLote = document.getElementById("loteItemAdicionado")
    const novaColunaValidade = document.getElementById("validadeItemAdicionado")
    const novaLinha = document.getElementById("novaLinhaAdicionada")

    const nomeItens = document.getElementById("nome")
    const precoItens = document.getElementById("preco")
    const categoriaItens = document.getElementById("categoria")
    const regiaoItens = document.getElementById("regiao")
    const loteItens = document.getElementById("lote")
    const validadeItens = document.getElementById("validade")

    const valorNome = nomeItens.value
    const valorPreco = precoItens.value
    const valorCategoria = categoriaItens.value
    const valorRegiao = regiaoItens.value
    const valorLote = loteItens.value
    const valorValidade = validadeItens.value
    const linhaAtual = document.querySelector("tbody").lastChild
    
    novaColunaNome.innerHTML = `
        <div class="mt-2 w-50">
          <input type="text" id="nomeEditado" placeholder="${valorNome}" class="block rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 w-50">
        </div>
    `
    novaColunaPreco.innerHTML = `
        <div class="mt-2 w-50">
          <input type="number" id="precoEditado" placeholder="${valorPreco}" class="block rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 w-50">
        </div>        
    `
    novaColunaCategoria.innerHTML = `
        <div class="mt-2 w-50">
          <input type="text" id="categoriaEditada" placeholder="${valorCategoria}" class="block rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 w-50">
        </div>
    `
    novaColunaRegiao.innerHTML = `
        <div class="mt-2 w-50">
          <input type="text" id="regiaoEditada" placeholder="${valorRegiao}" class="block rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 w-50">
        </div>
    `
    novaColunaLote.innerHTML = `
        <div class="mt-2 w-50">
          <input type="text" id="loteEditado" placeholder="${valorLote}" class="block rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 w-50">
        </div>
    `
    novaColunaValidade.innerHTML = `
        <div class="mt-2 w-50">
          <input type="datetime-local" id="validadeEditada" placeholder="${valorValidade}" class="block rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 w-50">
        </div>
    `
}

function update(){
    const novaColunaNome = document.getElementById("nomeItemAdicionado")
    const novaColunaPreco = document.getElementById("precoItemAdicionado")
    const novaColunaCategoria = document.getElementById("categoriaItemAdicionado")
    const novaColunaRegiao = document.getElementById("regiaoItemAdicionado")
    const novaColunaLote = document.getElementById("loteItemAdicionado")
    const novaColunaValidade = document.getElementById("validadeItemAdicionado")

    const novoNomeEditado = document.getElementById("nomeEditado")
    const novoPrecoEditado = document.getElementById("precoEditado")
    const novaCategoriaEditada = document.getElementById("categoriaEditada")
    const novaRegiaoEditada = document.getElementById("regiaoEditada")
    const novoLoteEditado = document.getElementById("loteEditado")
    const novaValidadeEditada = document.getElementById("validadeEditada")

    const nomeItens = document.getElementById("nome")
    const precoItens = document.getElementById("preco")
    const categoriaItens = document.getElementById("categoria")
    const regiaoItens = document.getElementById("regiao")
    const loteItens = document.getElementById("lote")
    const validadeItens = document.getElementById("validade")

    const valorNomeEditado = novoNomeEditado.value
    const valorPrecoEditado = novoPrecoEditado.value
    const valorCategoriaEditada = novaCategoriaEditada.value
    const valorRegiaoEditada = novaRegiaoEditada.value
    const valorLoteEditado = novoLoteEditado.value
    const valorValidadeEditada = novaValidadeEditada.value

    let valorNome = nomeItens.value
    let valorPreco = precoItens.value
    let valorCategoria = categoriaItens.value
    let valorRegiao = regiaoItens.value
    let valorLote = loteItens.value
    let valorValidade = validadeItens.value

    valorNome = valorNomeEditado
    valorPreco = valorPrecoEditado
    valorCategoria = valorCategoriaEditada
    valorRegiao = valorRegiaoEditada
    valorLote = valorLoteEditado
    valorValidade = valorValidadeEditada

    novaColunaNome.innerHTML = valorNome
    novaColunaPreco.innerHTML = valorPreco
    novaColunaCategoria.innerHTML = valorCategoria
    novaColunaRegiao.innerHTML = valorRegiao
    novaColunaLote.innerHTML = valorLote
    novaColunaValidade.innerHTML = valorValidade
}
