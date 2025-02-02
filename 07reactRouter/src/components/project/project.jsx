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
    const [observations, setObservations] = useState("");
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
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4caf50", "#ff9800"],
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
            <h1 className="text-3xl">Gym Survey - IIT Bhilai</h1>
            <p>Data fetched and visualized below:</p>

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
                        <div className="mt-5 p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-md">
                            <strong className="text-lg text-gray-800 font-bold">Observations:</strong>
                            <p className="mt-3 text-base text-gray-700 leading-relaxed">
                                Based on the data, it appears that second-year students visit the gym in higher numbers compared to their first-year counterparts.
                                This suggests that the gym is gaining popularity among students in their first two years.
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
                        <div className="mt-5 p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-md">
                            <strong className="text-lg text-gray-800 font-bold">Observations:</strong>
                            <p className="mt-3 text-base text-gray-700 leading-relaxed">
                                Most of the people go to gym more than 4 days a week.
                            </p>
                        </div>
                    </div>
                    <div className="my-8">
                        {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">Preferred Gym Timings</h3> */}
                        <Pie data={charts.timeCount} options={{
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: '3.Preferred Gym Timings', // Chart title
                                    font: {
                                        size: 18,
                                        weight: 'bold',
                                    },
                                    color: "#333",
                                },
                                tooltip: {
                                    callbacks: {
                                        label: (tooltipItem) => {
                                            return `${tooltipItem.label}: ${tooltipItem.raw} visits (${((tooltipItem.raw / totalTimeCount) * 100).toFixed(1)}%)`;
                                        },
                                    },
                                },
                            },
                        }} />
                        <div className="mt-5 p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-md">
                            <strong className="text-lg text-gray-800 font-bold">Observations:</strong>
                            <p className="mt-3 text-base text-gray-700 leading-relaxed">
                                Most of the people prefer to go to the gym in the morning time.
                                But the total percentage has not much difference
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
                                        color: "#333",
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
                    </div>
                    

                </>
            )}
        </div>
    );
}

export default Project;
