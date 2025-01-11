// import "@/styles/globals.css"
import "@/app/globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "next-themes"
import { NavigationBar } from "@/components/navigation-bar"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-black text-white">
            <NavigationBar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

