import "../styles/globals.css";
import Nav from "./nav";

export const metadata = {
  title: "Julien Claerhout",
  description: "Julien Claerhout portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}