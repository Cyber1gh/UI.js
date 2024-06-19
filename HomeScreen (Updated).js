// HomeScreen.js (updated)

import React from 'react';
import JobCard from './JobCard'; // Assuming JobCard component is in the same directory

const HomeScreen = ({ user }) => {
  // Dummy data for job cards
  const popularJobs = [
    { id: 1, title: 'Frontend Developer', company: 'TechCo', location: 'Remote', type: 'Full-time' },
    // Add more job objects as needed
  ];

  const featuredJobs = [
    { id: 1, title: 'Backend Engineer', company: 'SoftDev', location: 'San Francisco', type: 'Contract' },
    // Add more job objects as needed
  ];

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>

      <h3>Popular Jobs</h3>
      <div>
        {popularJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>

      <h3>Featured Jobs</h3>
      <div>
        {featuredJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
