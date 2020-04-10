import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import theme from "../components/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ overflowX: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
