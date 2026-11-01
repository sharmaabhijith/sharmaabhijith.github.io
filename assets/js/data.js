/* ==========================================================================
   Site data. Edit this file to update the publication list and the changelog;
   both the home page and the publications page render from it.

   Publication fields:
     id        stable slug (used for #anchors)
     type      conference | journal | workshop | preprint | thesis
     selected  true = also shown on the home page ("Selected work")
     links     any of: arxiv, venue, doi, pdf, code, page, data, thesis
   ========================================================================== */
window.SITE_DATA = {
  me: "Abhijith Sharma",

  pubs: [
    {
      id: "mishra2026probe",
      title: "PROBE: Learning to Audit Policy Compliance in Tool-Using LLM Agents",
      authors: ["Kshitij Mishra*", "Abhijith Sharma*", "Nils Lukas", "Salem Lahlou"],
      venue: "NeurIPS 2026",
      venueLong: "Advances in Neural Information Processing Systems",
      year: 2026,
      type: "conference",
      selected: true,
      note: "* equal contribution",
      tldr: "RL-trained LLM auditors that probe a deployed agent as a realistic user and surface policy violations hidden across turns and tool calls. A 4B auditor trained with PROBE finds broader, higher-yield violations than a zero-shot 30B adversary.",
      links: { arxiv: "https://arxiv.org/abs/2610.22124", venue: "https://neurips.cc/virtual/2026/poster/148145" },
      bibtex: `@inproceedings{mishra2026probe,
  title     = {{PROBE}: Learning to Audit Policy Compliance in Tool-Using {LLM} Agents},
  author    = {Mishra, Kshitij and Sharma, Abhijith and Lukas, Nils and Lahlou, Salem},
  booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
  year      = {2026}
}`
    },
    {
      id: "malek2026loss",
      title: "Loss-Guided Auxiliary Agents for Overcoming Mode Collapse in GFlowNets",
      authors: ["Idriss Malek", "Aya Laajil", "Abhijith Sharma", "Eric Moulines", "Salem Lahlou"],
      venue: "AAAI 2026",
      venueLong: "Proceedings of the AAAI Conference on Artificial Intelligence",
      year: 2026,
      type: "conference",
      selected: true,
      tldr: "Auxiliary agents guided by the main GFlowNet's training loss pull exploration toward the modes a sampler would otherwise collapse away from.",
      links: { arxiv: "https://arxiv.org/abs/2505.15251" },
      bibtex: `@inproceedings{malek2026loss,
  title     = {Loss-Guided Auxiliary Agents for Overcoming Mode Collapse in {GFlowNets}},
  author    = {Malek, Idriss and Laajil, Aya and Sharma, Abhijith and Moulines, Eric and Lahlou, Salem},
  booktitle = {Proceedings of the AAAI Conference on Artificial Intelligence},
  year      = {2026}
}`
    },
    {
      id: "guan2025privacy",
      title: "On the Privacy Risks of Spiking Neural Networks: A Membership Inference Analysis",
      authors: ["Junyi Guan", "Abhijith Sharma", "Chong Tian", "Salem Lahlou"],
      venue: "UAI 2025",
      venueLong: "Proceedings of the 41st Conference on Uncertainty in Artificial Intelligence",
      year: 2025,
      type: "conference",
      selected: true,
      note: "Spotlight at the ICLR 2025 ICBINB workshop",
      tldr: "A systematic membership-inference analysis of spiking neural networks, covering direct training and ANN-to-SNN conversion across latency settings.",
      links: { arxiv: "https://arxiv.org/abs/2502.13191", code: "https://github.com/sharmaabhijith/MIA_SNN" },
      bibtex: `@inproceedings{guan2025privacy,
  title     = {On the Privacy Risks of Spiking Neural Networks: A Membership Inference Analysis},
  author    = {Guan, Junyi and Sharma, Abhijith and Tian, Chong and Lahlou, Salem},
  booktitle = {Proceedings of the 41st Conference on Uncertainty in Artificial Intelligence (UAI)},
  year      = {2025}
}`
    },
    {
      id: "kumar2025gan",
      title: "GAN Inversion and Shifting: Recommending Product Modifications to Sellers for Better User Preference",
      authors: ["Satyadwyoom Kumar", "Abhijith Sharma", "Apurva Narayan"],
      venue: "PeerJ CS 2025",
      venueLong: "PeerJ Computer Science, 11:e2553",
      year: 2025,
      type: "journal",
      tldr: "GAN inversion plus latent shifting to recommend concrete product modifications that better match what users prefer.",
      links: { doi: "https://peerj.com/articles/cs-2553/" },
      bibtex: `@article{kumar2025gan,
  title   = {{GAN} inversion and shifting: recommending product modifications to sellers for better user preference},
  author  = {Kumar, Satyadwyoom and Sharma, Abhijith and Narayan, Apurva},
  journal = {PeerJ Computer Science},
  volume  = {11},
  pages   = {e2553},
  year    = {2025}
}`
    },
    {
      id: "sharma2024avatar",
      title: "AVATAR: Autonomous Vehicle Assessment through Testing of Adversarial Patches in Real-time",
      authors: ["Abhijith Sharma", "Apurva Narayan", "Nasser Lashgarian Azad", "Sebastian Fischmeister", "Stefan Marksteiner"],
      venue: "IEEE T-IV 2024",
      venueLong: "IEEE Transactions on Intelligent Vehicles",
      year: 2024,
      type: "journal",
      selected: true,
      tldr: "Real-time assessment of autonomous-vehicle perception against adversarial patches, in CARLA and outdoors, with a KDE-based detector for adversarial vehicles.",
      links: { doi: "https://ieeexplore.ieee.org/abstract/document/10646575", page: "https://sharmaabhijith.github.io/avatar_page/", data: "https://sharmaabhijith.github.io/CARLA_Town10_Dataset/" },
      bibtex: `@article{sharma2024avatar,
  title   = {{AVATAR}: Autonomous Vehicle Assessment through Testing of Adversarial Patches in Real-time},
  author  = {Sharma, Abhijith and Narayan, Apurva and Azad, Nasser Lashgarian and Fischmeister, Sebastian and Marksteiner, Stefan},
  journal = {IEEE Transactions on Intelligent Vehicles},
  year    = {2024},
  publisher = {IEEE}
}`
    },
    {
      id: "sharma2024assist",
      title: "Assist Is Just as Important as the Goal: Image Resurfacing to Aid Model's Robust Prediction",
      authors: ["Abhijith Sharma", "Phil Munz", "Apurva Narayan"],
      venue: "WACV 2024",
      venueLong: "IEEE/CVF Winter Conference on Applications of Computer Vision, pp. 3833–3842",
      year: 2024,
      type: "conference",
      tldr: "Image resurfacing with total variation: a model-agnostic pre-processing defense that neutralises single and multiple adversarial patches in one pass.",
      links: { arxiv: "https://arxiv.org/abs/2311.01563", code: "https://github.com/sharmaabhijith/TVR" },
      bibtex: `@inproceedings{sharma2024assist,
  title     = {Assist Is Just as Important as the Goal: Image Resurfacing to Aid Model's Robust Prediction},
  author    = {Sharma, Abhijith and Munz, Phil and Narayan, Apurva},
  booktitle = {Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
  pages     = {3833--3842},
  year      = {2024}
}`
    },
    {
      id: "kumar2024snap",
      title: "Attacking CNNs in Histopathology with SNAP: Sporadic and Naturalistic Adversarial Patches",
      authors: ["Daya Kumar", "Abhijith Sharma", "Apurva Narayan"],
      venue: "AAAI 2024",
      venueLong: "Proceedings of the AAAI Conference on Artificial Intelligence, 38(21), pp. 23550–23551 (student abstract)",
      year: 2024,
      type: "conference",
      tldr: "Sporadic, naturalistic patches that drop a ResNet50 metastasis classifier's accuracy on histopathology scans by 27%.",
      links: { doi: "https://ojs.aaai.org/index.php/AAAI/article/view/30468" },
      bibtex: `@inproceedings{kumar2024snap,
  title     = {Attacking {CNNs} in Histopathology with {SNAP}: Sporadic and Naturalistic Adversarial Patches (Student Abstract)},
  author    = {Kumar, Daya and Sharma, Abhijith and Narayan, Apurva},
  booktitle = {Proceedings of the AAAI Conference on Artificial Intelligence},
  volume    = {38},
  number    = {21},
  pages     = {23550--23551},
  year      = {2024}
}`
    },
    {
      id: "sharma2023nsa",
      title: "NSA: Naturalistic Support Artifact to Boost Network Confidence",
      authors: ["Abhijith Sharma", "Phil Munz", "Apurva Narayan"],
      venue: "IJCNN 2023",
      venueLong: "International Joint Conference on Neural Networks, pp. 1–8",
      year: 2023,
      type: "conference",
      tldr: "Naturalistic support artifacts: physical-world patterns designed to raise, not lower, a network's confidence on the correct class.",
      links: { arxiv: "https://arxiv.org/abs/2307.14917", code: "https://github.com/sharmaabhijith/Naturalistic_Support_Artifacts" },
      bibtex: `@inproceedings{sharma2023nsa,
  title     = {{NSA}: Naturalistic Support Artifact to Boost Network Confidence},
  author    = {Sharma, Abhijith and Munz, Phil and Narayan, Apurva},
  booktitle = {2023 International Joint Conference on Neural Networks (IJCNN)},
  pages     = {1--8},
  year      = {2023},
  organization = {IEEE}
}`
    },
    {
      id: "sharma2023multipatch",
      title: "Vulnerability of CNNs against Multi-Patch Attacks",
      authors: ["Abhijith Sharma", "Yijun Bian", "Vatsal Nanda", "Phil Munz", "Apurva Narayan"],
      venue: "SaT-CPS 2023",
      venueLong: "ACM Workshop on Secure and Trustworthy Cyber-Physical Systems, pp. 23–32",
      year: 2023,
      type: "workshop",
      tldr: "Three ways to split an attack across several patches (Split, Mono-Multi, Poly-Multi), and why defenses built for a single patch miss them.",
      links: { doi: "https://doi.org/10.1145/3579988.3585054" },
      bibtex: `@inproceedings{sharma2023multipatch,
  title     = {Vulnerability of {CNNs} against Multi-Patch Attacks},
  author    = {Sharma, Abhijith and Bian, Yijun and Nanda, Vatsal and Munz, Phil and Narayan, Apurva},
  booktitle = {Proceedings of the 2023 ACM Workshop on Secure and Trustworthy Cyber-Physical Systems (SaT-CPS)},
  pages     = {23--32},
  year      = {2023}
}`
    },
    {
      id: "sharma2023thesis",
      title: "Towards Safeguarding Convolutional Neural Networks Against Physical Corruptions",
      authors: ["Abhijith Sharma"],
      venue: "M.Sc. thesis",
      venueLong: "University of British Columbia (supervised by Apurva Narayan and John Braun)",
      year: 2023,
      type: "thesis",
      tldr: "Physical adversarial threats to vision models, multi-patch attacks, and model-agnostic defenses in one place.",
      links: { thesis: "https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0435778" },
      bibtex: `@mastersthesis{sharma2023thesis,
  title  = {Towards Safeguarding Convolutional Neural Networks Against Physical Corruptions},
  author = {Sharma, Abhijith},
  school = {University of British Columbia},
  year   = {2023}
}`
    },
    {
      id: "sharma2022survey",
      title: "Adversarial Patch Attacks and Defences in Vision-Based Tasks: A Survey",
      authors: ["Abhijith Sharma", "Yijun Bian", "Phil Munz", "Apurva Narayan"],
      venue: "arXiv 2022",
      venueLong: "arXiv preprint arXiv:2206.08304",
      year: 2022,
      type: "preprint",
      tldr: "A survey of 100+ works on physical adversarial patch attacks and defenses for vision models.",
      links: { arxiv: "https://arxiv.org/abs/2206.08304" },
      bibtex: `@article{sharma2022survey,
  title   = {Adversarial Patch Attacks and Defences in Vision-Based Tasks: A Survey},
  author  = {Sharma, Abhijith and Bian, Yijun and Munz, Phil and Narayan, Apurva},
  journal = {arXiv preprint arXiv:2206.08304},
  year    = {2022}
}`
    },
    {
      id: "sharma2022soft",
      title: "Soft Adversarial Training Can Retain Natural Accuracy",
      authors: ["Abhijith Sharma", "Apurva Narayan"],
      venue: "ICAART 2022",
      venueLong: "14th International Conference on Agents and Artificial Intelligence, vol. 3, pp. 621–628",
      year: 2022,
      type: "conference",
      tldr: "A softer adversarial-training objective that keeps natural accuracy while still buying robustness.",
      links: { arxiv: "https://arxiv.org/abs/2206.01904", code: "https://github.com/sharmaabhijith/Soft_Adversarial_Training" },
      bibtex: `@inproceedings{sharma2022soft,
  title     = {Soft Adversarial Training Can Retain Natural Accuracy},
  author    = {Sharma, Abhijith and Narayan, Apurva},
  booktitle = {Proceedings of the 14th International Conference on Agents and Artificial Intelligence (ICAART)},
  volume    = {3},
  pages     = {621--628},
  year      = {2022}
}`
    },
    {
      id: "sharma2022mpc",
      title: "Embedded Model Predictive Control Using Robust Penalty Method",
      authors: ["Abhijith Sharma", "Chaitanya Jugade", "Shreya Yawalkar", "Vaishali Patne", "Deepak Ingole", "Dayaram Sonawane"],
      venue: "arXiv 2022",
      venueLong: "arXiv preprint arXiv:2201.02697",
      year: 2022,
      type: "preprint",
      tldr: "A model predictive controller with a robust penalty method, built for embedded real-time hardware.",
      links: { arxiv: "https://arxiv.org/abs/2201.02697" },
      bibtex: `@article{sharma2022mpc,
  title   = {Embedded Model Predictive Control Using Robust Penalty Method},
  author  = {Sharma, Abhijith and Jugade, Chaitanya and Yawalkar, Shreya and Patne, Vaishali and Ingole, Deepak and Sonawane, Dayaram},
  journal = {arXiv preprint arXiv:2201.02697},
  year    = {2022}
}`
    }
  ],

  /* Changelog, newest first. `date` is YYYY-MM; `html` may contain links. */
  news: [
    { date: "2026-10", html: "<a href=\"https://arxiv.org/abs/2610.22124\" target=\"_blank\" rel=\"noopener\">PROBE</a> accepted at NeurIPS 2026. Preprint on arXiv." },
    { date: "2025-11", html: "<a href=\"https://arxiv.org/abs/2505.15251\" target=\"_blank\" rel=\"noopener\">Loss-guided auxiliary agents</a> for GFlowNets accepted at AAAI 2026." },
    { date: "2025-08", html: "Started the PhD in Machine Learning at MBZUAI, advised by Salem Lahlou and Nils Lukas." },
    { date: "2025-05", html: "<a href=\"https://arxiv.org/abs/2502.13191\" target=\"_blank\" rel=\"noopener\">Privacy risks of spiking neural networks</a> accepted at UAI 2025." },
    { date: "2025-03", html: "The SNN privacy paper is a spotlight at the ICLR 2025 ICBINB workshop. Code on <a href=\"https://github.com/sharmaabhijith/MIA_SNN\" target=\"_blank\" rel=\"noopener\">GitHub</a>." },
    { date: "2024-12", html: "Moved to Abu Dhabi to join MBZUAI as a Machine Learning Research Associate II." },
    { date: "2024-11", html: "<a href=\"https://ieeexplore.ieee.org/abstract/document/10646575\" target=\"_blank\" rel=\"noopener\">AVATAR</a> accepted at IEEE Transactions on Intelligent Vehicles. <a href=\"https://sharmaabhijith.github.io/avatar_page/\" target=\"_blank\" rel=\"noopener\">Project page</a>." },
    { date: "2023-09", html: "Graduated from UBC. Joined the University of Waterloo AI Institute as a research associate, working with AVL and Transport Canada." }
  ]
};
