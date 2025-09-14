import React from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/contact';
import Link from 'next/link';
import Image from 'next/image';

const PageKeynote: React.FC = () => {
  return (
    <>
    <div id="keynote" className="bg-white">
    <Navbar />
    <div id='keynote-speakers' className="text-white p-6 sm:pt-60 md:px-16 md:pt-12 lg:px-20 lg:pt-16 pt-10">
      <div className="md:pt-18 pt-10 ">
        <h2 className="md:text-5xl text-3xl font-bold text-[#CC5F00] underline">CVMI-2025 Keynote Speakers</h2>
      </div>
      
      {/* Keynote Speaker 1 */}
      <div className="text-black font-roboto font-medium text-2xl leading-[48px] tracking-normal p-6 mt-8">
        <div className="bg-gray-50 rounded-lg p-8 mb-12 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Image Section */}
            <div className="lg:w-1/3">
              <Image
                src="https://res.cloudinary.com/dgtdkqfsx/image/upload/v1756319253/WhatsApp_Image_2025-08-25_at_20.46.10_ce1ec929_ud9tyq.jpg"
                alt="Prof. Jayanta Mukhopadhyay"
                width={400}
                height={400}
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            
            {/* Content Section */}
            <div className="lg:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-[#CC5F00]">
                Prof. Jayanta Mukhopadhyay (Mukherjee)
              </h3>
              <div className="text-lg leading-relaxed text-gray-800 space-y-4">
                <p>
                  Dr. Jayanta Mukhopadhyay (Mukherjee) is presently a professor in the Department of Computer Science and Engineering, Indian Institute of Technology, Kharagpur, India. His research interests are in image processing, computer vision, robotics, pattern recognition, computer graphics, multimedia systems and bio-medical informatics.
                </p>
                <p>
                  He held the office of Dean, Outreach and Alumni Affairs of the Institute from April 2021 to June 2023. He also served as the head of the Computer and Informatics Center at IIT, Kharagpur from September 2004 to July 2007, and as the head of the Department of Computer Science and Engineering and the School of Information and Technology from April, 2010 to March, 2013.
                </p>
                <p>
                  He was a Humboldt Research Fellow at the Technical University of Munich in Germany for one year in 2002. Dr. Mukhopadhyay received the Young Scientist Award from the Indian National Science Academy in 1992. In 2022, he received CAETS 2022 Communication Prizes for high potential innovation by the International Council of Academies of Engineering and Technological Sciences.
                </p>
                <div className="mt-6">
                  <Link href="https://www.iitkgp.ac.in/department/CS/faculty/cs-jay" className="text-blue-500 underline hover:text-blue-700 transition-colors">
                    More information about Prof. Jayanta Mukhopadhyay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keynote Speaker 2 */}
      <div className="text-black font-roboto font-medium text-2xl leading-[48px] tracking-normal p-6 mt-8">
        <div className="bg-gray-50 rounded-lg p-8 mb-12 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Image Section */}
            <div className="lg:w-1/3">
              <Image
                src="https://res.cloudinary.com/dgtdkqfsx/image/upload/v1756319278/WhatsApp_Image_2025-08-25_at_20.46.10_2d0238b5_ucvtqy.jpg"
                alt="Prof. Jayanta Mukhopadhyay"
                width={400}
                height={400}
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            
            {/* Content Section */}
            <div className="lg:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-[#CC5F00]">
                Prof. Ing. Juraj Gazda, Slovenia
              </h3>
              <div className="text-lg leading-relaxed text-gray-800 space-y-4">
                <p>
                  Juraj Gazda defended his dissertation thesis "Multicarrier based transmission systems undergoing nonlinear amplification" in 2010. In the time frame 2011-2014, besides his education and research activities at Technical University of Kosice, he was also with the Nokia Networks (former Nokia Siemens Networks) working as the external consultant dealing with the IMS based LTE wireless communication systems.
                </p>
                <p>
                  In the past, he acted as the guest researcher at the Ramon Llull University (Barcelona, Spain), Technical University of Hamburg, Harburg (Germany) and Delft University of Technology (Netherlands). In 2013, he visited Verizon Wireless (Dallas, TX, USA) to consult the design of IMS based LTE network for Verizon Wireless.
                </p>
                <div className="mt-6">
                  <Link href="https://iislab.kpi.fei.tuke.sk/people/juraj-gazda" className="text-blue-500 underline hover:text-blue-700 transition-colors">
                    More information about Prof. Juraj Gazda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keynote Speaker 3 */}
      <div className="text-black font-roboto font-medium text-2xl leading-[48px] tracking-normal p-6 mt-8">
        <div className="bg-gray-50 rounded-lg p-8 mb-12 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Image Section */}
            <div className="lg:w-1/3">
              <Image
                src="https://res.cloudinary.com/dgtdkqfsx/image/upload/v1756319306/WhatsApp_Image_2025-08-26_at_12.40.13_7105bc9e_oykfy2.jpg"
                alt="Prof. Jayanta Mukhopadhyay"
                width={400}
                height={400}
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            
            {/* Content Section */}
            <div className="lg:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-[#CC5F00]">
                Prof. Soumyajit Dey
              </h3>
              <div className="text-lg leading-relaxed text-gray-800 space-y-4">
                <p>
                  Dr. Soumyajit Dey is currently an associate professor in the Department of Computer Science and Engineering, IIT Kharagpur. He joined the department in 2013. He did his B.E. in Electronics and Telecommunication Engineering from Jadavpur University, Kolkata, India. He did his Masters and PhD degree in Computer Science and Engineering from IIT Kharagpur, India.
                </p>
                <p>
                  He leads the High Performance Real-time Computing Laboratory (HiPRC) in Computer Science and Engineering Department, IIT Kharagpur, India. His research interests include: 1) Autonomous Trustworthy Cyber Physical Systems (CPS) design, 2) Formal Methods, 3) Real time scheduling, 4) GPGPU optimizations.
                </p>
                <p>
                  He regularly serves as reviewer in many IEEE/ACM transactions and as PC member in many prestigious conferences in the domain of Cyber Physical Systems, Design Automation, Real time Systems etc. He is the winner of best design award in VLSI 2006 and has an honourable mention in VLSI 2019. He was awarded the Faculty Excellence Award in Associate Professor category by IIT Kharagpur in 2024.
                </p>
                <div className="mt-6">
                  <Link href="https://www.iitkgp.ac.in/department/CS/faculty/cs-soumya" className="text-blue-500 underline hover:text-blue-700 transition-colors">
                    More information about Prof. Soumyajit Dey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="text-black font-roboto font-medium text-2xl leading-[48px] tracking-normal p-6 mt-8">
        <div className="bg-gray-50 rounded-lg p-8 mb-12 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Image Section */}
            <div className="lg:w-1/3">
              <Image
                src="https://res.cloudinary.com/dgtdkqfsx/image/upload/v1756804741/WhatsApp_Image_2025-09-01_at_14.28.09_68185a28_pw3ct9.jpg"
                alt="Prof. Jayanta Mukhopadhyay"
                width={400}
                height={400}
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            
            {/* Content Section */}
            <div className="lg:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-[#CC5F00]">
                Dr. Poonam Yadav, Scientist 'D'
              </h3>
              <div className="text-lg leading-relaxed text-gray-800 space-y-4">
                <p>
                  Dr. Poonam Yadav is a seasoned biotechnology expert with over 15 years of distinguished service at the Department of Science & Technology (DST), Government of India. Currently serving as Scientist 'D' in the Frontier and Futuristic Technologies (FFT) Division, she plays a pivotal role in shaping India's innovation ecosystem through the National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS).
                </p>
                <p>
                  She manages mission-mode R&D projects, fosters academia-industry-government collaborations, and drives the integration of emerging technologies such as AI, ML, and Cyber-Physical Systems into national priorities. Dr. Yadav also contributes significantly to regulatory excellence through her role at the National GLP Compliance Monitoring Authority (NGCMA).
                </p>
                <p>
                  Her academic credentials include a PhD in Biotechnology with specializations in Functional Genomics, Bio nanotechnology, Nano & Advanced Materials, and Synchrotron Science. Her research portfolio includes 15 peer-reviewed publications, 4 co-authored books, and over 150 citations. She has represented India in prestigious international forums including India-Japan Joint Committee Meeting, BRICS Working Group on Nanotechnology, and Materials Genome Initiative in Washington D.C.
                </p>
                <div className="mt-6 space-y-2">
                  <Link href="https://dst.gov.in/whoswho/dr-poonam-yadav-0" className="text-blue-500 underline hover:text-blue-700 transition-colors block">
                    DST Profile - Dr. Poonam Yadav
                  </Link>
                  <Link href="https://nmicps.in/management" className="text-blue-500 underline hover:text-blue-700 transition-colors block">
                    NM-ICPS Management Team
                  </Link>
                  <Link href="https://www.linkedin.com/in/poonam-yadav-31942320" className="text-blue-500 underline hover:text-blue-700 transition-colors block">
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Contact/>
    </div>
    </>
  );
};

export default PageKeynote;