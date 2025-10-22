# 🚀 API CRUD com Atualização Automática - Livraria

## 📋 Descrição
API REST completa com sistema CRUD usando JSON Server que atualiza automaticamente os dados a cada 30 segundos. Projeto full-stack com frontend HTML para testes.

## ⚡ Funcionalidades
- ✅ **CRUD completo** (Create, Read, Update, Delete)
- 🔄 **Atualização automática** a cada 30 segundos
- 🎯 **Interface de testes** HTML integrada
- 📊 **Endpoints REST** padronizados
- 🔍 **Filtros e consultas** avançadas
- 📱 **Frontend responsivo** com W3.CSS

## 🛠️ Tecnologias
- **Backend**: Node.js + JSON Server
- **Frontend**: HTML5 + CSS3 + JavaScript
- **Estilo**: W3.CSS Framework
- **Dados**: JSON Database

## 🚀 Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar o servidor
```bash
npm start
```

### 3. Acessar a API
- **API Base**: http://localhost:3000
- **Livros**: http://localhost:3000/livros
- **Interface de testes**: `ExemploW3CSS/api-test.html`

## 📚 Endpoints disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/livros` | Lista todos os livros |
| `GET` | `/livros/:id` | Busca livro por ID |
| `POST` | `/livros` | Cria novo livro |
| `PUT` | `/livros/:id` | Atualiza livro completo |
| `PATCH` | `/livros/:id` | Atualização parcial |
| `DELETE` | `/livros/:id` | Remove livro |

## 🔧 Filtros e consultas

```bash
# Por autor
GET /livros?autor=Machado de Assis

# Por faixa de preço
GET /livros?preco_gte=50&preco_lte=100

# Ordenação
GET /livros?_sort=preco&_order=asc

# Busca por texto
GET /livros?q=Príncipe

# Paginação
GET /livros?_page=1&_limit=2
```

## 🧪 Testando a API

### Opção 1: Interface HTML
Abra `ExemploW3CSS/api-test.html` no navegador para uma interface visual completa.

### Opção 2: REST Client (VS Code)
Use o arquivo `test.http` com a extensão REST Client.

### Opção 3: PowerShell/Terminal
```powershell
# Listar todos
Invoke-RestMethod "http://localhost:3000/livros"

# Criar novo livro
$body = @{titulo="Novo Livro"; autor="Autor"; preco=29.90; estoque=5} | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:3000/livros" -Method POST -Body $body -ContentType "application/json"
```

### Opção 4: JavaScript/Fetch
```javascript
// Listar livros
fetch('http://localhost:3000/livros')
  .then(response => response.json())
  .then(data => console.log(data));

// Criar livro
fetch('http://localhost:3000/livros', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    preco: 45.90,
    estoque: 15
  })
}).then(r => r.json()).then(console.log);
```

## 🔄 Atualização Automática
- O primeiro livro tem o preço incrementado em R$ 1,00 a cada 30 segundos
- O estoque é reduzido em 1 unidade a cada atualização
- As atualizações são feitas de forma assíncrona para não bloquear a API

## 📁 Estrutura do projeto
```
├── server.js              # Servidor principal
├── db.json               # Base de dados JSON
├── package.json          # Configurações do projeto
├── README.md            # Este arquivo
├── test.http            # Testes REST Client
├── .gitignore           # Arquivos ignorados pelo Git
└── ExemploW3CSS/
    ├── home.html        # Página principal da livraria
    ├── api-test.html    # Interface de testes da API
    └── *.jpg, *.webp   # Imagens do projeto
```

## 🎯 Exemplo de dados
```json
{
  "livros": [
    {
      "id": 1,
      "titulo": "O Pequeno Príncipe",
      "autor": "Antoine de Saint-Exupéry",
      "preco": 100.00,
      "estoque": 10
    }
  ]
}
```

## 📞 Contato
Desenvolvido por Daniel Steinbruch Pereira

---
⭐ **Dica**: Use Ctrl+C para parar o servidor
