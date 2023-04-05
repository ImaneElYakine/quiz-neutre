/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', 'accueil.html', 'quiz.html', 'timer.html', 'règles.html'],
    theme: {
        screens: {
            'small': { 'raw': '(max-height: 620px)' },
            'xs' : '450px',
            'sm': '640px',
            'md': '768px',
            'lg': '1280px',
            'xl': '1536px',
            '2xl': '2000px',
        },
        extend: {
            colors: {
                'bleu' : '#0032FF',
                'transparent' : 'rgba(0, 0, 0, 0.0)',
                'vert' : '#82D200',
                'rouge' : '#FF2144',
                'jaune' : '#FFD700'
            },
            fontFamily: {
                'mediametrie': ['Mediametrie', 'sans-serif'],
            },
            backgroundImage: {
                'background': "url('/img/background.svg')",
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(-10px)', opacity: '0'},
                    '100%': { transform: 'translateX(0px)' , opacity: '1'}
                },
                appear: {
                    '0%': { opacity: '0'},
                    '100%': { opacity: '1'}
                },
            },
            animation: {
                'slide-left': 'slide 1.5s linear',
                'appear': 'appear 1.5s linear',
            },
        },
    },
    plugins: [],
}
