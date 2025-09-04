import { useState } from 'react';
import { CheckCircle, Home, Wifi, Shield, Headphones, Clock, ArrowLeft, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
const HomePackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const packages = [{
    id: 'starter',
    name: 'Home Wi-Fi',
    price: 'Ksh 1,000',
    speed: '5 Mbps',
    popular: false,
    features: ['5 Mbps download speed', 'Unlimited data usage', 'Connect up to 5 devices', 'Free router & installation', '24/7 customer support', 'Basic security features']
  }, {
    id: 'standard',
    name: 'Home Wi-Fi',
    price: 'Ksh 1,500',
    speed: '8 Mbps',
    popular: true,
    features: ['8 Mbps download speed', 'Unlimited data usage', 'Connect up to 10 devices', 'Free router & installation', 'Priority customer support', 'Advanced security features', 'Free Netflix for 3 months']
  }, {
    id: 'premium',
    name: 'Home Wi-Fi',
    price: 'Ksh 2,000',
    speed: '10 Mbps',
    popular: false,
    features: ['10 Mbps download speed', 'Unlimited data usage', 'Connect unlimited devices', 'Free premium router & installation', 'Priority customer support', 'Advanced security & parental controls', 'Free Netflix & YouTube Premium', 'Static IP address']
  }, {
    id: 'professional',
    name: 'Home Wi-Fi',
    price: 'Ksh 2,500',
    speed: '15 Mbps',
    popular: false,
    features: ['15 Mbps download speed', 'Unlimited data usage', 'Connect unlimited devices', 'Free premium router & installation', 'Priority customer support', 'Enterprise-grade security', 'Free streaming services bundle', 'Static IP address', '99.9% uptime guarantee']
  }, {
    id: 'business',
    name: 'Home Wi-Fi',
    price: 'Ksh 3,000',
    speed: '20 Mbps',
    popular: false,
    features: ['20 Mbps download speed', 'Unlimited data usage', 'Connect unlimited devices', 'Free premium router & installation', 'Dedicated customer support', 'Enterprise-grade security', 'Free streaming services bundle', 'Static IP address', '99.9% uptime guarantee', 'Priority bandwidth allocation']
  }, {
    id: 'enterprise',
    name: 'Home Wi-Fi',
    price: 'Ksh 3,500',
    speed: '25 Mbps',
    popular: false,
    features: ['25 Mbps download speed', 'Unlimited data usage', 'Connect unlimited devices', 'Free premium router & installation', 'Dedicated customer support', 'Enterprise-grade security', 'Free streaming services bundle', 'Static IP address', '99.9% uptime guarantee', 'Priority bandwidth allocation', 'Dedicated technical support']
  }, {
    id: 'ultra',
    name: 'Home Wi-Fi',
    price: 'Ksh 4,000',
    speed: '30 Mbps',
    popular: false,
    features: ['30 Mbps download speed', 'Unlimited data usage', 'Connect unlimited devices', 'Free premium router & installation', 'Dedicated customer support', 'Enterprise-grade security', 'Free streaming services bundle', 'Static IP address', '99.9% uptime guarantee', 'Priority bandwidth allocation', 'Dedicated technical support', 'Advanced QoS settings']
  }, {
    id: 'max',
    name: 'Home Wi-Fi',
    price: 'Ksh 5,000',
    speed: '40 Mbps',
    popular: false,
    features: ['40 Mbps download speed', 'Unlimited data usage', 'Connect unlimited devices', 'Free premium router & installation', 'Dedicated customer support', 'Enterprise-grade security', 'Free streaming services bundle', 'Static IP address', '99.9% uptime guarantee', 'Priority bandwidth allocation', 'Dedicated technical support', 'Advanced QoS settings', 'Fiber optic connection']
  }];
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
            <Home className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Home Internet Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Choose the perfect home internet plan for your family. Fast, reliable, and affordable 
            internet with unlimited data and free installation.
          </p>
          <div className="text-sm text-white/80">
            <span className="font-semibold">Installation Fee:</span> KES 3,000 (One-time payment)
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map(pkg => <Card key={pkg.id} className={`hover-scale cursor-pointer relative ${pkg.popular ? 'border-2 border-orange-500 shadow-lg' : ''} ${selectedPackage === pkg.id ? 'ring-2 ring-orange-500' : ''}`} onClick={() => setSelectedPackage(pkg.id)}>
                {pkg.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full">
                    POPULAR
                  </Badge>}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-orange-600">{pkg.speed}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {pkg.features.map((feature, index) => <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose KentCorp Home Internet?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Wifi className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Connection</h3>
              <p className="text-gray-600">99.9% uptime guarantee with redundant network infrastructure.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Network</h3>
              <p className="text-gray-600">Advanced security features and parental controls included.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Headphones className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Local customer support team available around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="kentcorp-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Connected?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of satisfied customers in Kutus and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8">
              Call Now: 0751507479
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:text-orange-600 rounded-full px-8 bg-inherit">
              Check Coverage
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
export default HomePackages;