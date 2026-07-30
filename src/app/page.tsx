import Link from "next/link";
import { 
  LineChart, 
  ArrowRight, 
  Lightbulb, 
  Brain, 
  LayoutGrid, 
  Rocket, 
  Building2,
  Mail, 
  MessageSquare,
} from "lucide-react";

const projetos = [
  {
    id: "financelab",
    nome: "FinanceLab",
    descricao: "Inteligência Artificial atuando como seu assistente de investimentos. Avaliação contínua de indicadores fundamentalistas e visão macroeconômica integrada via Open Finance.",
    icone: LineChart,
    link: "https://labaitech.com/financelab",
    status: "ativo",
    textoAcao: "Acessar Plataforma",
  }
];

export default function LabAIHome() {
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

      {/* 3. SEÇÃO: CONTATO (Fundo branco, botão roxo e focado apenas em e-mail) */}
      <section id="contato" className="relative py-32 px-6 bg-[#ffffff]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10 text-gray-900">
          
          {/* Painel Esquerdo - Informações (Focado em E-mail) */}
          <div className="bg-[#5B36D6] text-white p-12 md:w-1/3 flex flex-col items-center justify-center text-center">
            <h3 className="text-sm font-bold tracking-[0.2em] mb-8 leading-relaxed">
              INFORMAÇÕES<br/>DE CONTATO
            </h3>
            <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm font-light text-white/90 mb-4">
              Entre em contato conosco diretamente pelo e-mail:
            </p>
            <span className="text-sm font-bold text-labai-green tracking-wide">
              contato@labaitech.com
            </span>
          </div>

          {/* Painel Direito - Formulário com fundo branco */}
          <div className="p-12 md:w-2/3 bg-white">
            <form className="space-y-6">
              
              {/* Linha 1: Nome e Sobrenome */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#5B36D6]">Nome *</label>
                  <input 
                    type="text" 
                    placeholder="Ex. João" 
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#5B36D6] bg-transparent text-sm text-gray-900 placeholder-gray-400" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#5B36D6]">Sobrenome *</label>
                  <input 
                    type="text" 
                    placeholder="Ex. Silva" 
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#5B36D6] bg-transparent text-sm text-gray-900 placeholder-gray-400" 
                  />
                </div>
              </div>

              {/* Linha 2: E-mail */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#5B36D6]">E-mail *</label>
                <input 
                  type="email" 
                  placeholder="Ex. joao@email.com" 
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#5B36D6] bg-transparent text-sm text-gray-900 placeholder-gray-400" 
                />
              </div>

              {/* Linha 3: Mensagem */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-[#5B36D6]">Mensagem *</label>
                <textarea 
                  rows={4} 
                  placeholder="Escreva sua mensagem aqui..." 
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#5B36D6] bg-transparent text-sm text-gray-900 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Botão de Envio (Roxo) */}
              <div className="flex justify-end pt-4">
                <button 
                  type="submit" 
                  className="bg-[#5B36D6] text-white text-xs font-bold tracking-wider px-8 py-3.5 rounded-full hover:bg-[#4c2bb8] transition-all shadow-lg shadow-[#5B36D6]/20"
                >
                  ENVIAR MENSAGEM
                </button>
              </div>

            </form>
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