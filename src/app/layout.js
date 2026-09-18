import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://aadarshsharma.dev"),
  title: "Aadarsh Sharma — Software Engineer",
  description:
    "Software Engineering Associate at Dassault Systèmes, building AI-native agentic tooling on a large-scale C++ CAD platform. C++, Python, LangGraph, Next.js.",
  keywords: [
    "Aadarsh Sharma",
    "Software Engineer",
    "C++",
    "LangGraph",
    "Agentic AI",
    "Next.js",
    "Dassault Systèmes",
  ],
  authors: [{ name: "Aadarsh Sharma" }],
  openGraph: {
    title: "Aadarsh Sharma — Software Engineer",
    description:
      "Software Engineering Associate at Dassault Systèmes. C++ systems, agentic AI tooling and full-stack products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadarsh Sharma — Software Engineer",
    description:
      "Software Engineering Associate at Dassault Systèmes. C++ systems, agentic AI tooling and full-stack products.",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
  ],
};

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    var dark = t ? t === 'dark' : true;
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
