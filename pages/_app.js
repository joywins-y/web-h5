import "../styles/globals.css";
import Footer from "./cpmonents/Footer";
import Header from "./cpmonents/Header";
import "antd-mobile/es/global";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        minHeight: "100%",
        position: "relative",
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
