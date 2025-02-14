import React, { useState, useEffect, useRef } from "react";
import Papa from 'papaparse';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const CSV_URL = 'https://raw.githubusercontent.com/Rahul5977/csvFiles/refs/heads/main/IIT%20Bhilai%20Gym%20Usage%20and%20Feedback%20Survey%20(Responses)%20-%20Form%20Responses%201.csv';

function Project() {
    const [charts, setCharts] = useState({
        gender: null,
        year: null,
        academicProgram: null,
        frequency: null,
        timeCount: null,
        durationCount: null,
        satisfaction: null
    });
    // const [observations, setObservations] = useState("");
    const chartRef = useRef(null); // To keep track of the chart instance

    // Fetch CSV file from GitHub
    useEffect(() => {
        fetch(CSV_URL)
            .then(response => response.text()) // Convert response to text
            .then(csvText => {
                Papa.parse(csvText, {
                    header: true, // Read CSV headers
                    skipEmptyLines: true,
                    complete: (result) => processCSVData(result.data)
                });
            })
            .catch(error => console.error("Error fetching CSV:", error));
    }, []);


    // Process CSV data and remove "Timestamp" column
    const processCSVData = (data) => {
        // Remove "Timestamp" column
        let filteredData = data.map(row => {
            const { Timestamp, ...rest } = row; // Remove "Timestamp" column
            return rest;
        });
        filteredData = data.filter(row => row["Do you visit the gym?"] === "Yes");

        // Step 2: Drop unnecessary columns
        const cleanedData = filteredData.map(row => {
            const {
                ["Do you visit the gym?"]: _,
                ["Why don’t you visit the gym?"]: __,
                ["Would you consider using the gym in the future?"]: ___,  // Ignore this column
                ...rest
            } = row;
            return rest;
        });

        // Step 3: Count occurrences of different categories
        const getCounts = (column) => {
            return cleanedData.reduce((acc, row) => {
                const value = row[column];
                if (value) acc[value] = (acc[value] || 0) + 1;
                return acc;
            }, {});
        };

        // Step 4: Generate dataset for each category
        const generateChartData = (counts) => ({
            labels: Object.keys(counts),
            datasets: [{
                label: "Count",
                data: Object.values(counts),
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4caf50", "#ff9800","#6663c6"],
            }]
        });
        const satisfaction_columns = [
            "How satisfied are you with the gym’s equipment?\n(1 = Very Unsatisfied, 5 = Very Satisfied)",
            "How satisfied are you with the cleanliness of the gym?",
            "How satisfied are you with the gym's overall environment?",
          ];
      
          const getSatisfactionCounts = (column) => {
            return filteredData.reduce((acc, row) => {
              const value = row[column]?.trim();
              if (value && ["1", "2", "3", "4", "5"].includes(value)) {
                acc[value] = (acc[value] || 0) + 1;
              }
              return acc;
            }, {});
          };
      
          const satisfactionData = satisfaction_columns.map((col) => ({
            title: col.split("?")[0],
            data: {
              labels: ["1", "2", "3", "4", "5"],
              datasets: [
                {
                  label: "Responses",
                  data: [getSatisfactionCounts(col)["1"] || 0, getSatisfactionCounts(col)["2"] || 0, getSatisfactionCounts(col)["3"] || 0, getSatisfactionCounts(col)["4"] || 0, getSatisfactionCounts(col)["5"] || 0],
                  backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4caf50", "#ff9800"],
                },
              ],
            },
          }));
      
          

        setCharts({
            gender: generateChartData(getCounts("Gender")),
            year: generateChartData(getCounts("Year of Study")),
            frequency: generateChartData(getCounts("How often do you visit the gym?")),
            timeCount: generateChartData(getCounts("At what time do you usually visit the gym?")),
            durationCount: generateChartData(getCounts("How long do you typically spend in the gym per visit?")),
            satisfaction: satisfactionData,
        });
    };

    // Calculate the total count for time
    const totalTimeCount = charts.timeCount ? charts.timeCount.datasets[0].data.reduce((a, b) => a + b, 0) : 0;

    // Cleanup the chart on component unmount or when the data changes
    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy(); // Destroy previous chart instance before re-rendering
        }
    }, [charts]);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2 class="text-green-600 text-2xl font-bold mb-4">Gym Usage and Trends at IIT Bhilai</h2>

        <p class="mb-4">
            Our survey data provides valuable insights into how students at IIT Bhilai use the gym. 
            The graphs and histograms reveal interesting trends about gym visits, satisfaction levels, and preferences.
        </p>

            {charts.year && (
                <>
                    <div>
                        <Bar
                            ref={chartRef} // Assign the ref to the Bar chart component
                            data={charts.year}
                            options={{
                                responsive: true,
                                plugins: {
                                    title: {
                                        display: true,
                                        text: '1.Year of Distribution',  // Chart title
                                        font: {
                                            size: 18,
                                            weight: 'bold',
                                        },
                                        color: "#333",
                                    },
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Year of Study',  // X-axis label
                                        },
                                        ticks: {
                                            rotation: 45,  // Rotate the X-axis labels for better readability
                                        },
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Count',  // Y-axis label
                                        },
                                        beginAtZero: true,  // Ensure the Y-axis starts at 0
                                    },
                                },
                            }}
                        />
                        <div className="mt-6 p-6 bg-white border-l-4 border-blue-500 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold text-blue-600 mb-3">📊 Observations</h2>
    
    <p className="text-gray-700 text-base leading-relaxed">
        The data reveals an interesting trend in gym engagement across different academic years. 
        <strong className="text-gray-900"> First-year students</strong> show moderate participation, likely as they explore campus life and adjust to their schedules.
        <br /><br />
        However, gym usage <strong className="text-gray-900">peaks in the second year</strong>, possibly due to increased fitness awareness and a need for stress relief amidst academic pressures.
        <br /><br />
        Interestingly, <strong className="text-gray-900">Third and the final-year students</strong> show a slight decline in gym visits, likely due to project deadlines, placements, or research commitments.
        
    </p>
