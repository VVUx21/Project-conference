import React from 'react';
import { scheduleData } from './Data/scheduledata';
const ConferenceSchedule: React.FC = () => {
  
  const getSlotBgColor = (type: string) => {
    switch (type) {
      case 'registration':
        return 'bg-yellow-200';
      case 'inauguration':
        return 'bg-blue-200';
      case 'break':
        return 'bg-lime-300';
      case 'lunch':
        return 'bg-lime-300';
      case 'dinner':
        return 'bg-lime-300';
      case 'keynote':
        return 'bg-orange-400';
      case 'tracks':
        return 'bg-yellow-100';
      case 'ceremony':
        return 'bg-lime-300';
      default:
        return 'bg-gray-100';
    }
  };

  const getTrackBgColor = (index: number) => {
    const colors = ['bg-yellow-100', 'bg-blue-100', 'bg-purple-100'];
    return colors[index % colors.length];
  };

  return (
    <div className="md:mx-16 mx-3 p-4 bg-white">
      {/* Header */}
      <div className="w-full">
        <h1 className="md:text-5xl text-3xl  font-bold underline text-[#CC5F00] mb-4 sm:mb-6 text-left relative">
            CVMI-2025 Program Schedule 
        </h1>
      </div>

      {/* Schedule for each day */}
      {scheduleData.map((day, dayIndex) => (
        <div key={dayIndex} className="mb-8 overflow-x-scroll">
          {/* Day Header */}
          <div className="bg-emerald-400 border text-black p-4 rounded-t-lg">
            <h3 className="text-xl font-bold text-center">
              {day.date} ({day.day})
            </h3>
          </div>

          {/* Schedule Table */}
          <div className="border border-gray-300 rounded-b-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-bold min-w-[180px]">
                      Date and Time
                    </th>
                    <th className="border border-gray-300 p-3 text-center font-bold">
                      {day.date} ({day.day})
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {day.slots.map((slot, slotIndex) => (
                    <tr key={slotIndex}>
                      <td className="border border-gray-300 p-3 font-medium min-w-[180px]">
                        {slot.time}
                      </td>
                      <td className={`border border-gray-300 p-3 ${getSlotBgColor(slot.type)}`}>
                        {slot.type === 'tracks' && slot.tracks ? (
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {slot.tracks.map((track, trackIndex) => (
                              <div
                                key={trackIndex}
                                className={`${getTrackBgColor(trackIndex)} p-4 rounded border`}
                              >
                                <h4 className="font-bold text-sm mb-2">
                                  {track.name}
                                </h4>
                                <p className="text-xs mb-2">{track.paperIds}</p>
                                <p className="text-xs font-medium">{track.roomNo}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center">
                            <div className="font-bold text-sm md:text-base mb-1">
                              {slot.title}
                            </div>
                            {slot.venue && (
                              <div className="text-sm text-gray-700">
                                Venue: {slot.venue}
                              </div>
                            )}
                            {slot.speaker && (
                              <div className="text-sm text-gray-700">
                                {slot.speaker}
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConferenceSchedule;