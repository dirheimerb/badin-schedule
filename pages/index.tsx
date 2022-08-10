import React from 'react';

const schedule = [
    {
    room: 103,
    name: 'Homeroom',
    time: '7:30 AM - 7:40 AM', 
    teacher: 'Christine Brinkman Gates'
  },
  {
    room: 109,
    name: 'English',
    time: '7:44 AM - 8:26 AM',
    teacher: 'Sean Stewart'
  },
  {
    room: '005',
    name: 'World History',
    time: '8:30 AM - 9:12 AM',
    teacher: 'Jordan Seitz'
  },
  {
    room: 'Badin Cafeteria',
    name: 'Study Hall',
    time: '9:16 AM - 9:58 AM',
    teacher: 'Christopher Mate'
  },
  {
    room: '109',
    name: 'Hebrew Scriptures',
    time: '10:02 AM - 10:44 AM',
    teacher: 'Karen Ray'
  },
  {
    room: '009',
    name: 'Algebra',
    time: '10:48 AM - 11:30 AM',
    teacher: 'Tara Robinson'
  },
  {
    room: '010',
    name: 'French',
    time: '11:33 AM - 12:56 PM',
    teacher: 'Eric Cole'
  },
  {
    room: 'GLAB',
    name: 'Guitar',
    time: '1:00 PM - 1:42 PM',
    teacher: 'Robert Ross'
  },
  {
    room: '202',
    name: 'Biology',
    time: '1:46 PM - 2:30 PM',
    teacher: 'Kristen Boock'
  },
  ]
   

  const IndexPage = () => {
    return (
      <div>
        <h1>Schedule</h1>
        <ul role="list" className="divide-y divide-gray-900">
        <div className="grid grid-flow-row md:auto-rows-max">
      {schedule.map((schedule) => (
        <li key={schedule.name} className="py-1 flex">
          <div className="block mt-4 ml-5 shadow-lg p-5 bg-gray-300">
          <p className="text-sm font-medium text-gray-900">Class: {schedule.name}</p>
          <p className="text-sm font-medium text-gray-900">Room Number: {schedule.room}</p>
          <p className="text-sm font-medium text-gray-900">Time: {schedule.time}</p>
          <p className="text-sm font-medium text-gray-900">Teacher: {schedule.teacher}</p>
          </div>
        </li>
        
      ))}
      </div>
    </ul>
      </div>
    );
  }

    export default IndexPage;