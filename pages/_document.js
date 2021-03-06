import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html data-color-mode="light">
        <Head />
        <body className="pt-14">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
