/** @type {import('next').NextConfig} */
const nextConfig = {
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
            }
        ]
    }
};

export default nextConfig;
