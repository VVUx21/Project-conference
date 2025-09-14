import React from 'react';
import { Paper } from '../../components/Data/registeredpaper';
import defaultPapers from '../../components/Data/registeredpaper';
import Navbar from '../../components/Navbar';
import Contact from '../../components/contact';

interface AcceptedPapersListProps {
  papers?: Paper[];
}

const AcceptedPapersList: React.FC<AcceptedPapersListProps> = ({ papers = [] }) => {

  const papersData = papers.length > 0 ? papers : defaultPapers;

  return (
    <>
      <div className="w-full max-w-7xl mx-auto pt-16 p-4 sm:p-6 sm:pt-20 lg:pt-20 lg:p-8">
        <Navbar />
        {/* Title */}
        <div className="md:pt-10 pt-10 mb-5 ">
        <h2 className="md:text-5xl text-3xl font-bold text-[#CC5F00] underline">Early Registrations</h2>
        </div>

      {/* Mobile Card View */}
      <div className="block lg:hidden">
        <div className="space-y-4">
          {papersData.map((paper) => (
            <div
              key={`${paper["SL. No"]}-${paper["Paper-ID"]}`}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                  #{paper["SL. No"]}
                </span>
                <span className="bg-orange-100 text-orange-800 text-sm font-medium px-2 py-1 rounded">
                  ID: {paper["Paper-ID"]}
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight">
                {paper["Title of Paper"]}
              </h3>
              
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Author:
                  </span>
                  <p className="text-sm text-gray-700 mt-1">
                    {paper["Name of Author"]}
                  </p>
                </div>
                
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Institution:
                  </span>
                  <p className="text-sm text-gray-700 mt-1">
                    {paper["Author Institution"]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="w-full bg-white">
            <thead>
              <tr>
                <th className="bg-green-200 text-gray-700 font-semibold py-4 px-4 text-center border-r border-gray-300 w-20">
                  S. No.
                </th>
                <th className="bg-orange-200 text-gray-700 font-semibold py-4 px-4 text-center border-r border-gray-300 w-24">
                  Paper ID
                </th>
                <th className="bg-teal-200 text-gray-700 font-semibold py-4 px-6 text-center border-r border-gray-300">
                  Paper Title
                </th>
                <th className="bg-lime-200 text-gray-700 font-semibold py-4 px-6 text-center">
                  Authors
                </th>
              </tr>
            </thead>
            <tbody>
              {papersData.map((paper, index) => (
                <tr
                  key={`${paper["SL. No"]}-${paper["Paper-ID"]}`}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="py-4 px-4 text-center text-gray-800 font-medium border-r border-gray-200">
                    {paper["SL. No"]}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-800 font-medium border-r border-gray-200">
                    {paper["Paper-ID"]}
                  </td>
                  <td className="py-4 px-6 text-gray-800 border-r border-gray-200">
                    <div className="font-medium leading-relaxed">
                      {paper["Title of Paper"]}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-800">
                    <div className="space-y-2">
                      <div className="font-medium text-gray-900">
                        {paper["Name of Author"]}
                      </div>
                      <div className="text-sm text-gray-600 italic">
                        {paper["Author Institution"]}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-6 text-center text-sm text-gray-500">
        Total Papers: {papersData.length}
      </div>
    <div className="mt-6 flex justify-center">
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 rounded-md max-w-xl">
        <span className="text-sm md:text-base font-semibold">
        ⚠️ The above list is tentative and subject to verification by Finance Office
        </span>
    </div>
    </div>
    </div>
    <Contact />
    </>
  );
};

export default AcceptedPapersList;