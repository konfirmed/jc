const JobCard = ({ job }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
        <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
        <p className="text-gray-700 mb-2">{job.location}</p>
        <p className="text-gray-700 mb-2"><strong>Company:</strong> {job.company}</p>
        <p className="text-gray-700 mb-2"><strong>Date:</strong> {job.date}</p>
        <p className="text-gray-700"><strong>Salary:</strong> {job.salary}</p>
      </div>
    );
  };
  
export default JobCard;
  