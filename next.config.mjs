/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {protocol: "https", 
            hostname: "rickandmortyapi.com"
        },
    ],
    },
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/matematica",
                destination: "/maths",
            }, 
            {
                source: "/generalFunction",
                destination:"/general-function"
            },
            {
                source: "/cartao",
                destination: "/cards"
            },
            {
                source: "/pagina-com-fetch",
                destination: "/fetch-page"
            },
            {
                source: "/pagina-com-axios",
                destination: "/axios-page"
            },
            {
                source: "/pagina-server-side",
                destination: "/sever-side"
            }
        ]
    }
};

export default nextConfig;
