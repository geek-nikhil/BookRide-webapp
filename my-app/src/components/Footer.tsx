import { Link } from 'react-router-dom';
import { Instagram, XIcon, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Drivers On Call</h3>
            <p className="text-gray-400 mb-4">
              Professional chauffeur services for all your transportation needs.
            </p>
            <div className="space-y-2">
              <a href="mailto:handsforneeds27@gmail.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                contact@driversoncall.co
              </a>
              <a href="tel:080-62179711" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                080-62179711
              </a>
              <p className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Bengaluru, Karnataka

              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">Our Services</Link>
              </li>
              <li>
                <Link to="/fleet" className="text-gray-400 hover:text-white">Our Fleet</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-white">Book Now</Link>
              </li>
              <li>
                <Link to="/Terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/Privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/Refund" className="text-gray-400 hover:text-white">Refund Policy</Link>
              </li>
              
              
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Airport Transfers</li>
              <li className="text-gray-400">Corporate Travel</li>
              <li className="text-gray-400">Event Transportation</li>
              <li className="text-gray-400">Hourly Hire</li>
              <li className="text-gray-400">Out Station packages</li>
            </ul>
            
          </div>
          {/* Services */}
          

          {/* Social Media */}
          <div>
          <h3 className="text-xl font-bold mb-4">For Business</h3>
            <ul className="space-y-2">
              <li className="text-gray-400"> <a href="https://docs.google.com/forms/d/1ekSVyx-GuALV82-TgHCDxzAJF3Dvn22asCtr0NU2spk/viewform">Hire Drivers For B2B</a></li>
             <li className="text-gray-400"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfkYdLGfS9pzbf0FakOjcPaG9T97OUlKK7cB_KCyC3PUfM8sA/viewform?pli=1">Join as Driver Partner</a></li>
              
            </ul>
            <ul>
            <li>---------------------</li></ul>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/driversoncall1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://x.com/Driversoncallco?t=s432GVtQCMlQd9SuE5WdMw&s=09" className="text-gray-400 hover:text-white">
                <XIcon className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/share/1Ft9XL9Znk/" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/driversoncall/" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} <strong>DriversOnCall</strong> — A service by <strong><a href="https://handsforneeds.com" target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline">Hands For Needs Pvt. Ltd.</a></strong> All rights reserved.</p>
          <p>
            Designed and developed by{" "}
            <a
              href="https://amargenix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Amargenix Solutions
            </a>
          </p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;