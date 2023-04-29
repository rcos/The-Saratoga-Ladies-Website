//import '@/styles/globals.css'
import '@/styles/old.css'
import { ApolloProvider } from '@apollo/client/react'
import { client } from "/lib/apollo"
import 'bootstrap/dist/css/bootstrap.css';
import toast, { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

 