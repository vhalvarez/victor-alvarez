const colors = require("tailwindcss/colors");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            pynk: {
                DEFAULT: "#FFCACA",
            },
            platino: {
                DEFAULT: "#e2e2e2",
            },
            jet: {
                DEFAULT: "#131312",
            },
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
        },
        fontFamily: {
            ibm: ["IBM Plex Mono"],
        },
        backgroundImage: (theme) => ({
            boy: "url('https://unsplash.com/photos/em8Xf3vXvvI/download?force=true')",
            portfolio: "url('/src/assets/images/fondos/portfolio.jpg')",
            pizza: "url('/src/assets/images/restaurantApp/fondo.png')",
            marketing: "url('/src/assets/images/marketing/fondo.png')",
            ecommerce: "url('/src/assets/images/ecommerce/fondo.png')",
            portf: "url('/src/assets/images/portfolio/fondo.png')",
            crypto: "url('/src/assets/images/crypto/fondo.png')",
            about: "url('https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')",
            me: "url('/src/assets/images/me/me.png')",
            me2: "url('/src/assets/images/me/me2.png')",
            ucv: "url('https://cdn.elnacional.com/wp-content/uploads/2020/06/Biblioteca_de_la_Universidad_Central_de_Venezuela.jpg')",
            ucv2: "url('https://steemitimages.com/DQmRYUNTruc4KURb4bCYEFto2qCkan53sK222wDTbTLbypB/ucv.jpg')",
            1: "url('/src/assets/images/restaurantApp/restaurantApp.png')",
            2: "url('/src/assets/images/marketing/simplepage.png')",
            3: "url('/src/assets/images/crypto/crypto.png')",
            4: "url('/src/assets/images/ecommerce/ecommerce.png')",
            5: "url('/src/assets/images/portfolio/portfolio.png')",
            restaurant1: "url('/src/assets/images/restaurantApp/1.png')",
            restaurant2: "url('/src/assets/images/restaurantApp/2.png')",
            marketing1: "url('/src/assets/images/marketing/1.png')",
            marketing2: "url('/src/assets/images/marketing/2.png')",
            crypto1: "url('/src/assets/images/crypto/1.png')",
            crypto2: "url('/src/assets/images/crypto/2.png')",
            ecommerce1: "url('/src/assets/images/ecommerce/1.png')",
            ecommerce2: "url('/src/assets/images/ecommerce/2.png')",
            portfolio1: "url('/src/assets/images/portfolio/1.png')",
            portfolio2: "url('/src/assets/images/portfolio/2.png')",
            bancamiga1: "url('/src/assets/images/bancamiga/1.png')",
            bancamiga2: "url('/src/assets/images/bancamiga/2.png')",
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
