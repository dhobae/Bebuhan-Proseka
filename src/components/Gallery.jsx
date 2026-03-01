import { useState, useCallback, useRef, useEffect, memo } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft } from 'lucide-react'

const images = [
    "IMG_7423.webp", "IMG_7424.webp", "IMG_7426.webp", "IMG_7427.webp",
    "IMG_7428.webp", "IMG_7429.webp", "IMG_7430.webp", "IMG_7431.webp",
    "IMG_7434.webp", "IMG_7435.webp", "IMG_7436.webp", "IMG_7437.webp",
    "IMG_7441.webp", "IMG_7442.webp", "IMG_7443.webp", "IMG_7444.webp",
    "IMG_7446.webp", "IMG_7447.webp", "IMG_7448.webp", "IMG_7449.webp",
    "IMG_7450.webp", "IMG_7451.webp", "IMG_7453.webp", "IMG_7454.webp",
    "IMG_7496.webp", "IMG_7497.webp", "IMG_7498.webp", "IMG_7499.webp",
    "IMG_7500.webp", "IMG_7503.webp", "IMG_7504.webp", "IMG_7505.webp",
    "IMG_7506.webp", "IMG_7507.webp", "IMG_7508.webp", "IMG_7509.webp",
    "IMG_7510.webp", "IMG_7511.webp", "IMG_7512.webp", "IMG_7513.webp",
    "IMG_7514.webp", "IMG_7515.webp", "IMG_7516.webp", "IMG_7517.webp",
    "IMG_7518.webp"
]

const unitColors = [
    'border-sekai-cyan', 'border-sekai-pink', 'border-sekai-blue',
    'border-sekai-orange', 'border-sekai-green', 'border-sekai-purple'
]

// Skeleton placeholder
const ImageSkeleton = () => (
    <div className="w-full h-full absolute inset-0 bg-white/5 animate-pulse">
        <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
    </div>
)

// Individual image card — memo to prevent re-render saat parent update
const GalleryCard = memo(({ img, index, onClick }) => {
    const [loaded, setLoaded] = useState(false)
    const [inView, setInView] = useState(false)
    const ref = useRef(null)
    const borderColor = unitColors[index % unitColors.length]

    // Intersection Observer per card — hanya load saat masuk viewport
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect() // stop observing setelah masuk
                }
            },
            { rootMargin: '200px' } // preload 200px sebelum terlihat
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: (index % 10) * 0.04 }}
            className="relative aspect-square cursor-pointer group"
            onClick={() => onClick(index)}
        >
            <div className={`absolute inset-0 skew-x-[-8deg] bg-sekai-darker border-4 ${borderColor} overflow-hidden transform group-hover:scale-105 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]`}>
                <div className="w-[120%] h-full -ml-[10%] skew-x-[8deg] relative">
                    {/* Skeleton tampil selama belum loaded */}
                    {!loaded && <ImageSkeleton />}

                    {/* Gambar hanya di-render saat inView */}
                    {inView && (
                        <img
                            src={`/img/${img}`}
                            alt={`Dokumentasi ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                            onLoad={() => setLoaded(true)}
                            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-100
                                ${loaded ? 'opacity-70' : 'opacity-0'}`}
                        />
                    )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-sekai-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
        </motion.div>
    )
})
GalleryCard.displayName = 'GalleryCard'

