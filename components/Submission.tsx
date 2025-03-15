import React from 'react';

const Submission: React.FC = () => {
  return (
    <div id='submission' className="text-white p-6 sm:p-10 md:px-16">
      {/* Heading Section */}
      <div className="w-full">
      <h1 className="md:text-5xl text-3xl  font-bold underline text-[#CC5F00] mb-4 sm:mb-6 text-left relative">
      Paper Submission	
            </h1>
      </div>

      {/* Content Section */}
      <div className="text-black font-roboto font-medium text-2xl leading-[48px] tracking-normal p-6 mt-8">
        <div className="max-w-full">
          <p className="mb-4">
            The paper must not exceed 6 pages in length (including all text, figures, and references). CVMI-2025 will follow a double-blind review process. This means the identity of authors is not known to reviewers and vice-versa. Hence, authors are required to remove the name and affiliation of authors from the paper.
          </p>
          <p className="mb-4">
            Authors should not refer to any resources in the submitted paper that can lead to the recognition of the identity of authors. The manuscript must be submitted to the CVMI-2025 Microsoft Research paper submission portal, which will be notified soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Submission;