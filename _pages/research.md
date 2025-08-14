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
Exploring the utility of Generative Flow Networks to sample diverse, high-reward decisions in uncertain environments, like music generation, code fuzzing, and autonomous testing.

#### 🛡️ Adversarial Robustness and Evaluation
Developed adversarial testing pipelines using CARLA and kernel density-based classifiers to distinguish threats in autonomous driving. Developed novel adversarial patches and defenses during my work at TrojAI Inc.

#### 🔒 Neural Network Privacy and Verification
Analyzed privacy vulnerabilities in spiking neural networks under membership inference attacks and proposed systematic evaluation frameworks, integrating insights from formal methods and empirical risk.



## Publications

<div class="publications">

{%- for y in page.years %}
<!--   <h2 class="year">{{y}}</h2> -->
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