// Lightbox — memo terpisah
const Lightbox = memo(({ selectedIndex, onClose, onPrev, onNext }) => {
    const img = images[selectedIndex]
    const [imgLoaded, setImgLoaded] = useState(false)

    // Reset loading state setiap ganti gambar
    useEffect(() => { setImgLoaded(false) }, [img])

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowLeft') onPrev()
            if (e.key === 'ArrowRight') onNext()
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [onClose, onPrev, onNext])

    return createPortal(
        <AnimatePresence>
            {img && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[9999] bg-sekai-darker/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                >
                    {/* Counter */}
                    <div className="absolute top-6 left-6 text-white/50 font-display font-bold text-sm">
                        {selectedIndex + 1} / {images.length}
                    </div>

                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 lg:top-10 lg:right-10 group z-[10000]"
                        onClick={(e) => { e.stopPropagation(); onClose() }}
                    >
                        <div className="absolute inset-0 skew-x-[-10deg] bg-sekai-pink group-hover:scale-110 transition-transform" />
                        <div className="relative px-6 py-2 flex items-center gap-2 text-white font-display font-black skew-x-[-10deg]">
                            <div className="skew-x-[10deg] flex items-center">
                                <X className="w-6 h-6 mr-1" /> Tutup
                            </div>
                        </div>
                    </button>

                    {/* Prev */}
                    {selectedIndex > 0 && (
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-sekai-dark/50 hover:bg-sekai-cyan/50 text-white p-3 rounded-full z-[10000] transition-colors border-2 border-white/20 hover:border-sekai-cyan"
                            onClick={(e) => { e.stopPropagation(); onPrev() }}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                    )}

                    {/* Next */}
                    {selectedIndex < images.length - 1 && (
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-sekai-dark/50 hover:bg-sekai-cyan/50 text-white p-3 rounded-full z-[10000] transition-colors border-2 border-white/20 hover:border-sekai-cyan"
                            onClick={(e) => { e.stopPropagation(); onNext() }}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    )}

                    {/* Spinner — tampil saat gambar belum siap */}
                    <AnimatePresence>
                        {!imgLoaded && (
                            <motion.div
                                key="spinner"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none z-[9998]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Spinner ring */}
                                <div className="relative w-16 h-16">
                                    <div className="absolute inset-0 rounded-full border-4 border-white/10" />
                                    <div className="absolute inset-0 rounded-full border-4 border-t-sekai-cyan border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                                    <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-sekai-pink border-b-transparent border-l-transparent animate-spin [animation-direction:reverse] [animation-duration:0.6s]" />
                                </div>
                                <p className="text-white/50 font-display text-sm tracking-widest uppercase animate-pulse">
                                    Memuat...
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.img
                        key={img}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: imgLoaded ? 1 : 0, scale: imgLoaded ? 1 : 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                        src={`/img/${img}`}
                        alt="Preview"
                        onLoad={() => setImgLoaded(true)}
                        className="max-w-full max-h-[85vh] object-contain shadow-2xl border-4 border-white/20 relative z-[9999]"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
})
Lightbox.displayName = 'Lightbox'

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [visibleCount, setVisibleCount] = useState(10)

    const handleOpen = useCallback((index) => setSelectedIndex(index), [])
    const handleClose = useCallback(() => setSelectedIndex(null), [])
    const handlePrev = useCallback(() => setSelectedIndex(i => Math.max(0, i - 1)), [])
    const handleNext = useCallback(() => setSelectedIndex(i => Math.min(images.length - 1, i + 1)), [])
    const handleLoadMore = useCallback(() => setVisibleCount(c => Math.min(c + 10, images.length)), [])
    const handleLoadLess = useCallback(() => setVisibleCount(c => Math.max(c - 10, 10)), [])

    const visibleImages = images.slice(0, visibleCount)

    return (
        <section id="gallery" className="relative min-h-screen py-24 z-10 bg-sekai-darker overflow-hidden">
            <div className="absolute inset-0 bg-sekai-blue/5 skew-y-[-10deg] scale-150 origin-top-left z-0 pointer-events-none border-t-2 border-white/5" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[14rem] font-display font-black text-white/5 uppercase whitespace-nowrap pointer-events-none select-none tracking-tighter mix-blend-overlay">
                        GALLERY
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block relative mb-6"
                    >
                        <div className="absolute inset-0 skew-x-[-10deg] bg-sekai-blue translate-x-2 translate-y-2" />
                        <div className="absolute inset-0 skew-x-[-10deg] bg-white border-2 border-sekai-blue" />
                        <h2 className="relative px-10 py-4 text-4xl md:text-5xl font-display font-black text-sekai-darker uppercase tracking-wider skew-x-[-10deg]">
                            <div className="skew-x-[10deg]">
                                Galeri <span className="text-sekai-blue">Kami</span>
                            </div>
                        </h2>
                    </motion.div>
                    <p className="text-white max-w-2xl mx-auto flex items-center justify-center gap-2 font-medium bg-sekai-darker/60 p-4 backdrop-blur-md border-r-4 border-sekai-blue drop-shadow-lg">
                        Koleksi dokumentasi kegiatan Bebuhan Proseka
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 px-4">
                    <AnimatePresence>
                        {visibleImages.map((img, index) => (
                            <GalleryCard
                                key={img}
                                img={img}
                                index={index}
                                onClick={handleOpen}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Buttons */}
                <div className="mt-16 flex justify-center gap-4 flex-wrap">
                    {visibleCount > 10 && (
                        <button onClick={handleLoadLess} className="group relative">
                            <div className="absolute inset-0 skew-x-[-12deg] bg-white/5 border-2 border-white/20 group-hover:border-sekai-pink transition-all duration-300" />
                            <div className="relative px-6 py-4 flex items-center gap-2 font-display font-bold text-base md:text-lg text-white group-hover:text-sekai-pink transition-colors duration-300">
                                <ChevronsLeft className="w-5 h-5 rotate-90" />
                                <span>MUAT LEBIH SEDIKIT</span>
                            </div>
                        </button>
                    )}
                    {visibleCount < images.length && (
                        <button onClick={handleLoadMore} className="group relative">
                            <div className="absolute inset-0 skew-x-[-12deg] bg-white/5 border-2 border-white/20 group-hover:border-sekai-blue transition-all duration-300" />
                            <div className="relative px-6 py-4 flex items-center gap-2 font-display font-bold text-base md:text-lg text-white group-hover:text-sekai-blue transition-colors duration-300">
                                <span>MUAT LEBIH BANYAK</span>
                                <ChevronsRight className="w-5 h-5 rotate-90" />
                            </div>
                        </button>
                    )}
                </div>
            </div>

            {/* Lightbox */}
            {typeof document !== 'undefined' && selectedIndex !== null && (
                <Lightbox
                    selectedIndex={selectedIndex}
                    onClose={handleClose}
                    onPrev={handlePrev}
                    onNext={handleNext}
                />
            )}
        </section>
    )
}