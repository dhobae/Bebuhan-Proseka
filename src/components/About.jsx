import { motion } from 'framer-motion'
import { MapPin, Users, Heart, Mic2 } from 'lucide-react'

export default function About() {
    const cards = [
        {
            title: "Mabar & Community Event",
            description: "Dari mabar rutin, kopdar santai, hingga mendirikan booth di event anime besar, kami selalu ada untuk mempererat persaudaraan antar pemain.",
            icon: <Users className="w-8 h-8 text-white" />,
            bgColor: "bg-sekai-blue",
            textColor: "text-sekai-blue",
            shadow: "shadow-sekai-blue/30"
        },
        {
            title: "Regional Kalsel",
            description: "Berlokasi di Kalimantan Selatan. Menyatukan para pemain dari Banjarmasin, Banjarbaru, Martapura, dan sekitarnya.",
            icon: <MapPin className="w-8 h-8 text-white" />,
            bgColor: "bg-sekai-green",
            textColor: "text-sekai-green",
            shadow: "shadow-sekai-green/30"
        },
        {
            title: "Semua Welcome",
            description: "Baik kamu pemain kasual maupun competitive tiering yang siap grinding event, semua diterima dengan terbuka di sini.",
            icon: <Heart className="w-8 h-8 text-white" />,
            bgColor: "bg-sekai-orange",
            textColor: "text-sekai-orange",
            shadow: "shadow-sekai-orange/30"
        },
        {
            title: "Sharing & Edukasi",
            description: "Tempat asik untuk bahas meta card, cerita event show, update gacha, hingga tips & trick full combo lagu master.",
            icon: <Mic2 className="w-8 h-8 text-white" />,
            bgColor: "bg-sekai-purple",
            textColor: "text-sekai-purple",
            shadow: "shadow-sekai-purple/30"
        }
    ]

    return (
        <section id="about" className="relative min-h-screen pt-10 pb-24 z-10 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 w-full h-64 bg-white/5 skew-y-[-5deg] z-0 pointer-events-none border-y border-white/10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-10 relative">
                    {/* Background giant text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] font-display font-black text-white/5 uppercase whitespace-nowrap pointer-events-none select-none tracking-tighter mix-blend-overlay">
                        ABOUT US
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block relative"
                    >
                        <div className="absolute inset-0 skew-x-[-10deg] bg-sekai-pink translate-x-2 translate-y-2"></div>
                        <div className="absolute inset-0 skew-x-[-10deg] bg-white border-2 border-sekai-pink"></div>
                        <h2 className="relative px-10 py-4 text-4xl md:text-5xl font-display font-black text-sekai-darker uppercase tracking-wider skew-x-[-10deg]">
                            <div className="skew-x-[10deg]">
                                Tentang Kami
                            </div>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto mt-12 text-lg md:text-xl text-white leading-relaxed font-medium bg-sekai-darker/60 p-6 backdrop-blur-md border-l-4 border-sekai-cyan drop-shadow-lg"
                    >
                        <span className="text-sekai-cyan font-bold tracking-wide">"BEBUHAN"</span> memiliki arti sekumpulan atau sekelompok orang dalam bahasa Banjar.
                        Bebuhan Proseka Kalsel adalah rumah bagi komunitas pemain Project Sekai: Colorful Stage!
                        yang tersebar di wilayah Kalimantan Selatan.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotate: -5 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
                            className="group relative h-full flex mt-8 lg:mt-0"
                        >
                            {/* Shadow/Back layer */}
                            <div className={`absolute inset-0 skew-x-[-6deg] bg-white/10 translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 ${card.shadow} shadow-2xl`}></div>

                            {/* Main Card */}
                            <div className="relative flex flex-col items-center text-center skew-x-[-6deg] bg-sekai-darker border-2 border-white/20 p-8 group-hover:border-white/50 transition-colors w-full z-10">
                                {/* Hover background fill */}
                                <div className={`absolute inset-0 ${card.bgColor} origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out opacity-20`}></div>

                                <div className="skew-x-[6deg] w-full flex flex-col items-center relative z-10 text-white transform-gpu">
                                    <div className={`w-20 h-20 -mt-16 mb-6 rounded-full flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300 border-4 border-sekai-darker ${card.bgColor} shadow-xl`}>
                                        {card.icon}
                                    </div>
                                    <h3 className={`text-2xl font-display font-black uppercase mb-4 tracking-wide ${card.textColor}`}>
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed font-medium">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