</div>

                    </div>
                    <div>
                        <Bar
                            data={charts.frequency}
                            options={{
                                responsive: true,
                                plugins: {
                                    title: {
                                        display: true,
                                        text: '2.Frequency of Gym visits',  // 
                                        // Chart title
                                        font: {
                                            size: 18,
                                            weight: 'bold',
                                        },
                                        color: "#333",
                                    },

                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Frequency',  // X-axis label
                                        },
                                        ticks: {
                                            rotation: 45,  // Rotate the X-axis labels for better readability
                                        },
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Count',  // Y-axis label
                                        },
                                        beginAtZero: true,  // Ensure the Y-axis starts at 0
                                    },
                                },
                            }}
                        />
                        <div className="mt-6 p-6 bg-white border-l-4 border-blue-500 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold text-blue-600 mb-3">📊 Frequency of Gym Visits</h2>
    
    <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed">
        <li>
            <strong className="text-gray-900">Most Popular Frequency:</strong> The highest number of respondents visit the gym 
            <span className="text-blue-600 font-semibold"> 4-5 times a week</span>, indicating a strong commitment to regular workouts.
        </li>

        <li>
            <strong className="text-gray-900">Daily Gym-Goers:</strong> A significant portion of students also visit the gym 
            <span className="text-blue-600 font-semibold"> daily</span>, showcasing a dedicated fitness routine among a sizable group.
        </li>

        <li>
            <strong className="text-gray-900">Moderate Users:</strong> Some students visit the gym 
            <span className="text-blue-600 font-semibold"> 2-3 times a week</span>, balancing workouts with academics and other activities.
        </li>

        <li>
            <strong className="text-gray-900">Occasional Visitors:</strong> The 
            <span className="text-blue-600 font-semibold"> "Occasionally" </span> category has a relatively low count, suggesting that most students who go to the gym do so with some consistency.
        </li>

        <li>
            <strong className="text-gray-900">Least Common Frequency:</strong> Very few students visit the gym 
            <span className="text-blue-600 font-semibold"> only once a week</span>, indicating that infrequent gym visits are not a common habit among users.
        </li>
    </ul>

    <h3 className="text-lg font-medium text-blue-600 mt-4">💡 Insights:</h3>
    <p className="text-gray-700 leading-relaxed">
        - The gym has a dedicated user base with a majority visiting frequently.<br/>
        - Fitness awareness appears to be high, as most students follow a structured routine.<br/>
        - Occasional and one-time visitors may need encouragement through promotions or beginner-friendly programs.
    </p>
