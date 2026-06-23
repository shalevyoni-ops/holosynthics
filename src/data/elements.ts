export interface Element {
  id: number;
  type: string;
  typeSymbol: string;
  name: string;
  description: string;
  count: number;
  meanMag: number;
  early: number;
  mid: number;
  late: number;
  color: string;
}

export interface AtomType {
  symbol: string;
  name: string;
  color: string;
  description: string;
  elements: Element[];
}

export const ATOM_TYPES: AtomType[] = [
  {
    symbol: "Bo",
    name: "Boolean",
    color: "#F72585",
    description: "Neurons encoding truth values, polarity, and binary distinctions.",
    elements: [
      { id: 1,  type: "Boolean", typeSymbol: "Bo", name: "Affirmation", description: "Neurons encoding positive confirmation and agreement signals.", count: 6,   meanMag: 0.80, early: 33, mid: 33, late: 33, color: "#F72585" },
      { id: 2,  type: "Boolean", typeSymbol: "Bo", name: "Negation",    description: "Neurons encoding denial, refusal, and negative polarity.",    count: 15,  meanMag: 1.24, early: 40, mid: 33, late: 26, color: "#F72585" },
      { id: 3,  type: "Boolean", typeSymbol: "Bo", name: "Polarity",    description: "Neurons discriminating positive vs. negative sentiment.",       count: 6,   meanMag: 1.24, early: 50, mid: 16, late: 33, color: "#F72585" },
      { id: 4,  type: "Boolean", typeSymbol: "Bo", name: "Presence",    description: "Neurons detecting existence and presence of entities.",         count: 26,  meanMag: 0.62, early: 57, mid: 15, late: 26, color: "#F72585" },
      { id: 5,  type: "Boolean", typeSymbol: "Bo", name: "Binary",      description: "Neurons encoding yes/no, on/off, and binary choices.",         count: 38,  meanMag: 0.99, early: 28, mid: 28, late: 42, color: "#F72585" },
      { id: 6,  type: "Boolean", typeSymbol: "Bo", name: "Comparison",  description: "Neurons comparing two states and selecting a winner.",         count: 2,   meanMag: 0.73, early: 50, mid: 0,  late: 50, color: "#F72585" },
      { id: 7,  type: "Boolean", typeSymbol: "Bo", name: "General",     description: "Boolean neurons not fitting a specific sub-type.",             count: 148, meanMag: 0.82, early: 37, mid: 36, late: 26, color: "#F72585" },
    ],
  },
  {
    symbol: "Nu",
    name: "Number",
    color: "#00D9FF",
    description: "Neurons encoding quantities, magnitudes, and numerical relationships.",
    elements: [
      { id: 8,  type: "Number", typeSymbol: "Nu", name: "Cardinal",   description: "Neurons for counting whole numbers and absolute quantities.",  count: 157,  meanMag: 0.75, early: 35, mid: 36, late: 28, color: "#00D9FF" },
      { id: 9,  type: "Number", typeSymbol: "Nu", name: "Ordinal",    description: "Neurons encoding rank, position, and order (first, third).",  count: 23,   meanMag: 0.99, early: 17, mid: 52, late: 30, color: "#00D9FF" },
      { id: 10, type: "Number", typeSymbol: "Nu", name: "Magnitude",  description: "Neurons encoding scale — large, small, vast, tiny.",          count: 22,   meanMag: 0.46, early: 9,  mid: 54, late: 36, color: "#00D9FF" },
      { id: 11, type: "Number", typeSymbol: "Nu", name: "Fraction",   description: "Neurons for ratios, percentages, and partial quantities.",     count: 209,  meanMag: 0.74, early: 33, mid: 32, late: 33, color: "#00D9FF" },
      { id: 12, type: "Number", typeSymbol: "Nu", name: "Money",      description: "Neurons specialized for currency, prices, and financial values.", count: 15, meanMag: 0.53, early: 26, mid: 46, late: 26, color: "#00D9FF" },
      { id: 13, type: "Number", typeSymbol: "Nu", name: "Statistic",  description: "Neurons encoding statistical measures and probabilities.",      count: 32,   meanMag: 0.57, early: 28, mid: 53, late: 18, color: "#00D9FF" },
      { id: 14, type: "Number", typeSymbol: "Nu", name: "General",    description: "Numerical neurons not fitting a specific sub-type.",            count: 1284, meanMag: 0.77, early: 34, mid: 32, late: 32, color: "#00D9FF" },
    ],
  },
  {
    symbol: "Sy",
    name: "Symbol",
    color: "#7209B7",
    description: "Neurons encoding linguistic tokens, code, and structured syntax.",
    elements: [
      { id: 15, type: "Symbol", typeSymbol: "Sy", name: "Lexical",     description: "Neurons for words as abstract symbolic units.",                count: 183,  meanMag: 0.83, early: 28, mid: 32, late: 38, color: "#7209B7" },
      { id: 16, type: "Symbol", typeSymbol: "Sy", name: "Markup",      description: "Neurons specialized in HTML, XML, and formatting syntax.",    count: 6,    meanMag: 0.99, early: 33, mid: 16, late: 50, color: "#7209B7" },
      { id: 17, type: "Symbol", typeSymbol: "Sy", name: "Code",        description: "Neurons encoding programming language constructs.",            count: 283,  meanMag: 1.09, early: 34, mid: 35, late: 29, color: "#7209B7" },
      { id: 18, type: "Symbol", typeSymbol: "Sy", name: "Morphology",  description: "Neurons for word structure — prefixes, suffixes, stems.",     count: 10,   meanMag: 0.81, early: 60, mid: 30, late: 10, color: "#7209B7" },
      { id: 19, type: "Symbol", typeSymbol: "Sy", name: "Letter",      description: "Neurons encoding individual characters and alphabets.",        count: 36,   meanMag: 1.00, early: 47, mid: 33, late: 19, color: "#7209B7" },
      { id: 20, type: "Symbol", typeSymbol: "Sy", name: "Operator",    description: "Neurons for logical and mathematical operators (+, =, &&).",   count: 144,  meanMag: 0.94, early: 34, mid: 34, late: 31, color: "#7209B7" },
      { id: 21, type: "Symbol", typeSymbol: "Sy", name: "General",     description: "Symbolic neurons not fitting a specific sub-type.",            count: 2511, meanMag: 0.96, early: 32, mid: 33, late: 34, color: "#7209B7" },
    ],
  },
  {
    symbol: "Id",
    name: "Identity",
    color: "#4CC9F0",
    description: "Neurons encoding named entities — people, places, organizations.",
    elements: [
      { id: 22, type: "Identity", typeSymbol: "Id", name: "Person",       description: "Neurons specialized in human names and personal identities.",  count: 75,  meanMag: 0.70, early: 33, mid: 38, late: 28, color: "#4CC9F0" },
      { id: 23, type: "Identity", typeSymbol: "Id", name: "Organization", description: "Neurons for companies, institutions, and collective entities.", count: 24,  meanMag: 0.50, early: 33, mid: 45, late: 20, color: "#4CC9F0" },
      { id: 24, type: "Identity", typeSymbol: "Id", name: "Place",        description: "Neurons encoding geographic locations and spatial identities.", count: 74,  meanMag: 0.90, early: 36, mid: 25, late: 37, color: "#4CC9F0" },
      { id: 25, type: "Identity", typeSymbol: "Id", name: "Product",      description: "Neurons for branded items, manufactured goods, and products.", count: 43,  meanMag: 1.01, early: 30, mid: 39, late: 30, color: "#4CC9F0" },
      { id: 26, type: "Identity", typeSymbol: "Id", name: "Role",         description: "Neurons encoding titles, positions, and social roles.",        count: 4,   meanMag: 0.87, early: 25, mid: 75, late: 0,  color: "#4CC9F0" },
      { id: 27, type: "Identity", typeSymbol: "Id", name: "Work",         description: "Neurons for creative works — books, films, artworks.",         count: 6,   meanMag: 1.23, early: 16, mid: 33, late: 50, color: "#4CC9F0" },
      { id: 28, type: "Identity", typeSymbol: "Id", name: "General",      description: "Identity neurons not fitting a specific sub-type.",            count: 713, meanMag: 1.05, early: 31, mid: 36, late: 32, color: "#4CC9F0" },
    ],
  },
  {
    symbol: "Sp",
    name: "Space",
    color: "#22C55E",
    description: "Neurons encoding spatial relationships, positions, and geometry.",
    elements: [
      { id: 29, type: "Space", typeSymbol: "Sp", name: "Position",  description: "Neurons for absolute positions — here, there, center, edge.",    count: 28,  meanMag: 0.78, early: 35, mid: 35, late: 28, color: "#22C55E" },
      { id: 30, type: "Space", typeSymbol: "Sp", name: "Direction", description: "Neurons encoding movement direction — up, down, left, right.",   count: 3,   meanMag: 1.00, early: 66, mid: 0,  late: 33, color: "#22C55E" },
      { id: 31, type: "Space", typeSymbol: "Sp", name: "Region",    description: "Neurons for areas, zones, and bounded spatial regions.",         count: 29,  meanMag: 0.82, early: 27, mid: 51, late: 20, color: "#22C55E" },
      { id: 32, type: "Space", typeSymbol: "Sp", name: "Boundary",  description: "Neurons encoding limits, edges, and spatial boundaries.",        count: 13,  meanMag: 1.45, early: 38, mid: 53, late: 7,  color: "#22C55E" },
      { id: 33, type: "Space", typeSymbol: "Sp", name: "Layout",    description: "Neurons for structural arrangement — rows, columns, grids.",     count: 97,  meanMag: 1.12, early: 34, mid: 28, late: 37, color: "#22C55E" },
      { id: 34, type: "Space", typeSymbol: "Sp", name: "Nesting",   description: "Neurons encoding containment and hierarchical spatial structure.", count: 3,  meanMag: 1.39, early: 0,  mid: 100,late: 0,  color: "#22C55E" },
      { id: 35, type: "Space", typeSymbol: "Sp", name: "General",   description: "Spatial neurons not fitting a specific sub-type.",               count: 232, meanMag: 1.02, early: 33, mid: 30, late: 36, color: "#22C55E" },
    ],
  },
  {
    symbol: "Ti",
    name: "Time",
    color: "#FFD60A",
    description: "Neurons encoding temporal relationships, dates, and sequences.",
    elements: [
      { id: 36, type: "Time", typeSymbol: "Ti", name: "Date",      description: "Neurons for specific dates, years, and calendar references.",   count: 191,  meanMag: 0.94, early: 39, mid: 31, late: 28, color: "#FFD60A" },
      { id: 37, type: "Time", typeSymbol: "Ti", name: "Duration",  description: "Neurons encoding periods, spans, and lengths of time.",         count: 17,   meanMag: 0.71, early: 52, mid: 29, late: 17, color: "#FFD60A" },
      { id: 38, type: "Time", typeSymbol: "Ti", name: "Sequence",  description: "Neurons for ordering events — before, after, then, next.",      count: 118,  meanMag: 1.09, early: 34, mid: 28, late: 36, color: "#FFD60A" },
      { id: 39, type: "Time", typeSymbol: "Ti", name: "Era",       description: "Neurons encoding historical periods and epochs.",               count: 463,  meanMag: 0.85, early: 33, mid: 35, late: 31, color: "#FFD60A" },
      { id: 40, type: "Time", typeSymbol: "Ti", name: "Event",     description: "Neurons for time-bounded occurrences and events.",             count: 131,  meanMag: 0.90, early: 37, mid: 32, late: 29, color: "#FFD60A" },
      { id: 41, type: "Time", typeSymbol: "Ti", name: "Frequency", description: "Neurons encoding how often something happens.",                count: 15,   meanMag: 0.43, early: 26, mid: 33, late: 40, color: "#FFD60A" },
      { id: 42, type: "Time", typeSymbol: "Ti", name: "General",   description: "Temporal neurons not fitting a specific sub-type.",            count: 1457, meanMag: 0.85, early: 32, mid: 32, late: 35, color: "#FFD60A" },
    ],
  },
  {
    symbol: "Re",
    name: "Relation",
    color: "#F59E0B",
    description: "Neurons encoding logical and semantic relationships between concepts.",
    elements: [
      { id: 43, type: "Relation", typeSymbol: "Re", name: "Causal",       description: "Neurons for cause-and-effect links — because, therefore.",      count: 2,   meanMag: 0.82, early: 50, mid: 0,  late: 50, color: "#F59E0B" },
      { id: 44, type: "Relation", typeSymbol: "Re", name: "Contrast",     description: "Neurons encoding opposition — but, however, whereas.",           count: 8,   meanMag: 0.52, early: 0,  mid: 50, late: 50, color: "#F59E0B" },
      { id: 45, type: "Relation", typeSymbol: "Re", name: "Conjunction",  description: "Neurons for additive linking — and, also, furthermore.",         count: 12,  meanMag: 1.00, early: 33, mid: 33, late: 33, color: "#F59E0B" },
      { id: 46, type: "Relation", typeSymbol: "Re", name: "Reference",    description: "Neurons for pronoun resolution and anaphoric reference.",         count: 41,  meanMag: 1.02, early: 31, mid: 34, late: 34, color: "#F59E0B" },
      { id: 47, type: "Relation", typeSymbol: "Re", name: "PartWhole",    description: "Neurons encoding part-of and membership relationships.",          count: 20,  meanMag: 0.98, early: 40, mid: 25, late: 35, color: "#F59E0B" },
      { id: 48, type: "Relation", typeSymbol: "Re", name: "Analogy",      description: "Neurons for similarity and analogical reasoning.",                count: 4,   meanMag: 0.20, early: 100,mid: 0,  late: 0,  color: "#F59E0B" },
      { id: 49, type: "Relation", typeSymbol: "Re", name: "General",      description: "Relational neurons not fitting a specific sub-type.",             count: 428, meanMag: 0.95, early: 35, mid: 31, late: 33, color: "#F59E0B" },
    ],
  },
  {
    symbol: "En",
    name: "Entropy",
    color: "#EF4444",
    description: "Neurons encoding uncertainty, ambiguity, and information noise.",
    elements: [
      { id: 50, type: "Entropy", typeSymbol: "En", name: "Probabilistic", description: "Neurons for likelihood and probability estimates.",               count: 1,  meanMag: 0.19, early: 0,  mid: 100,late: 0,  color: "#EF4444" },
      { id: 51, type: "Entropy", typeSymbol: "En", name: "Ambiguity",     description: "Neurons encoding semantic ambiguity and multiple valid meanings.", count: 6,  meanMag: 0.21, early: 0,  mid: 66, late: 33, color: "#EF4444" },
      { id: 52, type: "Entropy", typeSymbol: "En", name: "Variability",   description: "Neurons for variation and inconsistency across contexts.",        count: 1,  meanMag: 0.19, early: 0,  mid: 100,late: 0,  color: "#EF4444" },
      { id: 53, type: "Entropy", typeSymbol: "En", name: "Noise",         description: "Neurons encoding irrelevant or distracting signal.",              count: 6,  meanMag: 0.80, early: 0,  mid: 50, late: 50, color: "#EF4444" },
      { id: 54, type: "Entropy", typeSymbol: "En", name: "Approximation", description: "Neurons for rounding, estimation, and inexact quantities.",       count: 3,  meanMag: 0.63, early: 0,  mid: 33, late: 66, color: "#EF4444" },
      { id: 55, type: "Entropy", typeSymbol: "En", name: "Confidence",    description: "Neurons encoding certainty level and epistemic confidence.",      count: 1,  meanMag: 1.33, early: 0,  mid: 0,  late: 100,color: "#EF4444" },
      { id: 56, type: "Entropy", typeSymbol: "En", name: "General",       description: "Entropy neurons not fitting a specific sub-type.",               count: 67, meanMag: 0.99, early: 40, mid: 34, late: 25, color: "#EF4444" },
    ],
  },
];

export const ALL_ELEMENTS: Element[] = ATOM_TYPES.flatMap(t => t.elements);
