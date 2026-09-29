# 🧠 Chatting with Your DB — AI Stock Intelligence & Business Analyst 📊

[![n8n](https://img.shields.io/badge/n8n-Workflow-EA4B71?style=for-the-badge&logo=n8n&logoColor=white)](https://n8n.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Telegram](https://img.shields.io/badge/Telegram-Bot-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://telegram.org/)
[![LangChain](https://img.shields.io/badge/LangChain-Agent-1C3C3C?style=for-the-badge)](https://langchain.com/)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge)](LICENSE)

> 🚀 **An intelligent Telegram assistant that transforms a MongoDB catalog into a proactive Business Intelligence (BI) partner.**  
> Built with **n8n**, **LangChain AI Agents**, **Dual-Layer Guardrails**, and real-time **market grounding**.
> 
> 🗣️ **Trilingual by Design:** Chat seamlessly in **Arabic** (العربية / الدارجة التونسية), **English**, or **French** (Français). The AI automatically mirrors your language and dialect while preserving catalog product specifications strictly in French.

👨‍💻 **Built with ❤️ by M.I.R.**

---

## 📸 Workflow Architecture

### 🛠️ Complete n8n Automated Pipeline
Dual-layer defense system (Input/Output Guardrails), multi-LLM orchestrator with automatic fallback, conversation memory, 4 MongoDB tools, and live Tunisian market research via Google Gemini:

<p align="center">
  <img src="assets/n8n_workflow_canvas.png" alt="n8n Workflow Canvas" width="100%">
</p>

---

## 📑 Table of Contents

- [🎯 1. Main Goal & Philosophy](#-1-main-goal--philosophy)
- [🗣️ 2. Trilingual Conversational Capabilities](#️-2-trilingual-conversational-capabilities)
- [🧠 3. Strategic Intelligence: More Than Just Answering Questions](#-3-strategic-intelligence-more-than-just-answering-questions)
- [✨ 4. Key Features](#-4-key-features)
- [🏗️ 5. System Architecture](#️-5-system-architecture)
  - [5.1 High-Level Flow](#51-high-level-flow)
  - [5.2 Step-by-Step Execution](#52-step-by-step-execution)
  - [5.3 Node Inventory](#53-node-inventory)
  - [5.4 Guardrail Security Layers](#54-guardrail-security-layers)
- [💡 6. Why We Chose Each Component](#-6-why-we-chose-each-component)
- [⚡ 7. Quick Start Guide](#-7-quick-start-guide)
- [🗄️ 8. MongoDB Configuration](#️-8-mongodb-configuration)
- [🔑 9. Credentials Setup](#-9-credentials-setup)
- [⚙️ 10. Customization & Settings](#️-10-customization--settings)
- [💬 11. Usage Examples & Strategic Prompts](#-11-usage-examples--strategic-prompts)
- [🛡️ 12. Enterprise Security](#️-12-enterprise-security)
- [🚧 13. Known Limitations & Roadmap](#-13-known-limitations--roadmap)
- [🩺 14. Troubleshooting](#-14-troubleshooting)
- [📁 15. Project Directory Structure](#-15-project-directory-structure)

---

## 🎯 1. Main Goal & Philosophy

A stock manager should **never** have to browse complex dashboards, learn database query languages, or manually filter spreadsheets to answer everyday operational and strategic questions such as:
* *"What is our most expensive gaming PC and what is its turnover rate?"* 💻
* *"Which products risk becoming dead stock if not sold within 60–90 days?"* ⏳
* *"How do our prices compare to local competitors like MyTek and Tunisianet?"* 🏷️

This project elevates catalog management into an **interactive strategic conversation**:
1. 🔍 **Grounded Answers Only:** Strictly forbidden from guessing or hallucinating prices and stock. It must execute database or web search tools first.
2. 🛡️ **Zero-Trust Security:** Every inbound manager message and outbound agent response passes through strict deterministic and semantic guardrails.
3. 🌐 **Separation of Concerns:** Internal inventory stays safely inside MongoDB; external market intelligence is gathered on-the-fly via Gemini + Google Search.
4. 📦 **Self-Hosted & Private:** Complete ownership of business data within your own Docker containers.

---

## 🗣️ 2. Trilingual Conversational Capabilities

The bot features **Strict Adaptive Language Mirroring** and is fully fluent in three languages:

| Language | Scope & Dialect Handling | Example Prompt |
| :--- | :--- | :--- |
| 🇹🇳 **Arabic / الدارجة التونسية** | Understands Tunisian dialect, phrasing, tech slang (مانيطا، بيسي، كيت), and Standard Arabic. Responds with full Tunisian context. | `شنوة أغلى لابتوب عندنا في الستوك؟` / `اعملي تحليل على ستوك الحواسيب` |
| 🇬🇧 **English** | Professional business and technical briefing in English. | `"What is our slowest-moving product this quarter?"` / `"Give me a competitive market check on RTX 4050."` |
| 🇫🇷 **Français** | Full conversational French with executive business vocabulary. | *« Quel est le produit avec le stock le plus critique ? »* / *« Compare nos prix avec le marché local. »* |

> 📌 **Strict Catalog Separation Rule:** While the conversational dialogue, analysis, recommendations, and strategic questions mirror your chosen language (Arabic, English, or French), **all technical product specs, storage capacities, and hardware titles remain 100% in French** on their own lines (e.g. `🔸 Produit: ... | Capacité: ... | Prix: ...`). This prevents clumsy translations of hardware terms and matches standard e-commerce practice.

---

## 🧠 3. Strategic Intelligence: More Than Just Answering Questions

Unlike a standard search bot that merely regurgitates database records, **SYNAPSE AI** thinks and behaves like an embedded **Senior Business Intelligence Analyst**:

### 🔍 1. Proactive Inventory & Risk Analysis
* **Capital Lockup & Stagnation:** Warns when high-ticket items (e.g. desktops or laptops priced over 10,000 TND) remain in stock without rotation, flagging the risk of margins eroding if units sit for **60–90 days**.
* **Turnover & Stock Velocity:** Detects fast-moving vs. sluggish items and evaluates whether stock levels are proportional to sales pace.
* **Cannibalization & Pricing Gaps:** Identifies when two models are priced too closely together, causing one to cannibalize the other.

### 💡 2. Expert Commercial Opinions & Guidance
* Gives its expert opinion on how you manage your catalog:
  * 📦 **Bundle Strategies:** Recommends bundling slow-moving units with high-margin peripherals (*gaming mice, headsets, mechanical keyboards*) to accelerate sales without slashing core unit prices.
  * 🏷️ **Dynamic Discount Advice:** Suggests temporary, targeted price adjustments when local competitors (*Tunisianet, MyTek, Scoop*) undercut prices.
  * ⚠️ **Restock Thresholds:** Proactively flags when to reorder before running into an out-of-stock emergency.

### 🤝 3. Strategic Follow-up Questions for Executive Debate
Every report systematically concludes with **exactly 3 strategic follow-up questions** designed to stimulate high-level debate with the manager:
1. *Market Positioning:* How does our price compare against similar alternatives in the local market?
2. *Holding Cost Optimization:* What is the optimal stock level to maintain balance between availability and storage expense?
3. *Sales Acceleration:* Should we launch promotional bundles or adjust the reorder trigger point?

---

## ✨ 4. Key Features

- 🗣️ **Conversational CRUD:** Search, add, update, and delete catalog items in natural language.
- 🇹🇳 **Adaptive Dialect & Language Mirroring:** Matches the user's language (Arabic, French, or English) dynamically.
- 📈 **Real-Time Tunisian Market Grounding:** Fetches live competitor prices, market trends, and purchase recommendations from Tunisian sources (*Tunisianet, MyTek, Scoop, SBS, Wiki*).
- 🛡️ **Dual-Layer Security Guardrails:** 
  - Prevents prompt injections, system prompt extraction, mass deletion, and destructive queries (`drop table`, `$where`, `$ne`, `eval()`).
  - Limits queries to 1–5 products per request to safeguard server resources.
- 🔄 **High-Availability Model Fallback (`needsFallback: true`):** Switches instantly from primary **NVIDIA Nemotron** to **Qwen Cloud** if rate limits or provider issues occur.
- 🧠 **Contextual Memory Buffer:** Remembers the last 20 messages for fluid follow-up dialogue.
- 🔒 **Delete Safety Lock:** Automatically injects `{"DO_NOT_DELETE": "SAFETY_LOCK"}` if a product name is missing or ambiguous.
- 📱 **Telegram HTML Layout:** Elegantly formatted with bold accents, category emojis, and structured bullet points.

---

## 🏗️ 5. System Architecture

### 5.1 High-Level Flow

```mermaid
flowchart LR
    U["📱 Telegram User\n(Stock Manager)"] --> T["⚡ Telegram Trigger"]
    T --> G1{"🛡️ Guardrails 1\n(Input Screening)"}
    
    G1 -- "❌ Fail" --> W1["⚠️ Security Alert\n(Request Blocked)"]
    G1 -- "✅ Pass" --> A["🧠 AI Agent Website\n(SYNAPSE AI)"]
    
    subgraph AGENT ["🧠 Agent Core & Memory"]
        direction TB
        LLM1["🥇 Primary: NVIDIA Nemotron"]
        LLM2["🥈 Fallback: Qwen Cloud"]
        MEM[("💾 Memory Buffer\n(20 Messages)")]
    end
    
    subgraph TOOLS ["🛠️ Specialized Tools"]
        direction TB
        F["🔍 MongoDB Find (Projection)"]
        I["➕ MongoDB Insert (Flat JSON)"]
        UP["✏️ MongoDB Update (6 Fields)"]
        D["🗑️ MongoDB Delete (Safe Lock)"]
        GEM["🌐 Gemini 2.5 Flash\n+ Google Search"]
    end
    
    AGENT --- A
    A --- TOOLS
    
    F & I & UP & D --- DB[("🗄️ MongoDB Database\nstock_db.products")]
    GEM --- WEB(("🇹🇳 Tunisian Tech Web\nMyTek, Tunisianet..."))
    
    A --> G2{"🛡️ Guardrails 2\n(Output Screening)"}
    G2 -- "✅ Pass" --> S["📤 Send Reply\n(HTML Formatted)"]
    G2 -- "❌ Fail" --> W2["⚠️ Security Alert\n(Output Blocked)"]
    
    S --> U
    W1 --> U
    W2 --> U
```

### 5.2 Step-by-Step Execution
1. 📥 **Telegram Trigger:** Receives webhook payload on every chat update.
2. 🛡️ **Input Guardrails:** Screens `message.text` through 5 layers. Powered by an ultra-fast OpenRouter LLM (`liquid/lfm-2.5-2.6b:free`).
   - If malicious/off-topic: Dispatches warning and stops.
   - If clean: Passes sanitized text to the AI Agent.
3. 🧠 **AI Agent (SYNAPSE AI):** Chooses the appropriate tool, reads real numbers from MongoDB or the web, and generates an executive report.
4. 🛡️ **Output Guardrails:** Re-verifies the agent's drafted message to ensure zero prompt leakage or forbidden code.
5. 📤 **Telegram Messenger:** Transmits the HTML report directly to the manager.

### 5.3 Node Inventory

| Node | Type | Purpose |
| :--- | :--- | :--- |
| **Telegram Trigger** | `telegramTrigger` | Listens to manager messages via Telegram Webhook |
| **Guardrails** | `guardrails` | Layer 1: Evaluates user inputs for threats & scope |
| **OpenRouter Chat Model** | `lmChatOpenRouter` | Fast, low-latency engine powering input guardrails |
| **AI Agent Website** | `agent` | Core LangChain reasoning agent with tool orchestration |
| **NVIDIA Nemotron Chat Model** | `lmChatNvidia` | Primary reasoning model (`nemotron-3-super-120b-a12b`) |
| **Qwen Cloud Chat Model** | `lmChatAlibabaCloud` | Fallback reasoning model (`qwen3.8-max`) |
| **Simple Memory** | `memoryBufferWindow` | Remembers the previous 20 dialogue interactions |
| **Find documents in MongoDB1** | `mongoDbTool` | Queries collection with custom regex and projections |
| **Insert documents in MongoDB1** | `mongoDbTool` | Safely adds new items using strict flat JSON |
| **Update documents in MongoDB** | `mongoDbTool` | Updates stock, price, availability, and discounts |
| **Delete documents in MongoDB1** | `mongoDbTool` | Deletes products by name with safety fallback |
| **Message a model in Google Gemini1** | `googleGeminiTool` | Scrapes Tunisian electronics market using Google Search |
| **Guardrails2** | `guardrails` | Layer 2: Sanitizes output prior to delivery |
| **OpenRouter Chat Model1** | `lmChatOpenRouter` | Engine powering output guardrails |
| **Send a text message** | `telegram` | Sends HTML formatted intelligence reports |
| **Send a text message1 / 2** | `telegram` | Alerts user when input or output violates security |

### 5.4 Guardrail Security Layers

| Security Check | Check Mechanism | Target Vectors |
| :--- | :--- | :--- |
| **🚨 Forbidden Keywords** | Deterministic Match | `drop table`, `union select`, `ignore previous instructions`, `system prompt`, `developer mode`, `jailbreak` |
| **💉 Malicious Code Regex** | Regex Pattern | `<script>`, `javascript:`, `$where`, `$ne`, `$gt`, SQL injections, `eval()`, `exec()`, `rm -rf` |
| **🔢 Mass Modification Regex** | Regex Pattern | Bulk operations targeting more than 5 products |
| **🛑 All-Products Regex** | Regex Pattern | Mass destructive queries: *"all products"*, *"tous les produits"*, *"كل المنتجات"* |
| **🔗 URL Inspection** | Deterministic | Hyperlinks (allow-list is empty to avoid phishing) |
| **🎭 Jailbreak Detection** | LLM Semantic Check | Deceptive roleplay, adversarial framing in Arabic, French, and English |
| **🎯 Topical Alignment** | LLM Scope Check | Filters out general chat, politics, or off-topic requests |

---

## 💡 6. Why We Chose Each Component

* 📱 **Telegram:** Zero app development required. Instant push notifications on iOS and Android with full HTML styling.
* ⚡ **n8n:** Self-hostable, low-code platform where business logic and data remain completely private within your infrastructure.
* 🗄️ **MongoDB:** Dynamic schema perfectly tailored for diverse electronic specs (CPUs, GPUs, display sizes) without complex SQL migrations.
* 🤖 **AI Tool Calling:** Completely eliminates hallucinations. The model is physically incapable of reporting stock or prices without calling database tools.
* 🌐 **Gemini + Google Search:** Internal databases cannot inform you about competitor pricing. Gemini grounds your sales strategy in real-time market realities.
* 🛡️ **Dual-Layer Guardrails:** Defense-in-depth ensures that neither malicious users nor rogue model responses can jeopardize operations.

---

## ⚡ 7. Quick Start Guide

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) & Docker Compose installed.
- A Telegram Bot Token from [@BotFather](https://t.me/BotFather).
- API Keys for NVIDIA Build, Alibaba Cloud (Qwen), OpenRouter, and Google AI Studio.

### Installation

```bash
# 1. Clone repository
git clone https://github.com/Ilyeess-Rj/chatting-with-your-db.git
cd chatting-with-your-db

# 2. Configure environment
cp .env.example .env
# Edit .env and supply your secure passwords and HTTPS webhook URL

# 3. Spin up MongoDB and n8n
docker compose up -d

# 4. Seed test inventory (12 sample electronic products)
docker compose exec mongo sh -c 'mongoimport \
  --uri "mongodb://$MONGO_APP_USER:$MONGO_APP_PASSWORD@localhost:27017/$MONGO_INITDB_DATABASE?authSource=$MONGO_INITDB_DATABASE" \
  --collection products --file /seed/sample_products.json --jsonArray'
```

1. Open n8n at `http://localhost:5678`.
2. Navigate to **Workflows → Import from file** and upload `workflow/Chatting_with_Your_DB.json`.
3. Connect your API keys to the respective nodes (see [Section 9](#-9-credentials-setup)).
4. Toggle workflow to **Active** and start chatting with your bot!

---

## 🗄️ 8. MongoDB Configuration

The workflow interacts with:
* **Database:** `stock_db`
* **Collection:** `products`

### Automated Indexing (`mongo/init-mongo.js`)
On first startup, the following indexes are generated automatically:
```javascript
db.products.createIndex({ product_name: 1 }, { unique: true })
db.products.createIndex({ category: 1 })
db.products.createIndex({ numeric_price: 1 })
db.products.createIndex({ brand: 1 })
```

### Document Schema Example
```json
{
  "id": "DEMO-002",
  "category": "macbook",
  "brand": "Apple",
  "product_name": "MacBook Pro 14 M3 Max 36Go 1To",
  "price_tnd": "12,200.000 TND",
  "discount_price": null,
  "discount_pct": null,
  "numeric_price": 12200,
  "stock": 3,
  "availability": true,
  "specs": "Puce Apple M3 Max | 36 Go mémoire unifiée | 1 To SSD | Liquid Retina XDR",
  "colors": "Noir Sidéral",
  "warranty": "12 mois",
  "usage_type": "Création Pro & Rendu 3D"
}
```

---

## 🔑 9. Credentials Setup

All sensitive secrets are encrypted using `N8N_ENCRYPTION_KEY`:

| Node Name in Workflow | n8n Credential Type | Source |
| :--- | :--- | :--- |
| **Telegram Nodes (x3)** | Telegram API | [@BotFather](https://t.me/BotFather) |
| **MongoDB Nodes (x4)** | MongoDB | `mongodb://n8n_app:<PWD>@mongo:27017/stock_db?authSource=stock_db` |
| **Gemini Market Tool** | Google Gemini (PaLM) API | [Google AI Studio](https://aistudio.google.com/apikey) |
| **NVIDIA Nemotron** | NVIDIA | [NVIDIA NIM Build](https://build.nvidia.com/) |
| **Qwen Cloud Model** | Alibaba Cloud | Alibaba Cloud Model Studio |
| **OpenRouter Models (x2)** | OpenRouter | [openrouter.ai/keys](https://openrouter.ai/keys) |

---

## ⚙️ 10. Customization & Settings

* 🏢 **Company Branding:** Search for `"Synapse Digital"` in `AI Agent Website` system prompt and change to your company name.
* 📚 **Category Dictionary:** Edit the `CATEGORY DICTIONARY` block inside the agent to map custom dialect words (e.g., `مانيطا` -> `manette`).
* 🎚️ **Guardrail Strictness:** Adjust the `threshold` setting in `Guardrails` (ranges from 0.0 to 1.0; 0.5 recommended).

---

## 💬 11. Usage Examples & Strategic Prompts

### 🗣️ Example Strategic Prompts Across Languages:

| Intent | Language | Sample Message |
| :--- | :--- | :--- |
| 💎 **Most Expensive Item** | 🇹🇳 Arabic (Tunisian) | `شنوة أغلى منتج عندنا في الستوك؟` |
| 🏷️ **Cheapest Accessories** | 🇫🇷 Français | *« Quel est notre accessoire le moins cher actuellement ? »* |
| 📊 **Stock Stagnation & Risk** | 🇬🇧 English | `"Analyze stock rotation for high-end gaming laptops."` |
| 🌐 **Competitor Intelligence** | 🇹🇳 Arabic (Tunisian) | `قارن سوم Lenovo LOQ مع أسعار المنافسين في السوق التونسي` |
| ✏️ **Price / Stock Adjustment** | 🇫🇷 Français | *« Mets à jour le stock du clavier Logitech MX Keys à 15 unités »* |
| ➕ **Adding New Catalog Product**| 🇹🇳 Arabic (Tunisian) | `زيد منتج جديد Dell XPS 15 سوم 6500 TND وستوك 4 وحدات` |

### 📋 Mandatory Response Format Template:

```html
📊 <b>[Business Intelligence Report] :</b>

📌 <b>[Stock Status] :</b>
[Factual insight in the user's language]
🔸 Produit: [Name] | Capacité: [Specs in French] | Prix: [Price in TND]

💡 <b>[Strategic Analysis] :</b>
[Insight on turnover speed, capital lockup, and 60-90 days dead stock risks]

⚠️ <b>[Actionable Recommendation] :</b>
[Expert advice on bundling peripherals, margin protection, or restock thresholds]

💡 <b>[Strategic Follow-Up Questions] :</b>
🔹 [Strategic Question 1: Competitor market comparison]
🔹 [Strategic Question 2: Inventory holding cost optimization]
🔹 [Strategic Question 3: Sales velocity & reorder point]
```

---

## 🛡️ 12. Enterprise Security

* 🧼 **Sanitized Public Export:** All personal chat IDs, credential UUIDs, and webhook secrets were stripped prior to publishing.
* 🔐 **Least-Privilege Database Role:** The application connects as `n8n_app` with `readWrite` rights exclusively on `stock_db`.
* 🛡️ **Container Isolation:** MongoDB port `27017` is bound strictly to `127.0.0.1` and is never exposed to the public Internet.

---

## 🚧 13. Known Limitations & Roadmap

| # | Known Behavior | Recommended Optimization |
| :-: | :--- | :--- |
| **1** | **User Allow-list:** No Telegram user filtering by default | Add an `IF` node checking `message.from.id` |
| **2** | **RAM Memory:** Session history clears on n8n restart | Integrate Redis or PostgreSQL Memory node |
| **3** | **Dynamic Price Updates:** `numeric_price` must be tracked on updates | Implement a MongoDB change stream trigger |

---

## 🩺 14. Troubleshooting

* **Webhook Error (`HTTPS Required`):** Telegram will only communicate with public HTTPS URLs. Ensure `WEBHOOK_URL` in `.env` is served through Traefik, Nginx, or Cloudflare Tunnel.
* **Agent Answers "Product Not Found":** Verify that the product name or category is present in the `CATEGORY DICTIONARY` within the system prompt.
* **Auth Failed on MongoDB:** Verify `authSource=stock_db` (users created by `init-mongo.js` belong to `stock_db`, not `admin`).

---

## 📁 15. Project Directory Structure

```text
chatting-with-your-db/
├── assets/
│   └── n8n_workflow_canvas.png       # Screenshot of full n8n pipeline & architecture
├── mongo/
│   ├── init-mongo.js                 # Automatic DB initialization & indexing script
│   └── sample_products.json          # 12 ready-to-test IT products
├── workflow/
│   └── Chatting_with_Your_DB.json    # Production-ready sanitized n8n workflow
├── docker-compose.yml                # Multi-container orchestration (MongoDB + n8n)
├── .env.example                      # Configuration template
├── .gitignore                        # Protection against credential leaks
└── README.md                         # Documentation & user guide
```

---

<p align="center">
  <b>Built by M.I.R</b> — Empowering modern businesses with intelligent, safe automation.
</p>
