"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, Gamepad2, Trophy, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function RaptorLaunchPage() {
  // Generate particles for cosmic field
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 2 + Math.random() * 3,
    size: Math.random() * 2 + 1,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden relative flex flex-col">
      {/* Enhanced Cosmic Particle Field (Full Background) */}
      <div className="absolute inset-0 z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [0.5, 1.5, 0.5],
              boxShadow: [
                "0 0 0px rgba(255,255,255,0.1)",
                "0 0 8px rgba(255,255,255,0.4)",
                "0 0 0px rgba(255,255,255,0.1)",
              ],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 p-4 md:p-6 flex-shrink-0"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div
            className="flex items-center space-x-3"
            animate={{
              textShadow: [
                "0 0 5px rgba(255,255,255,0.3)",
                "0 0 20px rgba(255,255,255,0.6)",
                "0 0 5px rgba(255,255,255,0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight">
              RAPTOR
            </h1>
            <span className="text-sm md:text-base text-gray-400 font-medium tracking-wider">ESPORTS</span>
          </motion.div>

          {/* Coming Soon with gradient */}
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </div>
        </div>
      </motion.header>

      {/* Enhanced space-themed gradient effects (Full Background) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-gradient-radial from-blue-500/5 via-purple-500/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-white/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-radial from-white/2 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Main content container - takes remaining height and centers content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex-grow flex items-center justify-center py-1 px-4 md:py-2 md:px-8"
      >
        <div className="relative w-full max-w-6xl">
          {/* Transparent curved container */}
          <div className="relative bg-black/20 backdrop-blur-sm rounded-[3rem] border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Enhanced Cosmic Particle Field for this section */}
            <div className="absolute inset-0 z-0">
              {particles.slice(0, 40).map((particle) => (
                <motion.div
                  key={`section-${particle.id}`}
                  className="absolute bg-white rounded-full"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: `${particle.size * 0.8}px`,
                    height: `${particle.size * 0.8}px`,
                  }}
                  animate={{
                    opacity: [0.2, 0.9, 0.2],
                    scale: [0.3, 1.2, 0.3],
                    boxShadow: [
                      "0 0 0px rgba(255,255,255,0.2)",
                      "0 0 12px rgba(255,255,255,0.6)",
                      "0 0 0px rgba(255,255,255,0.2)",
                    ],
                  }}
                  transition={{
                    duration: particle.duration + 1,
                    delay: particle.delay,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-8 left-8 text-white/40"
            >
              <Gamepad2 size={32} />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-12 right-12 text-white/40"
            >
              <Trophy size={28} />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-16 left-16 text-white/40"
            >
              <Zap size={24} />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 9,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-12 right-20 text-white/40"
            >
              <Target size={26} />
            </motion.div>

            {/* Main content */}
            <div className="text-center space-y-6 relative z-10">
              {/* Main heading with animation */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="space-y-2"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Website{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Launching Soon
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  We're building something powerful for the esports community. Stay connected.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://discord.gg/6986Kf3eG4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-5 text-lg font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl border-0"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      Join Discord
                    </Button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://www.instagram.com/raptorofficial.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-5 text-lg font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl border-0"
                    >
                      <Instagram className="w-5 h-5 mr-3" />
                      Follow Us
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            {/* Removed Subtle accent line */}
          </div>
        </div>
      </motion.div>

      {/* Overall background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.3),rgba(0,0,0,0.9))] pointer-events-none z-0" />

      {/* Footer */}
      <footer className="relative z-20 p-4 text-right text-gray-500 text-xs flex-shrink-0">
        <div className="max-w-7xl mx-auto">Designed, developed and Imagined by RExIGRIS</div>
      </footer>
    </div>
  )
}
