# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm start` - Start development server (runs fetch.js then react-scripts start)
- `npm run build` - Build for production (runs fetch.js then react-scripts build)
- `npm test` - Run test suite using react-scripts
- `npm run deploy` - Deploy to GitHub Pages (builds then deploys with gh-pages)

### Code Quality
- `npm run format` - Format code using Prettier for .js, .css, .json, .scss files
- `npm run check-format` - Check code formatting without fixing

### Environment Setup
Before development, copy `env.example` to `.env` and configure:
- `REACT_APP_GITHUB_TOKEN` - GitHub personal access token (no scopes needed)
- `GITHUB_USERNAME` - Your GitHub username
- `USE_GITHUB_DATA` - Set to "true" to fetch GitHub data
- `MEDIUM_USERNAME` - Your Medium username (optional)

## Architecture Overview

This is a React-based portfolio website built with Create React App that fetches data from GitHub and Medium APIs.

### Key Components Structure
- **Main Entry**: `src/App.js` renders `src/containers/Main.js`
- **Configuration**: All portfolio content is defined in `src/portfolio.js`
- **Data Fetching**: `fetch.js` runs before build/start to fetch GitHub/Medium data
- **Styling**: Global colors in `src/_globalColor.scss`, component-specific SCSS files
- **State Management**: React Context in `src/contexts/StyleContext.js` for theme switching

### Core Containers
- `greeting/` - Landing section with intro and resume link
- `skills/` - Technical skills display  
- `education/` - Education background
- `workExperience/` - Professional experience
- `projects/` - GitHub projects (auto-fetched) and custom projects
- `achievement/` - Certifications and achievements
- `blogs/` - Medium blog integration
- `contact/` - Contact information and social links

### Data Flow
1. `fetch.js` queries GitHub GraphQL API and Medium RSS
2. Writes data to `public/profile.json`
3. React components consume this data along with `src/portfolio.js` config
4. Theme state managed via StyleContext for dark/light mode

### Key Files to Modify
- `src/portfolio.js` - Main configuration file for all portfolio content
- `src/_globalColor.scss` - Global color scheme and theming
- `public/index.html` - Update title and meta tags for SEO
- `src/containers/greeting/resume.pdf` - Replace with your resume

### Important Notes
- The build process requires GitHub token for API access
- Portfolio sections can be enabled/disabled via display flags in `portfolio.js`
- GitHub projects section shows only pinned repositories
- Resume upload should be PDF format in `src/containers/greeting/resume/`