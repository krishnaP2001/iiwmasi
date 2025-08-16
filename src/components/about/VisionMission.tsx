import { Droplets, Target, Eye, Leaf, Users, Globe } from "lucide-react";

export default function VisionMissionComponent() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        {/* <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Droplets className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              SmartFlow Irrigation
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing agriculture through intelligent water management and sustainable farming practices
          </p>
        </div> */}

        {/* Vision and Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-colors duration-300">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create a world where every farm thrives through intelligent, sustainable water management that ensures food security while preserving our planet's precious water resources for future generations.
                </p>
                
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Global Impact</h4>
                      <p className="text-gray-600">Transforming agriculture worldwide through innovative irrigation solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Leaf className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Sustainability First</h4>
                      <p className="text-gray-600">Balancing productivity with environmental conservation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-green-100 rounded-2xl group-hover:bg-green-200 transition-colors duration-300">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower farmers with cutting-edge irrigation technology that maximizes crop yields while minimizing water waste, creating resilient agricultural communities that can adapt to climate challenges.
                </p>
                
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <Droplets className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Smart Water Management</h4>
                      <p className="text-gray-600">Precision irrigation systems that deliver water exactly when and where needed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Farmer Empowerment</h4>
                      <p className="text-gray-600">Providing tools and knowledge for sustainable farming success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Objectives Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Key Objectives
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Water Conservation",
                description: "Reduce water usage by 40% through smart irrigation technology",
                color: "blue"
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Yield Optimization",
                description: "Increase crop yields by 25% with precision water delivery",
                color: "green"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Farmer Support",
                description: "Train 10,000 farmers in sustainable irrigation practices",
                color: "purple"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Climate Resilience",
                description: "Build adaptive systems for changing weather patterns",
                color: "orange"
              }
            ].map((objective, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-2xl mb-4 bg-${objective.color}-100 text-${objective.color}-600 group-hover:bg-${objective.color}-200 transition-colors duration-300`}>
                  {objective.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {objective.title}
                </h4>
                <p className="text-gray-600">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join the Irrigation Revolution
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Together, we can build a sustainable future for agriculture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Learn More
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}