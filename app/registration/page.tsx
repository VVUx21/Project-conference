"use client"
import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Contact from '../../components/contact';
import RegistrationGuidelinesNote from '../../components/registrationguidelines';

import Registrationdata from '../../components/Data/registrationfees';

const RegistrationPage: React.FC = () => {
  const { registrationPeriods, feeCategories } = Registrationdata;

  const renderFee = (fee: number, currency: 'INR' | 'USD'): string => {
    if (currency === 'INR') {
      return `₹${fee.toLocaleString('en-IN')}`;
    }
    return `$${fee.toLocaleString('en-US')}`;
  };

  const headerColSpan = feeCategories.length * 2;

  return (
    <>
      <Navbar />
      <div className="pt-20 mx-16 my-2.5">
        <h2 className="md:text-5xl text-3xl font-bold text-[#CC5F00]">Registration Details</h2>
        <div className="w-[35%] h-1 bg-[#CC5F00] mt-2"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-gray-50">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Registration Fees</h1>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              {/* Main Header Row */}
              <tr>
                <th className="bg-emerald-400 border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-800 align-middle" rowSpan={3}>
                  Category
                </th>
                {registrationPeriods.map(period => (
                  <th key={period.name} className="bg-emerald-400 border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-800" colSpan={headerColSpan}>
                    {period.name} <span className="block text-xs font-normal">{period.deadline}</span>
                  </th>
                ))}
              </tr>

              {/* Sub Header Row */}
              <tr>
                {registrationPeriods.map(period => (
                  <React.Fragment key={`${period.name}-sub`}>
                    {feeCategories.map(subCategory => (
                      <th key={subCategory} className="bg-lime-300 border border-gray-300 px-2 py-2 text-center text-xs font-semibold text-gray-800" colSpan={2}>
                        {subCategory}
                      </th>
                    ))}
                  </React.Fragment>
                ))}
              </tr>

              {/* Column Headers */}
              <tr>
                {registrationPeriods.map(period => (
                  <React.Fragment key={`${period.name}-cols`}>
                    {feeCategories.map(subCategory => (
                      <React.Fragment key={`${subCategory}-cols`}>
                        <th className="bg-lime-300 border border-gray-300 px-2 py-2 text-center text-xs font-semibold text-gray-800">
                          IEEE/IAPR Member
                        </th>
                        <th className="bg-lime-300 border border-gray-300 px-2 py-2 text-center text-xs font-semibold text-gray-800">
                          Non IEEE/IAPR Member
                        </th>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </tr>
            </thead>

            <tbody>
              {registrationPeriods[0].delegates.map((delegate, delegateIndex) => (
                <React.Fragment key={delegate.type}>
                  <tr>
                    <td colSpan={headerColSpan * registrationPeriods.length + 1} className="bg-orange-400 border border-gray-300 px-4 py-2 text-center font-bold text-gray-800">
                      {delegate.type}
                    </td>
                  </tr>

                  {delegate.categories.map(category => (
                    <tr key={category.name} className="hover:bg-gray-50">
                      <td className="bg-emerald-300 border border-gray-300 px-4 py-3 font-semibold text-gray-800">
                        {category.name}
                      </td>
                      {registrationPeriods.map(period => (
                        <React.Fragment key={`${period.name}-${category.name}`}>
                          {feeCategories.map(feeCat => {
                            const feeData = period.delegates[delegateIndex].categories.find(c => c.name === category.name)!.fees[feeCat];
                            return (
                              <React.Fragment key={feeCat}>
                                <td className="border border-gray-300 px-2 py-2 text-center text-sm">{renderFee(feeData.member, delegate.currency)}</td>
                                <td className="border border-gray-300 px-2 py-2 text-center text-sm">{renderFee(feeData.nonMember, delegate.currency)}</td>
                              </React.Fragment>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Cards */}
        <div className="lg:hidden space-y-6">
          {registrationPeriods.map(period => (
            <div key={period.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-emerald-400 px-4 py-3 text-center">
                <h3 className="font-bold text-gray-800">{period.name}</h3>
                <p className="text-xs text-gray-700">{period.deadline}</p>
              </div>
              {period.delegates.map(delegate => (
                <div key={delegate.type}>
                  <div className="bg-orange-400 px-4 py-2 text-center font-bold text-gray-800">
                    {delegate.type}
                  </div>
                  <div className="divide-y divide-gray-200">
                    {delegate.categories.map(category => (
                      <div key={category.name} className="p-4">
                        <h4 className="font-semibold text-gray-800 mb-3">{category.name}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                          {Object.entries(category.fees).map(([subCategory, fee]) => (
                            <div key={subCategory} className="space-y-1 p-2 bg-gray-50 rounded-md">
                              <div className="font-medium text-gray-700">{subCategory}</div>
                              <div>IEEE/IAPR: {renderFee(fee.member, delegate.currency)}</div>
                              <div>Non IEEE/IAPR: {renderFee(fee.nonMember, delegate.currency)}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ===== CTA from the image: between Fees and Guidelines ===== */}
        <div className="mt-10 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6 text-center">
            <p className="text-lg sm:text-xl font-semibold text-gray-900">
              Fill the registration form{' '}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScQwqOsqcLufpzmUd6fsJ8_l7NzhQDZAVWriz1wq967W-KhyA/viewform?usp=sharing&ouid=114460687899446289354"
                className="text-blue-600 hover:text-blue-700 hover:underline font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Registration Form
              </Link>
              .
            </p>
          </div>
        </div>
        {/* ===== End CTA ===== */}
      </div>

      {/* Registration Guidelines come after the CTA */}
      <RegistrationGuidelinesNote />
      <Contact />
    </>
  );
}

export default RegistrationPage;
