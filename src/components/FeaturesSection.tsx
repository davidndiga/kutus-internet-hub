
import { Zap, Shield, Headphones, Wifi, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  return (
    <section id="features" className="kentcorp-gradient py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Kentcorp</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We provide more than just internet connectivity. Experience the Kentcorp difference 
            with our premium features and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur border-white/20 hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast Speeds</h3>
              <p className="text-white/80">
                Experience blazing-fast internet speeds with our state-of-the-art fiber optic 
                network infrastructure.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Advanced Security</h3>
              <p className="text-white/80">
                Stay protected with our built-in security features that safeguard your network 
                from threats and unauthorized access.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">24/7 Support</h3>
              <p className="text-white/80">
                Our dedicated support team is available around the clock to assist you 
                with any questions or technical issues.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Extensive Coverage</h3>
              <p className="text-white/80">
                With over 15 hotspot locations and expanding network coverage, stay 
                connected wherever you go in Kutus and beyond.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Reliable Uptime</h3>
              <p className="text-white/80">
                Enjoy a 99.9% uptime guarantee with our redundant network infrastructure 
                designed for maximum reliability.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">KSh</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Transparent Pricing</h3>
              <p className="text-white/80">
                No hidden fees or surprise charges. What you see is what you pay, with 
                flexible plans to suit your budget.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
