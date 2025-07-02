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
                'primary': '#54bf23',
                'secondary': '#419f19',
                'tertiary': '#d4ee86',
                'dark':'#640D5F',
                'light': '#eef5db',           
            },
        },
    },
    plugins: [],
}