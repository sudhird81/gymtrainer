import { appWithTranslation } from 'next-i18next';
import Header from '../components/Header';
import '../styles/globals.css';
import MainLayout from '../components/MainLayout';
import { SessionProvider } from "next-auth/react"


function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <main className='container mx-auto'>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  )
}
// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <MainLayout/>
//       <main className='container mx-auto'>
//         <Component {...pageProps} />
//       </main>
//     </>
//   );
// }

export default appWithTranslation(MyApp);


