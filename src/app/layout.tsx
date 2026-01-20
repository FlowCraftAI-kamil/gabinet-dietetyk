import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gabinet Dietetyki Klinicznej Dominika Maciejec-Kogut | Kielce",
  description: "Specjalizuję się w dietoterapii chorób metabolicznych: insulinooporność, cukrzyca, Hashimoto. Kompetencje WUM, indywidualne podejście. Kielce.",
  keywords: "dietetyk Kielce, dietetyk kliniczny Kielce, insulinooporność dieta, Hashimoto dieta, cukrzyca dieta",
  authors: [{ name: "Dominika Maciejec-Kogut" }],
  openGraph: {
    title: "Gabinet Dietetyki Klinicznej Dominika Maciejec-Kogut",
    description: "Specjalizuję się w dietoterapii chorób metabolicznych. Kompetencje WUM, indywidualne podejście.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
