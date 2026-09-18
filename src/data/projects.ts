export interface ProjectArchitectureSection {
  heading: string;
  body: string;
}

export interface ProjectImage {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  description: string;
  tech: string[];
  live?: string;
  github: string;
  images: ProjectImage[];
  overview: string;
  architecture: ProjectArchitectureSection[];
}

export const projects: Project[] = [
  {
    slug: "marcai",
    number: "01",
    title: "Marcai",
    description:
      "SaaS de agendamento para barbearias, uma barbearia por subdomínio. O cliente marca sozinho pelo celular e recebe a confirmação no WhatsApp.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Django",
      "Celery",
      "PostgreSQL (RLS)",
      "Redis",
      "Docker",
    ],
    live: "https://teste.usemarcai.online",
    github: "https://github.com/znt10/Marcai",
    images: [
      {
        src: "/projects/marcai/01.webp",
        caption: "Agenda do dia, no painel de quem trabalha na barbearia",
      },
      {
        src: "/projects/marcai/02.webp",
        caption: "Conexão do WhatsApp da casa por leitura de QR",
      },
    ],
    overview:
      "Agenda para barbearias de bairro, servida como SaaS multi-tenant: cada casa entra no ar no próprio subdomínio, com vitrine pública, agenda por barbeiro e confirmação automática no WhatsApp do cliente.",
    architecture: [
      {
        heading: "Uma barbearia por subdomínio",
        body: "Cada casa é um tenant servido no próprio endereço. O isolamento não fica só na tela: é aplicado no Postgres com Row Level Security, então uma consulta que escape do filtro da aplicação ainda não alcança os dados de outra barbearia.",
      },
      {
        heading: "Front e back em processos separados",
        body: "Next.js 16 (App Router) cuida da vitrine pública e do painel; a API em Django + DRF cuida das regras. Os dois falam com o mesmo Postgres, mas só o backend cria e migra o schema — o contrato entre eles é HTTP, não o banco.",
      },
      {
        heading: "WhatsApp e tarefas assíncronas",
        body: "As mensagens saem pela Evolution API, orquestradas por Celery (worker e beat) com Redis como broker: confirmação na hora da marcação, lembrete entre 50 e 60 minutos antes do horário — uma vez só — e healthcheck da sessão do WhatsApp.",
      },
      {
        heading: "Papéis e sessão",
        body: "Plataforma, dono e barbeiro enxergam recortes diferentes, e a fronteira é aplicada na API, não no componente. A sessão é um JWT assinado com PyJWT do lado do Django e verificado com jose do lado do Next, com as senhas em argon2id — os dois lados leem o hash um do outro sem combinar nada.",
      },
    ],
  },
  {
    slug: "fechacaixa",
    number: "02",
    title: "FechaCaixa",
    description:
      "Fechamento de caixa para redes de lojas: o celular da loja lança o turno sem login e a gerência confere, corrige e acompanha tudo pelo painel.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS 4",
      "Django REST Framework",
      "MySQL",
      "Docker",
    ],
    live: "https://fechacaixa.io",
    github: "https://github.com/znt10/FechaCaixa",
    images: [
      {
        src: "/projects/fechacaixa/01.webp",
        caption: "Tela da empresa: código de acesso, lojas, gerentes e funcionários",
      },
      {
        src: "/projects/fechacaixa/02.webp",
        caption: "Notas fiscais: os XMLs da compra viram gasto classificado",
      },
    ],
    overview:
      "Sistema de fechamento de caixa para empresas com várias lojas. Resolve o problema em duas metades propositalmente diferentes: um formulário de balcão, rápido e sem login, e um painel de gestão com conferência, saídas, gráficos e notas fiscais.",
    architecture: [
      {
        heading: "Duas metades, um só sistema",
        body: "O formulário roda no celular da loja e não tem login: o aparelho digita uma vez o código de acesso da empresa e dali em diante só lança o caixa do turno, instalável como PWA. O painel é da gerência e tem login. Separar os dois evita pedir senha a quem está com a máquina na mão.",
      },
      {
        heading: "Sessão em cookie HTTP-only",
        body: "A autenticação usa JWT guardado em cookie HTTP-only definido pelo backend — o token nunca vai no corpo da resposta nem passa pelo JavaScript. A empresa do aparelho vem sempre do cookie, nunca de um parâmetro na URL, que era justamente o que permitia ler as lojas de outra empresa.",
      },
      {
        heading: "Dados do servidor no cliente",
        body: "TanStack Query com persistência cuida do cache e da sincronia dos dados do servidor, e o Zustand guarda só o estado local de sessão. A divisão mantém o painel utilizável em conexão ruim de loja, sem duplicar o estado do servidor num store global.",
      },
      {
        heading: "Notas fiscais e relatórios",
        body: "Os XMLs das compras sobem em lote e viram gastos classificados por loja e categoria. A API em Django REST sobre MySQL exporta o período em planilha e PDF, e o ambiente inteiro sobe por Docker Compose, que aplica migrations, cria os grupos de acesso e o admin no boot.",
      },
    ],
  },
  {
    slug: "unistock",
    number: "03",
    title: "Unistock",
    description:
      "Sistema web de gerenciamento de estoque, produtos e pedidos. Arquitetura separada com frontend e backend independentes.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Django REST Framework",
      "MySQL",
      "Docker",
    ],
    live: "https://unistock.online",
    github: "https://github.com/znt10/Unistock_Front",
    images: [
      {
        src: "/projects/unistock/01.webp",
        caption: "Gestão de unidades: as lojas usadas nos pedidos e no estoque",
      },
      {
        src: "/projects/unistock/02.webp",
        caption: "Catálogo de produtos organizado por categoria",
      },
    ],
    overview:
      "Sistema de gerenciamento de lojas, produtos, estoque e pedidos, construído como dois projetos independentes que se comunicam por API REST.",
    architecture: [
      {
        heading: "Frontend e backend desacoplados",
        body: "O frontend (Next.js 15 + TypeScript) e o backend (Django REST Framework) são repositórios separados, sem acoplamento de código — apenas um contrato de API REST versionado os conecta.",
      },
      {
        heading: "Estado e dados",
        body: "Zustand gerencia o estado global no frontend. No backend, os dados de lojas, produtos, estoque e pedidos são persistidos em MySQL, com o schema controlado por migrations do Django.",
      },
      {
        heading: "Autenticação e permissões",
        body: "Autenticação via Simple JWT, com o token guardado em cookie HTTP-only definido pelo backend — o frontend nunca manipula o token diretamente. O acesso ao sistema é restrito por grupos de usuário (Admin, Gerente, Responsável).",
      },
      {
        heading: "Infraestrutura",
        body: "O backend roda containerizado via Docker Compose, o que automatiza migrations, criação de grupos e do usuário admin padrão ao subir o ambiente. A API expõe documentação via schema/Swagger.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
