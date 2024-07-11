import axios from 'axios';
import cheerio from 'cheerio';

const getKijijiRecords = async (location, jobTitle) => {
  const url = `https://www.kijiji.ca/b-jobs/${location}/${jobTitle}/k0c45l1700273`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const records = [];
  
  $('table.regular-ad').each((i, element) => {
    const title = $(element).find('a.title').text().trim();
    const description = $(element).find('td.description').text().trim();
    const date = $(element).find('td.posted').text().trim();
    
    records.push({ title, description, date });
  });
  
  return records;
};

export default async (req, res) => {
  const { location, jobTitle } = req.query;
  const records = await getKijijiRecords(location, jobTitle);
  res.status(200).json(records);
};
