import { MonitorSmartphone, Palette, ServerCog, ShoppingCart } from 'lucide-react';

export const navigationLinks = [
    { name: 'Sobre', id: 'sobre' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experiência', id: 'experiencia' },
    { name: 'Projetos', id: 'projetos' }
];

export const skillsData = [
    {
        icon: MonitorSmartphone,
        name: "Front-End Core",
        tools: "React, Angular, JavaScript (ES6+), JQuery, HTML5/CSS3"
    },
    {
        icon: Palette,
        name: "Styling & UI",
        tools: "Tailwind CSS, Framer Motion, Bootstrap"
    },
    {
        icon: ServerCog,
        name: "Full-Stack & APIs",
        tools: "Node.js, Express, MongoDB, C#/.NET"
    },
    {
        icon: ShoppingCart,
        name: "E-commerce & Tools",
        tools: "VTEX, Git, Vite"
    }
];

export const projectsData = [
    {
        title: "E-Commerce de Camisas Esportivas",
        description: "Plataforma completa de e-commerce integrada com Mercado Pago. Backend em Node.js e MongoDB para gerenciamento de estoque e pedidos.",
        tags: ["React", "Node.js", "MongoDB", "Tailwind"],
        link: "https://loja-camisas-react.onrender.com",
        github: "https://github.com/LucasTessinari/loja-camisas-react"
    },
    {
        title: "Portfólio Pessoal",
        description: "Portfólio desenvolvido com foco em performance e Clean Code. Arquitetura modular com componentes isolados, animações fluidas e deploy contínuo via Vercel.",
        tags: ["React", "Vite", "Tailwind v4", "Framer Motion"],
        link: "https://portifolio.produtohub.com.br",
        github: "https://github.com/LucasTessinari/meu-portfolio"
    }
];


export const experienceData = [
    {
        company: "Autoglass",
        role: "Desenvolvedor Web Front-End",
        period: "3 anos e 5 meses meses",
        desc: "Desenvolvimento de soluções web modernas, foco estrito em Front-End, performance e otimização avançada de SEO."
    },
    {
        company: "Banestes",
        role: "Estagiário de TI",
        period: "2 anos",
        desc: "Suporte técnico e melhoria contínua na usabilidade e interação dos usuários com os aplicativos bancários."
    },
    {
        company: "TJES",
        role: "Estagiário",
        period: "2 anos",
        desc: "Suporte a processos administrativos, focando em organização e fluxos processuais."
    },
    {
        company: "Exército Brasileiro",
        role: "Aspirante R2",
        period: "1 ano",
        desc: "Desenvolvimento de liderança tática, trabalho em equipe sob pressão e organização estratégica."
    }
];

export const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export const staggerContainerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
