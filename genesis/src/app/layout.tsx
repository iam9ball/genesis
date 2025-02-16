import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import {ClerkProvider} from "@clerk/nextjs"
import { ThemeProvider } from '@/components/theme'
import Script from 'next/script'
import { ToastProvider } from '@/components/ui/toast'
import { Toaster } from '@/components/ui/toaster'
import ReactQueryProvider from '@/react-query'



export const metadata: Metadata = {
  title: 'GenesisAI - Redefine Video creation and sharing',
  description: 'Share AI powered videos with your friends.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={` bg-[#000000]  text-white min-h-screen font-mono`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <ReactQueryProvider>
              {children}
              <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" />
            </ReactQueryProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
