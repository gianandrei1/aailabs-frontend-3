import React, { useState } from 'react';
import { SOLUTION_AREAS, PRIMARY_CASE_STUDY } from '../../data/solutionsData';
import ManufacturingVisual from '../ManufacturingVisual';
import FadeInSection from '../FadeInSection';

export default function ConceptA_Editorial({ onNavigateDedicated, onExploreClick }) {
  const [activeAreaId, setActiveAreaId] = useState('error-detection');
  const activeSolution = SOLUTION_AREAS.find((s) => s.id === activeAreaId) || SOLUTION_AREAS[0];
  const activeCaseStudy = activeSolution.caseStudy || PRIMARY_CASE_STUDY;

  return (
    <div className="text-white selection:bg-orange-500 selection:text-black">
      {/* =========================================================================
          SECTION 1: HERO (Wide Editorial Showcase)
         ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 border-b border-white/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
          {/* Eyebrow */}
          <FadeInSection className="mb-6 sm:mb-8">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
                AAI Labs // Manufacturing Intelligence
              </span>
            </div>
          </FadeInSection>

          {/* Wide Hero Text Content */}
          <FadeInSection className="space-y-6 sm:space-y-8 max-w-5xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-white">
              AI-powered engineering for precision manufacturing.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
              We develop deterministic AI software that audits technical drawings, automates quotation calculus, and eliminates repetitive engineering bottlenecks.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-6">
              <button
                onClick={() => {
                  const el = document.getElementById('solutions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 bg-orange-500 text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-orange-400 transition-colors"
              >
                Explore Solutions
              </button>
              <a
                href="#contact"
                className="text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span>Book Process Audit</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </FadeInSection>

          {/* Bottom: Wide High-Resolution Image Showcase */}
          <FadeInSection delay={150} className="mt-12 sm:mt-16 lg:mt-20">
            <div className="border border-white/10 bg-[#07080a] p-3 sm:p-5 lg:p-6 shadow-2xl">
              <div className="w-full flex items-center justify-center bg-[#050608] overflow-hidden">
                <img
                  src="/HERO - 2.png"
                  alt="AAI Labs CAD drawing verification"
                  className="w-full h-auto max-h-[640px] object-contain object-center transition-opacity duration-300"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 & 3: FOUR MAIN SOLUTION AREAS (Editorial Monograph Index)
         ========================================================================= */}
      {/* =========================================================================
          SECTION 2 & 3: FOUR MAIN SOLUTION AREAS (Simplified Core Capabilities)
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08]" id="solutions">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Minimal Section Header */}
          <FadeInSection className="mb-10 sm:mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-zinc-600"></span>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Four Core Solution Areas
            </h2>
          </FadeInSection>

          {/* Clean Split Layout: 4 Solutions on Left, Visual on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: 4 Solution Selector Buttons */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="border border-white/10 divide-y divide-white/10 bg-[#07080a] h-full flex flex-col justify-between">
                {SOLUTION_AREAS.map((area) => {
                  const isActive = area.id === activeAreaId;
                  return (
                    <button
                      key={area.id}
                      onClick={() => setActiveAreaId(area.id)}
                      className={`w-full text-left p-5 sm:p-6 relative transition-all flex-1 flex flex-col justify-center focus:outline-none ${isActive
                        ? 'bg-zinc-900/60 text-white'
                        : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-950/40'
                        }`}
                    >
                      {/* Left Accent Indicator */}
                      {isActive && (
                        <span className="absolute top-0 bottom-0 left-0 w-[3px] bg-orange-500"></span>
                      )}

                      <div className="mb-1.5">
                        <span
                          className={`text-[11px] font-mono tracking-widest uppercase ${isActive ? 'text-orange-400' : 'text-zinc-600'
                            }`}
                        >
                          {area.number}
                        </span>
                      </div>

                      <div
                        className={`text-lg sm:text-xl font-light tracking-tight ${isActive ? 'text-white' : 'text-zinc-400'
                          }`}
                      >
                        {area.title}
                      </div>

                      {/* Brief One-Sentence Description When Active */}
                      {isActive && (
                        <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                          {area.oneSentenceDesc || area.headline}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dominant Visual Synchronized with Selection */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="w-full h-full flex flex-col justify-center border border-white/10 bg-[#07080a] p-3 sm:p-5">
                <ManufacturingVisual
                  type={activeSolution.visualType}
                  maxHeight="max-h-[500px]"
                  showTechnicalFrame={false}
                />
              </div>
            </div>
          </div>

          {/* Clean Explore Architecture Link */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => onNavigateDedicated(activeSolution.id)}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors group"
            >
              <span>Explore {activeSolution.title} Architecture</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: SELECTED PRODUCTION IMPLEMENTATION (Interchangeable per Solution)
         ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08]" id="case-study">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <FadeInSection className="mb-10">
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-zinc-600"></span>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                Selected Production Implementation
              </span>
            </div>
          </FadeInSection>

          <div
            key={activeSolution.id}
            className="border border-white/10 bg-[#07080a] p-8 sm:p-12 lg:p-14 animate-fadeIn"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Client & Headline */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-light text-white leading-tight">
                  {activeCaseStudy.client}
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {activeSolution.headline}
                </p>

                {/* Solution-specific verified metrics */}
                <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10">
                  {activeSolution.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xl sm:text-2xl font-mono font-light text-white">{m.value}</div>
                      <div className="text-[10px] font-mono uppercase text-zinc-500 mt-1 leading-snug">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Problem, Solution & Result */}
              <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-white/10 lg:pl-10">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Manufacturing Challenge
                  </span>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {activeCaseStudy.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 block">
                    Implemented Solution &amp; Measured Value
                  </span>
                  <p className="text-sm text-zinc-200 font-light leading-relaxed">
                    {activeCaseStudy.result}
                  </p>
                </div>

                <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-zinc-500 border-t border-white/5">
                  <span>TELEMETRY: {activeSolution.telemetry?.status || 'VERIFIED PRODUCTION DATA'}</span>
                  <span>ENGINE: {activeSolution.telemetry?.engine || 'AAI DETERMINISTIC KERNEL'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FINAL CTA (Minimal Editorial)
         ========================================================================= */}
      <section className="py-24 sm:py-32" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInSection className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
              Ready to discuss your manufacturing workflows?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
              We audit your sample CAD drawings and engineering documents to evaluate automation feasibility within 48 hours.
            </p>
            <div className="pt-4 flex justify-center items-center gap-4">
              <a
                href="mailto:contact@aai-labs.com"
                className="px-8 py-4 bg-orange-500 text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-orange-400 transition-colors"
              >
                Talk to Our Team
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
