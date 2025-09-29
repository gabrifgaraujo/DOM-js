document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // 1. ESTADO CENTRALIZADO E SELETORES DE ELEMENTOS
    // =================================================================

    const estado = {
        itens: [],
        proximoId: 1,
        linhaEmEdicao: null,
    };

    const formInputs = {
        nome: document.getElementById('nome'),
        preco: document.getElementById('preco'),
        categoria: document.getElementById('categoria'),
        regiao: document.getElementById('regiao'),
        lote: document.getElementById('lote'),
        validade: document.getElementById('validade'),
    };
    const corpoTabela = document.querySelector('tbody');
    const btnAdicionar = document.getElementById('btnAdicionar');
    const btnLimparLista = document.getElementById('btnLimparLista');

    // =================================================================
    // 2. FUNÇÃO PRINCIPAL DE RENDERIZAÇÃO
    // =================================================================

    function renderizarTabela() {
        corpoTabela.innerHTML = '';

        if (estado.itens.length === 0) {
            corpoTabela.innerHTML = `
                <tr>
                    <td colspan="8" class="px-6 py-4 text-center text-gray-500">Nenhum item na lista.</td>
                </tr>
            `;
            return;
        }

        for (const item of estado.itens) {
            const linha = document.createElement('tr');
            linha.className = "odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700";
            
            const estaEditando = estado.linhaEmEdicao === item.id;
            const precoFormatado = parseFloat(item.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            const dataFormatada = item.validade ? new Date(item.validade + 'T00:00:00').toLocaleDateString('pt-BR') : 'N/A';

            linha.innerHTML = `
                <td class="px-6 py-4 font-medium text-white">${item.id}</td>
                <td class="px-6 py-4">${estaEditando ? `<input type="text" class="input-edit" value="${item.nome}">` : item.nome}</td>
                <td class="px-6 py-4">${estaEditando ? `<input type="number" step="0.01" class="input-edit" value="${item.preco}">` : precoFormatado}</td>
                <td class="px-6 py-4">${estaEditando ? `<input type="text" class="input-edit" value="${item.categoria}">` : item.categoria}</td>
                <td class="px-6 py-4">${estaEditando ? `<input type="text" class="input-edit" value="${item.regiao}">` : item.regiao}</td>
                <td class="px-6 py-4">${estaEditando ? `<input type="text" class="input-edit" value="${item.lote}">` : item.lote}</td>
                <td class="px-6 py-4">${estaEditando ? `<input type="date" class="input-edit" value="${item.validade}">` : dataFormatada}</td>
                <td class="px-6 py-4">
                    <div class="flex justify-center gap-x-2">
                        ${estaEditando ? `
                            <button data-action="salvar" data-id="${item.id}" class="rounded-md bg-green-600 px-3 py-1 text-xs font-semibold text-white hover:bg-green-700">Salvar</button>
                            <button data-action="cancelar" class="rounded-md bg-gray-500 px-3 py-1 text-xs font-semibold text-white hover:bg-gray-600">Cancelar</button>
                        ` : `
                            <button data-action="editar" data-id="${item.id}" class="rounded-md bg-indigo-500 px-3 py-1 text-xs font-semibold text-white hover:bg-indigo-600">Editar</button>
                            <button data-action="remover" data-id="${item.id}" class="rounded-md bg-red-700 px-3 py-1 text-xs font-semibold text-white hover:bg-red-800">Remover</button>
                        `}
                    </div>
                </td>
            `;
            corpoTabela.appendChild(linha);
        }
    }

    // =================================================================
    // 3. FUNÇÕES DE MANIPULAÇÃO DE DADOS
    // =================================================================

    function adicionarItem() {
        if (!formInputs.nome.value || !formInputs.preco.value) {
            alert('Por favor, preencha pelo menos o nome e o preço do item.');
            return;
        }

        const novoItem = {
            id: estado.proximoId,
            nome: formInputs.nome.value,
            preco: formInputs.preco.value,
            categoria: formInputs.categoria.value || 'N/A',
            regiao: formInputs.regiao.value || 'N/A',
            lote: formInputs.lote.value || 'N/A',
            validade: formInputs.validade.value,
        };

        estado.itens.push(novoItem);
        estado.proximoId++;

        Object.values(formInputs).forEach(input => input.value = '');
        formInputs.nome.focus();
        renderizarTabela();
    }

    function limparLista() {
        if (confirm('Tem certeza que deseja limpar toda a lista?')) {
            estado.itens = [];
            estado.proximoId = 1;
            estado.linhaEmEdicao = null;
            renderizarTabela();
        }
    }

    function removerItem(id) {
        estado.itens = estado.itens.filter(item => item.id !== id);
        if (estado.linhaEmEdicao === id) {
            estado.linhaEmEdicao = null;
        }
        renderizarTabela();
    }

    function salvarEdicao(id) {
        const linhaEditada = corpoTabela.querySelector(`button[data-id="${id}"]`).closest('tr');
        const inputs = linhaEditada.querySelectorAll('.input-edit');
        
        const itemIndex = estado.itens.findIndex(item => item.id === id);
        if (itemIndex === -1) return;

        estado.itens[itemIndex] = {
            id: id,
            nome: inputs[0].value,
            preco: inputs[1].value,
            categoria: inputs[2].value,
            regiao: inputs[3].value,
            lote: inputs[4].value,
            validade: inputs[5].value,
        };

        estado.linhaEmEdicao = null;
        renderizarTabela();
    }

    // =================================================================
    // 4. GERENCIADORES DE EVENTOS
    // =================================================================

    btnAdicionar.addEventListener('click', adicionarItem);
    btnLimparLista.addEventListener('click', limparLista);

    corpoTabela.addEventListener('click', (evento) => {
        const target = evento.target.closest('button');
        if (!target) return;

        const acao = target.dataset.action;
        const id = parseInt(target.dataset.id, 10);

        switch (acao) {
            case 'remover':
                if (confirm(`Tem certeza que deseja remover o item de ID ${id}?`)) {
                    removerItem(id);
                }
                break;
            case 'editar':
                estado.linhaEmEdicao = id;
                renderizarTabela();
                break;
            case 'salvar':
                salvarEdicao(id);
                break;
            case 'cancelar':
                estado.linhaEmEdicao = null;
                renderizarTabela();
                break;
        }
    });

    // Renderiza a tabela pela primeira vez
    renderizarTabela();
});
