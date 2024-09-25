import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NavBar from './Navbar'
import axios from 'axios'

const FeatureSlider = () => {
  const features = [
    "Login & Auth API's",
    "Better Security and easy to use",
    "Easy upgrade to future versions",
    "****Something Reaclly Cool****"
  ]
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-24 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentFeature}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-center text-blue-600"
        >
          {features[currentFeature]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // https://urldb-backend.vercel.app/1/m1716299394158/get_all_data/v2/emails   to check
    // Here you would typically send the email to your backend
    axios.get(`https://urldb-backend.vercel.app/1/m1716299394158/add_data/v2/emails?email=${email}`);
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <NavBar/>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 pt-24 md:pt-20">
        <div className="max-w-lg w-full flex flex-col text-center">
          <div className="flex flex-col border-b-[1px] border-gray-800">
            <h3 className="text-xl font-bold text-gray-800">Upcoming Features</h3>
            <FeatureSlider />
          </div>

          <div className="space-y-6 pt-4">
            <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">Coming Soon</h2>
            <p className="text-lg text-gray-600 pb-2">
              We're crafting urldb version 2 to revolutionize your URL management experience.
            </p>
          </div>

          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full text-lg py-3 px-4 rounded-lg border-2 border-gray-400"
              />
              <button type="submit" className="w-full text-white text-lg py-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors duration-300">
                Notify Me
              </button>
            </form>
            <AnimatePresence>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-600 font-medium"
                >
                  Thank you! We'll notify you when we launch.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center">
        <p className="text-sm text-gray-600">
          © 2024 urldb. All rights reserved. 
        </p>
      </footer>
    </div>
  )
}