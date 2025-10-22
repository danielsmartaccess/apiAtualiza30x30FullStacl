# API CRUD - Livraria

## 🚀 Como usar os endpoints

A API está rodando em: `http://localhost:3000`

### 📖 Endpoints disponíveis

## 1. **GET** - Listar todos os livros
```bash
GET http://localhost:3000/livros
```

**Exemplo usando fetch (JavaScript):**
```javascript
fetch('http://localhost:3000/livros')
  .then(response => response.json())
  .then(data => console.log(data));
```

**Exemplo usando curl:**
```bash
curl http://localhost:3000/livros
```

---

## 2. **GET** - Buscar livro por ID
```bash
GET http://localhost:3000/livros/1
```

**Exemplo usando fetch:**
```javascript
fetch('http://localhost:3000/livros/1')
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## 3. **POST** - Criar novo livro
```bash
POST http://localhost:3000/livros
Content-Type: application/json

{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "preco": 45.90,
  "estoque": 15
}
```

**Exemplo usando fetch:**
```javascript
fetch('http://localhost:3000/livros', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    preco: 45.90,
    estoque: 15
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

**Exemplo usando curl:**
```bash
curl -X POST http://localhost:3000/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Dom Casmurro","autor":"Machado de Assis","preco":45.90,"estoque":15}'
```

---

## 4. **PUT** - Atualizar livro completo (substitui todos os campos)
```bash
PUT http://localhost:3000/livros/1
Content-Type: application/json

{
  "titulo": "O Pequeno Príncipe - Edição Especial",
  "autor": "Antoine de Saint-Exupéry",
  "preco": 89.90,
  "estoque": 20
}
```

**Exemplo usando fetch:**
```javascript
fetch('http://localhost:3000/livros/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    titulo: "O Pequeno Príncipe - Edição Especial",
    autor: "Antoine de Saint-Exupéry",
    preco: 89.90,
    estoque: 20
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

---

## 5. **PATCH** - Atualização parcial (atualiza apenas os campos enviados)
```bash
PATCH http://localhost:3000/livros/1
Content-Type: application/json

{
  "preco": 95.00,
  "estoque": 25
}
```

**Exemplo usando fetch:**
```javascript
fetch('http://localhost:3000/livros/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    preco: 95.00,
    estoque: 25
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

---

## 6. **DELETE** - Remover livro
```bash
DELETE http://localhost:3000/livros/1
```

**Exemplo usando fetch:**
```javascript
fetch('http://localhost:3000/livros/1', {
  method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log(data));
```

**Exemplo usando curl:**
```bash
curl -X DELETE http://localhost:3000/livros/1
```

---

## 🔍 Filtros e consultas avançadas

### Filtrar por campo:
```bash
GET http://localhost:3000/livros?autor=Antoine de Saint-Exupéry
GET http://localhost:3000/livros?preco=80
```

### Ordenação:
```bash
GET http://localhost:3000/livros?_sort=preco&_order=asc
GET http://localhost:3000/livros?_sort=titulo&_order=desc
```

### Paginação:
```bash
GET http://localhost:3000/livros?_page=1&_limit=2
```

### Busca por texto:
```bash
GET http://localhost:3000/livros?q=Príncipe
```

### Filtros numéricos:
```bash
GET http://localhost:3000/livros?preco_gte=50&preco_lte=100
```

---

## 🛠️ Ferramentas para testar

### 1. **Browser** (apenas GET)
Acesse diretamente no navegador:
- http://localhost:3000/livros
- http://localhost:3000/livros/1

### 2. **Postman/Insomnia**
Importe os endpoints e teste facilmente com interface gráfica.

### 3. **VS Code REST Client**
Instale a extensão "REST Client" e crie um arquivo `.http`:

```http
### Listar livros
GET http://localhost:3000/livros

### Buscar livro por ID
GET http://localhost:3000/livros/1

### Criar novo livro
POST http://localhost:3000/livros
Content-Type: application/json

{
  "titulo": "Novo Livro",
  "autor": "Autor Exemplo",
  "preco": 29.90,
  "estoque": 10
}
```

### 4. **Console do navegador**
Abra o console (F12) e use fetch():

```javascript
// Listar livros
fetch('http://localhost:3000/livros')
  .then(r => r.json())
  .then(console.log);

// Criar livro
fetch('http://localhost:3000/livros', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    titulo: "Teste",
    autor: "Autor Teste", 
    preco: 39.90,
    estoque: 5
  })
}).then(r => r.json()).then(console.log);
```

---

## ⚡ Funcionalidades especiais

- **Atualização automática**: O primeiro livro tem preço incrementado em R$ 1,00 e estoque reduzido em 1 a cada 30 segundos
- **Watch automático**: Mudanças no `db.json` são detectadas automaticamente
- **CORS habilitado**: Pode ser usado em aplicações frontend
- **Validação automática**: JSON Server valida os dados automaticamente

---

## 📁 Estrutura da resposta

```json
{
  "id": 1,
  "titulo": "O Pequeno Príncipe",
  "autor": "Antoine de Saint-Exupéry", 
  "preco": 100.00,
  "estoque": 10
}
```

## 🔧 Como parar/reiniciar

- **Parar**: `Ctrl+C` no terminal
- **Reiniciar**: `npm start`
