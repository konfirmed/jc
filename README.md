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
```

## Setup and Installation
1. Clone the repository

```
git clone https://github.com/your-username/job-scraper.git
cd job-scraper
```

2. Install dependencies

Example
```
npm install
``` 
3. Setup Tailwind CSS
Tailwind CSS is already configured in the project. Ensure you have the following in your tailwind.config.js:

javascript

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
And in your globals.css:

css

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-50 text-gray-900;
}
Run the development server

sh

npm run dev
Open http://localhost:3000 with your browser to see the result.

API Routes
/api/jobbank
Fetches job listings from JobBank based on the given title and location.

Example
```
GET /api/jobbank?title=developer&location=toronto
/api/insightglobal
```
Fetches job listings from Insight Global based on the given city, province, country, and job title.

Example
```
GET /api/insightglobal?city=toronto&province=on&country=canada&jobTitle=developer
```

### `/api/kijiji`
Fetches job listings from Kijiji based on the given location and job title.

Example
```
GET /api/kijiji?location=toronto&jobTitle=developer
```
## Usage
1. Open the application in your browser
Go to http://localhost:3000.

2. Enter job title and location
Fill in the job title and location you want to search for in the input fields.

3. Click "Search"
Click the "Search" button to fetch and display job listings from the supported job boards.

4. View job listings
The job listings will be displayed in a clean, card-based layout.

## Contributing
1. Fork the repository
2. Create a new branch (git checkout -b feature-branch)
3. Make your changes
4. Commit your changes (git commit -am 'Add new feature')
5. Push to the branch (git push origin feature-branch)
6. Create a new Pull Request
