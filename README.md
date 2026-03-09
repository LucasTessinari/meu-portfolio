<div align="center">

# 🚀 Lucas Tessinari — Portfólio

[![Deploy](https://img.shields.io/badge/deploy-vercel-black?style=for-the-badge&logo=vercel)](https://portifolio.produtohub.com.br)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

**Portfólio pessoal desenvolvido com foco em performance, animações fluidas e Clean Code.**

[🌐 Ver online](https://portifolio.produtohub.com.br) • [💼 LinkedIn](https://linkedin.com/in/lucastessinari) • [📧 Contato](mailto:tessinarilucas@gmail.com)

</div>

---

## ✨ Funcionalidades

- 🎨 **Design Dark Mode** com gradientes e efeitos de luz ambiente
- 📱 **100% Responsivo** com menu hamburguer animado no mobile
- ⚡ **Animações Fluidas** com Framer Motion em scroll e hover
- 🖱️ **Scroll Suave Personalizado** com curva de aceleração matemática
- 📊 **Barra de Progresso de Leitura** no topo da página
- 🧩 **Arquitetura Clean Code** com componentes isolados e dados separados
- 🚀 **Deploy Contínuo** via GitHub + Vercel com CI/CD automático
- 🔒 **HTTPS** com SSL automático via Vercel

---

## 🛠️ Tecnologias

| Tecnologia                                      | Versão | Finalidade                            |
| ----------------------------------------------- | ------ | ------------------------------------- |
| [React](https://reactjs.org)                    | 18     | Biblioteca principal de UI            |
| [Vite](https://vitejs.dev)                      | 5      | Bundler e servidor de desenvolvimento |
| [Tailwind CSS](https://tailwindcss.com)         | v4     | Estilização utilitária                |
| [Framer Motion](https://www.framer.com/motion/) | 11     | Animações e transições                |
| [Lucide React](https://lucide.dev)              | latest | Ícones SVG                            |
| [Vercel](https://vercel.com)                    | —      | Hospedagem e CI/CD                    |

---

## 🏗️ Arquitetura

O projeto segue os princípios de **Clean Code** com separação total entre dados, lógica e interface:

```
src/
├── components/
│   ├── Navbar.jsx      # Navegação fixa com menu mobile
│   ├── Hero.jsx        # Seção principal com CTA
│   ├── Skills.jsx      # Grade de habilidades técnicas
│   ├── Experience.jsx  # Timeline de experiências profissionais
│   ├── Projects.jsx    # Cards de projetos em destaque
│   └── Footer.jsx      # Rodapé com CTA de contato
├── data/
│   └── index.js        # Dados centralizados (projetos, skills, etc.)
├── utils/
│   └── scroll.js       # Lógica de scroll suave reutilizável
├── App.jsx             # Orquestrador principal
└── index.css           # Estilos globais
```

> Para adicionar um novo projeto ou skill, basta editar `src/data/index.js`. Nenhum componente precisa ser alterado.

---

## 🚀 Como Rodar Localmente

**Pré-requisitos:** Node.js 18+ e Git instalados.

```bash
    # Clone o repositório
    git clone https://github.com/LucasTessinari/meu-portfolio.git

    # Acesse a pasta
    cd meu-portfolio

    # Instale as dependências
    npm install

    # Inicie o servidor de desenvolvimento
    npm run dev
```

Acesse `http://localhost:5173` no navegador.

```bash
# Gerar build de produção
npm run build

# Pré-visualizar o build localmente
npm run preview
```

---

## 📐 Decisões Técnicas

**Por que Vite ao invés de Create React App?**
O Vite oferece HMR quase instantâneo e builds até 10x mais rápidos, tornando a experiência de desenvolvimento muito mais fluida.

**Por que Framer Motion?**
API declarativa que se integra nativamente ao React, permitindo animações performáticas baseadas em GPU sem código imperativo complexo.

**Por que Tailwind v4?**
Elimina o arquivo de configuração e usa variáveis CSS nativas, tornando o bundle final menor e a DX mais simples.

---

## 📬 Contato

<div align="center">

Desenvolvido por **Lucas Tessinari** — Desenvolvedor Front-End & Full Stack baseado em Vitória, ES.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-lucastessinari-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/lucastessinari)
[![Email](https://img.shields.io/badge/Email-tessinarilucas@gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:tessinarilucas@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-portifolio.produtohub.com.br-020617?style=for-the-badge&logo=vercel)](https://portifolio.produtohub.com.br)

</div>
