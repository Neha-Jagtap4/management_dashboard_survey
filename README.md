# Drone Survey Management Dashboard

## Project Overview
Plan, manage, and monitor autonomous drone surveys across multiple global sites. https://dashboard-drone-neha.web.app/

This web application enables organizations to track live drone missions, schedule and manage upcoming operations, monitor mission KPIs, and analyze drone performance — all in one interactive dashboard. It is deployed on Firebase for seamless access. Use of Perplexity.ai in Development

<img width="1823" height="984" alt="Screenshot from 2025-08-10 12-38-14" src="https://github.com/user-attachments/assets/63e9fdfb-3964-4bd2-bad1-658555613f56" />


## Approach to the Problem
Requirement Analysis
   - Identified key operational needs: live mission data, scheduled mission tracking, drone performance metrics, and easy mission creation.
   - Split features into three main modules: Live Feed, Report, Mission Management, and Profile.

UI/UX First Design
  - Designed with AWS Amplify UI Components for a consistent, responsive layout.
  - Sidebar navigation for quick access to each section.

Component-Based Architecture
  - Modular React.js components for reusability (e.g., KPI cards, data tables, mission forms).
  - Data simulation for active mission stats.

Scalability Focus
  - Firebase hosting for easy deployment and scalability.
  - Code structured for API integration (future live drone data feed).

Future-Ready Enhancements
  - Left hooks for flight path visualization and weather-integrated analytics.

## Trade-offs Considered
| Decision Point    | Option A                           | Option B                    | Chosen & Reason                                                                    |
| ----------------- | ---------------------------------- | --------------------------- | ---------------------------------------------------------------------------------- |
| **Hosting**       | AWS Amplify Hosting                | Firebase Hosting            | **Firebase Hosting** – Easier CLI deployment, integrated with Firestore if needed. |
| **Mapping**       | Google Maps API (paid after quota) | Leaflet/Mapbox (free tiers) | **Leaflet/Mapbox** – Lower cost and good open-source community.                    |
| **UI Components** | Build from scratch                 | AWS Amplify UI              | **AWS Amplify UI** – Faster development and consistent design.                     |
| **Data Source**   | Live drone API                     | Static mock dataset         | **Mock Data** – Due to time constraints; API hooks left for future.                |

## Safety & Adaptability Strategy

1. Data Integrity & Reliability
  - All mission and drone data is validated before being stored in Firebase.
  - Input constraints (e.g., min/max for flight duration, distance) reduce chances of invalid entries.
2. Mission State Separation
  - Clear visual and logical separation between Completed, Active, Scheduled, and Aborted missions to avoid operational confusion.
3. Secure Hosting on Firebase
  - HTTPS enforced, Firebase Authentication hooks ready for future secure login implementation.

## Adaptability

  - Component-based structure allows new KPIs or modules to be added without breaking existing code.
  - Configurable drone list for different organizations.

## System Architecture
<img width="1334" height="719" alt="Drawing 2025-08-01 14 54 17 excalidraw" src="https://github.com/user-attachments/assets/50794c88-91b2-4c99-86b2-90c5a1f457e3" />

## Installation

1. Clone the repository
   ``` git clone https://github.com/Neha-Jagtap4/management_dashboard_survey.git```
   
   ```cd management_dashboard_survey```

2. Install dependencies
```npm install```

3. Run locally
```npm run dev```

4. Build for production
```npm run build```

## Deployment (Firebase)

1. Install Firebase CLI
```npm install -g firebase-tools```

2. Login & Initialize
```firebase login```
```firebase init```

3. Deploy
```firebase deploy```

# Use of Perplexity.ai
During the development of this project, Perplexity.ai was used as a research and knowledge discovery tool to:

  Find best practices for designing drone management dashboards.
  Explore mapping libraries (Leaflet, Mapbox) for drone location tracking.
  Understand KPI visualization techniques for mission performance metrics.
  Compare deployment strategies for Firebase hosting and backend integration.
  Get real-time answers to technical questions while coding the UI components.
  
By leveraging Perplexity.ai’s AI-driven search capabilities, I was able to quickly validate design choices, select optimal libraries, and enhance project efficiency.

## Developed 
  Developed by Neha Jagtap



