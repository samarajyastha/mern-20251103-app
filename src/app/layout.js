import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import config from "@/config/config";
import AppProvider from "@/redux/provider";
import MainLayout from "@/layouts/MainLayout";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: config.appName,
  description: "Electronics e-commerce, online shopping",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <AppProvider>
          <MainLayout>
            <Header />
            <main className="min-h-screen dark:bg-gray-900 dark:text-white">
              {children}
            </main>
            <Footer />
          </MainLayout>
        </AppProvider>
        <ToastContainer position="top-center" autoClose="2500" />
      </body>
    </html>
  );
};

export default RootLayout;
