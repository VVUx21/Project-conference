import React from 'react';

interface Award {
  title: string;
  paperTitle: string;
  authors: string;
  institution: string;
}

const BestPaperAwards: React.FC = () => {
  const awards: Award[] = [
    {
      title: "ANRF CVMI-Overall Best Paper Award",
      paperTitle: "A Physics-Informed Hybrid Solver for Sparse Seismic Inversion: Wedgelet–TGV with ADMM–ALM–AFISTA Algorithm",
      authors: "Supriyo Chakraborty, Nikhil Pandey, Sanjay Bhargav Dharavath, Aurobinda Routray",
      institution: "IIT Kharagpur"
    },
    {
      title: "IAPR Best Student Paper",
      paperTitle: "HUFT-Net : Multi-Modal Approaches for Automated Diagnosis of Respiratory Diseases using Respiratory Sounds",
      authors: "Bhavya Harini Rudra, Panigrahi Srikanth, Khyathi Sri Nagaveni Kadali",
      institution: "Chaitanya Bharathi Institute of Technology, Hyderabad"
    },
    {
      title: "Best Paper in a Session Award in AI Applications",
      paperTitle: "GLoHi-Cap: Gated Multimodal Fusion with Spatial Object Localization for Hindi Image Captioning",
      authors: "Himanshu Sharma, Devanand Padha, Yashwant Singh",
      institution: "Bennett University"
    },
    {
      title: "Best Paper in a Session Award in Image & Video Processing",
      paperTitle: "Neural Radiance Fields, Gaussian Splatting and its applications in Underwater Archaeology",
      authors: "Jasjappan Singh, Pramod Maurya",
      institution: "CSIR National Institute of Oceanography"
    },
    {
      title: "Best Paper in a Session Award in Artificial Intelligence Applications & Image Processing",
      paperTitle: "Furnit.Ar: AI-powered Augmented Reality Interior Designing Application",
      authors: "Shantanu Dhar, Shlok Pete, Roushan Jha, Vinaya Sawant, Sharvari Patil, Neha Agarwal",
      institution: "SVKM's Dwarkadas J. Sanghvi College of Engineering"
    },
    {
      title: "Best Paper in a Session Award in Autonomous and Intelligent Systems",
      paperTitle: "Decentralized Fuzzy Logic Formation Control for Multi-rotor Swarm with Virtual Leader",
      authors: "Jiljo K Moncy",
      institution: "Vikram Sarabhai Space Centre"
    }
  ];

  return (
    <div id='best-paper-awards' className="text-black font-roboto p-6 sm:p-10 md:p-16 font-medium leading-relaxed tracking-normal">
      {/* Heading Section */}
      <div className="w-full mb-8">
        <h1 className="md:text-5xl text-3xl font-bold underline text-[#CC5F00] mb-4 sm:mb-6 text-left relative">
          CVMI-2025 Best Paper Awards
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-full">
        <div className="space-y-8">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-[#CC5F00] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Award Title */}
              <h2 className="text-xl md:text-2xl font-bold text-[#CC5F00] mb-3">
                {award.title}
              </h2>
              
              {/* Paper Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 italic">
                "{award.paperTitle}"
              </h3>
              
              {/* Authors */}
              <p className="text-base md:text-lg text-gray-700 mb-2">
                <span className="font-semibold">Authors:</span> {award.authors}
              </p>
              
              {/* Institution */}
              <p className="text-base md:text-lg text-gray-600">
                <span className="font-semibold">Institution:</span> {award.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestPaperAwards;