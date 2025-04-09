import React from 'react'
const Attractions: React.FC = () => {
  return (
    <div id='attraction' className="text-black font-roboto p-6 sm:p-10 md:p-16 font-medium text-2xl leading-[48px] tracking-normal">
      {/* Heading Section */}
      <div className="w-full">
      <h1 className="md:text-5xl text-3xl  font-bold underline text-[#CC5F00] mb-4 sm:mb-6 text-left relative">
      CVMI-2025 ATTRACTIONS	
            </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-full p-6">
        <ul className="list-disc list-inside space-y-4">
          <li>Proceedings will be indexed in IEEE Xplore.</li>
          <li>
            Sponsored by IEEE Rourkela Sub-Section and Co-sponsored by IEEE Kolkata section and IEEE Uttar Pradesh section .
          </li>
          <li>Best PhD Dissertation Awards.</li>
          <li>Endorsed by IAPR (Approval Pending).</li>
          <li>IAPR Best Paper Award and CVMI-2025 Best Paper Awards.</li>
          <li>Indexed by Scopus, DBLP, and Google Scholar.</li>
        </ul>
      </div>
    </div>
  );
};

export default Attractions;
