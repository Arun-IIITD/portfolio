import React from 'react';

const Experience = () => (
  <section className="p-8 bg-gray-100">
    <h2 className="text-2xl font-semibold mb-4">Internship Experience</h2>
    <div className="mb-4">
      <h3 className="text-lg font-bold">ROVFABS Pvt. Ltd. – Full Stack Developer Intern</h3>
      <p className="italic">Oct 2024 - Jan 2025</p>
      <ul className="list-disc list-inside ml-4">
        <li>Developed frontend for hotel management system with SSMS database</li>
        <li>Designed dashboards for café and restaurant</li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-bold">Unified Mentor – Full Stack Developer Intern</h3>
      <p className="italic">Oct 2024 - Nov 2024</p>
      <ul className="list-disc list-inside ml-4">
        <li>Built a weather app with 5-day forecasts</li>
        <li>Integrated real-time temperature and precipitation data</li>
      </ul>
    </div>
  </section>
);

export default Experience;
