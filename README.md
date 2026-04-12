<div align="center">

<img src="https://img.shields.io/badge/Tic%20Tech%20Toe%20'26-NeoCoders-00F5FF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==" />

# 🤖 TalentSync AI

### *Smarter Hiring. Faster Decisions. Zero Guesswork.*

**A Multi-Agent Talent Intelligence System built for Tic Tech Toe '26**  
Problem Statement #09 · Domain: Multi-Agent AI & Talent Intelligence

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-View%20Prototype-7C3AED?style=for-the-badge)](https://kashufied14-hue.github.io/talentsyncai/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/kashufied14-hue/talentsyncai)
[![Status](https://img.shields.io/badge/Status-Mid%20Review%20Ready-22C55E?style=for-the-badge)]()

</div>

---

## 🎯 The Problem

Modern hiring is broken. Recruiters process **thousands of resumes daily** across PDFs, DOCX files, and LinkedIn exports — inconsistently and at scale. Traditional ATS systems rely on **rigid keyword matching**, meaning a candidate who wrote "ReactJS" instead of "React.js" might get filtered out entirely. Qualified talent slips through. Hiring decisions suffer.

> *"Modern hiring systems fail to understand talent effectively."*

**Core pain points:**
- Resume parsing is error-prone and format-dependent.
- Keyword matching misses semantic meaning and skill synonyms.
- Manual screening leads to recruiter fatigue and inconsistent evaluation
- No transparency in why candidates rank high or low

---

## 💡 Our Solution

TalentSync AI is an **autonomous, multi-agent recruitment system** where specialized AI agents collaborate to parse, normalize, match, and rank candidates — based on *meaning*, not just keywords.

> *"An intelligent multi-agent system that understands talent, not just keywords."*

The system compresses time-to-hire, improves consistency, and makes candidate evaluation fully transparent and explainable.

---

## 🏗️ System Architecture

TalentSync AI is built on a **four-agent pipeline** with a central orchestration layer:

```
┌─────────────────────────────────────────────────────────┐
│                   ORCHESTRATION LAYER                   │
│         (Coordination · Fault Tolerance · Scale)        │
└──────────┬──────────────┬──────────────┬────────────────┘
           │              │              │
    ┌──────▼──────┐ ┌─────▼──────┐ ┌────▼──────────┐
    │  Resume     │ │   Skill    │ │   Semantic    │
    │  Parsing    │ │ Normaliz-  │ │   Matching    │
    │  Agent      │ │ ation Agent│ │   Agent       │
    │             │ │            │ │               │
    │ PDF · DOCX  │ │ Taxonomy   │ │ Embeddings    │
    │ LinkedIn    │ │ Synonyms   │ │ Similarity    │
    └─────────────┘ └────────────┘ └───────────────┘
           │              │              │
    ┌──────▼──────────────▼──────────────▼────────────────┐
    │            STRUCTURED CANDIDATE PROFILE              │
    │      Experience · Skills · Education · Score         │
    └─────────────────────────────────────────────────────┘
```

### The Four Agents

| Agent | Role |
|-------|------|
| 🗂️ **Resume Parsing Agent** | Extracts structured data (experience, skills, education) from PDF, DOCX, and LinkedIn exports |
| 🔗 **Skill Normalization Agent** | Maps diverse skill representations to a standard taxonomy — handles synonyms, abbreviations, and hierarchies |
| 🧠 **Semantic Matching Agent** | Uses embedding-based similarity to evaluate candidate-job compatibility *by meaning*, not keywords |
| ⚙️ **Orchestration Layer** | Coordinates agents, ensures fault tolerance, and manages parallel processing at scale |

---

## ✨ Key Features

### 🚀 Core Capabilities
- **Zero-Latency Shortlisting** — reduce time-to-hire from weeks to hours
- **Infinite Scale** — process large candidate pools without increasing headcount
- **Bias Reduction** — decisions grounded in structured competency data
- **Explainable Scoring** — every candidate ranking comes with a transparent rationale

### 🧠 Advanced Intelligence
- **Skill Inference Engine** — identifies hidden expertise (e.g., TensorFlow experience → infers Deep Learning proficiency)
- **Experience-Aware Matching** — factors in depth of experience, project complexity, and skill relevance
- **Gap Analysis** — highlights missing skills and surfaces upskilling insights for candidates
- **Dynamic Skill Normalization** — "ML Engineer" and "Machine Learning Engineer" are understood as the same thing

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Python, FastAPI |
| **AI Framework** | LangChain / CrewAI |
| **NLP Models** | Sentence Transformers |
| **Database** | PostgreSQL + Vector DB (Pinecone / Chroma) |
| **Resume Parsing** | PyMuPDF, python-docx |
| **Frontend** | Vanilla JS, Chart.js, Space Grotesk |
| **Deployment** | Docker |

---

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| ⚡ Processing time per resume | < 10 seconds |
| 🎯 Parsing accuracy | F1-score optimized |
| 📈 Scalability | Bulk resume processing |
| 🔄 Reliability | Fault-tolerant multi-agent execution |

---

## 🖥️ Prototype

> **Note:** The current repository contains our **interactive front-end prototype** — a polished, animated UI that demonstrates the full recruiter workflow and system vision. It is built to showcase the end product; agentic backend logic is under active development.

### What the prototype demonstrates:
- Full recruiter dashboard with KPI metrics and pipeline visualisation
- Animated candidate scoring and match-bar breakdowns
- Resume upload flow with simulated AI parsing output
- Multi-agent pipeline status display (Phase 1 → Phase 2 → Phase 3)
- AI chat assistant interface (Anthropic API integration scaffolded)
- API log viewer and job board screens

### Run locally

```bash
# Clone the repository
git clone https://github.com/kashufied14-hue/talentsyncai.git
cd talentsyncai

# Open the prototype
xdg-open talentsync-ai.html     # Linux
open talentsync-ai.html          # macOS
start talentsync-ai.html         # Windows
```

No build step. No dependencies. Just open in a browser.

---

## 🔌 API (Planned)

The API layer will expose programmatic access to the full pipeline:

```http
POST   /api/v1/parse          → Ingest and parse a resume
POST   /api/v1/match          → Run semantic matching against a job description
GET    /api/v1/candidates     → Retrieve ranked candidate list with scores
GET    /api/v1/candidates/:id → Fetch individual candidate profile and explanation
POST   /api/v1/jobs           → Create or update a job role profile
GET    /api/v1/pipeline       → Get live pipeline status
```

Designed for integration with ATS platforms, HRIS systems, and job portals.

---

## 🌐 Use Cases

**Startups** — compete for top-tier talent without a large recruiting team  
**Enterprises** — process high application volumes with consistent, auditable evaluation  
**Staffing Agencies** — automate top-of-funnel and increase placement capacity

---

## 🏅 Why TalentSync AI Stands Out

| Feature | Traditional ATS | TalentSync AI |
|---------|----------------|---------------|
| Matching approach | Keyword-based | Semantic / embedding-based |
| Skill handling | Exact match only | Normalised taxonomy + synonyms |
| Architecture | Monolithic | Multi-agent, parallel |
| Explainability | ❌ None | ✅ Per-candidate rationale |
| Integration | Limited | API-first |
| Scale | Manual bottlenecks | Autonomous pipeline |

---

## 👥 Team — NeoCoders

| Name | Role |
|------|------|
| **Sakshi** | Core Developer · Multi-process Manager · Parsing Specialist |
| **Jheel** | Backend Developer |
| **Dhrishti** | AI / ML Engineer |
| **Manyata** | Frontend Developer |
| **Saurabh** | Data Engineer |

---

## 🗺️ Roadmap

- [x] Front-end prototype with full recruiter dashboard
- [x] Animated pipeline and candidate scoring UI
- [ ] Resume Parsing Agent (PyMuPDF + python-docx)
- [ ] Skill Normalization Agent with taxonomy
- [ ] Semantic Matching Agent (Sentence Transformers)
- [ ] FastAPI backend with agent orchestration
- [ ] Vector DB integration (Pinecone / Chroma)
- [ ] Live API with ATS hooks

---

<div align="center">

**Built with ❤️ by Team NeoCoders · Tic Tech Toe '26**

*Problem Statement #09 — Multi-Agent AI & Talent Intelligence*

</div>
