import React from 'react';

const SOLUTION_IMAGE_MAP = {
  'cad-error': {
    src: '/error-detection.png',
    alt: 'AAI Labs Error Detection — Automated Drawing Verification and Geometric Discrepancy Highlighting',
    tag: 'CAD_VERIFICATION // DXF_2D_3D',
    resolution: '0.05 mm precision',
  },
  'quote-breakdown': {
    src: '/quoting.png',
    alt: 'AAI Labs Quoting — Technical Drawing Feature Extraction & Material Cost Breakdown',
    tag: 'FEATURE_EXTRACTION // COST_ENGINE',
    resolution: '4-min turnaround',
  },
  'agent-pipeline': {
    src: '/ai-agents.png',
    alt: 'AAI Labs AI Agents — Autonomous Order Intake & ERP Handoff Workflow',
    tag: 'TASK_PIPELINE // ERP_HANDOFF',
    resolution: 'Autonomous event stream',
  },
  'custom-architecture': {
    src: '/custom-solutions.png',
    alt: 'AAI Labs Custom Solutions — Modular Manufacturing Action & Pipeline Engine',
    tag: 'ON_PREMISE_APPLIANCE // AIR_GAPPED',
    resolution: 'Zero cloud latency',
  },
  'hero': {
    src: '/hero-1.png',
    alt: 'AAI Labs Manufacturing AI Interface and CAD Analysis System',
    tag: 'SYSTEM_OVERVIEW // DUAL_VIEW_CAD',
    resolution: 'Full assembly validation',
  }
};

export default function ManufacturingVisual({
  type,
  showTechnicalFrame = false,
  className = '',
  maxHeight = 'max-h-[500px]'
}) {
  const current = SOLUTION_IMAGE_MAP[type] || SOLUTION_IMAGE_MAP['cad-error'];

  return (
    <div className={`relative border border-white/10 bg-[#060709] overflow-hidden flex flex-col justify-between ${className}`}>
      {/* Optional Engineering Frame Header (Used in Technical Showcase / Concept C) */}
      {showTechnicalFrame && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/60 text-[10px] font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-zinc-300">{current.tag}</span>
          </div>
          <span className="text-zinc-500">{current.resolution}</span>
        </div>
      )}

      {/* Main Image Viewport */}
      <div className="relative w-full flex-1 flex items-center justify-center p-3 sm:p-5 bg-[#050608]">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className={`w-full h-auto object-contain object-center ${maxHeight} transition-opacity duration-300`}
          loading="lazy"
        />
      </div>

      {/* Engineering Footer Bar */}
      {showTechnicalFrame && (
        <div className="flex items-center justify-between px-4 py-1.5 border-t border-white/10 bg-black/40 text-[9px] font-mono text-zinc-600">
          <span>SOURCE: AAI_PRODUCTION_CLUSTER</span>
          <span>INTEGRITY_CHECK: PASS</span>
        </div>
      )}
    </div>
  );
}
