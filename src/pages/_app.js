import '../../styles/global.scss';
import '../../styles/cabecalho.scss';
import '../../styles/backgrounds.scss';
import '../components/Inputs/Select.scss';
import '../components/Inputs/InputSettings.scss';
import '../components/BackgroundGradient.scss';

import { AuthProvider } from '../../contexts/AuthContext';


export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}