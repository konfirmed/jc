const JobCard = ({ job = {} }) => {
  const {
    title = 'No Title Provided',
    location = 'No Location Provided',
    company = 'No Company Provided',
    date = 'No Date Provided',
    salary = 'No Salary Provided',
  } = job;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{location}</p>
      <p className="text-gray-700 mb-2"><strong>Company:</strong> {company}</p>
      <p className="text-gray-700 mb-2"><strong>Date:</strong> {date}</p>
      <p className="text-gray-700"><strong>Salary:</strong> {salary}</p>
    </div>
  );
};

export default JobCard;
