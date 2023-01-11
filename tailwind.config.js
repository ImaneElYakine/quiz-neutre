/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', 'accueil.html', 'quiz.html'],
    theme: {
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
                'background': "url('background.svg')",
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
