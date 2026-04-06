import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Cinema de Bolso | Aprenda Audiovisual com Celular",
  description: "Seu vídeo não precisa de outro celular. Precisa de direção. Domine luz, enquadramento e estética de cinema no seu smartphone.",
  keywords: [
    "audiovisual", 
    "curso de vídeo", 
    "edição de vídeo celular", 
    "cinema de bolso", 
    "produção de conteúdo"
  ],
  authors: [{ name: "Bruno Camargo Buemo" }],
  creator: "Bruno Camargo Buemo",
  openGraph: {
    title: "Cinema de Bolso",
    description: "Transforme a forma como você grava vídeos com o celular.",
    url: "https://cinemadebolso.com.br", 
    siteName: "Cinema de Bolso",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body 
        className={`${inter.className} antialiased selection:bg-yellow-500 selection:text-black`}
        style={{ backgroundColor: "#020617" }} 
      >
        {children}
      </body>
    </html>
  );
}