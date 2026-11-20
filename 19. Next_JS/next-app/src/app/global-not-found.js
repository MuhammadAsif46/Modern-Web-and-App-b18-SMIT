// Import global styles and fonts
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <Image
            src="/images.png"
            alt="404 Not Found"
            width={300}
            height={300}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-4">
            The page you are looking for does not exist.
          </p>
        </div>
      </body>
    </html>
  )
}