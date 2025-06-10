import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'erisson.cavalcanti@hotmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Erisson, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    {
        name: 'github',
        url: 'https://github.com/ErissonCavalcanti/Meu-Portifolio',
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/erisson-cavalcanti/',
    },
    { name: 'facebook', url: 'https://www.facebook.com/erisson.jcs/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Restaurant Menu',
        slug: 'Restaurant-Menu',
        liveUrl: 'https://cardapio-restaurante-murex.vercel.app/',
        year: 2025,
        description: 'projects.restaurantMenu.description',
        role: 'Frontend Developer',
        techStack: [
            'Next.js',
            'React.js',
            'CSS3',
            'JavaScript',
            'Figma',
            'React Hook',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/layout-cardapio-responsivo-1024.png',
        longThumbnail: '/projects/layout-cardapio-responsivo-1024.png',
        images: [
            '/projects/images/layout-cardapio-responsivo-cima.png',
            '/projects/images/layout-cardapio-responsivo-baixo.png',
        ],
    },
    {
        title: 'Artisanal Ice Cream Shop',
        slug: 'icecream-shopt',
        techStack: [
            'React.js',
            'CSS3',
            'JavaScript',
            'React Hook',
            'Vercel',
            'Figma',
        ],
        thumbnail: '/projects/thumbnail/layout-pagina-sobre-resolucao-1024.png',
        longThumbnail: '/projects/long/layout-pagina-sobre-resolucao-1024.png',
        images: [
            '/projects/images/gelateria-1.png',
            '/projects/images/gelateria-2.png',
            '/projects/images/gelateria-3.png',
            '/projects/images/gelateria-4.png',
            '/projects/images/gelateria-5.png',
        ],
        liveUrl: 'https://projeto-gelateria.vercel.app/',
        year: 2024,
        description: 'projects.iceCreamShop.description',
        role: 'Frontend Developer',
    },
    {
        title: 'Manhattan Coffee House',
        slug: 'manhattan-coffee-house',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
        thumbnail: '/projects/thumbnail/coffe-house1.png',
        longThumbnail: '/projects/long/coffe-house1.png',
        images: [
            '/projects/images/coffe-house-1.png',
            '/projects/images/coffe-house-2.png',
            '/projects/images/coffe-house-3.png',
        ],
        liveUrl: 'https://erissoncavalcanti.github.io/Cafeteria-Manhattan//',
        year: 2023,
        description: 'projects.manhattanCoffeeHouse.description',
        role: 'Frontend Developer',
    },
    // Add more projects here if needed
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer ',
        company: 'Freelancer',
        duration: 'Dec 2024 - Present',
    },
    {
        title: 'Frontend Developer (internship)',
        company: 'Código Certo',
        duration: 'May 2024 - Dec 2024',
    },
];
