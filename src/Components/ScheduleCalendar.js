import React from 'react';

const ScheduleCalendar = () => {
  const schedules = [
    { day: 'Mon', time: '9:00 AM - 10:45 AM', subject: 'Subject' },
    { day: 'Thu', time: '8:00 AM - 8:45 AM', subject: 'Subject' },
    { day: 'Thu', time: '10:00 AM - 10:45 AM', subject: 'Subject' },
    { day: 'Thu', time: '11:00 AM - 11:45 AM', subject: 'Subject' },
    { day: 'Fri', time: '10:00 AM - 10:45 AM', subject: 'Subject' },
    { day: 'Sat', time: '10:00 AM - 10:45 AM', subject: 'Subject' },
  ];

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between mb-2">
        <h3 className="text-lg font-semibold">Jan 4 - 10, 2025</h3>
        <div className="flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-xs">
            {day} <br />
            {day === 'Thu' ? '07/01' : '04/01'}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7  gap-2">
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        <span className="text-xs">8:00 AM</span>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="bg-blue-100 rounded-sm p-1 text-xs">
          Subject <br /> 8:00am - 8:45am
        </div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        <span className="text-xs">9:00 AM</span>
        <div className="bg-blue-100 rounded-sm p-1 text-xs">
          Subject <br /> 9:00am - 10:45am
        </div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        <span className="text-xs">10:00 AM</span>
        <div className="h-10"></div>
        <div className="bg-blue-100 rounded-sm p-1 text-xs">
          Subject <br /> 10:00am - 11:45am
        </div>
        <div className="bg-blue-100 rounded-sm p-1 text-xs">
          Subject <br /> 10:00am - 10:45am
        </div>
        <div className="bg-blue-100 rounded-sm p-1 text-xs">
          Subject <br /> 10:00am - 10:45am
        </div>
        <div className="h-10"></div>
        <div className="h-10"></div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        <span className="text-xs">11:00 AM</span>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="bg-blue-100 rounded-sm p-1 text-xs">
          Subject <br /> 11:00am - 11:45am
        </div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        <span className="text-xs">12:00 PM</span>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        <span className="text-xs">01:00 PM</span>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
      </div>
    </div>
  );
};

export default ScheduleCalendar;