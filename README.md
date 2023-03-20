
<h1 align="center">Desafio BovControl</h1>
<p align="center">
  <img src="https://user-images.githubusercontent.com/31350420/226306733-040d2e0a-293b-4bf8-a74f-5397b0b5ace6.png" />
</p>


<p align="left">Olá! Esta é a minha solução para o desafio da BovControl. Este aplicativo cria e edita itens de um checklist de supervisão de fazendas, podendo ser utilizado offline, e assim que identificar uma conexão, uma sincronização é realizada.</p>


# 🛠️ Abrir e rodar o projeto
Antes de mais nada, é necessário ter instalado o Node e o Android Studio com um emulador configurado.<br/><br/>
Após "clonar" o repositório do projeto, você deve acessar a pasta criada e rodar o comando ```npm install```<br/><br/>
Em seguida você deve rodar o comando ```npx react native start``` <br/>
*** durante esta etapa alguns erros podem ocorrer, mas não desista! Execute o comando ```npx react native start``` até que a aplicação funcione!

# :space_invader: Entendendo o app
<h2>Tela inicial</h2>
<img src="https://user-images.githubusercontent.com/31350420/226313821-4c377320-7282-4655-825b-adeb2c37b768.png" width="300" />

Ao iniciar o aplicativo, ele irá exibir uma tela com uma lista de itens do checklist contendo as seguintes informações:
- <img src="https://user-images.githubusercontent.com/31350420/226316649-af6d82c2-12f3-49ac-a6c2-ce373d31a875.png" width="25" /> Nome da fazenda
- <img src="https://user-images.githubusercontent.com/31350420/226316672-ee2dfea8-6f7f-423f-b98a-94e35f93e9e1.png" width="25" /> Cidade da fazenda
- <img src="https://user-images.githubusercontent.com/31350420/226316698-b4d55d47-c5fb-4f28-924b-c93898620071.png" width="25" /> Nome do fazendeiro
- <img src="https://user-images.githubusercontent.com/31350420/226316726-0aa28314-5d62-4b01-a4f4-d5402bd8e391.png" width="25" /> Data da criação do item

*Na parte superior direita, há um indicador de status de conexão (:green_circle: online e	:red_circle: offline)*

*Cada item possui um ícone informando se houve inspeção no mês corrente ou não (<img src="https://user-images.githubusercontent.com/31350420/226325645-f46fe8bd-3184-45ba-9152-ad470b6921d1.png" width="20" />/<img src="https://user-images.githubusercontent.com/31350420/226325673-f737da64-b353-48a3-b3a2-c30d9d78d37a.png" width="20" />)*

