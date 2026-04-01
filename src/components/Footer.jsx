import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#550F12] pt-20 pb-10 relative overflow-hidden border-t border-white/5">

            {/* Detalhe estético: Logo gigante em marca d'água no fundo */}
            <div className="absolute bottom-0 left-0 text-white/[0.02] font-serif text-[20vw] leading-none pointer-events-none select-none translate-y-1/4 -translate-x-10">
                HUGO MOURA
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* COLUNA 1: BRANDING */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center text-[#550F12] font-serif font-bold text-sm shadow-xl">
                                HM
                            </div>
                            <h3 className="text-white font-serif text-xl tracking-widest uppercase">Hugo Moura</h3>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light">
                            Excelência jurídica e estratégia implacável na defesa dos seus direitos e do seu patrimônio.
                        </p>

                    </div>

                    {/* COLUNA 2: NAVEGAÇÃO RÁPIDA */}
                    <div className="space-y-6">
                        <h4 className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em]">Navegação</h4>
                        <ul className="space-y-4">
                            {['Início', 'Áreas de Atuação', 'Imprensa', 'Sobre', 'Contato'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                                        <div className="w-0 h-[1px] bg-[#C5A059] group-hover:w-4 transition-all duration-300"></div>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUNA 3: ESPECIALIDADES */}
                    <div className="space-y-6">
                        <h4 className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em]">Especialidades</h4>
                        <ul className="space-y-4">
                            {['Direito de Trânsito', 'Direito de Família', 'Direito Civil', 'Sucessões', 'Saúde e Seguros'].map((item) => (
                                <li key={item} className="text-white/40 text-sm font-light">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUNA 4: CONTATO & LOCALIZAÇÃO */}
                    <div className="space-y-6">
                        <h4 className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em]">Contato Direto</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 group">
                                <MapPin className="w-5 h-5 text-[#C5A059] mt-0.5" />
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Av. Paulista, 1000 - 12º Andar<br />
                                    Bela Vista, São Paulo - SP
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#C5A059]" />
                                <p className="text-white/60 text-sm font-bold tracking-widest">(16) 3013-0049</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#C5A059]" />
                                <p className="text-white/60 text-sm">contato@hugomoura.adv.br</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BARRA FINAL: COPYRIGHT & OAB */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
                            © 2024 Hugo Moura Sociedade de Advocacia • OAB/SP 00.000
                        </p>
                        <p className="text-white/20 text-[9px] mt-2">
                            Desenvolvido com excelência para o mercado jurídico de alto padrão.
                        </p>
                    </div>

                    {/* Botão Voltar ao Topo Sutil */}
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-3 group"
                    >
                        <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] group-hover:text-white transition-colors">Voltar ao topo</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:bg-[#C5A059] group-hover:text-[#550F12] group-hover:border-[#C5A059] transition-all">
                            <ChevronUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;