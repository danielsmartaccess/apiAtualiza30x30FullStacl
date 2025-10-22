const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const dbFile = path.join(__dirname, 'db.json');
let isUpdating = false;

// Função que atualiza os dados de forma mais inteligente
function updateData() {
  if (isUpdating) {
    console.log('Atualização já em progresso, pulando...');
    return;
  }
  
  try {
    isUpdating = true;
    
    // Usa flag assíncrona para não bloquear o JSON Server
    fs.readFile(dbFile, 'utf8', (err, content) => {
      if (err) {
        console.error('Erro ao ler arquivo:', err);
        isUpdating = false;
        return;
      }
      
      try {
        const data = JSON.parse(content);
        
        // Exemplo: incrementa o preço do primeiro livro em 1 real e diminui o estoque
        if (data && data.livros && data.livros.length > 0) {
          data.livros[0].preco = parseFloat((data.livros[0].preco + 1).toFixed(2));
          if (typeof data.livros[0].estoque === 'number') {
            data.livros[0].estoque = Math.max(0, data.livros[0].estoque - 1);
          }
        }

        // Escreve de forma assíncrona também
        fs.writeFile(dbFile, JSON.stringify(data, null, 2), 'utf8', (writeErr) => {
          if (writeErr) {
            console.error('Erro ao escrever arquivo:', writeErr);
          } else {
            console.log('📚 db.json atualizado em', new Date().toLocaleTimeString());
          }
          isUpdating = false;
        });
        
      } catch (parseErr) {
        console.error('Erro ao fazer parse do JSON:', parseErr);
        isUpdating = false;
      }
    });
    
  } catch (e) {
    console.error('Erro geral na atualização:', e);
    isUpdating = false;
  }
}

// Executa depois de 10 segundos e depois a cada 45 segundos (intervalo maior)
setTimeout(updateData, 10000);
setInterval(updateData, 45000);

// Inicia o json-server via spawn (versão estável)
const port = process.env.PORT || 3000;
console.log(`Iniciando JSON Server na porta ${port}...`);

const jsonServerProcess = spawn('npx', ['json-server', '--watch', dbFile, '--port', port.toString(), '--host', 'localhost'], {
  stdio: 'inherit',
  shell: true
});

jsonServerProcess.on('error', (err) => {
  console.error('Erro ao iniciar json-server:', err);
});

jsonServerProcess.on('close', (code) => {
  console.log(`JSON Server finalizou com código ${code}`);
});
