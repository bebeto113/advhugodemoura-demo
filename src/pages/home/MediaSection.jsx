import React from 'react';
import { motion } from 'framer-motion';
import { Tv, MapPin, ExternalLink } from 'lucide-react';

// Importações das suas imagens reais
import HugoTV1 from '../../assets/entrevistas/01.jpg';
import HugoTV2 from '../../assets/entrevistas/02.jpg';
import HugoTV3 from '../../assets/entrevistas/03.jpg';

const pressGallery = [
    {
        id: 1,
        title: "Análise técnica sobre os índices de trânsito violento",
        location: "Entrevista em Estúdio",
        date: "Destaque Recente",
        image: HugoTV1,
    },
    {
        id: 2,
        title: "Especialista em trânsito analisa segurança nas vias",
        location: "EPTV / Afiliada Globo",
        date: "Cobertura Externa",
        image: HugoTV2,
    },
    {
        id: 3,
        title: "Comentários sobre infraestrutura e falhas estruturais",
        location: "Jornal da Clube",
        date: "Análise Jurídica",
        image: HugoTV3,
    }
];

const MediaSection = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#550F12] relative overflow-hidden">

            {/* Textura de grão sutil para disfarçar a compressão das fotos */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-50"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Cabeçalho */}
                <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-8 h-[1px] bg-[#C5A059]"></div>
                        <span className="text-[#C5A059] text-xs font-bold tracking-[0.3em] uppercase">
                            Autoridade na Imprensa
                        </span>
                        <div className="w-8 h-[1px] bg-[#C5A059]"></div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif text-white leading-tight"
                    >
                        Hugo Moura na <span className="italic text-[#C5A059]">Mídia</span>
                    </motion.h2>
                </div>

                {/* Galeria estilo "Acervo de Luxo" */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {pressGallery.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative"
                        >
                            {/* MOLDURA (Passepartout) - Protege a resolução da imagem */}
                            <div className="bg-[#FBFBF9] p-4 pb-12 shadow-2xl transition-all duration-500 group-hover:-rotate-1 group-hover:translate-y-[-10px]">
                                <div className="relative aspect-video overflow-hidden bg-black">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />
                                    {/* Filtro sutil de "TV antiga" para dar estilo à baixa resolução */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                </div>

                                {/* Legenda do Card */}
                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center gap-2 text-[#550F12] opacity-60">
                                        <Tv className="w-3 h-3" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{item.location}</span>
                                    </div>
                                    <h3 className="text-lg font-serif text-[#550F12] leading-snug">
                                        "{item.title}"
                                    </h3>
                                </div>
                            </div>

                            {/* Sombra projetada no fundo */}
                            <div className="absolute -bottom-4 -right-4 w-full h-full bg-black/20 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Logos das Emissoras (Social Proof) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="mt-24 pt-12 border-t border-white/10 flex flex-wrap justify-center items-center gap-12 grayscale brightness-200"
                >
                    <span className="text-white text-xl font-bold tracking-tighter italic">EPTV</span>
                    <span className="text-white text-xl font-bold tracking-tighter italic">TV CLUBE</span>
                    <span className="text-white text-xl font-bold tracking-tighter italic">RECORD TV</span>
                    <span className="text-white text-xl font-bold tracking-tighter italic">RADIO BAND</span>
                </motion.div>

            </div>
        </section>
    );
};

export default MediaSection;