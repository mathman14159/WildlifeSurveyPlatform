# Wildlife Survey Platform

A web-based wildlife surveying platform designed to make collecting wildlife observations faster, easier, and more accessible.

The Wildlife Survey Platform allows hikers, volunteers, and field researchers to quickly record animals they encounter while outdoors. Instead of relying on paper forms or complicated survey systems, users can select wildlife species, record the number observed, and submit their survey through a simple, mobile-friendly interface.

The project is being developed with the goal of making community-assisted wildlife surveying easier while producing structured data that can later be analyzed by researchers and conservation organizations.

## Project Overview

Wildlife monitoring often depends on a limited number of researchers covering large geographic areas. At the same time, hikers and visitors are already traveling through many of these environments every day.

This project explores how a simple web application could make those visitors part of the data-collection process.

Users can record wildlife sightings through an interface built around easy-to-use animal cards. Each card allows the user to increase or decrease the number of animals observed, creating a structured survey that can be submitted and stored for later analysis.

The long-term goal is to provide a system that can help researchers collect more observations across a wider geographic area while keeping the survey process simple enough for the general public to use.

## Features

* Interactive wildlife observation cards
* Increment and decrement controls for recording animal counts
* Structured survey data collection
* Multiple application pages using React Router
* Responsive interface designed for use on phones and computers
* Reusable React components for different wildlife species
* Type-safe application development with TypeScript
* Survey result generation
* Architecture designed for future database integration
* Potential support for location-based wildlife observations

## Technology Stack

### React

The user interface is built with React using reusable components. Components such as wildlife cards can be dynamically generated from animal data rather than requiring separate code for every species.

### TypeScript

TypeScript is used throughout the application to provide type safety for components, survey data, and application state.

Example survey data can be represented as:

```ts
type Animal = {
  name: string;
  image: string;
  count: number;
};
```

This makes the application easier to maintain as the survey system becomes more complex.

### Vite

Vite is used as the project's development and build tool. It provides a fast development environment and generates optimized production builds for deployment.

### React Router

React Router handles navigation between different sections of the application without requiring full page reloads.

This allows the project to grow into multiple views such as:

* Survey
* Instructions
* Survey Results
* About the Project
* Species Information

### GitHub Pages

The frontend is deployed using GitHub Pages with an automated GitHub Actions workflow.

Changes pushed to the main branch can automatically build the Vite application and deploy the latest version of the website.

## How the Survey Works

A user selects how many animals of each species they observed.

For example:

```text
Mountain Lion     -  0  +
Elk               -  3  +
Black Bear        -  1  +
Bighorn Sheep     -  2  +
```

React stores these observations as structured application state:

```ts
[
  {
    name: "Mountain Lion",
    count: 0
  },
  {
    name: "Elk",
    count: 3
  },
  {
    name: "Black Bear",
    count: 1
  },
  {
    name: "Bighorn Sheep",
    count: 2
  }
]
```

This data can then be converted into a survey record and eventually sent to a backend database for storage and analysis.

## Why This Project Matters

Traditional wildlife surveys can require significant time and personnel.

This platform explores a crowdsourced approach where people already traveling through parks and outdoor areas can contribute observations through a simple interface.

A completed survey could eventually include information such as:

* Species observed
* Number of animals observed
* Date and time
* Trail or survey area
* Observation location
* Survey identifier
* Additional field notes

Collecting observations in a standardized digital format makes the resulting data easier to organize, visualize, and analyze.

## Project Architecture

```text
User
  ↓
React Interface
  ↓
Wildlife Cards
  ↓
React State
  ↓
Survey Submission
  ↓
API / Backend
  ↓
Database
  ↓
Wildlife Dataset
  ↓
Analysis / Mapping
```

The current frontend is being designed so that backend services and persistent data storage can be added as development continues.

## Current Development

The project is currently under active development.

Current work includes:

* Building the wildlife survey interface
* Creating reusable React components
* Managing animal counts through React state
* Implementing page navigation with React Router
* Designing the survey data structure
* Deploying the frontend through GitHub Pages

## Planned Features

Future development may include:

* Persistent database storage
* User-submitted survey records
* GPS/location data
* Interactive wildlife maps
* Survey history
* Researcher dashboard
* Data visualization
* Species filtering
* Exportable survey datasets
* Authentication and user accounts
* Administrative tools for managing surveys and species

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/WildlifeSurveyPlatform.git
```

Navigate into the React project:

```bash
cd WildlifeSurveyPlatform/TrailHeadSurvey
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

## Build

Create a production build with:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

## Technologies

* React
* TypeScript
* Vite
* React Router
* HTML
* CSS
* Git
* GitHub
* GitHub Actions
* GitHub Pages

## Development Goals

This project combines software development with a real-world data collection problem. It is designed not only as a frontend application, but as the foundation for a larger wildlife data platform.

Development focuses on:

* Component-based frontend architecture
* Type-safe application development
* Usable interface design
* Structured data collection
* Scalable application architecture
* Automated deployment
* Real-world environmental data applications

## Status

**In Development**

The survey interface and frontend architecture are currently being developed. Backend data storage, mapping, and expanded survey functionality are planned for future versions.
