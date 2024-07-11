import axios from 'axios';
import cheerio from 'cheerio';

const getInsightGlobalRecords = async (city, province, country, jobTitle, page) => {
  const url = `https://jobs.insightglobal.com/find_a_job/page/${page}/${city.toLowerCase()}/?ff=Location,LessThanOrEq,0,0,50&zip=${city.toLowerCase()},${province},${country}&rd=50&miles=False&remote=False&srch=${jobTitle.replace(" ", "+")}&orderby=recent&filterby=&filterbyremote=0`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const records = [];
  
  $('div.result').each((i, element) => {
    const date = $(element).find('p.date').text().trim();
    const jobTitle = $(element).find('div.job-title').text().trim();
    const jobInfo = $(element).find("div.job-info p");
    const jobLocation = jobInfo.eq(0).text().trim();
    const jobField = jobInfo.eq(1).text().trim();
    const jobType = jobInfo.eq(2).text().trim();
    
    records.push({ date, jobTitle, jobLocation, jobField, jobType });
  });
  
  return records;
};

export default async (req, res) => {
  const { city, province, country, jobTitle, page = 1 } = req.query;
  const records = await getInsightGlobalRecords(city, province, country, jobTitle, page);
  res.status(200).json(records);
};
