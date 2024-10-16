import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ['var(--font-roboto-mono)', 'monospace']
      },
      colors: {
        // Cores para o modo dark
        dark: {
          background: 'hsl(120, 3%, 6%)', // Background escuro
          foreground: 'hsl(0, 0%, 98%)', // Foreground escuro
          card: 'hsl(150, 6%, 7%)', // Cor do card
          cardForeground: 'hsl(0, 0%, 98%)', // Cor do texto no card
          popover: 'hsl(150, 6%, 7%)', // Cor do popover
          popoverForeground: 'hsl(0, 0%, 98%)', // Cor do texto no popover
          primary: 'rgb(231 233 237)', // Cor primária
          primaryForeground: 'hsl(0, 0%, 2%)', // Cor do texto primário
          secondary: 'hsl(135, 5%, 15%)', // Cor secundária
          secondaryForeground: 'hsl(0, 0%, 98%)', // Cor do texto secundário
          muted: 'hsl(130, 5%, 22%)', // Cor muted
          mutedForeground: 'hsl(130, 5%, 49%)', // Cor do texto muted
          accent: 'hsl(132, 40%, 88%)', // Cor de destaque
          accentForeground: 'hsl(0, 0%, 98%)', // Cor do texto de destaque
          accentHover: '#adc6b6', // Cor de destaque no hover
          destructive: 'hsl(0, 84%, 60%)', // Cor de ação destrutiva
          destructiveForeground: 'hsl(0, 0%, 98%)', // Texto destrutivo
          border: 'hsl(140, 5%, 12%)', // Cor da borda
          input: 'hsl(135, 4%, 18%)', // Cor de input
          ring: 'hsl(132, 40%, 40%)', // Cor de ring
        },
      },
    },
  },

  plugins: [],
};

export default config;
