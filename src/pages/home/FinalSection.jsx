import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#FBFBF9] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <span className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase">
                        Atendimento Imediato
                    </span>

                    <h2 className="text-4xl md:text-6xl font-serif text-[#550F12] leading-tight">
                        Pronto para garantir <br />
                        <span className="italic">seus direitos?</span>
                    </h2>

                    <p className="text-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Não deixe sua segurança jurídica para depois. Fale agora diretamente com o Dr. Hugo Moura e receba uma orientação estratégica e sigilosa.
                    </p>

                    {/* Botão de WhatsApp Gigante e Elegante */}
                    <div className="flex justify-center pt-6">
                        <motion.a
                            href="https://wa.me/551630130049"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center gap-4 bg-[#550F12] text-white px-10 py-6 md:px-16 md:py-8 shadow-2xl overflow-hidden transition-all duration-500"
                        >
                            {/* Efeito de brilho no hover */}
                            <div className="absolute inset-0 bg-[#C5A059] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

                            <MessageCircle className="w-6 h-6 md:w-8 md:h-8 relative z-10 group-hover:text-[#550F12] transition-colors" />
                            <span className="relative z-10 text-sm md:text-lg font-bold uppercase tracking-[0.2em] group-hover:text-[#550F12] transition-colors">
                                Iniciar Consulta via WhatsApp
                            </span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:text-[#550F12] group-hover:translate-x-2 transition-all" />
                        </motion.a>
                    </div>

                    <p className="text-gray-400 text-xs uppercase tracking-widest pt-4">
                        Resposta em poucos minutos • Sigilo Absoluto
                    </p>
                </motion.div>

            </div>

            {/* Detalhe decorativo de fundo */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl"></div>
        </section>
    );
};

export default FinalCTA;