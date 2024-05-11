import "../styles/globals.css";
import Nav from "./Nav";
import Footer from "./Footer";

export const metadata = {
  title: "Julien Claerhout",
  description: "Julien Claerhout portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Nav className="fixed top-0 w-full z-50 bg-white" />
        <main className="flex-grow pt-12 pb-16">{children}</main>
        <Footer className="fixed bottom-0 w-full z-50 bg-white" />
      </body>
    </html>
  );
}