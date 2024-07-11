import { useState } from 'react';
import axios from 'axios';
import JobCard from './components/JobCard';

export default function Home() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobBankJobs = await axios.get(`/api/jobbank?title=${title}&location=${location}`);
    const insightGlobalJobs = await axios.get(`/api/insightglobal?city=${location}&province=&country=&jobTitle=${title}`);
    const kijijiJobs = await axios.get(`/api/kijiji?location=${location}&jobTitle=${title}`);

    const allJobs = [
      ...jobBankJobs.data,
      ...insightGlobalJobs.data,
      ...kijijiJobs.data,
    ];

    setJobs(allJobs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Job Scraper</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex flex-col items-center mb-4">
          <input 
            type="text" 
            placeholder="Job Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full p-4 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="text" 
            placeholder="Location" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            className="w-full p-4 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
            Search
          </button>
        </div>
      </form>
      <div className="w-full max-w-4xl mt-8 grid gap-4">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
}
