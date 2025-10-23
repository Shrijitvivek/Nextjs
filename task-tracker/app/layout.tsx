import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title : 'Task Tracker',
  description : 'Built with Nextjs'
}


export default function RootLayout({children} : {children : React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <Navbar/>
        <main className='container mx-auto p-4'>{children}</main>
        <footer>
             © {new Date().getFullYear()} Task Tracker
        </footer>
      </body>

    </html>
  )
}
