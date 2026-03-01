export type Category =
  | 'Architecture'
  | 'Language Model'
  | 'Breakthrough'
  | 'Dataset'
  | 'Frontier';

export type Era =
  | 'foundations'
  | 'deep-learning'
  | 'transformer-era'
  | 'modern-llms';

export type Milestone = {
  id: string;
  year: number;
  title: string;
  description: string;
  category: Category;
  era: Era;
  links: { label: string; url: string }[];
  highlight?: boolean;
  quote?: string;
  deepDive?: { fact: string };
  influencedBy?: number[];
  ledTo?: number[];
};

export const milestones: Milestone[] = [
  {
    id: 'mcculloch-pitts',
    year: 1943,
    title: 'McCulloch-Pitts Neuron',
    description:
      'Warren McCulloch and Walter Pitts published "A Logical Calculus of the Ideas Immanent in Nervous Activity," introducing the first mathematical model of a neuron. This binary threshold unit — either firing or not — became the conceptual seed of all neural networks that followed.',
    category: 'Architecture',
    era: 'foundations',
    links: [
      {
        label: 'Original Paper',
        url: 'https://link.springer.com/article/10.1007/BF02478259',
      },
    ],
    quote:
      '"Because of the "all-or-none" character of nervous activity, neural events and the relations among them can be treated by means of propositional logic." — McCulloch & Pitts, 1943',
    deepDive: {
      fact: 'Walter Pitts was a self-taught prodigy who showed up at the University of Chicago at age 15, having read Principia Mathematica cover-to-cover. He never earned a formal degree. He collaborated with McCulloch and Norbert Wiener on cybernetics — then became a recluse and burned all his unpublished work before his death at 46.',
    },
    ledTo: [1958],
  },
  {
    id: 'perceptron',
    year: 1958,
    title: 'The Perceptron',
    description:
      'Frank Rosenblatt at Cornell introduced the Perceptron — the first trainable single-layer neural network, implemented as a physical hardware machine. It could learn to classify patterns from experience, sparking the first great wave of optimism about machine intelligence.',
    category: 'Architecture',
    era: 'foundations',
    links: [
      {
        label: 'Rosenblatt 1958',
        url: 'https://psycnet.apa.org/doi/10.1037/h0042519',
      },
    ],
    quote:
      '"The Navy has given him a computer it expects will be able to walk, talk, see, write, reproduce itself and be conscious of its existence." — New York Times, 1958',
    deepDive: {
      fact: 'The US Navy invested $1.4M (≈$14M today) believing the Perceptron would lead directly to machines that could recognise faces and translate Russian. The Mark I Perceptron was a custom-built hardware machine — not software — the size of a refrigerator, with 400 photocells wired to motor-driven potentiometers as "weights."',
    },
    influencedBy: [1943],
    ledTo: [1969, 1986],
  },
  {
    id: 'minsky-papert',
    year: 1969,
    title: 'Minsky & Papert — AI Winter',
    description:
      '"Perceptrons" by Minsky and Papert rigorously demonstrated that single-layer networks cannot solve linearly inseparable problems like XOR. This effectively ended funding for neural network research and triggered the first AI Winter, halting progress for over a decade.',
    category: 'Breakthrough',
    era: 'foundations',
    links: [
      {
        label: 'Perceptrons (MIT Press)',
        url: 'https://mitpress.mit.edu/9780262630221/perceptrons/',
      },
    ],
    quote:
      '"The perceptron has shown itself worthy of study despite (and perhaps because of) its severe limitations." — Minsky & Papert, 1969',
    deepDive: {
      fact: 'Marvin Minsky and Frank Rosenblatt were childhood classmates at Bronx Science High School in New York City. Their later intellectual rivalry — which directly dismantled a decade of neural network funding — arguably started in the same classroom. Rosenblatt died in a boating accident in 1971, two years after the book was published.',
    },
    influencedBy: [1958],
  },
  {
    id: 'backpropagation',
    year: 1986,
    title: 'Backpropagation',
    description:
      'Rumelhart, Hinton, and Williams published the landmark paper popularising the backpropagation algorithm for training multi-layer networks in Nature. By computing gradients efficiently through the chain rule, deep networks could finally learn non-linear representations — reigniting neural network research after the AI Winter.',
    category: 'Architecture',
    era: 'foundations',
    links: [
      {
        label: 'Rumelhart et al. (Nature)',
        url: 'https://www.nature.com/articles/323533a0',
      },
    ],
    quote:
      '"We describe a new learning procedure, back-propagation, for networks of neurone-like units." — Rumelhart, Hinton & Williams, 1986',
    deepDive: {
      fact: 'Backprop was independently discovered at least four times before the famous 1986 paper: by Bryson & Ho in 1969, Paul Werbos in his 1974 PhD thesis, and Yann LeCun in 1985. Rumelhart\'s version stuck because it was clearly written and published in Nature — giving it an audience far beyond the ML community.',
    },
    influencedBy: [1958],
    ledTo: [1997, 2012],
  },
  {
    id: 'lstm',
    year: 1997,
    title: 'LSTM — Long Short-Term Memory',
    description:
      'Sepp Hochreiter and Jürgen Schmidhuber solved the vanishing gradient problem with Long Short-Term Memory networks. The gated cell architecture could maintain information across thousands of time steps, enabling learning of long-range dependencies — and became the dominant architecture for NLP tasks for two full decades.',
    category: 'Architecture',
    era: 'foundations',
    links: [
      {
        label: 'Hochreiter & Schmidhuber 1997',
        url: 'https://www.bioinf.jku.at/publications/older/2604.pdf',
      },
    ],
    quote:
      '"LSTM can bridge minimal time lags in excess of 1000 discrete-time steps by enforcing constant error flow through internal states of special units." — Hochreiter & Schmidhuber, 1997',
    deepDive: {
      fact: "Jürgen Schmidhuber has maintained a detailed public list of his lab's priority claims over many AI discoveries, including LSTM. His outspoken attribution arguments became one of the most visible academic disputes in deep learning — stretching across decades and multiple blog posts, interviews, and conference talks.",
    },
    influencedBy: [1986],
    ledTo: [2014],
  },
  {
    id: 'neural-lm',
    year: 2003,
    title: 'Neural Probabilistic Language Model',
    description:
      'Yoshua Bengio et al. introduced the first neural language model that learned distributed word representations (embeddings) jointly with the language model. Words became dense vectors in a continuous space, capturing semantic similarity. This paper planted the seed for word vectors and every modern NLP system.',
    category: 'Language Model',
    era: 'foundations',
    links: [
      {
        label: 'Bengio et al. 2003 (JMLR)',
        url: 'https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf',
      },
    ],
    quote:
      '"A goal of statistical language modeling is to learn the joint probability function of sequences of words in a language. This is intrinsically difficult because of the curse of dimensionality." — Bengio et al., 2003',
    deepDive: {
      fact: "This paper was rejected from NeurIPS (then NIPS). The reviewers reportedly didn't think neural approaches to language modeling were practical or interesting. It was eventually published in the Journal of Machine Learning Research — and went on to be cited over 10,000 times.",
    },
    influencedBy: [1997],
    ledTo: [2013],
  },
  {
    id: 'alexnet',
    year: 2012,
    title: 'AlexNet — Deep Learning Revolution',
    description:
      'AlexNet by Krizhevsky, Sutskever, and Hinton won the ImageNet challenge by a margin so large (10+ percentage points) that it ended the contest. Trained on GPUs with ReLU activations and dropout, it proved that deep learning at scale was the path forward — and triggered the modern AI investment era.',
    category: 'Breakthrough',
    era: 'deep-learning',
    highlight: true,
    links: [
      {
        label: 'AlexNet (NIPS 2012)',
        url: 'https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf',
      },
    ],
    quote:
      '"The depth of the model is important for achieving our results: we found that removing any convolutional layer resulted in inferior performance." — Krizhevsky, Sutskever & Hinton, 2012',
    deepDive: {
      fact: 'AlexNet was trained on two NVIDIA GTX 580 GPUs (3 GB VRAM each) running in parallel because the model was too large for one card. The team wrote custom CUDA code to communicate between the two GPUs. Training took 5–6 days. The runner-up at ImageNet that year used hand-crafted features and scored 26.2% error — AlexNet scored 15.3%.',
    },
    influencedBy: [1986],
    ledTo: [2013],
  },
  {
    id: 'word2vec',
    year: 2013,
    title: 'Word2Vec',
    description:
      'Tomas Mikolov et al. at Google showed that neural networks trained on large corpora produce word vectors with striking geometric structure — arithmetic on words worked. king − man + woman ≈ queen. Word embeddings became a universal building block, replacing sparse one-hot representations across all of NLP.',
    category: 'Architecture',
    era: 'deep-learning',
    links: [
      {
        label: 'Word2Vec Paper',
        url: 'https://arxiv.org/abs/1301.3781',
      },
      {
        label: 'Distributed Representations',
        url: 'https://arxiv.org/abs/1310.4546',
      },
    ],
    quote:
      '"We show that these vectors can be used to answer analogy questions like: What is the word that is similar to small in the same sense as biggest is similar to big?" — Mikolov et al., 2013',
    deepDive: {
      fact: 'The famous "king − man + woman ≈ queen" analogy was not actually in the original Word2Vec paper — it appeared in the follow-up paper months later. The original paper focused on efficiency. The analogy demo became the canonical way to explain embeddings and arguably did more for NLP adoption than any technical result.',
    },
    influencedBy: [2003, 2012],
    ledTo: [2014, 2018],
  },
  {
    id: 'seq2seq-attention',
    year: 2014,
    title: 'Seq2Seq + Attention',
    description:
      'Sutskever, Vinyals & Le introduced encoder-decoder LSTMs for machine translation. Bahdanau et al. added soft attention weeks later, letting the decoder selectively focus on relevant input tokens — solving the bottleneck of compressing all input meaning into a single fixed-size vector. A direct ancestor of the Transformer.',
    category: 'Architecture',
    era: 'deep-learning',
    links: [
      {
        label: 'Seq2Seq (Sutskever et al.)',
        url: 'https://arxiv.org/abs/1409.3215',
      },
      {
        label: 'Neural Attention (Bahdanau et al.)',
        url: 'https://arxiv.org/abs/1409.0473',
      },
    ],
    quote:
      '"Each time the model generates a word, it soft-searches for a set of positions in a source sentence where the most relevant information is concentrated." — Bahdanau et al., 2014',
    deepDive: {
      fact: "When Bahdanau et al. visualized the attention weights as a matrix, they found the model had learned near-perfect word alignment between French and English without being told to — the matrix was nearly diagonal. This visualization became one of the most reprinted figures in NLP history.",
    },
    influencedBy: [1997, 2013],
    ledTo: [2017],
  },
  {
    id: 'transformer',
    year: 2017,
    title: 'Transformer — "Attention is All You Need"',
    description:
      'Vaswani et al. at Google Brain discarded recurrence entirely, replacing it with multi-head self-attention over all input positions in parallel. Transformers trained on orders of magnitude more data than LSTMs and scaled cleanly with compute — becoming the universal foundation of every language, vision, and multimodal model since.',
    category: 'Architecture',
    era: 'transformer-era',
    highlight: true,
    links: [
      {
        label: 'Attention is All You Need',
        url: 'https://arxiv.org/abs/1706.03762',
      },
      {
        label: 'Annotated Transformer',
        url: 'https://nlp.seas.harvard.edu/annotated-transformer/',
      },
    ],
    quote: '"Attention is all you need." — Vaswani et al., 2017',
    deepDive: {
      fact: 'The Transformer paper was submitted to ICLR 2017. One reviewer wrote: "The paper seems too good to be true... I\'m not sure these results are reproducible." It received borderline scores. The paper has since been cited over 100,000 times — more than any other paper in the history of machine learning.',
    },
    influencedBy: [2014],
    ledTo: [2018],
  },
  {
    id: 'gpt1-bert-elmo',
    year: 2018,
    title: 'GPT-1, BERT & ELMo',
    description:
      'Three landmark models in one year: ELMo (contextual embeddings from bidirectional LSTMs), GPT-1 (OpenAI\'s generative pre-trained transformer), and BERT (Google\'s masked bidirectional encoder). All three established the "pre-train on unlabeled text, fine-tune on downstream tasks" paradigm that still dominates NLP.',
    category: 'Language Model',
    era: 'transformer-era',
    links: [
      {
        label: 'ELMo (Peters et al.)',
        url: 'https://arxiv.org/abs/1802.05365',
      },
      {
        label: 'GPT-1 (OpenAI)',
        url: 'https://openai.com/research/language-unsupervised',
      },
      {
        label: 'BERT (Devlin et al.)',
        url: 'https://arxiv.org/abs/1810.04805',
      },
    ],
    quote:
      '"We introduce BERT: Bidirectional Encoder Representations from Transformers... designed to pre-train deep bidirectional representations by jointly conditioning on both left and right context in all layers." — Devlin et al., 2018',
    deepDive: {
      fact: 'Google trained BERT on 64 Cloud TPU chips for 4 days — a compute budget unprecedented for a single NLP model at the time. When released, BERT set new state-of-the-art results on 11 NLP benchmarks simultaneously. The ML Twitter community had no precedent for that breadth; papers usually improved one task at a time.',
    },
    influencedBy: [2017, 2013],
    ledTo: [2019],
  },
  {
    id: 'gpt2',
    year: 2019,
    title: 'GPT-2',
    description:
      'OpenAI\'s GPT-2 (1.5B parameters) generated coherent long-form text, fictional news articles, and code of a quality that genuinely surprised the team. OpenAI controversially withheld the full model for 9 months, citing dual-use concerns — the first major AI safety–capability tension to play out in public.',
    category: 'Language Model',
    era: 'transformer-era',
    links: [
      {
        label: 'GPT-2 Blog (OpenAI)',
        url: 'https://openai.com/research/better-language-models',
      },
      {
        label: 'GPT-2 Paper',
        url: 'https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf',
      },
    ],
    quote:
      '"Language models are unsupervised multitask learners." — OpenAI, 2019',
    deepDive: {
      fact: 'The decision to stage the release was widely criticised as a PR stunt — researchers noted that any determined bad actor could train a similar model anyway. OpenAI released the full 1.5B checkpoint 9 months later with no reported misuse. The episode set the template for every subsequent "safety-motivated" partial release debate.',
    },
    influencedBy: [2018],
    ledTo: [2020],
  },
  {
    id: 'gpt3-scaling',
    year: 2020,
    title: 'GPT-3 & Scaling Laws',
    description:
      'GPT-3 (175B parameters) demonstrated extraordinary few-shot reasoning across hundreds of tasks — with no fine-tuning, just a natural language prompt. Simultaneously, Kaplan et al.\'s Scaling Laws paper showed that loss decreases predictably as a power law of compute, data, and model size — establishing the roadmap every lab now follows.',
    category: 'Frontier',
    era: 'transformer-era',
    highlight: true,
    links: [
      {
        label: 'GPT-3 Paper',
        url: 'https://arxiv.org/abs/2005.14165',
      },
      {
        label: 'Scaling Laws (Kaplan et al.)',
        url: 'https://arxiv.org/abs/2001.08361',
      },
    ],
    quote:
      '"We use the term in-context learning to describe the ability of language models to perform tasks given only a few examples in the context, without gradient updates." — Brown et al., 2020',
    deepDive: {
      fact: "GPT-3's API waitlist had 100,000+ sign-ups on day one. The paper itself is 72 pages long — one of the longest ML papers ever published. One of the first documented uses: a developer convinced a friend they were having a text conversation with a human for over 20 minutes before revealing it was GPT-3.",
    },
    influencedBy: [2019, 2018],
    ledTo: [2022],
  },
  {
    id: 'instruct-chatgpt-palm',
    year: 2022,
    title: 'InstructGPT, ChatGPT, PaLM & Chinchilla',
    description:
      'A pivotal year: InstructGPT showed that RLHF (reinforcement learning from human feedback) could align LLMs to follow instructions safely; ChatGPT became the fastest product to reach 100M users; Google\'s PaLM demonstrated 540B parameters; DeepMind\'s Chinchilla overturned scaling wisdom — smaller models trained on more data beat larger under-trained ones.',
    category: 'Frontier',
    era: 'modern-llms',
    highlight: true,
    links: [
      {
        label: 'InstructGPT',
        url: 'https://arxiv.org/abs/2203.02155',
      },
      {
        label: 'PaLM (Chowdhery et al.)',
        url: 'https://arxiv.org/abs/2204.02311',
      },
      {
        label: 'Chinchilla (Hoffmann et al.)',
        url: 'https://arxiv.org/abs/2203.15556',
      },
    ],
    quote:
      '"Making language models bigger does not inherently make them better at following a user\'s intent." — InstructGPT, Ouyang et al., 2022',
    deepDive: {
      fact: "ChatGPT reached 1 million users in 5 days. For context: Netflix took 3.5 years, Instagram 2.5 months, Spotify 5 months. The labelers who did the RLHF preference annotation for InstructGPT were paid contractors in Kenya earning $1–2/hour — a practice that drew significant ethical scrutiny after TIME published an investigation.",
    },
    influencedBy: [2020],
    ledTo: [2023],
  },
  {
    id: 'gpt4-llama-claude-gemini',
    year: 2023,
    title: 'GPT-4, LLaMA, Claude & Gemini',
    description:
      'GPT-4 achieved human-level performance on professional exams (90th percentile on the bar exam). Meta\'s LLaMA open-sourced competitive weights, sparking a research explosion. Anthropic\'s Claude used Constitutional AI for alignment. Google\'s Gemini was the first major model natively multimodal from training — not retrofitted.',
    category: 'Frontier',
    era: 'modern-llms',
    links: [
      {
        label: 'GPT-4 Technical Report',
        url: 'https://arxiv.org/abs/2303.08774',
      },
      {
        label: 'LLaMA (Meta)',
        url: 'https://arxiv.org/abs/2302.13971',
      },
      {
        label: 'Claude (Anthropic)',
        url: 'https://www.anthropic.com/claude',
      },
      {
        label: 'Gemini (DeepMind)',
        url: 'https://arxiv.org/abs/2312.11805',
      },
    ],
    quote:
      '"GPT-4 exhibits human-level performance on various professional and academic benchmarks, including passing a simulated bar exam with a score around the top 10% of test takers." — GPT-4 Technical Report, 2023',
    deepDive: {
      fact: "OpenAI never disclosed GPT-4's architecture or parameter count. Sam Altman later confirmed it uses a Mixture-of-Experts (MoE) design, dismissing the leaked \"1.8 trillion parameters\" figure. This deliberate secrecy marked a turning point: the era of open research papers from frontier labs was over.",
    },
    influencedBy: [2022],
    ledTo: [2024],
  },
  {
    id: 'gpt4o-claude3-gemini15',
    year: 2024,
    title: 'GPT-4o, Claude 3, Gemini 1.5, Llama 3 & DeepSeek',
    description:
      'GPT-4o brought real-time native voice and vision. Claude 3 Opus matched GPT-4 across benchmarks. Gemini 1.5 Pro introduced a 1M-token context window. Meta\'s Llama 3 405B set new open-weight records. DeepSeek-V3 trained a 671B MoE model for ~$6M — a fraction of frontier costs — sending shockwaves through the industry.',
    category: 'Frontier',
    era: 'modern-llms',
    links: [
      {
        label: 'GPT-4o (OpenAI)',
        url: 'https://openai.com/index/hello-gpt-4o/',
      },
      {
        label: 'Claude 3 (Anthropic)',
        url: 'https://www.anthropic.com/news/claude-3-family',
      },
      {
        label: 'Gemini 1.5 (Google)',
        url: 'https://arxiv.org/abs/2403.05530',
      },
      {
        label: 'DeepSeek-V3',
        url: 'https://arxiv.org/abs/2412.19437',
      },
    ],
    quote:
      '"DeepSeek-V3 achieves performance comparable to the leading frontier models, while training costs are kept to a minimum." — DeepSeek, 2024',
    deepDive: {
      fact: "When DeepSeek-V3's $6M training cost became public, Nvidia's stock dropped 17% in a single day — erasing $593 billion in market cap. It was the single largest one-day market cap loss for any company in US stock market history at the time.",
    },
    influencedBy: [2023],
    ledTo: [2025],
  },
  {
    id: 'claude4-gemini2-o3',
    year: 2025,
    title: 'Claude 4, Gemini 2, o3 & the Reasoning Era',
    description:
      'Anthropic released Claude 4 Sonnet and Opus with expanded context and stronger reasoning. OpenAI\'s o3 scored 88% on ARC-AGI — a benchmark designed to resist pattern-matching and measure fluid reasoning. The frontier shifted from raw capability to deliberate multi-step reasoning, agent autonomy, and long-horizon tasks.',
    category: 'Frontier',
    era: 'modern-llms',
    highlight: true,
    links: [
      {
        label: 'Claude 4 (Anthropic)',
        url: 'https://www.anthropic.com/claude',
      },
      {
        label: 'o3 (OpenAI)',
        url: 'https://openai.com/index/deliberative-alignment/',
      },
      {
        label: 'Gemini 2 (Google)',
        url: 'https://deepmind.google/technologies/gemini/',
      },
      {
        label: 'ARC-AGI Benchmark',
        url: 'https://arcprize.org/',
      },
    ],
    quote:
      '"The question is not whether these models can pass tests designed for humans — the question is what kind of reasoning they are actually doing." — François Chollet, ARC-AGI creator, 2025',
    deepDive: {
      fact: "ARC-AGI was designed by François Chollet in 2019 specifically to be unsolvable by pattern-matching — each puzzle has never been seen before. Average humans score ~85%. GPT-4 scored 0.9% in 2023. o3 scored 87.5% in early 2025. The AI safety community was divided: is this genuine fluid intelligence, or an incredibly expensive approximation of it?",
    },
    influencedBy: [2024],
  },
];

