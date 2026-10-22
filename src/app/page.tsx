"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  LineChart, 
  ArrowRight, 
  Lightbulb, 
  Brain, 
  LayoutGrid, 
  Rocket,
  Mail,
} from "lucide-react";

const projetos = [
  {
    id: "financelab",
    nome: "FinanceLab",
    descricao: "Inteligência Artificial atuando como seu assistente de investimentos. Avaliação contínua de indicadores fundamentalistas e visão macroeconômica integrada via Open Finance.",
    icone: LineChart,
    link: "https://www.labai-tech.com/financelab/",
    status: "ativo",
    textoAcao: "Acessar Plataforma",
  }
];

export default function LabAIHome() {
  const [copied, setCopied] = useState(false);
  const contactEmail = "contato@labai-tech.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen font-sans selection:bg-labai-green selection:text-white bg-labai-light text-labai-dark">
      
      {/* HEADER (Fundo roxo translúcido fixado com Hexadecimal) */}
      <header className="bg-[#5B36D6]/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo à esquerda */}
          <div className="flex items-center gap-3 w-48">
            <img 
              src="/logo.png" 
              alt="LabAI Logo" 
              className="w-15 h-15 object-contain rounded-lg" 
            />
            <div className="text-xl font-bold text-white tracking-tight">
              Lab<span className="text-[#00C853]">AI</span> Tech
            </div>
          </div>

          {/* Navegação Centralizada */}
          <nav className="hidden md:flex flex-1 justify-center gap-12 text-[11px] font-bold text-white uppercase tracking-[0.2em]">
            <a href="#sobre" className="hover:text-[#00C853] transition-colors pb-1 border-b-2 border-transparent hover:border-[#00C853]">Sobre Nós</a>
            <a href="#projetos" className="hover:text-[#00C853] transition-colors pb-1 border-b-2 border-transparent hover:border-[#00C853]">Projetos</a>
          </nav>

          {/* Botão de Contato Neon Roxo à Direita */}
          <div className="hidden md:flex md:w-48 justify-end">
            <a href="#contato" className="relative group block">
                <span className="absolute inset-0 bg-[#8B5CF6]/20 border-2 border-[#8B5CF6] rounded-full backdrop-blur-sm shadow-[0_0_15px_3px_rgba(139,92,246,0.6)] group-hover:bg-[#8B5CF6]/40 transition-all"></span>
                <span className="relative z-10 text-white font-bold text-[11px] tracking-widest px-8 py-3 rounded-full flex items-center justify-center shadow-sm">
                  CONTATO
                </span>
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION (Imagem de fundo com overlay escuro) */}
      <section className="relative py-32 md:py-48 px-6 flex items-center justify-center overflow-hidden border-b border-white/5">
        
        {/* 1. Imagem de Fundo (z-0) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        ></div>

        {/* 2. Camada de Escurecimento / Overlay (z-10) 
            Isso escurece a foto e aplica um tom do roxo da marca para garantir a leitura */}
        <div className="absolute inset-0 z-10 bg-[#110A2B]/85 mix-blend-multiply"></div>

        {/* 3. Conteúdo em Texto (z-20) */}
        <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8 mt-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#00C853] text-xs font-medium backdrop-blur-sm">
            Simplificando a Vida com IA
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Desenvolvemos <span className="text-[#00C853]">Inteligência</span> para o Futuro.
          </h1>
          <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
            Criamos ferramentas com Inteligência Artificial Centrada no Humano que facilitam tarefas complexas e fornecem insights valiosos.
          </p>
        </div>
      </section>

      {/* 1. SEÇÃO: SOBRE NÓS (Ícones na cor roxa forçada por HEX) */}
      <section id="sobre" className="bg-white py-24 px-6 border-b border-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-labai-purple tracking-tight">
              A Essência da Lab<span className="text-[#00C853]">AI</span> Tech
            </h2>
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
              Nossa abordagem une capacidade analítica avançada com design centrado na experiência do usuário.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-labai-light border border-gray-100 hover:border-labai-green/50 transition-colors text-center space-y-4 shadow-sm group">
              <div className="flex items-center justify-center mb-2">
                <Lightbulb className="w-8 h-8 text-[#5B36D6] group-hover:scale-110 transition-transform duration-300" style={{ color: '#5B36D6' }} />
              </div>
              <h3 className="text-xl font-bold text-labai-purple">Nossa Missão</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Desenvolver aplicativos com IA que simplificam tarefas cotidianas em diversas áreas.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-labai-light border border-gray-100 hover:border-labai-green/50 transition-colors text-center space-y-4 shadow-sm group">
              <div className="flex items-center justify-center mb-2">
                <Brain className="w-8 h-8 text-[#5B36D6] group-hover:scale-110 transition-transform duration-300" style={{ color: '#5B36D6' }} />
              </div>
              <h3 className="text-xl font-bold text-labai-purple">Foco no Humano</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Criamos ferramentas que facilitam tarefas complexas e fornecem insights valiosos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-labai-light border border-gray-100 hover:border-labai-green/50 transition-colors text-center space-y-4 shadow-sm group">
              <div className="flex items-center justify-center mb-2">
                <LayoutGrid className="w-8 h-8 text-[#5B36D6] group-hover:scale-110 transition-transform duration-300" style={{ color: '#5B36D6' }} />
              </div>
              <h3 className="text-xl font-bold text-labai-purple">Diversificação</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Soluções para finanças, bem-estar, comunicação e carreira, impulsionadas por IA.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-labai-light border border-gray-100 hover:border-labai-green/50 transition-colors text-center space-y-4 shadow-sm group">
              <div className="flex items-center justify-center mb-2">
                <Rocket className="w-8 h-8 text-[#5B36D6] group-hover:scale-110 transition-transform duration-300" style={{ color: '#5B36D6' }} />
              </div>
              <h3 className="text-xl font-bold text-labai-purple">Inovação</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Exploramos novas fronteiras da IA para desenvolver aplicativos inteligentes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SEÇÃO: PROJETOS (Fundo preto para teste, com bordas e transição neon para o verde) */}
      <section id="projetos" className="bg-[#0A0711] py-32 px-6 border-t border-b border-white/5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-16 relative z-10">
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Inovação em Múltiplos Setores
            </h2>
            <p className="text-white/70 text-lg font-light max-w-2xl mx-auto">
              Nosso ecossistema de aplicações transforma grandes volumes de dados em experiências personalizadas.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {projetos.map((projeto) => {
              return (
                <div 
                  key={projeto.id} 
                  className="p-10 md:p-14 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:border-labai-green hover:shadow-[0_0_30px_rgba(0,200,83,0.3)] group flex flex-col justify-between"
                >
                  <div>
                    {/* Logo do FinanceLab ampliada */}
                    <div className="mb-8">
                      <img 
                        src="/financelab-logo.png" 
                        alt="FinanceLab Logo" 
                        className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md" 
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-labai-green transition-colors duration-300">
                      {projeto.nome}
                    </h3>
                    <p className="text-white/80 text-lg leading-relaxed mb-10">
                      {projeto.descricao}
                    </p>
                  </div>
                  
                  {projeto.status === "ativo" ? (
                    <Link href={projeto.link} className="inline-flex items-center gap-3 text-labai-green font-bold text-lg hover:text-[#00E676] transition-colors">
                      {projeto.textoAcao} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-white/40 font-bold">
                      {projeto.textoAcao} <span className="text-lg">⚙️</span>
                    </span>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. SEÇÃO: CONTATO */}
      <section id="contato" className="relative py-32 px-6 bg-[#ffffff]">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#5B36D6] p-8 shadow-[0_24px_80px_rgba(91,54,214,0.35)] md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),transparent_35%)]" />
            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/75">Contato</p>
                    <h3 className="mt-1 text-2xl font-bold md:text-3xl">Entre em contato</h3>
                  </div>
                </div>

                <p className="max-w-md text-sm leading-relaxed text-white/80 md:text-base">
                  Estamos abertos para parcerias, investimentos, propostas comerciais e oportunidades de colaboração.
                </p>
              </div>

              <button
                type="button"
                aria-live="polite"
                onClick={handleCopyEmail}
                className="group w-full rounded-[1.5rem] border border-white/20 bg-white/8 px-5 py-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12 hover:shadow-[0_12px_32px_rgba(17,10,43,0.2)] md:w-auto md:min-w-[390px]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">E-mail</p>
                    <p className="mt-2 truncate text-lg font-semibold text-white md:text-xl">{contactEmail}</p>
                  </div>

                  <span className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 transition-colors group-hover:bg-[#00C853]/20 group-hover:text-[#D9FFE8]">
                    {copied ? "Copiado" : "Copiar"}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#110A2B] py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <img src="/logo.png" alt="LabAI Logo" className="w-10 h-10 object-contain rounded-md" />
              <div className="text-xl font-bold text-white tracking-tight">
                Lab<span className="text-labai-green">AI</span> Tech
              </div>
            </div>
            <p className="text-white/50 text-sm font-light">Simplificando a Vida com IA.</p>
          </div>
          <div className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} LabAI Tech. Todos os direitos reservados.
          </div>
        </div>
      </footer>

    </main>
  );
}
