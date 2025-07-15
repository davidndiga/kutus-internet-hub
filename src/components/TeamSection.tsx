
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meet the Team</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our dedicated team of professionals committed to delivering exceptional internet services to the Kutus community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex-shrink-0 border-4 border-orange-500 flex items-center justify-center">
              <Users className="w-24 h-24 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">KENNEDY WAHOGO</h3>
              <p className="text-orange-400 font-semibold mb-4">Network Engineer KENTCORP</p>
              <p className="text-white/80 mb-6">
                Visionary leader with over 10 years of experience in telecommunications. Kennedy founded KentCorp 
                with the mission to bridge the digital divide in rural Kenya, bringing affordable and reliable 
                internet connectivity to underserved communities in Kirinyaga County.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex-shrink-0 border-4 border-blue-500 flex items-center justify-center">
              <Users className="w-24 h-24 text-white" />
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold text-white mb-2">DAVID NDIGA</h3>
              <p className="text-blue-400 font-semibold mb-4">I.C.T MANAGER KENTCORP</p>
              <p className="text-white/80 mb-6">
                Expert network engineer and IT specialist responsible for maintaining our robust infrastructure. 
                David ensures 99.9% uptime across all our services and leads our technical team in delivering 
                cutting-edge internet solutions to our customers.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex-shrink-0 border-4 border-green-500 flex items-center justify-center">
              <Users className="w-24 h-24 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">ANTONY MUCHAI</h3>
              <p className="text-green-400 font-semibold mb-4">ELECTRICAL ENGINEER KENTCORP</p>
              <p className="text-white/80 mb-6">
                Senior electrical engineer specializing in telecommunications infrastructure and power systems. 
                Antony oversees the installation and maintenance of our network equipment, ensuring reliable 
                power delivery and optimal signal strength across all our service areas.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex-shrink-0 border-4 border-purple-500 flex items-center justify-center">
              <Users className="w-24 h-24 text-white" />
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold text-white mb-2">BARAKA WAMBUGU</h3>
              <p className="text-purple-400 font-semibold mb-4">FIELD TECHNICIAN KENTCORP</p>
              <p className="text-white/80 mb-6">
                Experienced field technician responsible for on-site installations, maintenance, and customer 
                service. Baraka ensures seamless connectivity for our customers and provides technical support 
                across Kirinyaga County with dedication and expertise.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
