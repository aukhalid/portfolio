import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Ahasan Ullah Khalid - Web Developer",
  description:
    "Passionate full-stack developer specializing in modern web technologies. View my portfolio and get in touch!",
  keywords:
    "full stack developer, web developer, react, next.js, typescript, portfolio",
  authors: [{ name: "Ahasan Ullah Khalid" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Ahasan Ullah Khalid - Web Developer",
    description:
      "Passionate full-stack developer specializing in modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahasan Ullah Khalid - Web Developer",
    description:
      "Passionate full-stack developer specializing in modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}