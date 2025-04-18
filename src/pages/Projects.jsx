import React from 'react';

const Projects = () => (
  <section className="p-8">
    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
    <div className="mb-4">
      <h3 className="font-bold">Revenue Forecasting Using ML</h3>
      <p>Predicted hotel room sales using Facebook Prophet with Python and MongoDB</p>
    </div>
    <div className="mb-4">
      <h3 className="font-bold">Motion Rendering of Characters</h3>
      <p>Captured body motion using Lava Tech and video feeds for future AR use</p>
    </div>
    <div>
      <h3 className="font-bold">Messaging App</h3>
      <p>Real-time messaging with Zero MQ, client-server architecture and JSON</p>
    </div>
  </section>
);

export default Projects;
