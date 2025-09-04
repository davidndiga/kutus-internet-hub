import { useState } from 'react';
import { CheckCircle, MapPin, Wifi, Clock, Users, ArrowLeft, Phone, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
const HotspotPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const packages = [{
    id: 'hourly-1',
    name: '1 Hour',
    price: 'Ksh 10',
    duration: '1 Hour',
    popular: false,
    features: ['1 hour unlimited access', 'Up to 7 Mbps speed', 'Connect 1 device', 'All hotspot locations', 'Basic support']
  }, {
    id: 'hourly-3',
    name: '3 Hours',
    price: 'Ksh 20',
    duration: '3 Hours',
    popular: false,
    features: ['3 hours unlimited access', 'Up to 7 Mbps speed', 'Connect 2 devices', 'All hotspot locations', 'Basic support']
  }, {
    id: 'hourly-6',
    name: '6 Hours',
    price: 'Ksh 30',
    duration: '6 Hours',
    popular: false,
    features: ['6 hours unlimited access', 'Up to 7 Mbps speed', 'Connect 2 devices', 'All hotspot locations', 'Basic support']
  }, {
    id: 'hourly-12',
    name: '12 Hours',
    price: 'Ksh 40',
    duration: '12 Hours',
    popular: false,
    features: ['12 hours unlimited access', 'Up to 7 Mbps speed', 'Connect 2 devices', 'All hotspot locations', 'Priority support']
  }, {
    id: 'daily',
    name: 'Daily',
    price: 'Ksh 50',
    duration: '24 Hours',
    popular: true,
    features: ['24 hours unlimited access', 'Up to 7 Mbps speed', 'Connect 3 devices', 'All hotspot locations', 'Priority support']
  }, {
    id: 'weekly',
    name: 'Weekly',
    price: 'Ksh 250',
    duration: '7 Days',
    popular: false,
    features: ['7 days unlimited access', 'Up to 7 Mbps speed', 'Connect 3 devices', 'All hotspot locations', 'Priority support', '50% savings vs daily']
  }, {
    id: 'bi-weekly',
    name: '2 Weeks',
    price: 'Ksh 400',
    duration: '14 Days',
    popular: false,
    features: ['14 days unlimited access', 'Up to 7 Mbps speed', 'Connect 4 devices', 'All hotspot locations', 'Priority support', 'Mobile app access']
  }, {
    id: 'monthly',
    name: 'Monthly',
    price: 'Ksh 750',
    duration: '30 Days',
    popular: false,
    features: ['30 days unlimited access', 'Up to 7 Mbps speed', 'Connect 5 devices', 'All hotspot locations', 'Priority support', 'Mobile app access', '50% savings vs daily']
  }, {
    id: 'student',
    name: 'Student Package',
    price: 'Ksh 1,500',
    duration: '30 Days',
    popular: false,
    features: ['30 days unlimited access', 'Up to 10 Mbps speed', 'Connect 3 devices', 'All hotspot locations', 'Priority support', 'Educational content priority', 'Student ID required']
  }];
  const hotspotLocations = ['Metro Place', 'Kutus Old Market', 'Kirinyaga University Campus', 'Kirinyaga University Hostels', 'Kutus Main Stage', 'Dick\'s Pub', 'Badilisha', 'Kanjata', 'Mzalendo Annex & Pub', 'Kutus Market', 'Kanjarara' , 'Ngomongo', 'Gitwe'];
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-blue-600 hover:text-blue-700">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-medium">Back to Home</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-blue-600">KentCorp</h1>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full">
              Get Connected
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="kentcorp-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hotspot Wi-Fi Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Stay connected on the go with our extensive network of hotspots across Kutus 
            and Kirinyaga County. Perfect for students, travelers, and mobile professionals.
          </p>
          <div className="text-sm text-white/90 bg-inherit">
            <span className="font-semibold">15+ Locations</span> across Kirinyaga County
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Hotspot Plan</h2>
            <p className="text-lg text-gray-600">Flexible plans to suit your mobile internet needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {packages.map(pkg => <Card key={pkg.id} className={`hover-scale cursor-pointer relative ${pkg.popular ? 'border-2 border-orange-500 shadow-lg' : ''} ${selectedPackage === pkg.id ? 'ring-2 ring-orange-500' : ''}`} onClick={() => setSelectedPackage(pkg.id)}>
                {pkg.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full">
                    POPULAR
                  </Badge>}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-lg font-semibold text-orange-600">{pkg.duration}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {pkg.features.map((feature, index) => <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full font-extrabold text-lg">
                    Buy Now
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Hotspot Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hotspot Locations</h2>
            <p className="text-lg text-gray-600">Connect at any of our 15+ hotspot locations across Kutus</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hotspotLocations.map((location, index) => <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                <span className="text-gray-800">{location}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Connect</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Scan and Select</h3>
              <p className="text-gray-600">Scan to find the network named "KENTCORP HOTSPOT" select it.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Tap To Make Payment and Sign In</h3>
              <p className="text-gray-600">Click on the desired package, enter your mobile MPESA, and enter your MPESA PIN.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Wifi className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Connect & Enjoy</h3>
              <p className="text-gray-600">After completing your purchase, keep an eye on your inbox for a CONFIRMATION MESSEGE.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="kentcorp-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Stay Connected?</h2>
          <p className="text-xl text-white/90 mb-8">
            Get instant access to high-speed internet at any of our hotspot locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8">
              Buy Hotspot Package
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 rounded-full px-8">
              Find Locations
            </Button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg" onClick={() => window.open('https://wa.me/254751507479', '_blank')}>
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    </div>;
};
export default HotspotPackages;