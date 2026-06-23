---
title: "The Periodic Table of AI: 56 Elements Found Inside Language Models"
description: "We decomposed 11 AI models and found 56 distinct neuron types — a universal periodic table that appears across GPT-2, Llama, Mistral, Gemma, and 7 other models."
pubDate: 2026-06-17
keywords: ["AI interpretability", "periodic table AI", "neuron analysis", "language models", "Holosynthics"]
---

In chemistry, 118 elements explain all matter. We asked: is there an equivalent for artificial intelligence?

After two years of systematic neuron analysis across 11 language models — from GPT-2 Small (124M parameters) to Mistral 7B — we found 56 distinct neuron types, organized into 8 fundamental atom types. Like the periodic table of chemistry, these 56 elements appear across radically different models, trained on different data, by different organizations.

## The 8 Fundamental Types

Every AI language model we examined contains neurons that organize into exactly 8 categories:

**Boolean** — neurons encoding truth values, polarity, and binary distinctions. Found in 10/11 models tested, with 7 sub-types including Affirmation, Negation, and Polarity.

**Number** — neurons for quantities, magnitudes, and numerical relationships. 1,742 confirmed in Mistral 7B and OLMo 3 7B combined, across Cardinal, Ordinal, Fraction, and 4 other sub-types.

**Symbol** — the largest category. Neurons encoding linguistic tokens, code syntax, and structured text. Symbol neurons account for 25–55% of all classified neurons depending on model architecture.

**Identity** — neurons specialized in named entities: people, places, organizations. GPT-2 Small shows 10.9% Identity allocation; Gemma 2B shows 5.4%.

**Space** — neurons for position, direction, and geometry. Concentrated in middle and late network layers.

**Time** — temporal neurons for dates, sequences, and events. Era neurons (1,457 found) are the largest single element across our corpus.

**Relation** — neurons encoding logical connections: causation, contrast, conjunction. Relation allocation grows with model size (14.3% in Gemma 2B, 27% in Llama 3.1 8B).

**Entropy** — the rarest type. Neurons for uncertainty, ambiguity, and confidence. Found in all models but in tiny quantities (0.3–0.6% of classified neurons).

## Cross-Model Universality

The same 8 types appear across architectures that share nothing in common:

| Model | Bool | Num | Sym | Id | Sp | Time | Rel | Ent |
|-------|------|-----|-----|----|----|------|-----|-----|
| Gemma 2B | 1.3% | 9.6% | 55.4% | 5.4% | 6.6% | 3.3% | 14.3% | 0.3% |
| GPT-2 Small | 1.1% | 5.2% | 52.2% | 10.9% | 1.2% | 11.3% | 12.9% | 0.4% |
| Gemma 9B | 0.8% | 7.5% | 44.7% | 6.6% | 2.4% | 7.5% | 24.4% | 0.3% |
| Llama 3.1 8B | 1.2% | 6.5% | 40.3% | 9.6% | 1.7% | 9.3% | 27.0% | 0.4% |
| Qwen 3 1.7B | 1.5% | 12.8% | 25.5% | 5.1% | 1.6% | 21.6% | 4.1% | 0.2% |
| OLMo 3 7B | 3.6% | 13.2% | 31.6% | 7.4% | 2.8% | 23.6% | 8.0% | 0.6% |

Ten out of eleven models confirm all 8 types. The single exception (GPT-2 Medium) reflects a classification gap at that model scale that we continue to investigate.

## The 56th Element: Entropy.Confidence

The most remarkable finding: even within the rare Entropy type, neurons subdivide into 7 distinct sub-types. Entropy.Confidence — a single neuron cluster that fires exclusively in the final layers, with mean magnitude 1.33 (the highest of all 56 elements) — appears to encode the model's certainty about its own output.

This neuron cluster active during hallucination? It goes quiet.

## What This Means

A periodic table of AI implies something profound: intelligence, at least in its current transformer form, decomposes into a small number of universal primitives. Different architectures, different training data, different companies — the same 56 elements.

This is the foundation of Holosynthics. Every model can be decomposed, scanned, and analyzed using the same periodic table. Anomalies stand out. Hallucination-prone regions become visible. The model becomes interpretable.

The full 56-element table, with complete element profiles and research findings, is available at [holosynthics.com/periodic-table](/periodic-table).
