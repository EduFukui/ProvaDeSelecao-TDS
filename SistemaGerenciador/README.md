// No terminal realizar os seguintes comandos
// npm i express dotenv mysql2
// npm i -D ts-node-dev typescript @types/express @types/node
// npx tsc --init
// npm i bcrypt
// npm i -D @types/bcrypt

// PORT do banco esta como 3307 ja que a porta padrao 3306 estava com erro


// Banco inicial Pensado e utilizado somente para ajuda 
create table usuarios(
	id INT AUTO_INCREMENT,
    nome VARCHAR(255) not null,
    CPF INT(11) not null,
    email VARCHAR(255) not null,
    categoria VARCHAR(255) not null,
    criado_em timestamp default current_timestamp
);

create table clientes(
	id INT AUTO_INCREMENT,
    nome VARCHAR(255) not null,
    CPF INT(11) not null,
    email VARCHAR(255) not null,
    criado_em timestamp default current_timestamp
);

create table equipamentos(
	status VARCHAR(255) not null,
    criado_em timestamp default current_timestamp
);

create table ordemDeServico(
	descricao VARCHAR(255) not null,
    criado_em timestamp default current_timestamp
);

create table execucaoTecnica(
	descricao VARCHAR(255),
    data timestamp default,
    criado_em timestamp default current_timestamp
)



// baixar a extensao thunder client e testar as seguintes rotas abaixo:

// Teste de Create Clientes
(POST) http://localhost:3000/cliente
{
  "nome":"Eduardo Jr. Fukui",
  "CPF":"03053711232",
  "email":"eduardoJR@gmail.com",
  "senha":"02348567232321fd"
}

(POST) http://localhost:3000/cliente
{
  "nome":"Leonardo da Silva",
  "CPF":"973265986122",
  "email":"leosilva@gmail.com",
  "senha":"02aljg7"
}

(POST) http://localhost:3000/cliente
{
  "nome":"Bruno Guerreiro",
  "CPF":"087671971232",
  "email":"gremio1903@gmail.com",
  "senha":"1903gremio"
}

(POST) http://localhost:3000/cliente
{
  "nome":"Matheus Medthler",
  "CPF":"03268522232",
  "email":"matheusgremio1903@gmail.com",
  "senha":"gremio1010"
}

(POST) http://localhost:3000/cliente
{
  "nome":"Dalvana Ribeiro",
  "CPF":"09987355519",
  "email":"dalRibeiro@gmail.com",
  "senha":"senacrsbr"
}

// Teste de GET Clientes
(GET) http://localhost:3000/clientes



// Teste de UPDATE Clientes
(UPDATE) http://localhost:3000/cliente/1
{
  "nome":"Eduardo Sanhudo Fukui",
  "CPF":"03053711232",
  "email":"eduardoJR@gmail.com",
  "senha":"02348567232321fd"
}


// Teste de DELETE Clientes
(DELETE) http://localhost:3000/cliente/3







// Teste de Create Equipamentos
(POST) http://localhost:3000/equipamento

{
  "nome":"Motor Monofasico",
  "ordem":"Em andamento",
  "cliente_id":11
}

(POST) http://localhost:3000/equipamento
{
  "nome":"Sinaleiro",
  "ordem":"Em andamento",
  "cliente_id":10
}

(POST) http://localhost:3000/equipamento
{
  "nome":"Sinaleiro de Carros",
  "ordem":"Em andamento",
  "cliente_id":10
}

(POST) http://localhost:3000/equipamento
{
  "nome":"Motor Trifasico",
  "ordem":"Em andamento",
  "cliente_id":11
}

(POST) http://localhost:3000/equipamento
{
  "nome":"Tranformador",
  "ordem":"Em andamento",
  "cliente_id":11
}

// Teste de GET Equipamentos
(GET) http://localhost:3000/equipamentos



// Teste de UPDATE Equipamentos
(UPDATE) http://localhost:3000/equipamento/1
{
  "nome":"Motor Monofasico",
  "ordem":"Cancelado",
  "cliente_id":11
}


// Teste de DELETE Equipamentos
(DELETE) http://localhost:3000/equipamento/3







