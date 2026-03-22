import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marathon Salvage Planner",
  description: "Find the best map locations for your Marathon salvage items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <main className="flex-1 bg-zinc-950">{children}</main>
        <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-4 text-center text-sm text-zinc-400">
          <a
            href="https://github.com/tom-spalding/marathon-salvage-planner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-zinc-200"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-1.03-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.54 1.06 1.54 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.89c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.65.71 1.03 1.62 1.03 2.74 0 3.95-2.34 4.81-4.57 5.07.36.32.68.95.68 1.93 0 1.39-.01 2.5-.01 2.84 0 .26.18.59.69.48A10.25 10.25 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
            </svg>
            <span>tom-spalding/marathon-salvage-planner</span>
          </a>
        </footer>
      </body>
    </html>
  );
}
