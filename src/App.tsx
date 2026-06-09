/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, useRef } from 'react';
import {
  Search,
  Clock,
  Footprints,
  HeartPulse,
  Dumbbell,
  StretchHorizontal,
  Home,
  Brain,
  Play,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Star,
  Activity,
  HelpCircle,
  FileText,
  Lock,
  Mail,
  ArrowLeft,
  Settings,
  Monitor,
  Wifi,
  Type,
  Eye,
  EyeOff,
  LogIn,
  BadgeCheck,
  LogOut
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES, VIDEOS } from './constants';
import { Video } from './types';
// import { mapDriveToVideos } from './services/videoService'; // Removing unused service for consistency

const IconMap: { [key: string]: any } = {
  Footprints,
  HeartPulse,
  Dumbbell,
  StretchHorizontal,
  Home,
  Brain,
  Activity,
};

// ─────────────────────────────────────────────
// LANDING PAGE — preview before login
// ─────────────────────────────────────────────
function LandingPage({ onLoginClick }: { onLoginClick: () => void }) {
  const previewVideos = VIDEOS.slice(0, 9);
  return (
    <div className="h-screen overflow-hidden flex flex-col" style={{ fontFamily: 'sans-serif' }}>
      {/* Top bar */}
      <div className="flex-none h-10 bg-white border-b border-slate-200 flex items-center px-6 gap-3 z-10">
        <img
          src="https://imagens.ebc.com.br/t_1P-O4_pRhfYPZR5jIC23wimN0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2025/08/29/2025.ago_br_govfederal_manual-de-uso_v1.2-4.jpg?itok=vRK4TNwa"
          alt="Governo Federal"
          className="h-6 w-auto object-contain"
          style={{ maxWidth: '160px' }}
        />
        <div className="h-4 w-px bg-slate-200" />
        <span className="text-xs font-semibold text-slate-500 tracking-tight">
          Biblioteca Pública de Saúde
        </span>
        <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Ministério da Saúde · Wellhub
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT — blurred library preview */}
        <div className="flex-1 relative overflow-hidden bg-slate-100">
          {/* Blurred cards */}
          <div
            className="absolute inset-0 p-5 overflow-hidden pointer-events-none"
            style={{ filter: 'blur(2.5px)', transform: 'scale(1.03)', transformOrigin: 'top left' }}
          >
            <div className="grid grid-cols-3 gap-3">
              {previewVideos.map(v => (
                <div key={v.id} className="rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-100">
                  <div className="aspect-video bg-slate-200 overflow-hidden">
                    {v.videoUrl
                      ? <video src={v.videoUrl} muted playsInline preload="metadata" className="w-full h-full object-cover" />
                      : <img src={v.thumbnail} alt="" className="w-full h-full object-cover" />
                    }
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-bold text-slate-700 truncate">{v.title}</p>
                    <div className="h-2 bg-slate-100 rounded-full w-2/3 mt-1.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dark + rightward gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.45) 0%, rgba(15,23,42,0.15) 55%, rgba(248,250,252,0.95) 100%)' }}
          />

          {/* Centre lock badge */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-4 ring-1 ring-slate-200">
              <Lock className="h-7 w-7 text-slate-500" />
            </div>
            <p className="text-white font-black text-2xl max-w-xs leading-snug drop-shadow-lg">
              28 exercícios validados pelo Ministério da Saúde
            </p>
            <p className="text-white/70 text-sm mt-2 max-w-xs drop-shadow">
              Faça login com sua conta gov.br para acessar o conteúdo completo
            </p>
          </div>
        </div>

        {/* RIGHT — login panel */}
        <div className="flex-none w-[360px] bg-white shadow-2xl flex flex-col justify-center px-10 py-10 border-l border-slate-100">
          <img
            src="https://imagens.ebc.com.br/t_1P-O4_pRhfYPZR5jIC23wimN0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2025/08/29/2025.ago_br_govfederal_manual-de-uso_v1.2-4.jpg?itok=vRK4TNwa"
            alt="Governo Federal"
            className="h-10 w-auto object-contain mb-6"
            style={{ maxWidth: '200px' }}
          />
          <h1 className="text-2xl font-black text-slate-900 leading-snug mb-2">
            Biblioteca Pública<br />de Saúde
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed mb-7">
            Plataforma oficial de exercícios do Ministério da Saúde para cidadãos brasileiros.
          </p>

          <div className="border-t border-slate-100 mb-7" />

          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
            Acesso ao conteúdo
          </p>
          <button
            onClick={onLoginClick}
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg font-bold text-white text-sm transition hover:opacity-90 active:scale-95 shadow-md"
            style={{ backgroundColor: '#1351B4', boxShadow: '0 4px 16px rgba(19,81,180,0.35)' }}
          >
            <LogIn className="h-4 w-4 flex-shrink-0" />
            <span>Entrar com</span>
            <span className="font-black text-base leading-none">
              <span style={{ color: '#FFCD07' }}>gov</span>
              <span style={{ color: '#a3e635' }}>.br</span>
            </span>
          </button>
          <p className="text-[11px] text-slate-400 text-center mt-2">
            Identificação segura via conta gov.br
          </p>

          <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5">
            {[
              'Exercícios sem equipamentos',
              'Para todas as idades e condições',
              'Conteúdo validado pelo SUS',
              'Acesso gratuito para todos os cidadãos',
            ].map(f => (
              <div key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex-none bg-amber-50 border-t-2 border-amber-400 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-start gap-3">
          <span className="text-2xl flex-shrink-0 mt-0.5">⚠️</span>
          <div>
            <p className="font-black text-amber-900 text-sm uppercase tracking-wide mb-0.5">
              Protótipo — Apenas para demonstração
            </p>
            <p className="text-amber-800 text-sm leading-relaxed">
              Este é um projeto em fase de desenvolvimento. Os vídeos exibidos são exemplos do acervo Trainiac e <strong>não correspondem ao exercício descrito no card</strong>. O conteúdo audiovisual final será produzido especificamente para esta plataforma em parceria com o Ministério da Saúde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// GOV.BR LOGIN PAGE
// ─────────────────────────────────────────────
function GovBrLoginPage({ onSuccess, onBack }: { onSuccess: () => void; onBack: () => void }) {
  const [step, setStep] = useState<'cpf' | 'senha'>('cpf');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [showSenha, setShowSenha] = useState(false);

  const formatCpf = (value: string) => {
    const d = value.replace(/\D/g, '').slice(0, 11);
    if (d.length <= 3) return d;
    if (d.length <= 6) return `${d.slice(0,3)}.${d.slice(3)}`;
    if (d.length <= 9) return `${d.slice(0,3)}.${d.slice(3,6)}.${d.slice(6)}`;
    return `${d.slice(0,3)}.${d.slice(3,6)}.${d.slice(6,9)}-${d.slice(9)}`;
  };

  const handleCpfContinuar = () => {
    const digits = cpf.replace(/\D/g, '');
    if (digits === '123456789') {
      setError('');
      setStep('senha');
    } else {
      setError('CPF não encontrado. Verifique os dados e tente novamente.');
    }
  };

  const handleSenhaEntrar = () => {
    if (senha === 'trainiacgov') {
      onSuccess();
    } else {
      setError('Senha incorreta. Verifique e tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: 'Rawline, Raleway, sans-serif' }}>
      {/* gov.br top bar */}
      <div className="w-full bg-white border-b border-gray-200 flex items-center justify-between px-6 py-2.5">
        <span className="text-xl font-black tracking-tight select-none">
          <span style={{ color: '#FFCD07' }}>gov</span>
          <span style={{ color: '#168821' }}>.</span>
          <span style={{ color: '#168821' }}>br</span>
        </span>
        <div className="flex items-center gap-5 text-xs text-gray-600">
          <button className="flex items-center gap-1.5 hover:text-gray-900">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-gray-400 text-[10px] font-bold">i</span>
            Alto Contraste
          </button>
          <button className="flex items-center gap-1.5 hover:text-gray-900">
            <span className="text-base">🚀</span>
            VLibras
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-1 min-h-0">
        {/* Left — official gov.br style image panel */}
        <div className="hidden lg:flex flex-1 relative overflow-hidden" style={{ background: '#f0eeea' }}>
          {/* Yellow vertical band */}
          <div className="absolute left-0 top-0 bottom-0" style={{ width: '40%', backgroundColor: '#FFCD07' }} />

          {/* Woman photo — grayscale + yellow tint */}
          <div className="absolute left-0 top-0 bottom-0" style={{ width: '54%' }}>
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=900&face"
              alt=""
              className="w-full h-full object-cover object-top"
              style={{ filter: 'grayscale(1) brightness(0.88)' }}
            />
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 200, 0, 0.42)' }} />
          </div>

          {/* gov.br logo + tagline — right half */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col px-10" style={{ width: '54%' }}>
            <div className="text-6xl font-black leading-none mb-5" style={{ letterSpacing: '-1px' }}>
              <span style={{ color: '#1351B4' }}>gov</span>
              <span style={{ color: '#168821' }}>.</span>
              <span style={{ color: '#1351B4' }}>br</span>
            </div>
            <p className="text-gray-700 text-base font-medium leading-[1.7]">
              Uma{' '}
              <strong style={{ fontWeight: 800, textDecoration: 'underline', textDecorationColor: '#FFCD07', textDecorationThickness: '3px' }}>
                conta gov.br
              </strong>
              <br />garante a identificação<br />
              de cada cidadão que acessa<br />
              os serviços digitais do governo
            </p>
          </div>
        </div>

        {/* Right — form panel */}
        <div className="w-full lg:w-[480px] flex flex-col justify-center items-center px-8 py-12 bg-white shadow-2xl">
          {/* Mobile logo */}
          <div className="lg:hidden text-3xl font-black mb-8">
            <span style={{ color: '#FFCD07' }}>gov</span>
            <span style={{ color: '#168821' }}>.br</span>
          </div>

          <div className="w-full max-w-sm">
            <h2 className="text-base font-bold text-gray-800 mb-5">
              Identifique-se no gov.br com:
            </h2>

            {step === 'cpf' && (
              <>
                {/* CPF option highlight */}
                <div className="flex items-start gap-3 mb-5 p-3 rounded-lg border-2" style={{ borderColor: '#1351B4', background: '#f0f4ff' }}>
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1351B4' }}>
                    <span className="text-white text-[10px] font-black">CPF</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Número do CPF</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Digite seu CPF para <strong>criar</strong> ou <strong>acessar</strong> sua conta gov.br
                    </p>
                  </div>
                </div>

                <label className="block text-sm font-semibold text-gray-700 mb-1">CPF</label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Digite seu CPF"
                  value={cpf}
                  autoFocus
                  onChange={e => setCpf(formatCpf(e.target.value))}
                  onKeyDown={e => e.key === 'Enter' && handleCpfContinuar()}
                  className="w-full border border-gray-400 rounded px-3 py-2 text-sm mb-1 focus:outline-none focus:ring-2"
                  style={{ focusRingColor: '#1351B4' } as any}
                />
                {error && (
                  <p className="text-red-600 text-xs mb-2 flex items-center gap-1">
                    <span>⚠</span> {error}
                  </p>
                )}
                <button
                  onClick={handleCpfContinuar}
                  className="w-full py-2.5 rounded font-bold text-white text-sm mt-2 mb-6 transition hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: '#1351B4' }}
                >
                  Continuar
                </button>

                {/* Divider + other options */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Outras opções de identificação:</p>
                  <div className="space-y-3">
                    {[
                      { icon: '🏦', label: 'Login com seu banco', badge: 'SUA CONTA SERÁ PRATA' },
                      { icon: '⊞', label: 'Login com QR code', badge: null },
                      { icon: '🔐', label: 'Seu certificado digital', badge: null },
                      { icon: '☁️', label: 'Seu certificado digital em nuvem', badge: null },
                    ].map(opt => (
                      <button
                        key={opt.label}
                        className="flex items-center gap-3 w-full text-left text-sm p-1 rounded hover:bg-gray-50"
                      >
                        <span className="text-lg">{opt.icon}</span>
                        <span style={{ color: '#1351B4' }} className="font-medium">{opt.label}</span>
                        {opt.badge && (
                          <span className="ml-1 text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded font-black tracking-tight">
                            {opt.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 'senha' && (
              <>
                {/* CPF badge */}
                <div className="flex items-center gap-3 mb-5 p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm" style={{ backgroundColor: '#1351B4' }}>
                    {cpf.replace(/\D/g,'').slice(0,2)}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 text-sm">CPF: {cpf}</p>
                    <button
                      onClick={() => { setStep('cpf'); setSenha(''); setError(''); }}
                      className="text-xs underline"
                      style={{ color: '#1351B4' }}
                    >
                      Não sou eu
                    </button>
                  </div>
                </div>

                <label className="block text-sm font-semibold text-gray-700 mb-1">Senha</label>
                <p className="text-xs text-gray-500 mb-2">Digite a senha da conta gov.br</p>
                <div className="relative mb-1">
                  <input
                    type={showSenha ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    value={senha}
                    autoFocus
                    onChange={e => setSenha(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSenhaEntrar()}
                    className="w-full border border-gray-400 rounded px-3 py-2 text-sm pr-20 focus:outline-none focus:ring-2"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSenha(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold"
                    style={{ color: '#1351B4' }}
                  >
                    {showSenha ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
                {error && (
                  <p className="text-red-600 text-xs mb-2 flex items-center gap-1">
                    <span>⚠</span> {error}
                  </p>
                )}
                <button
                  onClick={handleSenhaEntrar}
                  className="w-full py-2.5 rounded font-bold text-white text-sm mt-2 mb-3 transition hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: '#1351B4' }}
                >
                  Entrar
                </button>
                <div className="text-center">
                  <button className="text-sm underline" style={{ color: '#1351B4' }}>
                    Esqueci minha senha
                  </button>
                </div>
              </>
            )}

            <div className="mt-8 pt-5 border-t border-gray-100 text-center">
              <button
                onClick={onBack}
                className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1.5 mx-auto"
              >
                <ArrowLeft className="w-3 h-3" />
                Voltar para a Biblioteca Pública de Saúde
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-200 py-3 text-center">
        <p className="text-xs text-gray-400">
          <a href="#" className="hover:underline" style={{ color: '#1351B4' }}>Está com dúvidas e precisa de ajuda?</a>
          {' · '}
          <a href="#" className="hover:underline" style={{ color: '#1351B4' }}>Termo de Uso e Aviso de Privacidade</a>
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState<'home' | 'faq' | 'ajuda' | 'privacidade' | 'termos' | 'video-detail'>('home');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const [fontSizeLevel, setFontSizeLevel] = useState(0);
  const [showGovLogin, setShowGovLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fontSizes = ['16px', '20px', '24px'];

  useEffect(() => {
    document.documentElement.style.setProperty('--app-font-size', fontSizes[fontSizeLevel]);
  }, [fontSizeLevel]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  // Load videos from constants
  useEffect(() => {
    setVideos(VIDEOS);
  }, []);

  useEffect(() => {
    if (searchQuery || activeFilter || selectedCategory) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 600);
      return () => clearTimeout(timer);
    }
  }, [searchQuery, activeFilter, selectedCategory]);

  const filters = [
    { id: 'less-5', label: 'Vídeos curtos' },
    { id: 'no-equip', label: 'Sem equipamentos' },
    { id: 'seated', label: 'Para fazer sentado' },
    { id: 'high-energy', label: 'Energia total' },
  ];

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? video.category === selectedCategory : true;
      
      let matchesFilter = true;
      if (activeFilter === 'less-5') {
        const mins = parseInt(video.duration.split(':')[0]);
        matchesFilter = mins < 5;
      } else if (activeFilter === 'no-equip') {
        matchesFilter = video.tags.includes('Sem equipamentos');
      } else if (activeFilter === 'seated') {
        matchesFilter = video.tags.includes('Sentado');
      } else if (activeFilter === 'high-energy') {
        matchesFilter = video.intensity === 'Alta';
      }

      return matchesSearch && matchesCategory && matchesFilter;
    });
  }, [videos, searchQuery, selectedCategory, activeFilter]);

  const recommendedVideos = useMemo(() => {
    return videos.filter(v => v.isRecommended);
  }, [videos]);

  const seasonalHighlight = {
    title: "Especial: Combate ao Sedentarismo",
    description: "Curadoria de IA do Ministério da Saúde: exercícios de baixo impacto para transformar sua saúde.",
    video: videos[0]
  };

  const toggleFontSize = () => {
    setFontSizeLevel((prev) => (prev + 1) % fontSizes.length);
  };

  const renderContent = () => {
    switch (view) {
      case 'faq':
        return <FAQView onBack={() => setView('home')} />;
      case 'ajuda':
        return <HelpView onBack={() => setView('home')} />;
      case 'privacidade':
        return <PrivacyView onBack={() => setView('home')} />;
      case 'termos':
        return <TermsView onBack={() => setView('home')} />;
      case 'video-detail':
        return selectedVideo ? <VideoDetailView video={selectedVideo} onBack={() => setView('home')} /> : null;
      default:
        return (
          <>
            {/* Welcome & Hero */}
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-4 flex items-center justify-center gap-3 rounded-full bg-blue-600/10 px-6 py-2 text-blue-700 ring-1 ring-blue-600/20"
              >
                <ShieldCheck className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Sua saúde é nossa prioridade</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl"
              >
                <h2 className="mb-8 text-4xl font-black tracking-tight text-wellhub-black sm:text-5xl md:text-6xl">
                  O que você quer exercitar hoje?
                </h2>
                <div className="relative group mx-auto max-w-2xl">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-wellhub-magenta opacity-10 blur-xl transition duration-1000 group-focus-within:opacity-30" />
                  <Search className="absolute top-1/2 left-6 h-6 w-6 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Busque por exercícios, tempo ou objetivo..."
                    className="relative h-16 w-full rounded-full border-none bg-white px-16 text-lg shadow-xl shadow-blue-900/5 ring-1 ring-slate-200 transition-all placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  {isSearching && (
                    <div className="absolute right-6 top-1/2 -translate-y-1/2">
                       <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Destaque da Semana */}
            {!searchQuery && !selectedCategory && !activeFilter && seasonalHighlight.video && (
              <section className="mt-16">
                 <div className="relative overflow-hidden rounded-[32px] bg-wellhub-black text-white p-8 lg:p-12">
                    <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/4 -translate-y-1/4 rounded-full bg-blue-600/20 blur-[80px]" />
                    
                    <div className="relative flex flex-col items-center gap-10 lg:flex-row">
                      <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-2 text-wellhub-green">
                          <Star className="h-4 w-4 fill-wellhub-green" />
                          <span className="text-xs font-black uppercase tracking-widest">Recomendação do Ministério da Saúde</span>
                        </div>
                        <h3 className="text-3xl font-black tracking-tight sm:text-5xl">
                          {seasonalHighlight.title}
                        </h3>
                        <p className="max-w-xl text-lg font-medium text-slate-300">
                          {seasonalHighlight.description}
                        </p>
                        <button 
                          onClick={() => {
                            setSelectedVideo(seasonalHighlight.video);
                            setView('video-detail');
                          }}
                          className="flex items-center gap-3 rounded-full bg-wellhub-magenta px-8 py-4 text-base font-black text-white transition-transform hover:scale-105 active:scale-95 shadow-xl"
                        >
                          Começar treino
                          <Play className="h-5 w-5 fill-white" />
                        </button>
                      </div>
                      <div className="relative w-full max-w-sm shrink-0 lg:max-w-md">
                        <div className="aspect-video overflow-hidden rounded-[24px] ring-1 ring-white/10 shadow-2xl bg-black">
                          {seasonalHighlight.video.videoUrl ? (
                            <video
                              src={seasonalHighlight.video.videoUrl}
                              className="h-full w-full rounded-[24px] object-cover"
                              autoPlay
                              loop
                              muted
                              playsInline
                            />
                          ) : (
                            <>
                              <img src={seasonalHighlight.video.thumbnail} className="h-full w-full object-cover" alt="Highlight" />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                 <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-wellhub-black shadow-2xl">
                                    <Play className="h-8 w-8 fill-wellhub-black translate-x-0.5" />
                                 </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                 </div>
              </section>
            )}

            {/* Categories Section */}
            {!searchQuery && !selectedCategory && !activeFilter && <section className="mt-16">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-2xl font-black text-wellhub-black tracking-tight">O que você precisa hoje?</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {CATEGORIES.map((cat, index) => {
                  const Icon = IconMap[cat.iconName];
                  const isSelected = selectedCategory === cat.id;
                  
                  return (
                    <motion.button
                      key={cat.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
                      className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl p-6 transition-all ${
                        isSelected 
                          ? 'bg-wellhub-magenta text-white shadow-lg' 
                          : `bg-white text-slate-700 ring-1 ring-slate-100 hover:ring-wellhub-magenta/20`
                      }`}
                    >
                      <div className={`rounded-xl p-3 transition-transform group-hover:rotate-6 ${isSelected ? 'bg-white/20' : 'bg-wellhub-offwhite ring-1 ring-slate-200/50'}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-tight">{cat.title}</span>
                    </motion.button>
                  );
                })}
              </div>
            </section>}

            {/* Filters and Shortcut Labels */}
            {!searchQuery && <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex flex-wrap items-center gap-3">
                <span className="mr-2 text-xs font-black uppercase tracking-widest text-slate-400">Atalhos rápidos:</span>
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
                    className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                      activeFilter === filter.id
                        ? 'bg-wellhub-purple text-white shadow-md'
                        : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-wellhub-offwhite'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              {(selectedCategory || searchQuery || activeFilter) && (
                <button 
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery('');
                    setActiveFilter(null);
                  }}
                  className="text-sm font-bold text-wellhub-magenta hover:underline"
                >
                  Remover todos os filtros ×
                </button>
              )}
            </div>}

            {/* Results Grid */}
            <section className="mt-12">
              <div className="mb-8 flex items-center justify-between border-b border-wellhub-offwhite pb-4">
                <h3 className="text-xl font-black text-wellhub-black tracking-tight uppercase">
                  {filteredVideos.length === 0 ? 'Sem resultados específicos' : 'Explorar todos os treinos'}
                </h3>
                <div className="rounded-full bg-slate-100 px-4 py-1 text-xs font-black text-slate-500">
                  {filteredVideos.length} VÍDEOS
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filteredVideos.map((video) => (
                    <motion.div
                      layout
                      key={video.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <VideoCard 
                      video={video} 
                      onClick={() => {
                        setSelectedVideo(video);
                        setView('video-detail');
                      }}
                    />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </section>
          </>
        );
    }
  };

  if (showGovLogin) {
    return (
      <GovBrLoginPage
        onSuccess={() => {
          setIsAuthenticated(true);
          setShowGovLogin(false);
        }}
        onBack={() => setShowGovLogin(false)}
      />
    );
  }

  if (!isAuthenticated) {
    return <LandingPage onLoginClick={() => setShowGovLogin(true)} />;
  }

  return (
    <div className="min-h-screen bg-wellhub-offwhite font-sans text-wellhub-black selection:bg-wellhub-magenta/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div 
            className="flex items-center gap-6 cursor-pointer"
            onClick={() => setView('home')}
          >
            <img 
              src="https://imagens.ebc.com.br/t_1P-O4_pRhfYPZR5jIC23wimN0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2025/08/29/2025.ago_br_govfederal_manual-de-uso_v1.2-4.jpg?itok=vRK4TNwa" 
              alt="Governo Federal do Brasil" 
              className="h-12 w-auto object-contain"
              style={{ maxWidth: '220px' }}
            />
            <div className="hidden h-6 w-px bg-slate-200 lg:block" />
            <h1 className="hidden text-base font-bold tracking-tight text-wellhub-black lg:block">
              Biblioteca Pública de Saúde
            </h1>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={toggleFontSize}
              className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-200"
              title="Aumentar texto"
            >
              <span className="text-base font-black">A+</span>
              <span className="hidden sm:inline">Acessibilidade</span>
            </button>

            {/* Gov.br Auth Button */}
            {isAuthenticated ? (
              <div className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold bg-green-50 ring-1 ring-green-300 text-green-800">
                <BadgeCheck className="h-4 w-4 text-green-600" />
                <span className="hidden sm:inline text-xs">Autenticado</span>
                <span className="font-black text-xs">
                  <span style={{ color: '#FFCD07', WebkitTextStroke: '0.5px #888' }}>gov</span>
                  <span style={{ color: '#168821' }}>.br</span>
                </span>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  title="Sair"
                  className="ml-1 text-gray-400 hover:text-red-500"
                >
                  <LogOut className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowGovLogin(true)}
                className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-white transition hover:opacity-90 active:scale-95"
                style={{ backgroundColor: '#1351B4' }}
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Entrar com</span>
                <span className="font-black">
                  <span style={{ color: '#FFCD07' }}>gov</span>
                  <span style={{ color: '#a3e635' }}>.br</span>
                </span>
              </button>
            )}

            <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Parceria Social</span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tighter text-wellhub-magenta">wellhub</span>
                <div className="h-2 w-2 rounded-full bg-wellhub-green" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
        {renderContent()}
      </main>

      {/* Prototype Disclaimer — sticky bottom bar */}
      <div className="sticky bottom-0 z-40 w-full bg-amber-50 border-t-2 border-amber-400 px-4 py-3 shadow-lg">
        <div className="mx-auto max-w-7xl flex items-center gap-3">
          <span className="text-xl flex-shrink-0">⚠️</span>
          <div className="flex-1 min-w-0">
            <span className="font-black text-amber-900 text-sm uppercase tracking-wide mr-2">
              Protótipo:
            </span>
            <span className="text-amber-800 text-sm">
              Este é um projeto em fase de desenvolvimento. Os vídeos exibidos são exemplos do acervo Trainiac e <strong>não correspondem ao exercício descrito</strong> — são vídeos de exemplo apenas. O conteúdo final será produzido especificamente para esta plataforma.
            </span>
          </div>
        </div>
      </div>

      {/* Ministerial Trust Badge */}
      <div className="fixed bottom-6 left-6 z-50 hidden xl:block">
        <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-emerald-500/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Selo Oficial</p>
            <p className="text-sm font-bold text-slate-700">Canal Aprovado pelo SUS</p>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-slate-200 bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Wellhub CTA */}
          <div className="mb-20 rounded-[40px] bg-gradient-to-br from-wellhub-magenta to-wellhub-purple p-10 lg:p-16 text-white text-center shadow-2xl">
            <div className="mx-auto max-w-2xl">
              <h3 className="mb-6 text-4xl font-black tracking-tight lg:text-5xl">Gostou da experiência?</h3>
              <p className="mb-10 text-xl font-medium opacity-90">
                O Wellhub oferece milhares de opções de bem-estar. Saiba como levar mais saúde para sua empresa ou vida pessoal.
              </p>
              <a 
                href="https://wellhub.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-xl font-black text-wellhub-magenta shadow-xl transition-transform hover:scale-105 active:scale-95"
              >
                Conheça mais os serviços do Wellhub
                <ChevronRight className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="flex flex-col items-center gap-6 md:items-start text-center md:text-left">
              <img 
                src="https://imagens.ebc.com.br/t_1P-O4_pRhfYPZR5jIC23wimN0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2025/08/29/2025.ago_br_govfederal_manual-de-uso_v1.2-4.jpg?itok=vRK4TNwa" 
                alt="Brasil" 
                className="h-10 w-auto object-contain grayscale opacity-50"
                style={{ maxWidth: '200px' }}
              />
              <div className="space-y-4">
                <p className="max-w-xs text-sm font-bold text-slate-500">
                  Promovendo o bem-estar físico para todos os cidadãos brasileiros através da tecnologia.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm font-bold">
              <button onClick={() => setView('faq')} className="text-left hover:text-wellhub-magenta transition-colors">Dúvidas Frequentes</button>
              <button onClick={() => setView('termos')} className="text-left hover:text-wellhub-magenta transition-colors">Termos do SUS</button>
              <button onClick={() => setView('ajuda')} className="text-left hover:text-wellhub-magenta transition-colors">Ajuda</button>
              <button onClick={() => setView('privacidade')} className="text-left hover:text-wellhub-magenta transition-colors">Privacidade</button>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-100 pt-8 md:flex-row gap-4">
            <p className="text-xs font-bold text-slate-400 text-center">
              © 2024 BIBLIOTECA PÚBLICA DE SAÚDE - GOVERNO FEDERAL DO BRASIL.
            </p>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Powered by Wellhub Social Impact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FAQView({ onBack }: { onBack: () => void }) {
  const faqs = [
    {
      q: "1. Este serviço é realmente gratuito?",
      a: "Sim. Todo o conteúdo desta biblioteca é 100% gratuito para qualquer cidadão, fruto de uma parceria entre o Wellhub, o Trainiac e o Governo Federal para apoiar a saúde pública."
    },
    {
      q: "2. Preciso ter conta no Wellhub ou Trainiac para assistir?",
      a: "Não. O acesso é livre e não exige nenhum tipo de cadastro ou assinatura. Basta clicar no vídeo e começar."
    },
    {
      q: "3. Os exercícios são seguros para qualquer idade?",
      a: "Sim. Os vídeos foram selecionados e auditados para garantir a segurança. No entanto, recomendamos que comece pelos níveis \"Iniciante\" ou \"Leve\" e respeite sempre os limites do seu corpo."
    },
    {
      q: "4. Preciso de equipamentos ou roupas especiais?",
      a: "A maioria dos vídeos foi pensada para ser feita em casa, sem equipamentos. Você pode usar roupas confortáveis que permitam o movimento."
    },
    {
      q: "5. Como saber se o exercício é indicado para mim?",
      a: "Cada vídeo possui etiquetas de intensidade e categoria (ex: \"Melhor Idade\", \"Alongamento\", \"Sentado\"). Escolha o que melhor se adapta à sua condição física atual."
    },
    {
      q: "6. Este site é oficial do Governo Federal?",
      a: "Este projeto possui o selo de apoio institucional do Ministério da Saúde, garantindo que o conteúdo segue diretrizes seguras de promoção à saúde."
    },
    {
      q: "7. Posso assistir pelo celular?",
      a: "Sim. O site foi desenhado para ser leve e funcionar em qualquer celular, mesmo com conexões de internet mais simples."
    },
    {
      q: "8. Tenho uma limitação física (dor ou lesão), posso fazer?",
      a: "Se você possui alguma condição médica específica, procure orientação de um profissional de saúde no seu Posto de Saúde (SUS) antes de iniciar atividades intensas. Comece pelos exercícios de mobilidade e alongamento."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-3xl mx-auto py-10"
    >
      <button onClick={onBack} className="mb-8 flex items-center gap-2 text-wellhub-magenta font-black hover:underline">
        <ArrowLeft className="h-5 w-5" />
        Voltar para a Biblioteca
      </button>

      <div className="flex items-center gap-4 mb-10">
        <div className="p-4 bg-wellhub-magenta/10 rounded-2xl text-wellhub-magenta">
          <HelpCircle className="h-8 w-8" />
        </div>
        <h2 className="text-4xl font-black tracking-tight">Dúvidas Frequentes (FAQ)</h2>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm ring-1 ring-slate-100">
            <h4 className="text-xl font-black text-wellhub-black mb-3">{faq.q}</h4>
            <p className="text-slate-600 leading-relaxed font-medium">{faq.a}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function HelpView({ onBack }: { onBack: () => void }) {
  const topics = [
    {
      icon: Play,
      title: "Como assistir aos vídeos",
      desc: "Basta clicar na imagem do vídeo desejado. Se o vídeo não carregar, verifique sua conexão com a internet."
    },
    {
      icon: Type,
      title: "Aumentar o tamanho da letra",
      desc: "Para melhor leitura, utilize o botão 'Acessibilidade' no topo do site ou o comando de zoom do seu navegador/celular."
    },
    {
      icon: Settings,
      title: "O vídeo está travando",
      desc: "Tente diminuir a qualidade no ícone de engrenagem do player ou recarregue a página."
    },
    {
      icon: Search,
      title: "Como encontrar um exercício específico",
      desc: "Use a barra de busca no topo da página ou utilize os filtros por categoria (ex: 'Idosos' ou 'Em Casa')."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-3xl mx-auto py-10"
    >
      <button onClick={onBack} className="mb-8 flex items-center gap-2 text-wellhub-magenta font-black hover:underline">
        <ArrowLeft className="h-5 w-5" />
        Voltar para a Biblioteca
      </button>

      <div className="flex items-center gap-4 mb-10">
        <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-600">
          <Monitor className="h-8 w-8" />
        </div>
        <h2 className="text-4xl font-black tracking-tight">Ajuda Técnica</h2>
      </div>

      <div className="grid gap-6">
        {topics.map((topic, i) => (
          <div key={i} className="group bg-white p-6 rounded-2xl flex gap-6 items-start shadow-sm ring-1 ring-slate-100">
            <div className="p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <topic.icon className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-wellhub-black mb-1">{topic.title}</h4>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">{topic.desc}</p>
            </div>
          </div>
        ))}

        <div className="mt-10 p-8 rounded-3xl bg-wellhub-black text-white text-center">
          <Mail className="h-10 w-10 mx-auto mb-4 text-wellhub-green" />
          <h3 className="text-2xl font-black mb-2">Ainda com problemas?</h3>
          <p className="text-slate-400 mb-8 font-medium">Nossa equipe técnica está pronta para ajudar a garantir seu acesso à saúde.</p>
          <a 
            href="mailto:leony.sepulcro@gympass.com" 
            className="inline-flex items-center gap-3 bg-white text-wellhub-black px-8 py-4 rounded-full font-black hover:scale-105 transition-transform"
          >
            Relatar Erro no Site
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function PrivacyView({ onBack }: { onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-4xl mx-auto py-10"
    >
      <button onClick={onBack} className="mb-8 flex items-center gap-2 text-wellhub-magenta font-black hover:underline">
        <ArrowLeft className="h-5 w-5" />
        Voltar para a Biblioteca
      </button>

      <div className="flex items-center gap-4 mb-10">
        <div className="p-4 bg-emerald-600/10 rounded-2xl text-emerald-600">
          <Lock className="h-8 w-8" />
        </div>
        <h2 className="text-4xl font-black tracking-tight">Privacidade e Dados</h2>
      </div>

      <div className="prose prose-slate max-w-none bg-white p-10 rounded-[32px] shadow-sm ring-1 ring-slate-100">
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-black mb-4">Compromisso com sua Privacidade</h3>
            <p className="font-medium text-slate-600 leading-relaxed">
              A Biblioteca Pública de Saúde não coleta dados pessoais para o acesso aos vídeos. Nosso objetivo é garantir o anonimato e a segurança do cidadão ao navegar por conteúdos de saúde.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold mb-4">1. Coleta de Informações</h4>
            <p className="text-slate-500 font-medium leading-relaxed">
              Diferente de plataformas comerciais, não exigimos login, registro ou o rastreio de geolocalização precisa. Utilizamos apenas dados técnicos (cookies funcionais) para garantir que o site funcione corretamente no seu dispositivo.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold mb-4">2. Uso de Imagens e Conteúdo</h4>
            <p className="text-slate-500 font-medium leading-relaxed">
              Todo o conteúdo visual do portal segue as diretrizes de licenciamento público do Governo Federal e acordos de impacto social do Wellhub. Nenhuma imagem do usuário é capturada ou processada por nossa tecnologia.
            </p>
          </section>

          <section>
            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-wellhub-magenta">
              <h5 className="font-black text-wellhub-magenta mb-2 uppercase tracking-widest text-xs">Atenção Especial</h5>
              <p className="text-sm font-bold text-slate-700 italic">
                "Nós tratamos seus dados de saúde com o respeito que eles merecem. Seus treinos e buscas permanecem privados."
              </p>
            </div>
          </section>

          <div className="pt-8 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-400">
            <span>Última atualização: Maio 2024</span>
            <a href="https://wellhub.com/pt-br/privacy/" target="_blank" className="hover:text-wellhub-magenta underline">Política Wellhub completa</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TermsView({ onBack }: { onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-4xl mx-auto py-10"
    >
      <button onClick={onBack} className="mb-8 flex items-center gap-2 text-wellhub-magenta font-black hover:underline">
        <ArrowLeft className="h-5 w-5" />
        Voltar para a Biblioteca
      </button>

      <div className="flex items-center gap-4 mb-10">
        <div className="p-4 bg-blue-700 text-white rounded-2xl">
          <FileText className="h-8 w-8" />
        </div>
        <h2 className="text-4xl font-black tracking-tight">Termos de Uso SUS</h2>
      </div>

      <div className="prose prose-slate max-w-none bg-white p-10 rounded-[32px] shadow-sm ring-1 ring-slate-100">
        <div className="space-y-8 font-medium text-slate-600">
          <p className="border-b border-slate-100 pb-6 italic">
            Ao utilizar este portal, você concorda com as diretrizes de promoção à saúde estabelecidas pela parceria institucional.
          </p>
          
          <section>
            <h3 className="text-xl font-black text-wellhub-black mb-4">Disponibilidade do Serviço</h3>
            <p>O portal busca oferecer acesso ininterrupto a guias de exercícios, porém, manutenções técnicas podem ocorrer. O serviço é oferecido como ferramenta complementar de saúde e não substitui consultas presenciais.</p>
          </section>

          <section>
            <h3 className="text-xl font-black text-wellhub-black mb-4">Responsabilidade do Usuário</h3>
            <p>O cidadão é responsável por avaliar sua condição física. Recomendamos sempre o uso de calçados adequados e hidratação constante. Se sentir dor, tontura ou mal-estar, interrompa a atividade imediatamente.</p>
          </section>

          <section>
            <h3 className="text-xl font-black text-wellhub-black mb-4">Propriedade Intelectual</h3>
            <p>Os vídeos são propriedades do Wellhub e do Trainiac, cedidos temporariamente por benevolência social ao Governo Federal do Brasil. É proibida a revenda de acesso a este conteúdo.</p>
          </section>

          <div className="p-6 bg-blue-50 rounded-2xl flex items-start gap-4">
            <ShieldCheck className="h-6 w-6 text-blue-700 shrink-0" />
            <p className="text-sm font-bold text-blue-800">Este conteúdo segue os padrões de segurança do Meu SUS Digital e as normas vigentes de saúde pública brasileira.</p>
          </div>

          <div className="pt-8 text-center">
            <a 
              href="https://meususdigital.saude.gov.br/publico/perfil/termo-uso" 
              target="_blank" 
              className="text-sm font-black text-wellhub-magenta hover:underline"
            >
              Consultar Termos Oficiais do Governo →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VideoDetailView({ video, onBack }: { video: Video, onBack: () => void }) {
  const intensityStyles = {
    'Leve': 'bg-wellhub-green text-wellhub-black',
    'Moderada': 'bg-wellhub-purple text-white',
    'Alta': 'bg-wellhub-magenta text-white',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto py-10"
    >
      <button onClick={onBack} className="mb-8 flex items-center gap-2 text-wellhub-magenta font-black hover:underline text-[19px]">
        <ArrowLeft className="h-5 w-5" />
        Voltar para a Biblioteca
      </button>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Video/GIF */}
        <div className="lg:w-2/3">
          <div className="relative aspect-video overflow-hidden rounded-[32px] bg-slate-950 shadow-2xl ring-1 ring-slate-800">
            {video.videoUrl ? (
              <video
                src={video.videoUrl}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center select-none">
                <div className="absolute inset-0 opacity-15">
                  <img src={video.thumbnail} alt="" className="h-full w-full object-cover blur-sm" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center mb-6">
                    {/* Double spinners */}
                    <div className="absolute h-16 w-16 animate-spin rounded-full border-[3.5px] border-wellhub-green border-t-transparent" />
                    <div className="h-11 w-11 animate-spin rounded-full border-[3.5px] border-wellhub-magenta border-t-transparent animate-pulse" />
                    <Play className="absolute h-4 w-4 text-white/70" />
                  </div>

                  <h3 className="text-[22px] sm:text-[26px] font-black text-wellhub-green uppercase tracking-wide mb-3 px-4">
                    Vídeo de Demonstração Reservado
                  </h3>

                  <p className="max-w-md text-base sm:text-[18px] font-semibold text-slate-300 px-6 leading-relaxed">
                    O reprodutor oficial de alta fidelidade para <span className="text-white underline">{video.title}</span> está em curadoria técnica e homologação do Ministério da Saúde do SUS.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <span className="flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-5 py-2 text-xs font-black text-wellhub-green tracking-wider uppercase animate-pulse">
                      <div className="h-2.5 w-2.5 rounded-full bg-wellhub-green" />
                      status: aguardando upload / loading...
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-10 p-8 rounded-[32px] bg-white shadow-sm ring-1 ring-slate-100">
            <h3 className="text-[20px] font-black mb-6 flex items-center gap-3 text-wellhub-black">
              <Settings className="h-6 w-6 text-wellhub-purple" />
              Como fazer este treino
            </h3>
            <ul className="space-y-4">
              {video.instrucoes?.map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wellhub-magenta text-xs font-black text-white">
                    {i + 1}
                  </span>
                  <p className="text-[18px] text-slate-700 leading-relaxed font-semibold">{step}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Info */}
        <div className="lg:w-1/3 flex flex-col gap-8">
          <div className="p-8 rounded-[32px] bg-wellhub-black text-white shadow-xl">
            <h2 className="text-[32px] font-black leading-tight tracking-tight mb-4">{video.title}</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {video.tags.map(tag => (
                <span key={tag} className="px-3.5 py-1.5 bg-white/10 rounded-full text-xs font-black uppercase tracking-wider text-wellhub-green">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="space-y-8">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Para que serve</p>
                <p className="text-[19px] font-bold text-slate-200 leading-relaxed">{video.objetivo}</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-wellhub-magenta/10 border border-wellhub-magenta/20">
                <p className="text-xs font-black uppercase tracking-widest text-wellhub-magenta mb-2">Impacto na sua Saúde</p>
                <p className="text-[18px] font-semibold text-white leading-relaxed">{video.impacto}</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[32px] bg-wellhub-green text-wellhub-black shadow-lg">
            <h4 className="text-[19px] font-black mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 fill-wellhub-black" />
              Dicas Gerais
            </h4>
            <ul className="space-y-3">
              {video.dicas?.map((tip, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="h-2 w-2 rounded-full bg-wellhub-black mt-2.5 shrink-0" />
                  <p className="text-[18px] font-bold opacity-90 leading-normal">{tip}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-[32px] border-2 border-dashed border-slate-200 text-center">
            <ShieldCheck className="h-10 w-10 mx-auto mb-4 text-emerald-600" />
            <h5 className="text-[18px] font-black text-wellhub-black mb-2 uppercase tracking-wide">Conteúdo Certificado</h5>
            <p className="text-[15px] font-bold text-slate-500">Este exercício foi revisado por profissionais da saúde do Wellhub.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VideoCard({ video, onClick }: { video: Video, onClick?: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const intensityStyles = {
    'Leve': 'bg-wellhub-green/20 text-emerald-800 ring-wellhub-green/30',
    'Moderada': 'bg-wellhub-purple/20 text-indigo-800 ring-wellhub-purple/30',
    'Alta': 'bg-wellhub-magenta/20 text-rose-800 ring-wellhub-magenta/30',
  };

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={video.videoUrl ? handleMouseEnter : undefined}
      onMouseLeave={video.videoUrl ? handleMouseLeave : undefined}
      className="group cursor-pointer overflow-hidden rounded-[32px] bg-white p-3 shadow-md ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-xl hover:ring-wellhub-magenta/15 flex flex-col justify-between h-full"
    >
      <div>
        <div className="relative aspect-video overflow-hidden rounded-[24px]">
          {video.videoUrl ? (
            <video
              ref={videoRef}
              src={video.videoUrl}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={video.thumbnail}
              alt={video.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-black/15 opacity-0 transition-opacity group-hover:opacity-100" />
          
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={`flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ring-1 ${intensityStyles[video.intensity]}`}>
              {video.intensity}
            </span>
          </div>
          
          <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/80 px-3 py-1 text-[11px] font-black text-white backdrop-blur-sm">
            <Clock className="h-3 w-3" />
            {video.duration}
          </div>
        </div>

        <div className="px-2 pt-5 pb-3">
          <div className="mb-3 flex flex-wrap gap-2">
            {video.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <CheckCircle2 className="h-3.5 w-3.5 text-wellhub-green shrink-0" />
                {tag}
              </span>
            ))}
          </div>
          
          <h4 className="text-[19px] font-black leading-snug text-wellhub-black group-hover:text-wellhub-magenta transition-colors tracking-tight">
            {video.title}
          </h4>
        </div>
      </div>

      <div className="px-2 pb-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className="w-full flex items-center justify-center gap-2 rounded-full bg-wellhub-green hover:bg-wellhub-green/90 active:scale-[0.98] transition-all py-3.5 px-4 text-[18px] font-black text-wellhub-black shadow-sm group-hover:shadow-md cursor-pointer"
        >
          Ver Exercício
          <ChevronRight className="h-5 w-5 stroke-[3.5]" />
        </button>
      </div>
    </div>
  );
}

