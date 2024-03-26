import Link from 'next/link'
import NavList from '../components/NavList'
import './globals.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="px-6 max-w-3xl mx-auto bg-gradient-to-b from-orange-300 to-orange-400">
        <div className="px-6 max-w-3xl mx-auto my-8 rounded-lg border shadow-2xl bg-orange-100 backdrop-filter backdrop-blur-lg bg-opacity-30">
          <main>{children}</main>
          <footer className="mt-5">
            <div className=" py-6 lg:py-8">
              <div className=" md:justify-between">
                <div className="mb-6 md:mb-0">
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div >
                    <ul className=" flex text-gray-600 font-medium">
                      Contact my&nbsp; <NavList navId="linkedin" />
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">            
                  <ul className="flex text-gray-600 font-medium">
                  © 2024 For more projects see our&nbsp; <NavList navId="github" /> 
                  </ul>    
                </span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
