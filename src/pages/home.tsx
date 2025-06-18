
import { FaClipboardList, FaEye, FaHandshake , FaShieldAlt, FaClock , FaBalanceScale, FaHeart, FaClipboard, FaHeartbeat, FaVideo, FaStar, FaRobot, FaBookOpen } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
function Home() {

  const keys = [
     {
          title: "Belief",
          icon: <FaStar className="text-white" />,
        },
        {
          title: "Gratitude",
          icon: <FaHeart className="text-white" />,

        },
        {
          title: "Perspective",
          icon: <FaEye className="text-white" />,

        },
        {
          title: "Compassion",
          icon: <FaHandshake  className="text-white" />,
        },
        {
          title: "Resilience",
          icon: <FaShieldAlt className="text-white" />,
        },
        {
          title: "Time",
          icon: <FaClock className="text-white" />,
        },
        {
          title: "Purpose",
          icon: <GoGoal  className="text-white" />,
        },
        {
          title: "Balance",
          icon: <FaBalanceScale className="text-white" />,
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
  const infoCards = [
  {
    heading: "Expert Assignments",
    title: "Expert Assessment",
    desc: "Discover your spiritual strengths & growth area.",
  },
  {
    heading: "Export Spiritual Coaching",
    title: "Export Spiritual Coaching",
    desc: "Unlock deep insights into your spiritual strengths and uncover areas for growth and development.",
  },
  {
    heading: "Personal Wellness Tracking",
    title: "Personal Wellness Tracking",
    desc: "Track your spiritual progress and wellness with intuitive tools designed to help you stay on course.",
  },
  {
    heading: "Keys to Spiritual Transformation",
    title: "8 Keys to Spiritual Transformation",
    desc: "Explore the essential pillars of spiritual growth to cultivate a more balanced and fulfilling life.",
  },
];

  return (
    <>
    <div className="bg-white text-gray-800 font-sans container mx-auto">
      <div className=" flex  w-full flex-col lg:flex-row md:flex-row  px-4 bg-gray-50">
     <div className="text-center flex-1 py-12 flex flex-col container  items-center justify-center ">
        <h1 className="text-3xl font-bold mb-2">Your spiritual wellness journey begins here</h1>
        <p className="text-gray-600 mb-4">Connect with your authentic self and find inner peace through AI-powered insights and personalized guidance.</p>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-md">Start</button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/src/assets/Frame1.svg" 
          alt="Ascend Logo"
          className="mx-auto "
        />
      </div>
      </div>
 

      <section className="text-center bg-purple-700 text-white py-9">
        <h2 className="text-xl font-semibold mb-2">Keys to Spiritual Transformation</h2>
        <p className="mb-6">Explore the essential pillars of spiritual growth to cultivate a more balanced and fulfilling life.</p>
        <div className="flex flex-wrap justify-center gap-16">
          {keys.map((key, index) => (
            <div className="flex flex-col items-center justify-center">
          <div key={index}  className="mb-1 w-12 h-[3.2rem] flex items-center justify-center bg-no-repeat bg-center bg-contain"
                      style={{
                        backgroundImage:
                          "url('/src/assets/icons/Rectangle.svg')",
                      }}>
                         <div className="w-10 h-10 flex items-center justify-center text-2xl">
                        {key.icon}
                      </div>
             
              </div>
               {key.title}
            </div>
            
          ))}
        </div>
      </section>

 <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
  {infoCards.map((card, idx) => (
    <div
      key={idx}
      className="flex items-start flex-col gap-4 bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
    >
      <div>
         <h3 className="font-bold text-md">{card.heading}</h3>
      </div>
      <div className="flex flex-row items-start gap-4 justify-center align-center">
        <div>
       <div className="bg-purple-600 text-white p-4 mt-4 rounded-full text-lg">
        <FaClipboard />
      </div>
        </div>
       
      <div>
        <h3 className="font-bold text-md">{card.heading}</h3>
        <p className="font-semibold text-sm mt-1">{card.title}</p>
        <p className="text-sm text-gray-600 mt-1">{card.desc}</p>
      </div> 

      </div>
      {/* <div className="bg-purple-600 text-white p-3 rounded-full text-lg">
        <FaClipboard />
      </div>
      <div>
        <h3 className="font-bold text-md">{card.heading}</h3>
        <p className="font-semibold text-sm mt-1">{card.title}</p>
        <p className="text-sm text-gray-600 mt-1">{card.desc}</p>
      </div> */}
    </div>
  ))}
</section>


      <section className="p-6 flex flex-col lg:flex-row md:flex-row items-center">
        <div className="flex-1 flex items-center justify-center">
          <img
          src="/src/assets/Frame2.svg" 
          alt="Ascend Logo"
          className="mx-auto "
        />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 flex-1 bg-gray-300 p-6 rounded-3xl shadow-lg">
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
    </div>
   
    </>
  )
}



export default Home