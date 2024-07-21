// Simulação de dados de clientes
let clients = [
    { id: 1, name: "João Silva", email: "joao@example.com", phone: "(11) 9999-9999" },
    { id: 2, name: "Maria Souza", email: "maria@example.com", phone: "(11) 8888-8888" },
    { id: 3, name: "José Santos", email: "jose@example.com", phone: "(11) 7777-7777" }
];
let nextId = 4; // ID do próximo cliente

// Função para renderizar a lista de clientes
function renderClients(searchTerm = '') {
    const clientList = document.getElementById('clientList');
    clientList.innerHTML = '';

    clients.forEach(client => {
        if (client.name.toLowerCase().includes(searchTerm.toLowerCase()) || client.email.toLowerCase().includes(searchTerm.toLowerCase())) {
            const li = document.createElement('li');
            li.innerHTML = `${client.name} - ${client.email} - ${client.phone} 
                <button class="delete" onclick="deleteClient(${client.id})">Excluir</button>`;
            clientList.appendChild(li);
        }
    });
}

// Função para adicionar um novo cliente
function addClient(name, email, phone) {
    clients.push({ id: nextId++, name, email, phone });
    renderClients(); // Atualiza a lista após adicionar
}

// Função para excluir um cliente
function deleteClient(id) {
    clients = clients.filter(client => client.id !== id);
    renderClients(); // Atualiza a lista após excluir
}

// Event listener para o formulário de cadastro
document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;
    addClient(name, email, phone);
    document.getElementById('clientForm').reset(); // Limpa o formulário
});

// Event listener para o campo de busca
document.getElementById('searchInput').addEventListener('input', function() {
    renderClients(this.value);
});

// Renderiza os clientes ao carregar a página
renderClients();
