import './App.css';

function App() {
  return (
    <>
      {/* Header Section */}
      <div className="w-full shadow-lg rounded-xl px-6 py-8 my-5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400">
        <h1 className="text-white text-center text-4xl font-extrabold mb-6 tracking-wide drop-shadow-md">
          🎮 Mobile Games Interest Survey Amongst College Students
        </h1>
        
      </div>
      
      

      {/* Content Section :2*/}
      <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-blue-100 to-white shadow-2xl rounded-xl flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Section */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Age Distribution of Respondents</h2>
          <p className="text-gray-800 leading-relaxed">
            This survey was conducted among students in college to analyze the distribution of age groups 
            and their gaming frequency. This will helpus understand the age group we are dealing with to better adhere to their needs. Here are some key observations:
          </p>
          <ul className="list-disc list-inside text-gray-700 my-4 space-y-2">
            <li className="hover:text-blue-600 transition-colors">The majority of students who play games fall within the 18-20 age range.</li>
            <li className="hover:text-blue-600 transition-colors">The highest frequency is observed among 19-year-olds, followed by 20-year-olds.</li>
            <li className="hover:text-blue-600 transition-colors">There is a significant drop in gaming frequency after the age of 20.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 p-4">
          <img
            src="./AgeDis.jpeg"
            alt="Distribution of Age vs Gaming Frequency"
            className="w-full rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-125 hover:shadow-xl border-4 border-blue-500"
          />
        </div>
      </div>
      <br /><br />

      <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-blue-100 to-white shadow-2xl rounded-xl flex flex-col md:flex-row items-center gap-8">
         {/* Image Section */}
      <div className="md:w-1/2 p-4">
          <img
            src="./HaveYouPlayed.jpeg"
            alt="Distribution of Age vs Gaming Frequency"
            className="w-full rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-125 hover:shadow-xl border-4 border-blue-500"
          />
        </div>
        
        {/* Text Section */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Have you ever played Mobile Games? </h2>
          <p className="text-gray-800 leading-relaxed">
            This helps differentiate the kind of information to extract from a particular respondent. 94.6% of the respondents would be able to provide in-detail info on games, whereas the rest can answer general questions like the reason for not playing games or what would attract them to do so.
          </p>
          
        </div>

       
        
      </div>
      <br />
      <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-blue-100 to-white shadow-2xl rounded-xl flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Section */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Game Category</h2>
          <p className="text-gray-800 leading-relaxed">
            This survey was conducted among students in my college to analyze the distribution of age groups 
            and their gaming frequency. Here are some key observations:
          </p>
          <ul className="list-disc list-inside text-gray-700 my-4 space-y-2">
            <li className="hover:text-blue-600 transition-colors">The majority of students who play games fall within the 18-20 age range.</li>
            <li className="hover:text-blue-600 transition-colors">The highest frequency is observed among 19-year-olds, followed by 20-year-olds.</li>
            <li className="hover:text-blue-600 transition-colors">Very few students aged 21 and above engage in gaming.</li>
            <li className="hover:text-blue-600 transition-colors">There is a significant drop in gaming frequency after the age of 20.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 p-4">
          <img
            src="./GameCategory.jpeg"
            alt="Distribution of Age vs Gaming Frequency"
            className="w-full rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-125 hover:shadow-xl border-4 border-blue-500"
          />
        </div>
      </div>
      <br />
      <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-blue-100 to-white shadow-2xl rounded-xl flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="md:w-1/2 p-4">
          <img
            src="./ReasonForStoping.jpeg"
            alt="Distribution of Age vs Gaming Frequency"
            className="w-full rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-125 hover:shadow-xl border-4 border-blue-500"
          />
        </div>
        
        {/* Text Section */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Reason for stopping their favourite game</h2>
          <p className="text-gray-800 leading-relaxed">
            What are the reasons they stopped playing their favourite game?
          </p>
          <ul className="list-disc list-inside text-gray-700 my-4 space-y-2">
            <li className="hover:text-blue-600 transition-colors">Around 50% of the respondents stopped playing as they couldn't find time.</li>
            <li className="hover:text-blue-600 transition-colors">The rest however stopped playing due to some or the reason related to the game itself.</li>
            <li className="hover:text-blue-600 transition-colors">This gives knowledge regarding how crucial it is for a company to provide regular updates to their games that are well received by the audience. A feedback system is crucial.</li>
          </ul>
        </div>
      </div>
      <br />
      {/* Content Section :2*/}
      <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-blue-100 to-white shadow-2xl rounded-xl flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Section */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Willingness to spend money on a game</h2>
          <p className="text-gray-800 leading-relaxed">
          </p>
          <ul className="list-disc list-inside text-gray-700 my-4 space-y-2">
            <li className="hover:text-blue-600 transition-colors">The As expected, a good portion of the students want the games to be completely free, with no paywall whatsoever.</li>
            <li className="hover:text-blue-600 transition-colors">Interestingly, majority(around 50%) of he respondents are fine with in-app purchases as long as the game is free.</li>
            <li className="hover:text-blue-600 transition-colors">Advertisements are a big ditraction while playing games, and has therefore received almost the same out of votes as the people who would rather have the entire game paid.</li>
            <li className="hover:text-blue-600 transition-colors">The best strategy for revenue in a newly launched game, therefore, would be through in-app purchases.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 p-4">
          <img
            src="./ToPay.jpeg"
            alt="Distribution of Age vs Gaming Frequency"
            className="w-full rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-125 hover:shadow-xl border-4 border-blue-500"
          />
        </div>
      </div>
      <br />
      {/* Content Section :2*/}
      
      <br />
      <div class="max-w-3xl mx-auto p-8 bg-gradient-to-br from-blue-100 to-white shadow-2xl rounded-xl">
    <h2 class="text-3xl font-bold text-blue-700 mb-4">Gaming Frequency Among Students</h2>
    <p class="text-gray-800 leading-relaxed">
        The word cloud will help analyze which words are being used frequently when respondents talk about the qualities they envision in an ideal game. Through this we can try to implement these qualities in our game such that it majorly aligns with the interests of most of the respondents.
    </p>
    <div class="mt-6">
        <img src="WordCloud.jpeg" alt="Distribution of Age vs Gaming Frequency"
            class="w-full rounded-lg shadow-lg border-4 border-blue-500 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"/>
    </div>
</div>
<br />
 {/* Content Section :2*/}
 <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-blue-100 to-white shadow-2xl rounded-xl flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Section */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-4"> Do games help in removing stress ❓</h2>
          <p className="text-gray-800 leading-relaxed">
          </p>
          <ul className="list-disc list-inside text-gray-700 my-4 space-y-2">
            <li className="hover:text-blue-600 transition-colors">Majority of the respondents believe that mobile games help in releiving stress.</li>
            <li className="hover:text-blue-600 transition-colors">A major fraction prefer pc games rather than mobile games for entertainment.</li>
            <li className="hover:text-blue-600 transition-colors">Others find it a waste of time.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 p-4">
          <img
            src="./Stress.jpeg"
            alt="Distribution of Age vs Gaming Frequency"
            className="w-full rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-125 hover:shadow-xl border-4 border-blue-500"
          />
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white text-center py-4 mt-8 rounded-t-lg">
        <p className="text-lg">Made with ❤️ by <span className="font-semibold text-blue-400">Akshat</span></p>
      </footer>


    </>
  );
}

export default App;
