# Skill: Ligar Servidor de Desenvolvimento

## Trigger
Toda vez que o usuário pedir para "ligar", "falar liga", "liga" ou "iniciar o servidor".

## Instructions
1. Execute o comando `$env:PATH += ';C:\Program Files\nodejs'; npm run dev` na pasta raiz do projeto (`c:\Site-prime-products`) caso o node/npm não esteja no PATH global do terminal.
2. Mantenha o servidor rodando em segundo plano e informe ao usuário o endereço do localhost (geralmente `http://localhost:5173`).
