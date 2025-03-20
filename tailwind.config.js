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
                'primary': '#22577a',
                'primary-light': '#38a3a5',
                'secondary': '#57cc99',
                'secondary-light': '#80ed99',
                'light': '#eef5db',           
            },
        },
    },
    plugins: [],
}