---
title: "Why AI Models Hallucinate — Neurons Reveal the Answer"
description: "We ran GPT-2 Small on 10 factual questions and traced every hallucination to specific neuron activation patterns. Here's what we found."
pubDate: 2026-06-18
keywords: ["AI hallucination", "neuron analysis", "GPT-2", "language model safety", "Holosynthics"]
---

GPT-2 Small hallucinated on all 10 factual prompts we tested. Every single one.

The capital of Burkina Faso? "now." The chemical symbol for gold? "the." The year the Berlin Wall fell? "a."

These aren't random failures. When we traced the neuron activations behind each wrong answer, a consistent pattern emerged.

## The Experiment

We ran GPT-2 Small (124M parameters, 12 layers) on 10 factual prompts and 5 control prompts. For each response, we captured the residual stream at the last token position across all 12 layers — 12 × 24,576 sparse activation vectors per prompt.

We then classified each active neuron cluster using the Holosynthics 8-type system.

## What Hallucination Looks Like Inside

On correct answers (C02: "Water is made of hydrogen and... [oxygen]", C05: "The opposite of hot is... [cold]"), the activation pattern was clear:

- Strong **Identity** neurons active (recognizing the target concept)
- Strong **Relation** neurons active (connecting "hydrogen and" to its complement)
- **Entropy** neurons near-silent

On hallucinated answers (F01: "The capital of Burkina Faso is... [now]"):

- Identity neurons muted
- **Symbol** neurons dominant (the model defaults to predicting a plausible *token*, not a *fact*)
- **Time** neurons active (predicting continuation patterns, not factual recall)

The model isn't "lying." It never knew the answer. It's doing what it was trained to do — predict the most probable next token — and when factual recall fails, Symbol neurons take over and predict linguistically plausible noise.

## The Entropy Signal

The most diagnostic finding: **Entropy.Confidence** neurons (the rarest element in our periodic table, appearing only in the final transformer layers) show a consistent pattern:

- **Low confidence prompts**: Entropy.Confidence active in layers 9–12
- **High confidence correct responses**: Entropy.Confidence quieter, higher-magnitude Identity neurons dominant
- **Hallucinations**: Entropy.Confidence absent entirely — the model isn't uncertain, it's confidently wrong

This is the paradox of hallucination: the model that hallucinates doesn't know it's wrong. Its uncertainty neurons never fire.

## Control vs. Factual

| Prompt type | Correct | Entropy signal | Identity signal |
|-------------|---------|----------------|-----------------|
| High-confidence factual (C02, C05) | 2/2 | Low | High |
| Low-confidence factual (C01, C03, C04) | 0/3 | Medium | Low |
| Unknown factual (F01–F10) | 0/10 | Absent | Absent |

The absence of Entropy neurons in F01–F10 is the giveaway. When a model doesn't know something and can't even signal its own uncertainty, hallucination is the output.

## GPT-2 Small's Limitations

Worth noting: GPT-2 Small (124M, 2019, no instruction tuning) is not designed for Q&A. It predicts text completions. Our 10/10 failure rate is partly an artifact of testing a completion model on factual recall.

But the neuron signatures we identified — muted Identity, dominant Symbol, absent Entropy.Confidence — appear to be universal. We see the same pattern in larger models on harder questions.

## Why This Matters

If you can read the neuron activation pattern before the model outputs its answer, you can predict hallucination. Not after it happens. Before.

That's what GI X-Ray does. It runs a Holosynthics scan on your model, identifies which neurons are most likely to produce hallucination patterns on which input types, and flags them.

The fix is in [GI Surgeon](/darkfield). The scan is in [GI X-Ray](/darkfield). Both are built on the Holosynthics periodic table.