</div>

                    </div>
                    <div>
                        <Bar
                            ref={chartRef} // Assign the ref to the Bar chart component
                            data={charts.durationCount}
                            options={{
                                responsive: true,
                                plugins: {
                                    title: {
                                        display: true,
                                        text: '4.Time Duration',  // Chart title
                                        font: {
                                            size: 18,
                                            weight: 'bold',
                                        },
                                        color: '#333'
                                    },
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Time duration',  // X-axis label

                                        },
                                        ticks: {
                                            rotation: 45,  // Rotate the X-axis labels for better readability
                                        },
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Count',  // Y-axis label
                                        },
                                        beginAtZero: true,  // Ensure the Y-axis starts at 0
                                    },
                                },
                            }}
                        />

                    </div>
                    <div>
                    <div className="flex flex-col items-center justify-center my-10 p-5 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5.Heatmap of Time Count</h2>
                <img src="/HeatMap.png" alt="Heat Map" className="h-80 w-auto rounded-lg border-2 border-gray-300 shadow-md" />
                </div>
                <div className="mt-6 p-6 bg-white border-l-4 border-blue-500 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold text-blue-600 mb-3">⏰ Peak Gym Visit Times</h2>
    
    <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed">
        <li>
            <strong className="text-gray-900">Busiest Time Slot:</strong> The 6:30 a.m. - 7:30 a.m. slot has the highest number of visits (26), indicating that 
            early morning workouts are the most popular.
        </li>

        <li>
            <strong className="text-gray-900">Moderate Activity Periods:</strong> 6:00 p.m. - 7:00 p.m. and 7:00 p.m. - 10:00 p.m. have a decent number of visits (15 each), 
            suggesting that evenings are also preferred workout times.
        </li>

        <li>
            <strong className="text-gray-900">Least Popular Time Slots:</strong> 5:00 p.m. - 6:00 p.m., 5:30 a.m. - 6:30 a.m., and 7:30 a.m. - 9:30 a.m.
            have relatively fewer visits (10-11), showing that these slots are less preferred.
        </li>
    </ul>

    <h3 className="text-lg font-medium text-blue-600 mt-4">💡 Key Takeaways:</h3>
    <p className="text-gray-700 leading-relaxed">
        - The <strong>early morning (6:30 a.m. - 7:30 a.m.)</strong> is the most crowded, possibly due to students balancing fitness with academics.<br/>
        - <strong>Evening slots (6:00 p.m. - 10:00 p.m.)</strong> are also popular, catering to those who prefer working out after classes.<br/>
        - Less busy time slots can be targeted for beginner-friendly sessions or special promotions to balance gym usage.
    </p>
</div>


                    </div>
                    <div>
                    <div className="flex flex-col items-center justify-center my-10 p-5 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Equipment Satisfaction Scatter plot</h2>
                <img src="/Scatter1.png" alt="Heat Map" className="h-80 w-auto rounded-lg border-2 border-gray-300 shadow-md" />
                </div>
                    </div>
                    <div>
                    <div className="flex flex-col items-center justify-center my-10 p-5 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Equipment Satisfaction Scatter plot</h2>
                <img src="/Scatter2.png" alt="Heat Map" className="h-80 w-auto rounded-lg border-2 border-gray-300 shadow-md" />
                </div>
                    </div>

                    
                    <div>
                    {charts.satisfaction && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {charts.satisfaction.map((chart, index) => (
            <div key={index} className="bg-white p-5 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{chart.title}</h3>
              <Bar
                data={chart.data}
                options={{
                  responsive: true,
                  plugins: { title: { display: true, text: chart.title } },
                  scales: {
                    x: { title: { display: true, text: "Rating (1-5)" } },
                    y: { title: { display: true, text: "Count" }, beginAtZero: true },
                  },
                }}
              />
              
            </div>
          ))}
        </div>

      )}
      <div className="mt-6 p-6 bg-white border-l-4 border-green-500 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold text-green-600 mb-3">💬 Gym Satisfaction Insights</h2>

    <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed">
        <li>
            <strong className="text-gray-900">Equipment Satisfaction:</strong> Most users rated the gym’s equipment 3 or 4 out of 5, 
            indicating general satisfaction but also room for improvement.
        </li>

        <li>
            <strong className="text-gray-900">Cleanliness Ratings:</strong> A notable number of users gave ratings of 2, 3, and 4, 
            showing that while some find the cleanliness satisfactory, others feel it could be improved.
        </li>

        <li>
            <strong className="text-gray-900">Overall Environment:</strong> Similar to equipment satisfaction, most responses fall in the 3-4 range, 
            suggesting that the gym environment is generally good but could be enhanced further.
        </li>
    </ul>

    <h3 className="text-lg font-medium text-green-600 mt-4">🔍 Key Takeaways:</h3>
    <p className="text-gray-700 leading-relaxed">
        -Ratings lean toward moderate to high satisfaction (3 and 4 being the most common).<br/>
        -Cleanliness has mixed feedback, with some lower ratings indicating areas for improvement.<br/>
        -A small number of 1 and 2 ratings suggest certain users are dissatisfied, pointing to specific concerns that need to be addressed.
    </p>
</div>

                    </div>
                    

                </>
            )}
        </div>
    );
}

export default Project;

