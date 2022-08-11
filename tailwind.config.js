/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      keyframes: {
        'fade-out-up': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
        }
    },
    animation: {
        'fade-out-up': 'fade-out-up 0.5s ease-out'
    }
    },
  },
  plugins: [require('daisyui')],
}
