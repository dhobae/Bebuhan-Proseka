/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                sekai: {
                    cyan: '#33ccbb', // Virtual Singer / default cyan
                    pink: '#ee1166', // Global accent
                    blue: '#4455dd', // Leo/need
                    green: '#88dd22', // MORE MORE JUMP!
                    orange: '#ffbb00', // Vivid BAD SQUAD 
                    purple: '#8844cc', // 25-ji
                    yellow: '#ffaa00', // WxS
                    dark: '#0F172A',
                    darker: '#090d18',
                }
            },
            skew: {
                '6': '6deg',
                '-6': '-6deg',
                '10': '10deg',
                '-10': '-10deg',
                '12': '12deg',
                '-12': '-12deg',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'Montserrat', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'slide-bg': 'slideBg 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 10px rgba(51, 204, 187, 0.5))' },
                    '50%': { opacity: .5, filter: 'drop-shadow(0 0 20px rgba(238, 17, 102, 0.7))' },
                },
                slideBg: {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '100px 100px' },
                }
            },
            boxShadow: {
                'glow-cyan': '0 0 15px rgba(51, 204, 187, 0.5)',
                'glow-pink': '0 0 15px rgba(238, 17, 102, 0.5)',
            }
        },
    },
    plugins: [],
}
