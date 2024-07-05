import Layout from "@/layout";
import "@/styles/globals.css";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

const { Button } = chakraTheme.components
const theme = extendBaseTheme({
  components: {
    Button,
  },
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraBaseProvider>
    </>
  );
}
