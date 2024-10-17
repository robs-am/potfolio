import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
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
  			dark: {
  				background: 'hsl(120, 3%, 6%)',
  				foreground: 'hsl(0, 0%, 98%)',
  				card: 'hsl(150, 6%, 7%)',
  				cardForeground: 'hsl(0, 0%, 98%)',
  				popover: 'hsl(150, 6%, 7%)',
  				popoverForeground: 'hsl(0, 0%, 98%)',
  				primary: 'rgb(231 233 237)',
  				primaryForeground: 'hsl(0, 0%, 2%)',
  				secondary: 'hsl(135, 5%, 15%)',
  				secondaryForeground: 'hsl(0, 0%, 98%)',
  				muted: 'hsl(130, 5%, 22%)',
  				mutedForeground: 'hsl(130, 5%, 49%)',
  				accent: 'hsl(132, 40%, 88%)',
  				accentForeground: 'hsl(0, 0%, 98%)',
  				accentHover: '#adc6b6',
  				destructive: 'hsl(0, 84%, 60%)',
  				destructiveForeground: 'hsl(0, 0%, 98%)',
  				border: 'hsl(140, 5%, 12%)',
  				input: 'hsl(135, 4%, 18%)',
  				ring: 'hsl(132, 40%, 40%)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },

  plugins: [require("tailwindcss-animate")],
};

export default config;
