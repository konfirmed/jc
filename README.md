# Job Scraper

A job scraping application built with Next.js and Tailwind CSS. This application allows users to search for job listings from multiple job boards including JobBank, Insight Global, and Kijiji.

## Features

- Search for jobs by title and location
- Scrape job listings from multiple job boards
- Display job listings in a clean, user-friendly interface
- Responsive design with Tailwind CSS

## Technologies Used

- Next.js
- Tailwind CSS
- Axios
- Cheerio

## Project Structure

```plaintext
jc/
├── components/
│   ├── JobCard.js
├── pages/
│   ├── api/
│   │   ├── jobbank.js
│   │   ├── insightglobal.js
│   │   ├── kijiji.js
│   ├── index.js
├── styles/
│   ├── globals.css
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
