export default function RegistrationGuidelinesNote() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Registration Guidelines</h2>
      {/* Additional Important Information Section */}
      <div className="mt-6 bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-[#CC5F00] rounded-r-lg shadow-md">
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-black-800 mb-4">Important Registration Guidelines</h3>
          
          <div className="space-y-4 text-sm sm:text-base text-black-800">
            <div className="bg-white rounded-lg p-4 border border-black-200">
              <h4 className="font-semibold mb-2 text-black-900"> Paper Presentation Requirement</h4>
              <p>
                All papers are to be presented in-person during the CVMI 2025 conference. For your paper to be included in the CVMI 2025 proceedings which will be published in IEEE Xplore, it must be presented at CVMI 2025 in-person. A paper with no presenter (no show) will not be included in the conference proceedings. No requests for online presentation will be considered as the conference is in-person event to promote networking among the participants and attendees.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-black-200">
              <h4 className="font-semibold mb-2 text-black-900"> Payment Policy</h4>
              <p>
                The registration fees are non-refundable. The registration fees listed above includes GST of 18%.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-black-200">
              <h4 className="font-semibold mb-2 text-black-900"> Certificates & Documentation</h4>
              <p>
                Paper presentation certificates (hard-copy) will be given to all authors who will present their papers. Registration Fee Money receipt (hard-copy) will also be provided.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-black-200">
              <h4 className="font-semibold mb-2 text-black-900"> Verification Requirements</h4>
              <p>
                In case of students and IEEE/IAPR member, valid proof is needed during the registration. For students, their Institute/College/University ID card will be required. For IEEE/IAPR members their current year membership card will be required.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-black-200">
              <h4 className="font-semibold mb-2 text-black-900"> Non-Author Registration</h4>
              <p>
                Attendees who wish to register but do not have a paper can register at the non-author rates.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-black-200">
              <h4 className="font-semibold mb-2 text-black-900">Multiple Paper Discount</h4>
              <p>
                If an author has two accepted papers, the total registration fee will be 1.5 times the cost of registration of one paper. 
                This discount is applicable only for two additional papers to be presented by the same author.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-black-200">
              <h4 className="font-semibold mb-2 text-black-900">Extra Page Charges</h4>
              <p>
                If the final manuscript in IEEE format exceeds 6 pages, Rs. 1770 (Indian Author) or USD 40 (Foreign Author) will be charged 
                for each extra page up to two additional pages only. Papers with more than 8 pages will not be considered for publication.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-black-200">
              <h4 className="font-semibold mb-2 text-black-900">Registration Inclusions</h4>
              <p>
                The registration fee will include Registration kit, access to keynote and technical sessions, networking tea &amp; snacks, 
                working lunch on both days, and Conference banquet dinner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}