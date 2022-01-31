export { ThemeProvider } from './provider'

export interface IPalette {
  mainBackground: string
  mainAccentBackground: string
  primaryFont: string
  borderColor: string
}

export interface ITheme {
  palette: IPalette,
  paddings: {
    main: string
    half: string
    quarter: string
  },
  borderRadius: string
}

export const lightTheme: ITheme = {
  borderRadius: '4px',
  paddings: {
    main: '16px',
    half: '6px',
    quarter: '4px',
  },
  palette: {
    mainBackground: '#313131',
    mainAccentBackground: '#1f1c1c',
    primaryFont: '#75655b',
    borderColor: '#1d1d1d'
  }
}