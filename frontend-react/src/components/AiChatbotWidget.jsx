import React, { useState, useRef, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { Sparkles, MessageCircle, X, Send, User, Bot, ArrowRight, ExternalLink } from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    id: 'welcome',
    sender: 'bot',
    text: 'Hai cantik! ✨ Aku DINA, asisten konsultan nail art virtual dari DNAIL.CO Yogyakarta. Ada yang bisa kubantu seputar referensi desain, estimasi harga, atau cara pesan custom press-on nails?',
    time: 'Baru saja'
  }
];

const QUICK_PROMPTS = [
  '🌸 Rekomendasi kuku wisuda & bridal',
  '💅 Berapa lama ketahanan gel nails?',
  '📏 Cara ukur kuku untuk press-on',
  '💰 Estimasi biaya custom nail art'
];

export default function AiChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateLocalAiResponse = (userText) => {
    const text = userText.toLowerCase();

    if (text.includes('wisuda') || text.includes('bridal') || text.includes('nikah') || text.includes('lamaran')) {
      return 'Untuk momen wisuda atau bridal, rekomendasi terpopuler di DNAIL.CO adalah **Milky Oats with Micro French Tip** atau **Pearl Bridal Lace & 3D Floral Ribbon** (kisaran Rp 120.000 – Rp 185.000). Warnanya elegan, cocok dengan kebaya, dan membuat jari tampak jenjang!';
    }
    if (text.includes('tahan') || text.includes('awet') || text.includes('lama') || text.includes('mengelupas')) {
      return 'Treatment gel di DNAIL.CO rata-rata bertahan **3 hingga 4 minggu** tanpa lifting! Kami menggunakan teknik dry manicure & base gel terstruktur khusus agar cat tidak mudah retak atau menggelembung.';
    }
    if (text.includes('ukur') || text.includes('size') || text.includes('press-on') || text.includes('shopee')) {
      return 'Untuk Press-On Nails, kami sediakan size XS, S, M, L, hingga custom! Cara ukurnya gampang: tempelkan selotip bening di bagian kuku terlebar, tandai dua sisinya dengan pulpen, lalu ukur jaraknya pakai penggaris (mm). Kamu juga bisa langsung checkout di Shopee dinail.co!';
    }
    if (text.includes('harga') || text.includes('biaya') || text.includes('tarif') || text.includes('kalkulator')) {
      return 'Biaya di studio kami transparan: Mulai **Rp 85.000** (Clean Manicure + Gel Polos), **Rp 115.000** (Cat-Eye / Chrome / French), hingga **Rp 145.000 - Rp 180.000** untuk Custom Nail Art rumit. Kamu bisa coba fitur kalkulator di section Simulasi Harga kami ya!';
    }
    if (text.includes('lokasi') || text.includes('alamat') || text.includes('studio') || text.includes('jogja')) {
      return 'Studio DNAIL.CO berlokasi di **Jl. C. Simanjuntak No. 42B, Terban, Gondokusuman, Yogyakarta** (area strategis dekat UGM & UNY). Buka setiap hari pukul 10:00 – 20:00 WIB!';
    }
    if (text.includes('booking') || text.includes('reservasi') || text.includes('slot') || text.includes('wa')) {
      return 'Kamu bisa langsung amankan slot kedatangan via WhatsApp kami di **+62 882-0089-03525**. Sangat disarankan booking H-2 atau H-3 terutama di akhir pekan ya!';
    }

    return 'Terima kasih pertanyaannya! Di DNAIL.CO kami melayani custom nail art studio dan custom press-on handmade. Mau konsultasi warna kulit, kirim foto referensi dari Pinterest, atau langsung amankan jadwal booking?';
  };

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Axios call to /api/v1/chat endpoint
      const response = await axios.post('/api/v1/chat', {
        message: query,
        sender: 'user',
        timestamp: new Date().toISOString()
      }, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 4500
      });

      const replyText = response.data?.reply || response.data?.message || generateLocalAiResponse(query);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      // Graceful fallback with domain AI knowledge
      const fallbackReply = generateLocalAiResponse(query);
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: fallbackReply,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }, 500);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      {/* Floating Trigger Button */}
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Tanya DINA AI Nail Consultant"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
          style={{
            backgroundColor: '#9E2A2B',
            boxShadow: '0 8px 24px rgba(158, 42, 43, 0.45)',
            border: '1.5px solid rgba(247, 244, 239, 0.35)'
          }}
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
          </span>
          <Sparkles className="h-5 w-5 text-[#C8A86B]" />
          <span className="font-mono text-xs font-medium tracking-wide">Tanya DINA AI</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity" />
        <Dialog.Content
          className="fixed bottom-4 right-4 z-50 flex max-h-[88vh] w-[92vw] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[#FCFBF9] shadow-2xl focus:outline-none sm:bottom-6 sm:right-6"
          style={{ fontFamily: 'var(--ff-sans)' }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between p-4 text-[#F7F4EF]"
            style={{ backgroundColor: '#9E2A2B' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#181615] border border-[#C8A86B]/40 text-[#C8A86B]">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <Dialog.Title className="text-sm font-semibold tracking-wide">
                  DINA &mdash; AI Nail Consultant
                </Dialog.Title>
                <Dialog.Description className="font-mono text-[10px] text-amber-200/90 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block"></span>
                  Online &bull; DNAIL.CO Yogyakarta
                </Dialog.Description>
              </div>
            </div>

            <Dialog.Close asChild>
              <button
                type="button"
                className="rounded-full p-1.5 text-white/80 transition hover:bg-black/20 hover:text-white"
                aria-label="Tutup Chat"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* Quick Prompts Bar */}
          <div className="border-b border-[var(--border)] bg-[#F9F6F0] p-2.5">
            <p className="font-mono text-[10px] text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">
              Pilihan Pertanyaan Cepat:
            </p>
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(prompt.replace(/^[^\w]+/, ''))}
                  className="whitespace-nowrap rounded-full border border-[var(--border)] bg-white px-2.5 py-1 text-[11px] text-[var(--text-primary)] transition hover:border-[#9E2A2B] hover:text-[#9E2A2B]"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 max-h-[380px] bg-[#FAF8F5]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="h-7 w-7 rounded-full bg-[#9E2A2B] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                    D
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#9E2A2B] text-white rounded-tr-none'
                      : 'bg-white border border-[var(--border)] text-[var(--text-primary)] rounded-tl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`block mt-1 text-[9px] font-mono ${
                      msg.sender === 'user' ? 'text-white/70 text-right' : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="h-7 w-7 rounded-full bg-[#9E2A2B] text-white flex items-center justify-center shrink-0 text-xs font-mono">
                  D
                </div>
                <div className="bg-white border border-[var(--border)] rounded-2xl rounded-tl-none px-4 py-2.5 text-xs text-[var(--text-muted)] flex items-center gap-1.5 shadow-sm">
                  <span>DINA sedang mengetik</span>
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9E2A2B] animate-bounce"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9E2A2B] animate-bounce [animation-delay:0.2s]"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9E2A2B] animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Fallback to human WA */}
          <div className="px-3 py-1.5 bg-[#F9F6F0] border-t border-[var(--border)] flex items-center justify-between text-[11px]">
            <span className="text-[var(--text-muted)]">Mau bicara langsung?</span>
            <a
              href="https://wa.me/62882008903525?text=Halo%20Admin%20DNAIL.CO%2C%20saya%20ingin%20konsultasi%20langsung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1da851] font-medium flex items-center gap-1 hover:underline"
            >
              WhatsApp Studio &#8599;
            </a>
          </div>

          {/* Input Footer */}
          <div className="border-t border-[var(--border)] bg-white p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Tulis pertanyaan seputar kuku..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 rounded-full border border-[var(--border)] bg-[#F9F6F0] px-4 py-2 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[#9E2A2B] focus:bg-white focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9E2A2B] text-white transition hover:bg-[#7e2233] disabled:opacity-40"
                aria-label="Kirim Pesan"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