export const eras = [
  { id: 'foundations', label: 'Foundations', range: '1940–2010' },
  { id: 'deep-learning', label: 'Deep Learning', range: '2012–2016' },
  { id: 'transformer-era', label: 'Transformer Era', range: '2017–2021' },
  { id: 'modern-llms', label: 'Modern LLMs', range: '2022–2025' },
] as const;

export const categoryColors: Record<
  Category,
  { border: string; text: string; bg: string; glow: string }
> = {
  Architecture: {
    border: 'border-cyan-500',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    glow: 'rgba(6,182,212,0.3)',
  },
  'Language Model': {
    border: 'border-purple-500',
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
    glow: 'rgba(168,85,247,0.3)',
  },
  Breakthrough: {
    border: 'border-pink-500',
    text: 'text-pink-400',
    bg: 'bg-pink-500/10',
    glow: 'rgba(236,72,153,0.3)',
  },
  Dataset: {
    border: 'border-green-500',
    text: 'text-green-400',
    bg: 'bg-green-500/10',
    glow: 'rgba(34,197,94,0.3)',
  },
  Frontier: {
    border: 'border-yellow-500',
    text: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    glow: 'rgba(234,179,8,0.3)',
  },
};

// Lookup: year → title (for connection chips)
export const milestoneByYear: Record<number, string> = Object.fromEntries(
  milestones.map((m) => [m.year, m.title])
);
