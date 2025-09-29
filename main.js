let Itens = JSON.parse(localStorage.getItem('produtosDoSite'));
if (!Itens) {
    Itens = [];
}

let contadorID = localStorage.getItem('ultimoIdDoSite');
if (!contadorID) {
    contadorID = 0;
} else {
    contadorID = parseInt(contadorID);
}

function addElement() {

    let nomeValor = document.getElementById("nome").value;
    let precoValor = document.getElementById("preco").value;
    let categoriaValor = document.getElementById("categoria").value;
    let regiaoValor = document.getElementById("regiao").value;
    let loteValor = document.getElementById("lote").value;
    let validadeValor = document.getElementById("validade").value;

    if (nomeValor == "" || precoValor == "") {
        alert("O nome e o preço são obrigatórios!");
        return;
    }
    Itens.push([contadorID, nomeValor, precoValor, categoriaValor, regiaoValor, loteValor, validadeValor]);
    contadorID = contadorID + 1;

    localStorage.setItem('produtosDoSite', JSON.stringify(Itens));
    localStorage.setItem('ultimoIdDoSite', contadorID);

    alert('Produto cadastrado com sucesso!');

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("regiao").value = "";
    document.getElementById("lote").value = "";
    document.getElementById("validade").value = "";
}

function carregarTabela() {
    let corpoTabela = document.querySelector("tbody");

    if (!corpoTabela) {
        return;
    }

    corpoTabela.innerHTML = ""; 

    for (let i = 0; i < Itens.length; i++) {
        let item = Itens[i];
        let id = item[0];
        let nome = item[1];
        let preco = item[2];
        let categoria = item[3];
        let regiao = item[4];
        let lote = item[5];
        let validade = item[6];

        let linha = document.createElement("tr");
        linha.className = "odd:bg-gray-900 even:bg-gray-800 border-gray-700";
        linha.id = "linha-" + id;

        linha.innerHTML = '<td class="px-6 py-4">' + id + '</td>' +
                          '<td class="px-6 py-4" id="nome-' + id + '">' + nome + '</td>' +
                          '<td class="px-6 py-4" id="preco-' + id + '">' + preco + '</td>' +
                          '<td class="px-6 py-4" id="categoria-' + id + '">' + categoria + '</td>' +
                          '<td class="px-6 py-4" id="regiao-' + id + '">' + regiao + '</td>' +
                          '<td class="px-6 py-4" id="lote-' + id + '">' + lote + '</td>' +
                          '<td class="px-6 py-4" id="validade-' + id + '">' + validade + '</td>' +
                          '<td class="px-6 py-4" id="acoes-' + id + '">' +
                              '<div class="flex gap-x-2">' +
                                  '<button onclick="editLine(' + id + ')" class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700">Editar</button>' +
                                  '<button onclick="excluirItem(' + id + ')" class="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700">Excluir</button>' +
                              '</div>' +
                          '</td>';
        
        corpoTabela.appendChild(linha);
    }
}

function editLine(id) {
    let nomeCelula = document.getElementById("nome-" + id);
    let precoCelula = document.getElementById("preco-" + id);
    let categoriaCelula = document.getElementById("categoria-" + id);
    let regiaoCelula = document.getElementById("regiao-" + id);
    let loteCelula = document.getElementById("lote-" + id);
    let validadeCelula = document.getElementById("validade-" + id);
    let acoesCelula = document.getElementById("acoes-" + id);

    let nomeTexto = nomeCelula.textContent;
    let precoTexto = precoCelula.textContent;
    let categoriaTexto = categoriaCelula.textContent;
    let regiaoTexto = regiaoCelula.textContent;
    let loteTexto = loteCelula.textContent;
    let validadeTexto = validadeCelula.textContent;

    nomeCelula.innerHTML = '<input type="text" id="edit-nome-' + id + '" value="' + nomeTexto + '" class="block w-full rounded-md bg-white/5 px-2 py-1 text-sm text-white">';
    precoCelula.innerHTML = '<input type="number" id="edit-preco-' + id + '" value="' + precoTexto + '" class="block w-full rounded-md bg-white/5 px-2 py-1 text-sm text-white">';
    categoriaCelula.innerHTML = '<input type="text" id="edit-categoria-' + id + '" value="' + categoriaTexto + '" class="block w-full rounded-md bg-white/5 px-2 py-1 text-sm text-white">';
    regiaoCelula.innerHTML = '<input type="text" id="edit-regiao-' + id + '" value="' + regiaoTexto + '" class="block w-full rounded-md bg-white/5 px-2 py-1 text-sm text-white">';
    loteCelula.innerHTML = '<input type="text" id="edit-lote-' + id + '" value="' + loteTexto + '" class="block w-full rounded-md bg-white/5 px-2 py-1 text-sm text-white">';
    validadeCelula.innerHTML = '<input type="date" id="edit-validade-' + id + '" value="' + validadeTexto + '" class="block w-full rounded-md bg-white/5 px-2 py-1 text-sm text-white">';

    acoesCelula.innerHTML = '<button onclick="update(' + id + ')" class="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700">Salvar</button>';
}

function update(id) {
    let novoNome = document.getElementById("edit-nome-" + id).value;
    let novoPreco = document.getElementById("edit-preco-" + id).value;
    let novaCategoria = document.getElementById("edit-categoria-" + id).value;
    let novaRegiao = document.getElementById("edit-regiao-" + id).value;
    let novoLote = document.getElementById("edit-lote-" + id).value;
    let novaValidade = document.getElementById("edit-validade-" + id).value;

    for (let i = 0; i < Itens.length; i++) {
        if (Itens[i][0] == id) {
            Itens[i] = [id, novoNome, novoPreco, novaCategoria, novaRegiao, novoLote, novaValidade];
            break; 
        }
    }
    localStorage.setItem('produtosDoSite', JSON.stringify(Itens));
    carregarTabela();
}

function excluirItem(id) {
    let novaLista = [];
    for (let i = 0; i < Itens.length; i++) {
        if (Itens[i][0] != id) {
            novaLista.push(Itens[i]);
        }
    }
    Itens = novaLista; 

    localStorage.setItem('produtosDoSite', JSON.stringify(Itens));

    carregarTabela();
}

carregarTabela();
