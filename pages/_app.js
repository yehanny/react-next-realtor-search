import { Provider } from "react-redux"; // Importing Provider
import "../styles/globals.css";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import React, { useEffect } from "react";
import Head from "next/head";
import fetch from "./api/fetchJson";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    useEffect(() => {
      document.body.className = pageProps.isDark ? "w-full antialiased dark-mode" : "w-full antialiased light-mode";
    }),
    (
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <SWRConfig
              value={{
                fetcher: fetch,
                onError: (err) => {
                  console.error(err);
                },
              }}>
              <Component {...pageProps} />
            </SWRConfig>
            ;
          </PersistGate>
        </Provider>
      </React.StrictMode>
    )
  );
}
