import {
  FaStar, // Belief
  FaHeart, // Gratitude
  FaEye, // Perspective
  FaSmile, // Compassion
  FaShieldAlt, // Resilience
  FaClock, // Time
  FaBullseye, // Purpose
  FaBalanceScale,
  FaClipboardList,// Balance
  FaHeartbeat,
  FaVideo,
  FaRobot,
  FaBookOpen,

} from "react-icons/fa";
import { FaWandMagicSparkles } from 'react-icons/fa6';


function Dashboard() {
  const soulprintLevel = 5;

  const keys = [
    {
      title: "Belief",
      icon: <FaStar className="text-white" />,
      bg: "bg-[#882ADF]",
    },
    {
      title: "Gratitude",
      icon: <FaHeart className="text-white" />,
      bg: "bg-[#DF2A60]",
    },
    {
      title: "Perspective",
      icon: <FaEye className="text-white" />,
      bg: "bg-[#04689A]",
    },
    {
      title: "Compassion",
      icon: <FaSmile className="text-white" />,
      bg: "bg-[#46B8FF]",
    },
    {
      title: "Resilience",
      icon: <FaShieldAlt className="text-white" />,
      bg: "bg-[#46B8FF]",
    },
    {
      title: "Time",
      icon: <FaClock className="text-white" />,
      bg: "bg-[#538322]",
    },
    {
      title: "Purpose",
      icon: <FaBullseye className="text-white" />,
      bg: "bg-[#DF2A60]",
    },
    {
      title: "Balance",
      icon: <FaBalanceScale className="text-white" />,
      bg: "bg-[#04689A]",
    },
  ];

  const features = [
    { icon: FaClipboardList, title: "Journal", subtitle: "Daily reflection" },
    { icon: FaHeartbeat, title: "Biofeedback", subtitle: "HRV & sleep" },
    { icon: FaVideo, title: "Live Coaching", subtitle: "Video guidance" },
    { icon: FaStar, title: "Harmonic Self", subtitle: "Biofeedback sounds" },
    { icon: FaRobot, title: "Intuitive AI", subtitle: "Smart guidance" },
    { icon: FaBookOpen, title: "Journey Story", subtitle: "Progress tale" },
  ];
  return (
    <div className="p-0 m-0" >
      <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-lg px-6 py-12 flex flex-col md:flex-row items-center justify-between text-white shadow-md">
        {/* Left Content */}
        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <h2 className="text-3xl font-semibold">Good Morning, Mohit</h2>
          <p className="text-sm mb-4">
            Today is a perfect day for inner growth
          </p>

          <div className="mt-4">
            <p className="font-semibold mb-1 text-xl">Your SoulPrint™ Today</p>
            <div className="flex items-center gap-2 bg-white  rounded-lg pr-2">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-lg text-sm">
                Balanced
              </span>
              <div className="flex gap-[2px] bg-white p-1 rounded-full">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-[2px] ${i < soulprintLevel ? "bg-orange-400" : "bg-gray-200"
                      }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex items-center justify-center mt-6 md:mt-0">
          <img
            src="/src/assets/Frame1.svg"
            alt="Meditation"
            className="w-48 md:w-64 mt-6 md:mt-0"
          />
        </div>
      </div>

      <div className="container">
        <div className="p-6  mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">
            The 8 Keys to Spiritual Transformation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keys.map((key, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg flex flex-col items-start text-left"
              >
                <div className="flex flex-row justify-between w-full">
                  <h3 className="text-md font-semibold mt-4 ms-4">
                    {key.title}
                  </h3>

                  <div className="relative w-20 h-20 self-end">
                    <div
                      className={`w-full h-full rounded-tr-xl rounded-br-xl rounded-bl-xl ${key.bg}`}
                    ></div>

                    <div
                      className="absolute top-6 -left-5 w-12 h-[3.2rem] flex items-center justify-center bg-no-repeat bg-center bg-contain"
                      style={{
                        backgroundImage:
                          "url('/src/assets/icons/Rectangle.svg')",
                      }}
                    >
                      <div className="w-10 h-10 flex items-center justify-center text-2xl">
                        {key.icon}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-semibold mt-2 text-gray-600 mx-3 my-2">
                  The Foundation
                </p>
                <p className="text-xs text-gray-500 mt-1 mx-3 my-2">
                  Shift from doubt to trust — in yourself, your growth, your
                  future.
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white border rounded-lg shadow p-5 mt-4">
            {/* Top heading */}
            <div className="flex flex-wrap justify-between items-center mb-4 ">
              <h2 className="text-lg font-semibold text-gray-800">Today's Recommended Ritual</h2>
              <span className="text-sm font-semibold text-gray-700">3 Min</span>
            </div>

            {/* Card content */}
            <div className="flex flex-wrap justify-between items-center">
              {/* Left content */}
              <div className="flex flex-wrap items-start gap-4">
                <div className="w-10 h-10 bg-[#882ADF] rounded-full flex items-center justify-center">
                  <FaStar className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 flex items-start" >Time Mastery Meditation</h3>
                  <p className="text-sm text-gray-500">Shape your relationship with time and meaning</p>
                </div>
              </div>

              {/* Right button */}
              <button className="px-4 py-1 text-sm font-medium text-white rounded bg-[#882ADF]">
                Start
              </button>
            </div>
          </div>

          <section className="p-6 flex flex-col lg:flex-row md:flex-row items-center">
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/src/assets/Frame2.svg" // replace with actual logo path
                alt="Ascend Logo"
                className="mx-auto "
              />
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 bg-gray-300 p-6 rounded-3xl shadow-lg">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 shadow-md flex flex-col items-center text-center">
                  <div className="bg-yellow-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl mb-3">
                    <feature.icon />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800">{feature.title}</h4>
                  <p className="text-xs text-gray-500">{feature.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap gap-4">
            {/* Card 1  */}
            <div className="flex flex-col justify-between bg-[#008D84] text-white rounded-xl p-4 flex-1  relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <FaStar className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">8 Keys Assessment</h3>
                  <p className="text-xs text-white opacity-80">Discover your spiritual strengths & growth areas</p>
                </div>
              </div>
              <button className="absolute -bottom-2 right-3 bg-[#FFA600] text-white text-xs font-semibold px-3 py-1 rounded">
                Start
              </button>
            </div>

            {/* Card 2  */}
            <div className="flex flex-col justify-between bg-[#882ADF] text-white rounded-xl flex-1 p-4 relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <FaWandMagicSparkles className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AI Spiritual Insights</h3>
                  <p className="text-xs text-white opacity-80">Deep analysis & personalized guidance</p>
                </div>
              </div>
              <button className="absolute -bottom-2 right-3 bg-[#FFA600] text-white text-xs font-semibold px-3 py-1 rounded">
                Start
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
