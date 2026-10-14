import React from 'react';

export default function MainFooter({ onNavigateHome }) {
  return (
    <footer className="border-t border-white/[0.08] bg-[#000000] py-8 text-zinc-500 text-xs font-mono relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo container using LOGO.png */}
          <div className="h-10 relative w-44 overflow-hidden flex items-center">
            <img
              src="/LOGO.png"
              alt="AAI Labs"
              style={{
                position: 'absolute',
                top: '50%',
                left: '-180px',
                transform: 'translateY(-50%)',
                height: '280px',
                maxWidth: 'none',
              }}
              className="cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
              onClick={onNavigateHome}
            />
          </div>

          {/* Copyright & Contact */}
          <div className="flex items-center gap-6 text-[11px] text-zinc-500">
            <span>© 2026</span>
            <a
              href="mailto:contact@aai-labs.com"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              contact@aai-labs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
