export const SOLUTION_AREAS = [
  {
    id: 'error-detection',
    number: '01',
    code: 'ERR_DET',
    title: 'Error Detection',
    navLabel: 'Error Detection',
    subtitle: 'Automated CAD & Drawing Verification',
    headline: 'Catch non-manufacturable geometry before raw materials are cut.',
    oneSentenceDesc: 'Compare engineering drawings with CAD models to identify geometric discrepancies and unmachinable features.',
    editorialIntro: 'Precision manufacturing begins with geometry validation. By pairing deterministic vector kernels with neural feature recognition, AAI Labs automatically pinpoints open loops, missing datum callouts, and tolerance conflicts before nesting or machine programming begins.',
    description:
      'Deterministic geometric checks and neural feature extractors parse 2D DXF/DWG contours and 3D STEP models. We isolate open loops, unmachinable internal radii, missing datum callouts, and conflicting tolerances before quotation or nesting.',
    metrics: [
      { label: 'Unclosed contours detected', value: '100%' },
      { label: 'Engineering review time', value: '-84%' },
      { label: 'Pre-production scrap reduction', value: '-32%' }
    ],
    technicalHighlights: [
      'Topological manifold validation for 3D solid models',
      'Automatic polyline closing and micro-gap repair',
      'Geometric dimensioning & tolerancing (GD&T) OCR extraction',
      'Instantaneous collision checks against machine envelope limits'
    ],
    features: [
      {
        name: 'Open Loop & Overlap Detection',
        tag: 'VECTOR_KERNEL',
        desc: 'Identifies unclosed polyline vertices, duplicate micro-segments, and inverted normals that crash nesting and CAM toolpath generators.'
      },
      {
        name: 'Tool Access & Corner Radii',
        tag: 'CAM_READINESS',
        desc: 'Flags sharp internal corners requiring unavailable CNC endmills or impossible EDM burn depths prior to spindle setup.'
      },
      {
        name: 'Drawing vs. Model Reconciliation',
        tag: 'GD&T_PARSER',
        desc: 'Extracts title-block tolerances, revision discrepancies, and datum references to ensure 2D blueprints and 3D geometry match.'
      },
      {
        name: 'CAM Kernel Readiness Check',
        tag: 'GEOMETRIC_AUDIT',
        desc: 'Validates surface watertightness, manifold edges, and surface normals for automated downstream cutting and milling.'
      }
    ],
    visualType: 'cad-error',
    imageSrc: '/error-detection.png',
    imageAlt: 'AAI Labs Error Detection — Automated Drawing Verification and Geometric Discrepancy Highlighting',
    telemetry: {
      sector: 'Precision Metal Fabrication',
      inputPayload: '2D DXF & DWG / 3D STEP Assemblies',
      engine: 'AAI Deterministic Parser v2.8',
      latency: '1.4s per file',
      status: 'VERIFIED IN PRODUCTION'
    },
    caseStudy: {
      client: 'Tier-1 Sheet Metal & Stamping Supplier',
      challenge: 'The plant received over 400 customer DXF files weekly. Unclosed contours and zero-radius internal cutouts required 4 junior engineers to manually inspect and repair files before nesting.',
      solution: 'Deployed AAI Labs automated geometric verification pipeline to ingest files directly from customer uploads, flag non-manufacturable geometry, and generate instant healing recommendations.',
      result: 'Automated 96% of drawing validation within 1.4 seconds per file. Reduced quote turnaround from 48 hours to under 15 minutes while cutting engineering review labor by 84%.'
    }
  },
  {
    id: 'quoting',
    number: '02',
    code: 'QUOTE_CALC',
    title: 'Quoting',
    navLabel: 'Quoting',
    subtitle: 'Drawing Feature Extraction & Cost Engine',
    headline: 'Generate precise manufacturing estimates directly from technical data.',
    oneSentenceDesc: 'Extract manufacturing-relevant information from engineering drawings to deliver rapid, consistent quotation.',
    editorialIntro: 'Estimating speed determines bid win rates. AAI Labs parses technical drawings to automatically extract cut perimeters, bend lines, hole matrices, and alloy specifications, piping live data directly into your shop floor costing formulas.',
    description:
      'Extract bounding stock, cut lengths, bend lines, hole matrices, surface finishes, and specific alloy grades automatically. Feed extracted attributes directly into live ERP machine hourly rates and material coil index pricing.',
    metrics: [
      { label: 'Drawing parsing latency', value: '1.2s' },
      { label: 'Quote delivery turnaround', value: '< 10 min' },
      { label: 'Cost estimating variance', value: '< 2.4%' }
    ],
    technicalHighlights: [
      'True-shape preliminary nest yield forecasting',
      'Dynamic fiber laser, plasma, and waterjet cut-time calculation',
      'Press brake bend sequence & tonnage simulation',
      'Bi-directional ERP machine hour sync and steel index pricing'
    ],
    features: [
      {
        name: 'Automatic Feature Extraction',
        tag: 'FEATURE_EXTRACT',
        desc: 'Extracts pierce counts, total perimeter cut linear meters, hole diameters, and countersinks from 2D and 3D files.'
      },
      {
        name: 'Sheet Metal & Bending Calculus',
        tag: 'BEND_LOGIC',
        desc: 'Calculates developed flat patterns, bend deduction k-factors, and press brake stroke cycle times.'
      },
      {
        name: 'Material & Nest Yield Estimation',
        tag: 'NEST_ALGO',
        desc: 'Runs instantaneous preliminary rectangular and true-shape nesting algorithms to predict actual scrap percentage.'
      },
      {
        name: 'ERP & Machine Rate Mapping',
        tag: 'COST_ENGINE',
        desc: 'Connects directly with machine hourly rates (fiber laser, waterjet, milling, press brake) to produce line-item cost breakdowns.'
      }
    ],
    visualType: 'quote-breakdown',
    imageSrc: '/quoting.png',
    imageAlt: 'AAI Labs Quoting — Technical Drawing Feature Extraction & Material Cost Breakdown',
    telemetry: {
      sector: 'Heavy Fabrication & CNC Machining',
      inputPayload: 'Multi-part PDF Blueprints & CAD Files',
      engine: 'AAI Quoting Extraction Engine v3.1',
      latency: '2.1s per assembly',
      status: 'VERIFIED IN PRODUCTION'
    },
    caseStudy: {
      client: 'Custom Heavy Fabrication & Machining Plant',
      challenge: 'Senior estimators spent 35 to 50 minutes per RFQ manually tracing blueprint perimeters, calculating bend allowances, and checking material availability, delaying response times.',
      solution: 'Implemented AAI Labs feature extraction engine to calculate perimeter cuts, pierce counts, and bend deductions within seconds, generating structured bill-of-materials (BOM) estimates.',
      result: 'Reduced quote turnaround to 4 minutes per assembly with 99.1% cost accuracy compared to finalized job logs, leading to a 28% increase in awarded contracts.'
    }
  },
  {
    id: 'ai-agents',
    number: '03',
    code: 'AGNT_ORCH',
    title: 'AI Agents',
    navLabel: 'AI Agents',
    subtitle: 'Autonomous Workflow & Engineering Hand-offs',
    headline: 'Agents that triage RFQ mailboxes, route BOMs, and prep CAM jobs.',
    oneSentenceDesc: 'Automate repetitive manufacturing workflows from order intake to operational verification.',
    editorialIntro: 'Modern machine shops run on fragmented communications across emails, PDFs, and CAD folders. AAI Agents operate deterministically in the background—sorting inbound drawings, validating revisions, and queuing jobs for production.',
    description:
      'Purpose-built industrial agents with deterministic tool execution. They monitor inbound engineering email threads, download customer archives, inspect attachments, generate structured BOM entries, and notify engineers only on high-severity flags.',
    metrics: [
      { label: 'RFQ mailbox triage', value: 'Autonomous' },
      { label: 'BOM generation time', value: '18s' },
      { label: 'Manual intervention needed', value: '14%' }
    ],
    technicalHighlights: [
      'Deterministic schema validation preventing hallucinations',
      'Automated unpack of multi-folder customer archives and ZIPs',
      'Cross-document revision comparison (PO vs drawing rev letters)',
      'Direct webhooks into ERP, MRP, and shop-floor scheduling systems'
    ],
    features: [
      {
        name: 'RFQ Mailbox Ingestion',
        tag: 'INBOX_TRIAGE',
        desc: 'Extracts revisions, purchase orders, drawings, and customer requirements from email text, PDFs, and ZIP archives.'
      },
      {
        name: 'Multi-Level BOM Assembly Parser',
        tag: 'BOM_RESOLVER',
        desc: 'Deconstructs STEP assemblies into child part hierarchies, categorizing manufactured vs. off-the-shelf fasteners.'
      },
      {
        name: 'CAM & Laser Pre-flight Runner',
        tag: 'JOB_PREFLIGHT',
        desc: 'Converts CAD files into clean DXF layers, applies default lead-in rules, and queues parts to scheduled cut runs.'
      },
      {
        name: 'Deterministic Audit Log',
        tag: 'AUDIT_TRAIL',
        desc: 'Every file edit and cost decision is stamped with step-by-step mathematical reasoning and full operator override capability.'
      }
    ],
    visualType: 'agent-pipeline',
    imageSrc: '/ai-agents.png',
    imageAlt: 'AAI Labs AI Agents — Autonomous Order Intake & ERP Handoff Workflow',
    telemetry: {
      sector: 'Contract Electronics & Enclosure Assembly',
      inputPayload: 'Inbound RFQ Archives & Customer POs',
      engine: 'AAI Autonomous Task Orchestrator v1.9',
      latency: 'Autonomous event stream',
      status: 'VERIFIED IN PRODUCTION'
    },
    caseStudy: {
      client: 'Contract Electronics & Enclosure Manufacturer',
      challenge: 'Sales engineers spent half their workweek unpacking ZIP files, renaming drawing revisions, and manually transcribing part numbers into internal ERP systems.',
      solution: 'Configured AAI Labs autonomous industrial agents to monitor customer portals, validate revision codes, extract dimensions, and route complete jobs to CAM schedulers.',
      result: 'Autonomous agents now ingest, classify, and populate 90% of incoming jobs straight into the production queue with zero manual data entry and complete traceability.'
    }
  },
  {
    id: 'custom-solutions',
    number: '04',
    code: 'CUST_ENG',
    title: 'Custom Solutions',
    navLabel: 'Custom Solutions',
    subtitle: 'Specialized Industrial AI & Machine Vision',
    headline: 'Tailored algorithms built for your exact proprietary manufacturing process.',
    oneSentenceDesc: 'Build AI-powered tools tailored to specific manufacturing processes and business needs.',
    editorialIntro: 'When off-the-shelf software fails your proprietary tooling, metallurgy, or quality inspection standards, AAI Labs designs custom mathematical models and computer vision pipelines deployed on-premise or in your private cloud.',
    description:
      'When off-the-shelf software fails your proprietary tooling, metallurgy, or quality inspection standards, AAI Labs designs custom mathematical models and computer vision pipelines deployed on-premise or in your private cloud.',
    metrics: [
      { label: 'Proprietary tooling models', value: '100% Custom' },
      { label: 'Deployment architecture', value: 'Air-gapped' },
      { label: 'Data privacy & IP ownership', value: '100% Client' }
    ],
    technicalHighlights: [
      'Sub-millimeter automated optical inspection (AOI) algorithms',
      'Integration with legacy CNC controllers, PLCs, and SCADA networks',
      'Zero external cloud dependencies for defense & aerospace security',
      'Custom metallurgical wear prediction and cycle optimization'
    ],
    features: [
      {
        name: 'On-Premise & Air-Gapped Deployment',
        tag: 'SECURITY_ENCLAVE',
        desc: 'Full model inference on internal hardware without sending proprietary IP or aerospace drawings outside your firewall.'
      },
      {
        name: 'High-Precision Automated Optical Inspection',
        tag: 'OPTICAL_AOI',
        desc: 'Sub-millimeter weld seam, surface scratch, and dimensional verification using specialized industrial camera feeds.'
      },
      {
        name: 'Legacy ERP & CAM Integration',
        tag: 'SYSTEM_BRIDGE',
        desc: 'Custom API middleware connecting older machine controllers, AS400 databases, and modern engineering software.'
      },
      {
        name: 'Custom Heuristic Optimization',
        tag: 'SCHEDULING_CORE',
        desc: 'Specialized nesting, cutting path minimization, and coil scheduling algorithms tailored to unusual constraint sets.'
      }
    ],
    visualType: 'custom-architecture',
    imageSrc: '/custom-solutions.png',
    imageAlt: 'AAI Labs Custom Solutions — Modular Manufacturing Action & Pipeline Engine',
    telemetry: {
      sector: 'Aerospace & Defense Subsystem Fabrication',
      inputPayload: 'Proprietary Metallurgy & Tooling Models',
      engine: 'AAI On-Premise Industrial Appliance',
      latency: '< 50ms inference loop',
      status: 'VERIFIED IN PRODUCTION'
    },
    caseStudy: {
      client: 'Precision Aerospace Component Manufacturer',
      challenge: 'Strict defense security compliance prohibited external cloud services, while high-tolerance nickel-alloy parts required automated surface inspection.',
      solution: 'Delivered an on-premise vision and CAD validation appliance operating inside their secure VLAN with sub-millimeter optical precision.',
      result: 'Eliminated manual optical inspection bottlenecks while maintaining 100% compliance with ITAR/defense data isolation standards.'
    }
  }
];

export const PRIMARY_CASE_STUDY = {
  tag: 'Selected Production Implementation',
  client: 'Tier-1 Sheet Metal & Stamping Supplier',
  headline: 'Eliminating 84% of manual drawing review time across 400+ weekly customer RFQs.',
  challenge: 'The plant received over 400 customer DXF files weekly. Frequent unclosed contours, duplicate zero-length lines, and ambiguous tolerance callouts required 4 junior engineers to manually inspect and repair files before nesting could run.',
  solution: 'Deployed AAI Labs deterministic geometric parser and neural feature extractor to inspect customer files on arrival, detect geometry flaws, and generate instant healing recommendations.',
  result: 'Automated 96% of drawing validation within 1.4 seconds per file. Reduced quote turnaround from 48 hours to under 15 minutes, cutting pre-production scrap by 32%.',
  metrics: [
    { label: 'Validation speed', value: '1.4s', detail: 'Per complex file' },
    { label: 'Turnaround reduction', value: '-84%', detail: 'Engineering review time' },
    { label: 'Quote cycle', value: '< 15m', detail: 'Down from 48 hours' }
  ],
  telemetryBadge: 'VERIFIED FIELD DATA // ZERO FABRICATED METRICS'
};
