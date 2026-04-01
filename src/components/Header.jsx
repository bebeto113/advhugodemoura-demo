import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 1. BLOQUEIO DE ROLAGEM DO FUNDO (Scroll Lock)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Cleanup ao desmontar o componente
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const menuVariants = {
        closed: { x: "100%", transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
        opened: { x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
    };

    const menuItems = [
        { name: 'Início', href: '#inicio' },
        { name: 'Áreas de Atuação', href: '#areas-de-atuacao' },
        { name: 'Imprensa', href: '#imprensa' },
        { name: 'Sobre o Escritório', href: '#sobre' },
        { name: 'Contato', href: '#contato' }
    ];

    return (
        <>
            {/* BOTÃO DE MENU (TRIGGER) */}
            <nav className="fixed top-6 right-6 md:top-10 md:right-10 z-[1001]">
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-4 group   border border-white/10 p-2 rounded-full shadow-2xl transition-all hover:border-[#C5A059]/50"
                >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#C5A059] rounded-full flex items-center justify-center text-[#550F12] transition-transform group-hover:scale-110">
                        <Menu className="w-5 h-5" />
                    </div>
                </button>
            </nav>

            {/* OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1002]"
                    />
                )}
            </AnimatePresence>

            {/* MENU LATERAL */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="opened"
                        exit="closed"
                        className={`
              fixed top-0 right-0 h-full z-[1003] flex flex-col
              w-[80vw] md:w-[450px] 
              bg-[#550F12]/95 backdrop-blur-xl 
              shadow-[-20px_0_80px_rgba(0,0,0,0.5)] 
              border-l border-white/5
              /* CUSTOM SCROLLBAR PARA O MENU */
              overflow-y-auto overflow-x-hidden
              [&::-webkit-scrollbar]:w-1
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:bg-[#C5A059]/30
              hover:[&::-webkit-scrollbar-thumb]:bg-[#C5A059]/60
            `}
                    >
                        {/* TOPO FIXO: Logo + X (Sempre visível ao abrir) */}
                        <div className="sticky top-0 z-20 p-8 md:p-12 flex justify-between items-center bg-[#550F12]/10 backdrop-blur-md border-b border-white/5">
                            <div className="flex flex-col">
                                <span className="text-[#C5A059] font-serif text-xl md:text-2xl tracking-tighter">Hugo Moura</span>
                                <span className="text-white/30 text-[8px] uppercase tracking-[0.3em]">Advocacia</span>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#550F12] transition-all duration-300"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* LISTA DE NAVEGAÇÃO */}
                        <div className="flex-grow flex flex-col py-4">
                            {menuItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-center justify-between px-8 md:px-12 py-6 md:py-8 border-b border-white/5 hover:bg-white/[0.03] transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-[#C5A059] text-[10px] font-sans opacity-40">0{i + 1}</span>
                                            <span className="text-xl md:text-2xl font-serif text-white group-hover:text-[#C5A059] transition-colors">
                                                {item.name}
                                            </span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-[#C5A059] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        {/* RODAPÉ DO MENU */}
                        <div className="mt-auto p-8 md:p-12 bg-black/20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-[#550F12]">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Atendimento Prioritário</p>
                                    <p className="text-sm md:text-base font-bold tracking-widest text-white">(16) 3013-0049</p>
                                </div>
                            </div>
                            <p className="text-white/20 text-[8px] uppercase tracking-[0.4em]">
                                OAB/SP 00.000 • Sigilo Absoluto
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;