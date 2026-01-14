import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

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
