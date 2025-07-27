// app/career/[jobId]/page.js
import React from 'react';
import jobOpeningsData from '../../../Datas/jobOpeningsData.js';
import JobDetails from '../../../components/JobDetails.js';

export default function JobPage({ params }) {
  const jobId = parseInt(params.jobId);
  const job = jobOpeningsData.find(job => job.id === jobId);
  
  if (!job) {
    return <div>Job not found</div>;
  }

  return <div>


    <JobDetails job={job}></JobDetails>
  </div>;
}