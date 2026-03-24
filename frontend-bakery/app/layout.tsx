import { Italiana, Lexend } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const italiana = Italiana({ weight: "400", variable: "--font-italiana" })

const lexend = Lexend({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lexend"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("lexend", lexend.className, "italiana", italiana.className)}
    >
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
