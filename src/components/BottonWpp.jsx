import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Adicionado para animação de entrada
import { MessageCircle } from 'lucide-react';

const BottonWpp = () => {
    const [bgColor, setBgColor] = useState('#25D366');
    const [isVisible, setIsVisible] = useState(false); // Estado para controlar a visibilidade
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleScrollAndColor = () => {
            // 1. Lógica de Visibilidade (Aparecer após o Hero)
            // Detecta se o scroll passou de 80% da altura da tela (quase saindo do Hero)
            const heroHeight = window.innerHeight * 0.8;
            if (window.scrollY > heroHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // 2. Sua Lógica de Detecção de Cor de Fundo
            if (!buttonRef.current) return;

            const rect = buttonRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            try {
                const tempElement = document.elementFromPoint(centerX, centerY);
                if (!tempElement) return;

                const computedStyle = window.getComputedStyle(tempElement);
                const bgColorValue = computedStyle.backgroundColor;

                const rgb = bgColorValue.match(/\d+/g);
                if (rgb && rgb.length >= 3) {
                    const r = parseInt(rgb[0]);
                    const g = parseInt(rgb[1]);
                    const b = parseInt(rgb[2]);

                    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

                    // Ajuste: Se o fundo for o Bordeaux (#550F12), o botão fica Verde.
                    // Se o fundo for claro (#FBFBF9), o botão fica Bordeaux.
                    if (luminance > 0.5) {
                        setBgColor('#550F12');
                    } else {
                        setBgColor('#25D366');
                    }
                }
            } catch (e) {
                // Fallback caso o elementFromPoint falhe em algum browser
                setBgColor('#25D366');
            }
        };

        // Detecta ao carregar e ao scrollar
        window.addEventListener('scroll', handleScrollAndColor);
        window.addEventListener('resize', handleScrollAndColor);
        handleScrollAndColor(); // Executa uma vez no mount

        return () => {
            window.removeEventListener('scroll', handleScrollAndColor);
            window.removeEventListener('resize', handleScrollAndColor);
        };
    }, []);

    return (
        /* AnimatePresence permite que o botão saia da tela com animação quando voltar ao Hero */
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0, opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[999]"
                >
                    <a
                        ref={buttonRef}
                        href="https://wa.me/551630130049"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl group border-2 transition-all duration-500 hover:scale-110"
                        style={{
                            backgroundColor: bgColor,
                            color: '#fff',
                            borderColor: bgColor === '#550F12' ? 'rgba(255,255,255,0.1)' : 'transparent'
                        }}
                    >


                        {/* Ícone */}
                        <MessageCircle className="w-8 h-8 md:w-10 md:h-10 relative z-10" />

                        {/* Tooltip Elegante */}
                        <span className="absolute right-full mr-4 bg-[#550F12] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-2 px-4 whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#C5A059]/30">
                            Falar com Dr. Hugo
                        </span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BottonWpp;