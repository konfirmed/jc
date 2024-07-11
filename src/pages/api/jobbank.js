import axios from 'axios';
import cheerio from 'cheerio';

const getJobBankRecords = async (title, location, page) => {
  const url = `https://www.jobbank.gc.ca/jobsearch/jobsearch?page=${page}&searchstring=${title}&locationstring=${location}`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const records = [];
  
  $('article[id^=article-]').each((i, element) => {
    const title = $(element).find('span.noctitle').text().trim();
    const location = $(element).find('li.location').text().trim().replace('\n', '');
    const company = $(element).find('li.business').text().trim().replace('\n', '');
    const date = $(element).find('li.date').text().trim();
    let salary = 'Unavailable';
    try {
      salary = $(element).find('li.salary').text().trim().replace('\n', '');
    } catch (error) {}
    
    records.push({ title, location, company, date, salary });
  });
  
  return records;
};

export default async (req, res) => {
  const { title, location, page = 1 } = req.query;
  const records = await getJobBankRecords(title, location, page);
  res.status(200).json(records);
};
