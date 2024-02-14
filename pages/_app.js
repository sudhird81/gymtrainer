import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';


function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
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


