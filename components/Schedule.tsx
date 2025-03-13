import React from 'react';

const Schedule = () => {
  const scheduleData = [
    {
      time: '9:00 AM',
      event: 'Registration & Coffee',
      location: 'Main Hall'
    },
    {
      time: '10:00 AM',
      event: 'Opening Ceremony',
      location: 'Auditorium'
    },
    {
      time: '11:00 AM',
      event: 'Keynote Speaker',
      location: 'Auditorium'
    },
    {
      time: '12:30 PM',
      event: 'Lunch Break',
      location: 'Dining Area'
    },
    {
      time: '2:00 PM',
      event: 'Technical Sessions',
      location: 'Conference Rooms'
    },
    {
      time: '4:00 PM',
      event: 'Poster Presentations',
      location: 'Exhibition Hall'
    },
    {
      time: '5:30 PM',
      event: 'Closing Remarks',
      location: 'Auditorium'
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Conference Schedule
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {scheduleData.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-5 sm:p-6 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow"
            >
              {/* Time and Event */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-0">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-md mb-3 sm:mb-0 sm:mr-6">
                  {item.time}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {item.event}
                </h3>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <svg 
                  className="w-5 h-5 text-gray-500 mr-2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-600">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;