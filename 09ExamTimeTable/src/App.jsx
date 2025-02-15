import React from "react";
import timeTable from "./assets/MidSem_Exam_Schedule_2024-25W.pdf"

const timetable = [
  { course: "LAL202", time: "03:30 PM to 05:30 PM", date: "17th Feb" },
  { course: "LAL101", time: "10:30 AM to 12:30 PM", date: "18th Feb" },
  { course: "LAL200", time: "10:30 AM to 12:30 PM", date: "19th Feb" },
  { course: "LAL227", time: "03:30 PM to 05:30 PM", date: "19th Feb" },
  { course: "LAL249", time: "09:00 AM to 11:00 AM", date: "20th Feb" },  
  { course: "CSL251", time: "03:30 PM to 05:30 PM", date: "20th Feb" },
  { course: "DSL251", time: "03:30 PM to 05:30 PM", date: "21st Feb" },
  { course: "CSL252", time: "09:00 AM to 11:00 AM", date: "24th Feb" },
  { course: "DSL253", time: "03:30 PM to 05:30 PM", date: "24th Feb" },
];

const App = () => {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Mid Sem Timetable DSAI </h1>
        <div className="flex justify-center text-ellipsis text-2xl" >
      
      {/* <a href={timeTable} target="_blank"
          rel="noreferrer">
          Click Here for full Schedule
      </a> <br></br> */}
      
</div>
        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-white text-lg">
              <th className="px-6 py-3">Course</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((entry, index) => (
              <tr key={index} className="text-center odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300 transition">
                <td className="px-6 py-4 text-gray-700 font-medium">{entry.course}</td>
                <td className="px-6 py-4 text-gray-700">{entry.date}</td>
                <td className="px-6 py-4 text-gray-700">{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
      
</>
  );
};

export default App;
