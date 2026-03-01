import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Images, Users, Sparkles as SparklesIcon, ChevronRight } from 'lucide-react'

const Hero3DBackground = React.lazy(() => import('./Hero3DBackground'))

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
            {/* 3D Background - Flat Geometries matching PJ Sekai */}
            <div className="absolute inset-0 z-0 opacity-80">
                <Suspense fallback={<div className="w-full h-full bg-sekai-darker absolute inset-0" />}>
                    <Hero3DBackground />
                </Suspense>
            </div>

            {/* Clean Background Overlays */}
            <div className="absolute top-0 right-0 w-[50vw] h-full bg-sekai-blue/10 skew-x-[-20deg] translate-x-32 z-0 border-l border-white/5"></div>
            <div className="absolute bottom-0 left-0 w-[30vw] h-[60vh] bg-sekai-pink/5 skew-y-[-10deg] -translate-x-10 z-0 pointer-events-none filter blur-2xl"></div>

            {/* Glowing circle behind text as requested (Redrawn outline from user) */}
            <div className="absolute top-1/2 left-[5%] md:left-[10%] w-[90vw] md:w-[50vw] max-w-[600px] aspect-square rounded-full border-[12px] border-sekai-cyan/20 bg-sekai-blue/5 blur-[2px] -translate-y-1/2 z-0 pointer-events-none shadow-[0_0_60px_rgba(0,232,255,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-sekai-cyan/10 to-transparent"></div>
            </div>

            {/* Hero Main Layout */}
            <div className="container mx-auto px-6 z-20 relative flex items-center justify-between min-h-[85vh]  md:pt-0 pb-32 md:pb-10">

                {/* Left Side: Hero Content */}
                <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 md:pt-0 z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{ willChange: "transform, opacity" }}
                    >
                        <div className="inline-block relative mb-12">
                            <div className="absolute inset-0 skew-x-[-12deg] bg-white border-2 border-sekai-cyan shadow-[4px_4px_0_theme(colors.sekai.cyan)]"></div>
                            <div className="relative px-6 py-2 flex items-center gap-2 text-sekai-darker font-display font-bold text-sm">
                                <SparklesIcon className="w-5 h-5 text-sekai-cyan fill-sekai-cyan" />
                                <span className="tracking-wider">WELCOME TO SEKAI</span>
                            </div>
                        </div>

                        <h1 className="text-6xl sm:text-6xl md:text-8xl lg:text-[9rem] font-display font-black text-white leading-[0.85] mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] tracking-tighter uppercase relative">
                            Bebuhan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sekai-cyan to-sekai-blue">
                                Proseka
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl text-white font-medium max-w-xl drop-shadow-md border-l-4 border-sekai-pink pl-4 sm:pl-6 bg-sekai-darker/50 py-2 sm:py-3 pr-3 sm:pr-4 backdrop-blur-sm relative z-10 rounded-r-lg">
                            Komunitas penggiat game rhythm <br /> <span className="text-sekai-cyan font-bold">Project Sekai</span> regional Kalimantan Selatan.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        style={{ willChange: "transform, opacity" }}
                        className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 pt-2 w-full"
                    >
                        {/* Primary Button */}
                        <a href="#about" className="group relative w-full sm:w-auto h-12 sm:h-14 lg:h-auto">
                            <div className="absolute inset-0 skew-x-[-12deg] bg-sekai-cyan translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
                            <div className="absolute inset-0 skew-x-[-12deg] bg-white border-2 border-sekai-cyan group-hover:bg-sekai-cyan transition-all duration-300"></div>
                            <div className="relative px-5 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 flex items-center justify-center h-full gap-2 sm:gap-3 font-display font-bold text-sm sm:text-base lg:text-xl text-sekai-darker group-hover:text-white transition-colors duration-300">
                                <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                <span className="tracking-wide text-nowrap">TENTANG KAMI</span>
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                            </div>
                        </a>

                        {/* Secondary Button */}
                        <a href="#gallery" className="group relative w-full sm:w-auto h-12 sm:h-14 lg:h-auto">
                            <div className="absolute inset-0 skew-x-[-12deg] bg-white/10 backdrop-blur-md border-2 border-white/30 group-hover:border-sekai-pink transition-all duration-300 glow-pink"></div>
                            <div className="relative px-5 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 flex items-center justify-center h-full gap-2 sm:gap-3 font-display font-bold text-sm sm:text-base lg:text-xl text-white transition-colors duration-300">
                                <Images className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-sekai-pink" />
                                <span className="tracking-wide text-nowrap">GALERI KAMI</span>
                            </div>
                        </a>
                    </motion.div>
                </div>

                {/* Right Side: Character Image (Mafuyu) - Always stays in position */}
                <div className="absolute right-0 top-[45%] -translate-y-1/2 w-[60%] sm:w-[50%] md:w-[45%] h-[70vh] md:h-[75vh] z-[5] group transition-transform duration-700 hover:scale-[1.02] opacity-40 sm:opacity-60 md:opacity-100">

                    {/* Outer glow layer — blurred purple shadow behind the frame */}
                    <div className="absolute inset-0 skew-x-[-12deg] blur-[28px] scale-[1.08] bg-[#BA55D3]/35 rounded-sm pointer-events-none" />

                    {/* Secondary softer glow for depth */}
                    <div className="absolute inset-0 skew-x-[-12deg] blur-[55px] scale-[1.18] bg-[#BA55D3]/20 rounded-sm pointer-events-none" />

                    {/* Main parallelogram container */}
                    <div className="relative w-full h-full skew-x-[-12deg] overflow-hidden border-[4px] sm:border-[6px] border-[#BA55D3]/80 bg-sekai-darker"
                        style={{
                            boxShadow: `
                0 0 18px rgba(186,85,211,0.55),
                0 0 40px rgba(186,85,211,0.25),
                inset 0 0 20px rgba(186,85,211,0.12)
            `
                        }}
                    >
                        {/* Un-skew the image so only the container is parallelogram */}
                        <div className="skew-x-[12deg] w-[130%] h-full -ml-[15%] relative">
                            <img
                                src="/maskot/mafuyu.jpg"
                                alt="Maskot Mafuyu"
                                className="w-full h-full object-cover object-center opacity-95 transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    /* Fade all 4 sides smoothly */
                                    WebkitMaskImage: `linear-gradient(
                        to bottom,
                        transparent 0%,
                        black 15%,
                        black 85%,
                        transparent 100%
                    ),
                    linear-gradient(
                        to right,
                        transparent 0%,
                        black 15%,
                        black 85%,
                        transparent 100%
                    )`,
                                    WebkitMaskComposite: 'destination-in',
                                    maskImage: `linear-gradient(
                        to bottom,
                        transparent 0%,
                        black 15%,
                        black 85%,
                        transparent 100%
                    ),
                    linear-gradient(
                        to right,
                        transparent 0%,
                        black 15%,
                        black 85%,
                        transparent 100%
                    )`,
                                    maskComposite: 'intersect',
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>

                        {/* Inner border accent — purple tint mix-blend */}
                        <div className="absolute inset-0 border-[3px] sm:border-4 border-[#BA55D3]/50 mix-blend-screen pointer-events-none z-10" />

                        {/* Subtle inner top-to-bottom gradient overlay for extra depth */}
                        <div className="absolute inset-0 pointer-events-none z-10"
                            style={{
                                background: 'linear-gradient(180deg, rgba(186,85,211,0.08) 0%, transparent 40%, transparent 60%, rgba(186,85,211,0.12) 100%)'
                            }}
                        />
                    </div>

                    {/* Decorative offset border lines behind */}
                    <div className="absolute inset-0 skew-x-[-12deg] border border-[#BA55D3]/30 translate-x-3 translate-y-3 pointer-events-none rounded-sm" />
                    <div className="absolute inset-0 skew-x-[-12deg] border border-[#BA55D3]/15 translate-x-6 translate-y-6 pointer-events-none rounded-sm" />

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#BA55D3] opacity-70 skew-x-[-12deg]" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#BA55D3] opacity-70 skew-x-[-12deg]" />
                </div>
            </div>

            {/* Slanted bottom divider — extended to close any gap */}
            <div className="absolute -bottom-24 left-0 w-full h-48 bg-sekai-darker skew-y-[-3deg] z-10 origin-bottom-left"></div>
        </section>
    )
}
