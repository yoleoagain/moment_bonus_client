import type { AppProps } from 'next/app'
import { ThemeProvider } from '../src/ui/theme/provider';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
