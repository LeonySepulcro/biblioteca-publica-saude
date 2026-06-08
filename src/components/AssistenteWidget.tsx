import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Message = { role: 'user' | 'assistant'; content: string };

const GREETING: Message = {
  role: 'assistant',
  content: 'Olá! Sou o Assistente de Saúde da Biblioteca Pública. Conte-me como você está se sentindo ou o que gostaria de exercitar hoje — recomendarei exercícios da nossa biblioteca especialmente para você.',
};

export function AssistenteWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userContent = inputValue.trim();
    setInputValue('');
    setIsLoading(true);

    const withUser: Message[] = [...messages, { role: 'user', content: userContent }];
    setMessages([...withUser, { role: 'assistant', content: '' }]);

    // The first message is always the greeting (assistant). Skip it so the API
    // receives a conversation starting with a user message, as required.
    const apiMessages = withUser.filter((m, i) => !(i === 0 && m.role === 'assistant'));

    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok || !response.body) throw new Error('API error');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages(prev => {
          const last = prev[prev.length - 1];
          return [...prev.slice(0, -1), { ...last, content: last.content + chunk }];
        });
      }
    } catch {
      setMessages(prev => {
        const last = prev[prev.length - 1];
        return [
          ...prev.slice(0, -1),
          { ...last, content: 'Não foi possível conectar ao assistente. Verifique sua conexão e tente novamente.' },
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex flex-col w-80 sm:w-96 h-[480px] bg-white rounded-[24px] shadow-2xl ring-1 ring-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-wellhub-magenta text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-xl bg-white/20">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-black leading-none">Assistente de Saúde</p>
                  <p className="text-[10px] font-bold opacity-70 uppercase tracking-wider mt-0.5">
                    Claude · Wellhub
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Fechar assistente"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm font-medium leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-wellhub-magenta text-white rounded-br-sm'
                        : 'bg-slate-100 text-slate-800 rounded-bl-sm'
                    }`}
                  >
                    {msg.content || (
                      <div className="flex items-center gap-1.5 py-0.5">
                        <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '140ms' }} />
                        <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '280ms' }} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-slate-100 shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Como posso te ajudar hoje?"
                  disabled={isLoading}
                  className="flex-1 rounded-full bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-wellhub-magenta/40 disabled:opacity-60 transition-all"
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wellhub-magenta text-white shadow-md transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:scale-100 disabled:cursor-not-allowed"
                  aria-label="Enviar mensagem"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(prev => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-wellhub-magenta text-white shadow-2xl ring-4 ring-wellhub-magenta/20 transition-shadow hover:shadow-wellhub-magenta/25"
        aria-label={isOpen ? 'Fechar assistente' : 'Abrir assistente de saúde'}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
