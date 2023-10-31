# Nike E-commerce App

![Nike Logo](https://static.nike.com.br/v10-291-2/images/brands/logo.svg)

Bem-vindo ao repositório do Nike E-commerce App! Este projeto é uma plataforma de comércio eletrônico baseada na marca Nike, projetada para proporcionar uma experiência de compra exclusiva para produtos da Nike.

## Visão Geral

O Nike E-commerce App é uma aplicação mobile que oferece as seguintes funcionalidades:

- Criação e autenticação de novos usuários.
- Navegação de produtos Nike.
- Visualização detalhada de produtos com imagens, descrições e preços.
- Adição de produtos ao carrinho de compras.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha instalado as seguintes tecnologias:

- [Node.js](https://nodejs.org/) - versão 14 ou superior.
- [Expo](https://docs.expo.dev/) - para executar o projeto.
- [Firebase](https://firebase.google.com/) - para autenticação e armazenamento de dados em tempo real.

## Instalação

Siga estas etapas para e executar o projeto em sua máquina:

1. Clone o repositório:
   git clone https://github.com/seu-usuario/nike-ecommerce-app.git

2. Acesse o diretório do projeto:
   cd nike-ecommerce-app

3. Instale as dependências:
   npm install

4. Inicie o aplicativo:
   npx expo install

## Configuração

Siga estas etapas para configurar o projeto:

1. Crie um projeto no firebase console:
   https://console.firebase.google.com

2. Crie um arquivo chamado ".env" na raiz do projeto:
   Adicione as variáveis de ambiente que foram fornecidas ao criar o projeto. (Etapa 1)
   ```
   EXPO_PUBLIC_FIREBASE_API_KEY=(sua chave aqui)
   EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=(sua chave aqui)
   EXPO_PUBLIC_FIREBASE_APP_ID=(sua chave aqui)
   EXPO_PUBLIC_FIRABSE_MEASUREMENT_ID=(sua chave aqui)
   ```

3. Adicionei a opção de "Authentication" (Sign-in Method -> Email):
   (https://softauthor.com/wp-content/uploads/2023/09/firebase-authentication-signin-method.png)