*Aqui você pode realizar duas ações: [criar](#Criar-Item) um novo item ou [visualizar](#Visualizar-Item) os detalhes de um item*

#Criar-Item

<h2>Criar um novo item</h2>
<img src="https://user-images.githubusercontent.com/31350420/226323664-90154543-043e-4761-8cd8-ac3267522e20.png" width="300" />
<img src="https://user-images.githubusercontent.com/31350420/226323698-e1b79a94-1eb0-4fbb-a5dc-e5a17c662400.png" width="300" />

*Na tela de criação é necessário que TODOS os campos estejam preenchidos para habilitar o botão de incluir*

- <img src="https://user-images.githubusercontent.com/31350420/226316649-af6d82c2-12f3-49ac-a6c2-ce373d31a875.png" width="25" /> Nome da fazenda
- <img src="https://user-images.githubusercontent.com/31350420/226316672-ee2dfea8-6f7f-423f-b98a-94e35f93e9e1.png" width="25" /> Cidade da fazenda
- <img src="https://user-images.githubusercontent.com/31350420/226316698-b4d55d47-c5fb-4f28-924b-c93898620071.png" width="25" /> Nome do fazendeiro
- <img src="https://user-images.githubusercontent.com/31350420/226321779-1cfa50e3-05c8-4f5c-9e88-9e6b0deb73b1.png" width="25" /> Nome do supervisor
- <img src="https://user-images.githubusercontent.com/31350420/226321810-ad5d91bd-f792-44ba-a90d-ab17d0f4227c.png" width="25" /> Tipo de inspeção (BPA, Antibiótico ou BPF)
- <img src="https://user-images.githubusercontent.com/31350420/226321829-c43631fc-370d-4173-8b92-959e3c2106f2.png" width="25" /> Quantida de leite produzido por mês *(somente números inteiros)*
- <img src="https://user-images.githubusercontent.com/31350420/226321840-5f4eb93b-795c-4b46-a155-83991abc7c52.png" width="25" /> Quantidade de cabeças de gado *(somente números inteiros)*
- Houve supervisão no mês corrente? Por padrão está informção é marcada como NÃO.
<img src="https://user-images.githubusercontent.com/31350420/226322728-f5be7e04-3883-4e43-8ad8-e6fe7db597e9.png" width="200" />

*A data de criação do item é gerada automaticamente*

#Visualizar-Item

<h2>Detalhes do item</h2>
<img src="https://user-images.githubusercontent.com/31350420/226324639-47bc2ba4-2410-46f8-aa84-89781aaf232a.png" width="300" />

Nesta tela é possível visualizar os detalhes do item selecionado, e também é possível ir para a tela de edição.

- <img src="https://user-images.githubusercontent.com/31350420/226316649-af6d82c2-12f3-49ac-a6c2-ce373d31a875.png" width="25" /> Nome da fazenda
- <img src="https://user-images.githubusercontent.com/31350420/226316672-ee2dfea8-6f7f-423f-b98a-94e35f93e9e1.png" width="25" /> Cidade da fazenda
- <img src="https://user-images.githubusercontent.com/31350420/226316698-b4d55d47-c5fb-4f28-924b-c93898620071.png" width="25" /> Nome do fazendeiro
- <img src="https://user-images.githubusercontent.com/31350420/226321779-1cfa50e3-05c8-4f5c-9e88-9e6b0deb73b1.png" width="25" /> Nome do supervisor
- <img src="https://user-images.githubusercontent.com/31350420/226321810-ad5d91bd-f792-44ba-a90d-ab17d0f4227c.png" width="25" /> Tipo de inspeção (BPA, Antibiótico ou BPF)
- <img src="https://user-images.githubusercontent.com/31350420/226321829-c43631fc-370d-4173-8b92-959e3c2106f2.png" width="25" /> Quantida de leite produzido por mês
- <img src="https://user-images.githubusercontent.com/31350420/226321840-5f4eb93b-795c-4b46-a155-83991abc7c52.png" width="25" /> Quantidade de cabeças de gado
- <img src="https://user-images.githubusercontent.com/31350420/226325149-b16edab5-5c0c-4bd6-afa9-cec28008f942.png" width="25" /> Data da criação do item
- <img src="https://user-images.githubusercontent.com/31350420/226325252-927fd5bc-f499-4a6b-bbf1-0148c3eb51dc.png" width="25" /> Data da última atualização do item
- Houve supervisão no mês corrente?
  - Sim <img src="https://user-images.githubusercontent.com/31350420/226325645-f46fe8bd-3184-45ba-9152-ad470b6921d1.png" width="20" />
  - Não <img src="https://user-images.githubusercontent.com/31350420/226325673-f737da64-b353-48a3-b3a2-c30d9d78d37a.png" width="20" />

#Editar-Item

<h2>Editar item</h2>
<img src="https://user-images.githubusercontent.com/31350420/226333106-6f3de9e6-974b-4ebc-8f81-4d33d6f78bcb.png" width="300" />
<img src="https://user-images.githubusercontent.com/31350420/226333122-bc6c07e5-2999-4e18-8b8a-5e178f9b24f6.png" width="300" />

Nesta tela é possível editar os detalhes do item selecionado.

- <img src="https://user-images.githubusercontent.com/31350420/226316649-af6d82c2-12f3-49ac-a6c2-ce373d31a875.png" width="25" /> Nome da fazenda
- <img src="https://user-images.githubusercontent.com/31350420/226316672-ee2dfea8-6f7f-423f-b98a-94e35f93e9e1.png" width="25" /> Cidade da fazenda
- <img src="https://user-images.githubusercontent.com/31350420/226316698-b4d55d47-c5fb-4f28-924b-c93898620071.png" width="25" /> Nome do fazendeiro
- <img src="https://user-images.githubusercontent.com/31350420/226321779-1cfa50e3-05c8-4f5c-9e88-9e6b0deb73b1.png" width="25" /> Nome do supervisor
- <img src="https://user-images.githubusercontent.com/31350420/226321810-ad5d91bd-f792-44ba-a90d-ab17d0f4227c.png" width="25" /> Tipo de inspeção (BPA, Antibiótico ou BPF)
- <img src="https://user-images.githubusercontent.com/31350420/226321829-c43631fc-370d-4173-8b92-959e3c2106f2.png" width="25" /> Quantida de leite produzido por mês *(somente números inteiros)*
- <img src="https://user-images.githubusercontent.com/31350420/226321840-5f4eb93b-795c-4b46-a155-83991abc7c52.png" width="25" /> Quantidade de cabeças de gado *(somente números inteiros)*
- Houve supervisão no mês corrente?
  - Sim <img src="https://user-images.githubusercontent.com/31350420/226325645-f46fe8bd-3184-45ba-9152-ad470b6921d1.png" width="20" />
  - Não <img src="https://user-images.githubusercontent.com/31350420/226325673-f737da64-b353-48a3-b3a2-c30d9d78d37a.png" width="20" />

*Na tela de edição é necessário que TODOS os campos estejam preenchidos para habilitar o botão de incluir*
*A data da última atualização do item é gerada automaticamente*
