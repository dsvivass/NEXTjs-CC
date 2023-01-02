
import '../styles/globals.css'
import Navigation from "../components/Navigation"
import { Providers } from '../redux/provider'
import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

export default function RootLayout({ children }) {
  return (
    // <Provider store={store}>
      <html>
        <head />
        <body>
          <Providers>
            <Navigation />
            {children}
          </Providers>
        </body>
      </html>
    // </Provider>
  )
}
