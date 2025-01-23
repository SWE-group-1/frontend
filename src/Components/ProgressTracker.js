import React, { useState } from 'react';

function ProgressTracker() {
  const [selectedDate, setSelectedDate] = useState('today'); // Ensure consistency with data keys

  const data = {
    today: [
      { time: '10:23 PM', value: 0 },
      { time: '10:30 PM', value: 20 },
      { time: '10:40 PM', value: 25 },
      { time: '10:50 PM', value: 28 },
      { time: '11:00 PM', value: 25 },
      { time: '11:10 PM', value: 20 },
      { time: '11:20 PM', value: 15 },
      { time: '11:30 PM', value: 10 },
      { time: '11:40 PM', value: 5 },
    ],
    yesterday: [
      { time: '10:23 PM', value: 5 },
      { time: '10:30 PM', value: 10 },
      { time: '10:40 PM', value: 15 },
      { time: '10:50 PM', value: 20 },
      { time: '11:00 PM', value: 18 },
      { time: '11:10 PM', value: 15 },
      { time: '11:20 PM', value: 10 },
      { time: '11:30 PM', value: 8 },
      { time: '11:40 PM', value: 5 },
    ],
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="bg-cream-50 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-sm font-semibold">This Week</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 4-7-4" />
          </svg>
        </div>
        <div>
          <button
            onClick={() => handleDateChange('today')}
            className={`text-xs ${selectedDate === 'today' ? 'text-purple-500' : 'text-gray-400'} ml-2`}
          >
            Today
          </button>
          <button
            onClick={() => handleDateChange('yesterday')}
            className={`text-xs ${selectedDate === 'yesterday' ? 'text-purple-500' : 'text-gray-400'} ml-2`}
          >
            Yesterday
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-500 mb-2">
        <span className="inline-block mr-1">○</span> PROGRESS TRACKER: VISUAL BAR OR PIE CHART SHOWING PROGRESS.
      </p>

      <div className="relative">
        <canvas id="myChart" width="300" height="100"></canvas>

        {/* Overlay for data points and labels */}
        <div className="absolute top-0 left-0 w-full h-full">
          {data[selectedDate]?.map((point, index) => (
            <div
              key={index}
              className={`absolute ${
                selectedDate === 'today' ? 'text-purple-500' : 'text-gray-400'
              } text-xs`}
              style={{
                left: `${(index / data[selectedDate].length) * 100}%`,
                top: `${100 - (point.value / 30) * 100}%`,
              }}
            >
              {point.value}
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs mt-2">
        {data[selectedDate]?.map((point, index) => (
          <span key={index} className="mr-2">
            {point.time}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProgressTracker;
