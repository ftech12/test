

function Splash() {
  return (
    <div>
          <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/src/assets/icons/Logo.svg" // replace with actual logo path
          alt="Ascend Logo"
          className="mx-auto w-24 h-24"
        />
      </div>

      {/* Headline */}
      <div className="mb-4">
        <p className="text-lg text-gray-700">Your spiritual wellness journey begins here</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mt-2">
          Discover Your Inner Peace
        </h2>
      </div>

      {/* Features box */}
      <div className="bg-gray-50 border border-gray-200 shadow-md rounded-3xl p-6 w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <FeatureItem icon="/src/assets/icons/star.svg" title="8 Keys spiritual framework" />
        <FeatureItem icon="/src/assets/icons/spritual.svg" title="Expert spiritual coaching" />
        <FeatureItem icon="/src/assets/icons/ai.svg" title="AI-powered insights" />
        <FeatureItem icon="/src/assets/icons/personal.svg" title="Personal wellness tracking" />
      </div>

      {/* CTA Button */}
      <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-6 py-3 rounded-full mb-4">
        Begin Your Journey
      </button>

      {/* Footer Text */}
      <p className="text-xs text-gray-500">
        Connect with your authentic self and unlock your spiritual potential
      </p>
    </div>
    </div>
  )
}

function FeatureItem({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center space-x-3  p-3">
      <div className="text-lg bg-white p-2 rounded-full shadow-lg">
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
      <span className="text-gray-700 text-sm">{title}</span>
    </div>
  );
}

export default Splash