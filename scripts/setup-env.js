
import { writeFile } from 'node:fs/promises';

const envContent = `DATABASE_SERVICE_URI=postgres://Usuario:Senha@Host:Porta/BancoDeDados`;

await writeFile('.env', envContent, 'utf8');

console.log('Arquivo .env criado com sucesso!');
