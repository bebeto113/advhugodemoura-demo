import React from 'react';
import { motion } from 'framer-motion';
import {
    Car,
    Users,
    Scale,
    ScrollText,
    HeartPulse,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';

// Array de dados para facilitar a manutenção e deixar o código limpo
const areasOfPractice = [
    {
        id: 1,
        title: "Direito de Trânsito",
        icon: <Car strokeWidth={1.5} className="w-8 h-8" />,
        description: "Defesa especializada para condutores e proprietários. Atuação em suspensão, cassação de CNH e multas.",
    },
    {
        id: 2,
        title: "Direito de Família",
        icon: <Users strokeWidth={1.5} className="w-8 h-8" />,
        description: "Resolução sensível e estratégica de divórcios, pensão alimentícia, guarda e partilha de bens.",
    },
    {
        id: 3,
        title: "Direito Civil",
        icon: <Scale strokeWidth={1.5} className="w-8 h-8" />,
        description: "Proteção do seu patrimônio e direitos em contratos, indenizações e responsabilidade civil.",
    },
    {
        id: 4,
        title: "Direito das Sucessões",
        icon: <ScrollText strokeWidth={1.5} className="w-8 h-8" />,
        description: "Planejamento sucessório, inventários e testamentos conduzidos com agilidade e segurança.",
    },
    {
        id: 5,
        title: "Direito de Saúde",
        icon: <HeartPulse strokeWidth={1.5} className="w-8 h-8" />,
        description: "Garantia de acesso a tratamentos, cirurgias e medicamentos negados por planos de saúde ou SUS.",
    },
    {
        id: 6,
        title: "Direito Securitário",
        icon: <ShieldCheck strokeWidth={1.5} className="w-8 h-8" />,
        description: "Atuação contundente contra seguradoras para garantir o pagamento justo de apólices e sinistros.",
    }
];

const AreasActivity = () => {
    return (
        // Fundo claro e luxuoso (Off-white/Cream) para dar contraste com o Hero escuro
        <section id="areas-de-atuacao" className="py-24 lg:py-32 bg-[#FBFBF9] relative">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Cabeçalho da Seção */}
                <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-[#C5A059] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4"
                    >
                        Especialidades
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#550F12]"
                    >
                        Nossas Áreas de Atuação
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-16 h-[2px] bg-[#C5A059] mt-8"
                    />
                </div>

                {/* Grid Responsivo */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {areasOfPractice.map((area, index) => (
                        <motion.div
                            key={area.id}
                            // Animação em cascata (stagger) baseada no index
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white p-8 lg:p-10 border border-gray-100 hover:border-[#C5A059]/30 transition-colors duration-500 flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-[#550F12]/5"
                        >
                            {/* Ícone */}
                            <div className="w-14 h-14 rounded-full bg-[#FAFAFA] border border-gray-100 flex items-center justify-center text-[#C5A059] mb-6 group-hover:scale-110 group-hover:bg-[#550F12] group-hover:text-white transition-all duration-500">
                                {area.icon}
                            </div>

                            {/* Título */}
                            <h3 className="text-xl font-serif text-[#550F12] mb-4">
                                {area.title}
                            </h3>

                            {/* Descrição (Resumo) */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                                {area.description}
                            </p>

                            {/* Link Sutil (Substitui o botão gigante) */}
                            <a href={`#${area.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-2 text-[#550F12] text-sm font-semibold uppercase tracking-wider group/link mt-auto">
                                <span className="relative overflow-hidden">
                                    Saber mais
                                    {/* Linha animada embaixo do texto */}
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A059] transform origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
                                </span>
                                <ArrowRight className="w-4 h-4 text-[#C5A059] transform group-hover/link:translate-x-1 transition-transform duration-300" />
                            </a>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AreasActivity;