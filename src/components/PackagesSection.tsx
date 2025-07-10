
import { MapPin, Home, Building, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Plan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a variety of internet packages designed to meet your specific needs, 
            whether you're at home, running a business, or on the move.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hotspot Wi-Fi */}
          <Card className="hover-scale cursor-pointer relative">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-2xl">Hotspot Wi-Fi</CardTitle>
              <p className="text-gray-600">Stay connected on the go</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">KES 750</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Access to 15+ hotspot locations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Up to 5 Mbps download speed</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Connect up to 3 devices</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 customer support</span>
                </li>
              </ul>
              <Link to="/hotspot-packages">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                  View Plans
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Home Wi-Fi */}
          <Card className="hover-scale cursor-pointer relative border-2 border-orange-500">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full">
              POPULAR
            </Badge>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-2xl">Home Wi-Fi</CardTitle>
              <p className="text-gray-600">Perfect for families</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Ksh 1,000</span>
                <span className="text-gray-600">/month</span>
              </div>
              <div className="text-sm text-orange-600 font-semibold mb-4">
                KES 3,000 Installation Fee
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>From 5-40 Mbps download speed</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Unlimited data usage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Connect unlimited devices</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Free router & installation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Priority customer support</span>
                </li>
              </ul>
              <Link to="/home-packages">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                  View Plans
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Business Wi-Fi */}
          <Card className="hover-scale cursor-pointer relative">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-2xl">Business Wi-Fi</CardTitle>
              <p className="text-gray-600">Enterprise - grade solution</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Ksh 9,999</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>50 Mbps+ download speed</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Unlimited data usage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Programmable Router</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Enhanced security features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 dedicated support</span>
                </li>
              </ul>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
