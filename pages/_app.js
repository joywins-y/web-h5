import "../styles/globals.css";
import Footer from "./cpmonents/Footer";
import Header from "./cpmonents/Header";
import "antd-mobile/es/global";

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        minHeight: "100%",
      }}
    >
      <Header />
      <div style={{ marginTop: 85, paddingBottom: 553 }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
