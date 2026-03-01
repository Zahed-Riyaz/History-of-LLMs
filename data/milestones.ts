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
  year: number;
  title: string;
  description: string;
  category: Category;
  era: Era;
  links: { label: string; url: string }[];
  highlight?: boolean;
};

export const milestones: Milestone[] = [
  {
    year: 1943,
    title: 'McCulloch-Pitts Neuron',
    description:
      'Warren McCulloch and Walter Pitts published "A Logical Calculus of the Ideas Immanent in Nervous Activity," introducing the first mathematical model of a neuron. This binary threshold unit became the conceptual seed of all neural networks.',
    category: 'Architecture',
    era: 'foundations',
    links: [
      {
        label: 'Original Paper',
        url: 'https://link.springer.com/article/10.1007/BF02478259',
      },
    ],
  },
  {
    year: 1958,
    title: 'The Perceptron',
    description:
      'Frank Rosenblatt at Cornell introduced the Perceptron — the first trainable single-layer neural network implemented in hardware. It could learn to classify patterns from experience, sparking immense optimism about machine intelligence.',
    category: 'Architecture',
    era: 'foundations',
    links: [
      {
        label: 'Rosenblatt 1958',
        url: 'https://psycnet.apa.org/doi/10.1037/h0042519',
      },
    ],
  },
  {
    year: 1969,
    title: 'Minsky & Papert — AI Winter',
    description:
      '"Perceptrons" by Minsky and Papert mathematically demonstrated the limitations of single-layer networks, including inability to solve XOR. This triggered the first AI Winter, halting funding and research for over a decade.',
    category: 'Breakthrough',
    era: 'foundations',
    links: [
      {
        label: 'Perceptrons Book (MIT Press)',
        url: 'https://mitpress.mit.edu/9780262630221/perceptrons/',
      },
    ],
  },
  {
    year: 1986,
    title: 'Backpropagation',
    description:
      'Rumelhart, Hinton, and Williams published the landmark paper popularizing the backpropagation algorithm for training multi-layer networks. This reignited neural network research and made deep architectures trainable for the first time.',
    category: 'Architecture',
    era: 'foundations',
    links: [
      {
        label: 'Rumelhart et al. 1986 (Nature)',
        url: 'https://www.nature.com/articles/323533a0',
      },
    ],
  },
  {
    year: 1997,
    title: 'LSTM — Long Short-Term Memory',
    description:
      'Sepp Hochreiter and Jürgen Schmidhuber solved the vanishing gradient problem with Long Short-Term Memory networks. LSTMs could learn long-range dependencies in sequences, becoming the dominant architecture for NLP tasks for two decades.',
    category: 'Architecture',
    era: 'foundations',
    links: [
      {
        label: 'Hochreiter & Schmidhuber 1997',
        url: 'https://www.bioinf.jku.at/publications/older/2604.pdf',
      },
    ],
  },
  {
    year: 2003,
    title: 'Neural Probabilistic Language Model',
    description:
      'Yoshua Bengio et al. introduced the first neural language model that learned distributed word representations (embeddings) jointly with the language model. This paper planted the seed for word vectors and modern NLP.',
    category: 'Language Model',
    era: 'foundations',
    links: [
      {
        label: 'Bengio et al. 2003 (JMLR)',
        url: 'https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf',
      },
    ],
  },
  {
    year: 2012,
    title: 'AlexNet — Deep Learning Revolution',
    description:
      'AlexNet by Krizhevsky, Sutskever, and Hinton won ImageNet by a huge margin using deep convolutional networks on GPUs. This single result transformed AI — proving that deep learning at scale was the path forward and triggering massive investment.',
    category: 'Breakthrough',
    era: 'deep-learning',
    highlight: true,
    links: [
      {
        label: 'AlexNet Paper (NIPS 2012)',
        url: 'https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf',
      },
    ],
  },
  {
    year: 2013,
    title: 'Word2Vec',
    description:
      'Tomas Mikolov et al. at Google introduced Word2Vec, showing that neural networks trained on large corpora produce word embeddings with remarkable semantic structure (king − man + woman ≈ queen). Embeddings became a universal NLP building block.',
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
  },
  {
    year: 2014,
    title: 'Seq2Seq + Attention',
    description:
      'Sutskever, Vinyals & Le introduced sequence-to-sequence learning with encoder-decoder LSTMs for machine translation. Bahdanau et al. added the attention mechanism shortly after — allowing the decoder to focus on relevant input tokens, a crucial precursor to the Transformer.',
    category: 'Architecture',
    era: 'deep-learning',
    links: [
      {
        label: 'Seq2Seq (Sutskever et al.)',
        url: 'https://arxiv.org/abs/1409.3215',
      },
      {
        label: 'Attention (Bahdanau et al.)',
        url: 'https://arxiv.org/abs/1409.0473',
      },
    ],
  },
  {
    year: 2017,
    title: 'Transformer — "Attention is All You Need"',
    description:
      'Vaswani et al. at Google Brain introduced the Transformer architecture, replacing recurrence entirely with multi-head self-attention. Trained massively in parallel, transformers scaled to billions of parameters and became the universal foundation of every modern LLM.',
    category: 'Architecture',
    era: 'transformer-era',
    highlight: true,
    links: [
      {
        label: 'Attention is All You Need',
        url: 'https://arxiv.org/abs/1706.03762',
      },
      {
        label: 'Annotated Transformer (Harvard NLP)',
        url: 'https://nlp.seas.harvard.edu/annotated-transformer/',
      },
    ],
  },
  {
    year: 2018,
    title: 'GPT-1, BERT & ELMo',
    description:
      'Three landmark models arrived in 2018: ELMo (contextual embeddings from language models), GPT-1 (OpenAI\'s first generative pre-trained transformer), and BERT (Google\'s bidirectional encoder). Pre-train → fine-tune became the new paradigm for NLP.',
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
  },
  {
    year: 2019,
    title: 'GPT-2',
    description:
      'OpenAI\'s GPT-2 (1.5B parameters) generated coherent long-form text so convincingly that OpenAI controversially staged its release citing misuse concerns. It demonstrated that scale alone could yield remarkable zero-shot generalization.',
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
  },
  {
    year: 2020,
    title: 'GPT-3 & Scaling Laws',
    description:
      'GPT-3 (175B parameters) demonstrated extraordinary few-shot learning across diverse tasks with no fine-tuning — just a prompt. Kaplan et al.\'s Scaling Laws paper showed that loss decreases predictably with compute, data, and model size, establishing the roadmap for modern LLM development.',
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
  },
  {
    year: 2022,
    title: 'InstructGPT, ChatGPT, PaLM & Chinchilla',
    description:
      'A pivotal year: InstructGPT showed RLHF aligns LLMs to human intent; ChatGPT reached 100M users in two months; Google\'s PaLM hit 540B parameters; DeepMind\'s Chinchilla overturned scaling law wisdom — smaller models trained on more data outperform larger under-trained ones.',
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
  },
  {
    year: 2023,
    title: 'GPT-4, LLaMA, Claude & Gemini',
    description:
      'GPT-4 achieved human-level performance on professional exams. Meta\'s LLaMA democratized open-weight models, spawning a research explosion. Anthropic released Claude with Constitutional AI. Google launched Gemini as a natively multimodal model trained end-to-end.',
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
        label: 'Gemini (Google DeepMind)',
        url: 'https://arxiv.org/abs/2312.11805',
      },
    ],
  },
  {
    year: 2024,
    title: 'GPT-4o, Claude 3, Gemini 1.5, Llama 3 & DeepSeek',
    description:
      'GPT-4o brought real-time voice and vision to chat. Claude 3 Opus matched GPT-4 on benchmarks. Gemini 1.5 Pro introduced a 1M-token context window with Multi-Query Attention. Meta\'s Llama 3 series set new open-weight records. DeepSeek emerged from China with cost-efficient training innovations.',
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
        label: 'DeepSeek-V2',
        url: 'https://arxiv.org/abs/2405.04434',
      },
    ],
  },
  {
    year: 2025,
    title: 'Claude 4, Gemini 2, o3 & Next Frontier',
    description:
      'Anthropic released Claude 4 Sonnet and Opus with extended context and improved reasoning. OpenAI\'s o3 demonstrated near-human performance on ARC-AGI. Gemini 2 Flash brought multimodal reasoning at speed. The frontier now centres on reasoning, agents, and long-horizon tasks.',
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
    ],
  },
];

export const eras = [
  { id: 'foundations', label: 'Foundations', range: '1940–2000' },
  { id: 'deep-learning', label: 'Deep Learning', range: '2012–2016' },
  { id: 'transformer-era', label: 'Transformer Era', range: '2017–2020' },
  { id: 'modern-llms', label: 'Modern LLMs', range: '2021–2025' },
] as const;

export const categoryColors: Record<Category, { border: string; text: string; bg: string }> = {
  Architecture:    { border: 'border-cyan-500',   text: 'text-cyan-400',   bg: 'bg-cyan-500/10' },
  'Language Model':{ border: 'border-purple-500', text: 'text-purple-400', bg: 'bg-purple-500/10' },
  Breakthrough:    { border: 'border-pink-500',   text: 'text-pink-400',   bg: 'bg-pink-500/10' },
  Dataset:         { border: 'border-green-500',  text: 'text-green-400',  bg: 'bg-green-500/10' },
  Frontier:        { border: 'border-yellow-500', text: 'text-yellow-400', bg: 'bg-yellow-500/10' },
};
