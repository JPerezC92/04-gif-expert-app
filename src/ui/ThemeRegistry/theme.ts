import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const theme = createTheme({
	palette: {
		mode: 'dark',
		common: {
			black: '#000',
			white: '#fff',
		},
		primary: {
			main: '#FF4081',
			light: '#FF79A8',
			dark: '#C60055',
			contrastText: '#fff',
		},
		secondary: {
			main: '#03DAC6',
			light: '#64FFDA',
			dark: '#00BFA5',
			contrastText: '#fff',
		},
		error: {
			main: '#EA5455',
			light: '#FF7E78',
			dark: '#D40815',
			contrastText: '#fff',
		},
		warning: {
			main: '#FFD166',
			light: '#FFE487',
			dark: '#FFAB00',
			contrastText: '#fff',
		},
		info: {
			main: '#32A1F2',
			light: '#6CC9F3',
			dark: '#0077C2',
			contrastText: '#fff',
		},
		success: {
			main: '#8CD867',
			light: '#A9E18C',
			dark: '#659739',
			contrastText: '#fff',
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
		text: {
			primary: 'rgba(255, 255, 255, 0.87)',
			secondary: 'rgba(255, 255, 255, 0.6)',
			disabled: 'rgba(255, 255, 255, 0.38)',
		},
		divider: 'rgba(255, 255, 255, 0.12)',
		background: {
			paper: '#2C2C2E',
			default: '#121212',
		},
		action: {
			active: 'rgba(255, 255, 255, 0.54)',
			hover: 'rgba(255, 255, 255, 0.04)',
			hoverOpacity: 0.04,
			selected: 'rgba(255, 255, 255, 0.08)',
			selectedOpacity: 0.08,
			disabled: 'rgba(255, 255, 255, 0.26)',
			disabledBackground: 'rgba(255, 255, 255, 0.12)',
			disabledOpacity: 0.38,
			focus: 'rgba(255, 255, 255, 0.12)',
			focusOpacity: 0.12,
			activatedOpacity: 0.12,
		},
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
	components: {
		MuiAlert: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.severity === 'info' && {
						backgroundColor: '#60a5fa',
					}),
				}),
			},
		},
	},
});
