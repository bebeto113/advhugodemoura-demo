import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import Statue from '../../assets/tingey-injury-law-firm-L4YGuSg0fxs-unsplash-removebg-preview.png';

const Hero = () => {
    const containerRef = useRef(null);

    // Hook do Framer Motion para Parallax suave (Sem sumir o texto)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // O texto move levemente para baixo (efeito parallax) enquanto o usuário rola a página, 
    // mas NUNCA desaparece (removida a opacidade atrelada ao scroll).
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    // Curva de animação de entrada super suave (Estilo Apple/Premium)
    const customEase = [0.16, 1, 0.3, 1];

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen md:pt-36 min-h-[600px] bg-[#550F12] overflow-hidden flex flex-col items-center justify-center font-sans"
        >
            {/* 1. TEXTURA DE FUNDO (A Estátua como marca d'água monumental) */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            >
                <motion.img
                    src={Statue}
                    alt="Textura Justiça"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.25, scale: 1 }} // Opacidade muito baixa, apenas textura
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="w-[150vw] md:w-[80vw] lg:w-[60vw] h-auto object-cover mix-blend-overlay"
                />
            </motion.div>

            {/* 2. ILUMINAÇÃO CINEMATOGRÁFICA (Glow central para destacar o texto) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#C5A059] rounded-full blur-[100px] md:blur-[120px] pointer-events-none z-10"
            />

            {/* 3. CONTEÚDO CENTRALIZADO (O Foco Absoluto) */}
            <motion.div
                style={{ y: textY }}
                className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-4xl mt-10 md:mt-0"
            >
                {/* Kicker (Subtítulo superior) */}
                <div className="overflow-hidden mb-4 md:mb-6">
                    <motion.p
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: customEase }}
                        className="text-[#C5A059] text-[10px] md:text-sm font-medium tracking-[0.3em] md:tracking-[0.4em] uppercase"
                    >
                        Sociedade de Advocacia
                    </motion.p>
                </div>

                {/* Nome do Advogado (Título Principal) */}
                <div className="overflow-hidden pb-2">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: customEase }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-serif text-white tracking-tight leading-none"
                    >
                        HUGO MOURA
                    </motion.h1>
                </div>

                {/* Linha divisória minimalista */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: customEase }}
                    className="w-12 md:w-24 h-[1px] bg-[#C5A059]/50 my-6 md:my-8"
                />

                {/* Texto Curto e Elegante */}
                <div className="overflow-hidden mb-10 md:mb-12">
                    <motion.p
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: customEase }}
                        className="text-gray-300 text-sm md:text-lg lg:text-xl font-light max-w-md md:max-w-lg leading-relaxed px-4 md:px-0"
                    >
                        Excelência, estratégia e sigilo absoluto na defesa implacável dos seus interesses.
                    </motion.p>
                </div>

                {/* 4. BOTÃO SUTIL (CTA Elegante guiando para Áreas de Atuação) */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <a
                        href="#areas-de-atuacao" // Link âncora para a próxima seção
                        className="group relative inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 border border-white/20 text-white text-xs md:text-sm uppercase tracking-[0.15em] hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-500 overflow-hidden"
                    >
                        {/* Fundo hover sutil */}
                        <div className="absolute inset-0 bg-[#C5A059]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

                        <span className="relative z-10">Conheça nossa atuação</span>
                        <ArrowDownRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
                    </a>
                </motion.div>
            </motion.div>

            {/* 5. INDICADOR DE ROLAGEM (Scroll Down) - Mantido para estética */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none"
            >
                {/* Linha animada */}
                <div className="w-[1px] h-10 md:h-12 bg-white/10 overflow-hidden relative">
                    <motion.div
                        className="w-full h-full bg-[#C5A059]"
                        initial={{ y: "-100%" }}
                        animate={{ y: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut",
                            repeatDelay: 0.5
                        }}
                    />
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;