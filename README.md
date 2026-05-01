# 📊 Marketing Analytics Dashboard

## 🚀 Overview

This project is a full-stack marketing analytics solution that simulates data ingestion from multiple advertising platforms and visualizes performance metrics in Power BI.

The goal is to replicate a real-world data pipeline and dashboard used by marketing teams to monitor campaign performance across different channels and sources.

---

## 🧱 Tech Stack

**Backend**

* Node.js
* Express
* PostgreSQL
* Prisma ORM

**Data Visualization**

* Microsoft Power BI

---

## 📡 Data Pipeline

The backend simulates marketing data from multiple platforms such as:

* Google Ads
* Facebook Ads
* LinkedIn Ads
* Amazon Ad Server
* StackAdapt
* Bing Ads

A scheduled sync process generates realistic campaign-level data including:

* Impressions
* Clicks
* Spend
* Conversions

Data is stored in PostgreSQL using a structured schema designed for analytics.

---

## 🧠 Data Modeling

The project follows a **star schema** approach:

* **Fact Table:** `CampaignMetric`
* **Dimension Table:** `Calendar`

Only raw data is stored in the database. All calculated metrics are handled in Power BI to ensure flexibility and accuracy.

---

## 📊 KPIs & Metrics

The dashboard includes key marketing metrics such as:

* Total Spend
* Impressions
* Clicks
* Conversions
* CTR (Click-Through Rate)
* CPC (Cost Per Click)
* CPA (Cost Per Acquisition)
* CPM (Cost Per Mille)

Time-based comparisons include:

* Week-over-week performance
* Trend analysis over time

---

## 📈 Dashboard Features

* KPI cards with trend indicators
* Time series visualization
* Campaign performance breakdown
* Channel and data source comparison
* Interactive filters (campaign, channel, source, date)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure environment variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/marketing_db"
```

---

### 4. Run database migrations

```bash
npx prisma migrate dev
```

---

### 5. Generate Prisma client

```bash
npx prisma generate
```

---

### 6. Run the data sync

```bash
node src/app.js
```

---

### 7. Connect Power BI

* Use PostgreSQL connector
* Connect to your database
* Import the `CampaignMetric` table
* Create a Calendar table
* Build relationships and measures

---

🎥 Demo

![Overlay Image](assets/TCS_IMAG.png)

![Youtube Video](https://img.youtube.com/vi/gsRtX8GhDaw/0.jpg)](https://www.youtube.com/watch?v=gsRtX8GhDaw)   

---

## 🎯 Key Learnings

* Building a data pipeline from scratch
* Designing a star schema for analytics
* Implementing time intelligence in Power BI
* Creating interactive dashboards with real-world metrics

---

## 📌 Future Improvements

* Integration with real APIs (Google Ads, Meta, etc.)
* Automated scheduling with cron jobs
* Deployment to cloud (AWS / GCP)
* Real-time data streaming

---

## 👤 Author

**VICTOR RAMIREZ**

---

## ⭐ Notes

This project uses simulated data for demonstration purposes only.

