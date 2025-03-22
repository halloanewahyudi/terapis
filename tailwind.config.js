// tailwind config
module.exports = {
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
            colors: {
                'primary': '#231eb2',
                'secondary': '#e78616',
                'tertiary': '#d4ee86',
                'dark':'#640D5F',
                'light': '#eef5db',           
            },
        },
    },
    plugins: [],
}