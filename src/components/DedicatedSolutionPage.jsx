import React from 'react';
import ManufacturingVisual from './ManufacturingVisual';
import FadeInSection from './FadeInSection';
import { SOLUTION_AREAS } from '../data/solutionsData';

export default function DedicatedSolutionPage({
  area,
  onBack,
  onSelectSolution
}) {
  if (!area) return null;

  // Find other solutions for quick cross-navigation
  const otherSolutions = SOLUTION_AREAS.filter((s) => s.id !== area.id);

  return (
    <article aria-labelledby="solution-title" className="pt-8 pb-28 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Return to Overview</span>
          </button>
        </div>

        {/* Section 1: Editorial Header Block */}
        <FadeInSection className="space-y-4 mb-16">
          <h1 id="solution-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-4xl leading-[1.1]">
            {area.title}: {area.headline}
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-3xl pt-2">
            {area.editorialIntro || area.description}
          </p>
        </FadeInSection>

        {/* Section 2: Large Visual Showcase */}
        <FadeInSection className="mb-20">
          <div className="border border-white/10 bg-[#060709] p-2 sm:p-4">
            <ManufacturingVisual
              type={area.visualType}
              maxHeight="max-h-[580px]"
              showTechnicalFrame={false}
            />
          </div>
        </FadeInSection>

        {/* Section 3: Verified Performance Benchmarks */}
        <FadeInSection className="mb-20 border border-white/10 bg-[#07080b]">
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400">
            <span>Production Performance Benchmarks</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {area.metrics.map((metric, idx) => (
              <div key={idx} className="p-8 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-mono tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mt-2">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Section 4: Deep Dive Technical Modules */}
        <FadeInSection className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-zinc-600"></span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
              Technical Modules &amp; Subsystems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {area.features.map((feature, idx) => (
              <div key={idx} className="p-8 bg-[#07080a] space-y-3 hover:bg-[#0b0c10] transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>MODULE {String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-light text-white">
                  {feature.name}
                </h2>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Section 5: Verified Implementation Case Study */}
        <FadeInSection className="mb-20 border border-white/10 p-8 sm:p-12 bg-[#060709]">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-8">
            {area.caseStudy.client}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
            <div className="space-y-3 border-t md:border-t-0 md:border-r border-white/10 pt-6 md:pt-0 md:pr-10">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                Manufacturing Challenge
              </span>
              <p className="text-zinc-400 font-light leading-relaxed">
                {area.caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-3 pt-6 md:pt-0">
              <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
                Measured Production Result
              </span>
              <p className="text-zinc-200 font-light leading-relaxed">
                {area.caseStudy.result}
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Section 6: Cross-Navigation to Other Solutions */}
        <FadeInSection className="mb-16 border-t border-white/10 pt-12">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">
            Other Solution Areas
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherSolutions.map((other) => (
              <button
                key={other.id}
                onClick={() => {
                  if (onSelectSolution) onSelectSolution(other.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left p-5 border border-white/10 bg-[#07080a] hover:border-orange-500/50 hover:bg-[#0b0c10] transition-all group"
              >
                <div className="text-[10px] font-mono text-zinc-500 group-hover:text-orange-400 mb-1">
                  {other.number} // {other.subtitle}
                </div>
                <div className="text-base font-light text-white group-hover:text-white flex items-center justify-between">
                  <span>{other.title}</span>
                  <span className="text-xs text-zinc-500 group-hover:text-orange-400 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </button>
            ))}
          </div>
        </FadeInSection>

        {/* Section 7: Final Conversion Block */}
        <FadeInSection className="border border-white/10 p-8 sm:p-12 bg-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-light text-white">
              Evaluate {area.title} on your drawings
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              We benchmark your sample CAD assemblies or blueprints within 48 hours.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider">
            <button
              onClick={onBack}
              className="px-5 py-3 border border-white/20 text-white hover:border-white/50 transition-colors"
            >
              Overview
            </button>
            <a
              href="mailto:contact@aai-labs.com"
              className="px-6 py-3 bg-orange-500 text-black font-semibold hover:bg-orange-400 transition-colors"
            >
              Request Audit
            </a>
          </div>
        </FadeInSection>
      </div>
    </article>
  );
}
