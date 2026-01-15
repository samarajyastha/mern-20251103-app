import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import config from "@/config/config";

export const metadata = {
  title: config.appName,
  description: "Electronics e-commerce, online shopping",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
