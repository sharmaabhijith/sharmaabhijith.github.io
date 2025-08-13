---
layout: page
title: Research
permalink: /research/
subtitle: 
nav: true
nav_order: 3
selected_papers: true
years: [2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2012]
---


My research interests lie in developing robust and trustworthy AI systems under uncertainty. I focus on **generative flow networks**, **adversarial robustness**, **decision-making frameworks**, and **evaluation strategies for neural models**, especially in safety-critical domains like autonomous driving and security-sensitive AI applications. My work spans the development of novel testing frameworks, defense strategies, and generative models powered by LLMs and GFlowNets.

## Core Research Areas

#### 🎯 GFlowNets for Decision Making
During my PhD, I am investigating how Generative Flow Networks can be leveraged to sample diverse, high-reward decisions in uncertain environments. I applied these methods in diverse areas such as music generation, code fuzzing, and autonomous testing.

#### 🛡️ Adversarial Robustness and Evaluation
As a Research Associate at the University of Waterloo AI Institute, I developed adversarial testing pipelines using CARLA and kernel density-based classifiers to distinguish threats in autonomous driving. I also proposed novel adversarial patches and defenses during my work at TrojAI Inc.

#### 🔒 Neural Network Privacy and Verification
At MBZUAI, I analyzed privacy vulnerabilities in spiking neural networks under membership inference attacks and proposed systematic evaluation frameworks, integrating insights from formal methods and empirical risk.

#### 🌍 Physical World Attacks and Defenses
My Master's work focused on defending CNNs from physical corruptions using multi-patch attacks and low-cost defenses. I have published extensively on attack taxonomies and image-space defenses.

## Awards & Recognition

- **MBZUAI PhD Scholarship (2025–2029)** — Full tuition and stipend to pursue PhD research in AI.
- **MITACS Accelerate Award (2021–2023)** — CA$50K for industrial research on adversarial robustness.
- **MITACS Globalink Graduate Fellowship (2021)** — CA$15K for returning scholars to pursue graduate studies.
- **UBC Dean's Entrance Scholarship (2021)** — CA$5K for academic excellence.
- **Gold Medalist (2020)** — Awarded highest GPA at the department level during B.Tech. at COEP.
- **COEP Alumni Excellence Award (2020)** — INR 50K for outstanding academic performance.
- **Globalink Research Award (2019)** — CA$10K to conduct undergraduate research at UBC.

---

## Publications

<div class="publications">

{%- for y in page.years %}
<!--   <h2 class="year">{{y}}</h2> -->
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
