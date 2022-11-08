import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React, { CSSProperties } from "react";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <title>{"Math Champ"}</title>
          <meta
            name="description"
            content={
              "Toronto's best digital textbook for online math learning! We teach math skills to help you get hired ."
            }
          />
          <meta property="og:title" content={"Math Champ"} />
          <meta
            property="og:image"
            content={"https://www.skillify.ca/images/logo.png"}
          />
          <meta
            property="og:description"
            content={
              "Toronto's best digital textbook for online math learning! We teach math skills to help you get hired ."
            }
          />
          <meta property="og:url" content="https://skillify.ca/" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/Poppins/Poppins-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Poppins/Poppins-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