// Teste de Create ordemDeServico
(POST) http://localhost:3000/os
{
  "descricao":"Motor com defeito, realizar manutencao e identificar os terminar com erro",
  "cliente_id":10,
  "equipamento_id":1
}

(POST) http://localhost:3000/os
{
  "descricao":"Transformador com erro de tensao",
  "cliente_id":11,
  "equipamento_id":3
}

(POST) http://localhost:3000/os
{
  "descricao":"Sinaleiro so com cor amarela",
  "cliente_id":11,
  "equipamento_id":7
}

(POST) http://localhost:3000/os
{
  "descricao":"Sinaleiro quebrado",
  "cliente_id":11,
  "equipamento_id":6
}

(POST) http://localhost:3000/os
{
  "descricao":"Tranformador em curto",
  "cliente_id":11,
  "equipamento_id":4
}

// Teste de GET ordemDeServico
(GET) http://localhost:3000/os



// Teste de UPDATE ordemDeServico
(UPDATE) http://localhost:3000/os/1
{
  "descricao":"Tranformador em curto circuito",
  "cliente_id":11,
  "equipamento_id":4
}


// Teste de DELETE ordemDeServico
(DELETE) http://localhost:3000/os/3








// Teste de Create execucaoTecnica
(POST) http://localhost:3000/ex
{
  "descricao":"Tranformador em curto circuito",
  "ordemdeservico_id":4
}

(POST) http://localhost:3000/ex
{
  "descricao":"Terminado, sem falhas",
  "ordemdeservico_id":1
}

(POST) http://localhost:3000/ex
{
  "descricao":"Terminado, sem falhas",
  "ordemdeservico_id":2
}

(POST) http://localhost:3000/ex
{
  "descricao":"Terminado, sem falhas",
  "ordemdeservico_id":4
}

(POST) http://localhost:3000/ex
{
  "descricao":"Tranformador em curto circuito",
  "ordemdeservico_id":1
}


// Teste de GET execucaoTecnica
(GET) http://localhost:3000/ex



// Teste de UPDATE execucaoTecnica
(UPDATE) http://localhost:3000/ex/1
{
  "descricao":"Tranformador em curto circuito",
  "cliente_id":11,
  "equipamento_id":4
}


// Teste de DELETE execucaoTecnica
(DELETE) http://localhost:3000/ex/3





// Teste de Create Usuario
(POST) http://localhost:3000/Usuario
{
  "nome":"Eduardo Sanhudo Fukui",
  "CPF":23572234,
  "email":"eduard234o@gmail.com",
  "senha":"123456",
  "categoria":"Atendente",
  "ordemdeservico_id":1
}

(POST) http://localhost:3000/Usuario
{
  "nome":"Leonardo Sakamoto",
  "CPF":297456123,
  "email":"leosakamoto@gmail.com",
  "senha":"1230857012-493128",
  "categoria":"Tecnico",
  "ordemdeservico_id":2
}

(POST) http://localhost:3000/Usuario
{
  "nome":"Daniel Mortagua",
  "CPF":108324567,
  "email":"danimortagua@gmail.com",
  "senha":"awklhegt24343dani",
  "categoria":"Administrador",
  "ordemdeservico_id":1
}

(POST) http://localhost:3000/Usuario
{
  "nome":"Dalvana Ribeiro",
  "CPF":37562011,
  "email":"DalRib@gmail.com",
  "senha":"dalribq2u3t",
  "categoria":"Administrador",
  "ordemdeservico_id":4
}

(POST) http://localhost:3000/Usuario
{
  "nome":"Walter Luis",
  "CPF":238056141,
  "email":"WalterVascob@gmail.com",
  "senha":"vascowalter12",
  "categoria":"Tecnico",
  "ordemdeservico_id":1
}


// Teste de GET Usuario
(GET) http://localhost:3000/usuario



// Teste de UPDATE Usuario
(UPDATE) http://localhost:3000/usuario/1
{
  "nome":"Walter Luis",
  "CPF":238056321,
  "email":"WalterSantos@gmail.com",
  "senha":"santoswalter12",
  "categoria":"Tecnico",
  "ordemdeservico_id":1
}


// Teste de DELETE Usuario
(DELETE) http://localhost:3000/usuario/3


