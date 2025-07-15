import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Star, CheckCircle, Car, Users, Calendar, Phone, MapPin, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Fleet = () => {
  const services = [
    {
      icon: <Car className="h-6 w-6" />,
      title: "Airport Transfers",
      description: "Reliable point-to-point transport to and from airports"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Corporate Chauffeur",
      description: "Professional drivers for business meetings and events"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Long-Distance Travel",
      description: "Comfortable journeys between cities or states"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Event Transportation",
      description: "Special occasion services for weddings and parties"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hourly Rental",
      description: "Flexible local trips and errand running"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Emergency Bookings",
      description: "Last-minute transportation solutions"
    }
  ];

  const testimonials = [
    {
      quote: "The driver was punctual and extremely professional. Made my business trip stress-free!",
      author: "Amaresh Muddebihal., Corporate Client"
    },
    {
      quote: "Used their airport transfer service multiple times - always reliable.",
      author: "Priya M., Frequent Traveler"
    }
  ];

  const faqs = [
    {
      question: "How do I book a driver?",
      answer: "Book instantly through our website or mobile app in just 3 taps."
    },
    {
      question: "Are the drivers insured?",
      answer: "Yes, all our professional drivers carry comprehensive insurance."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Driver Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced, reliable drivers ready for any transportation need
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="text-red-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Our Drivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <ShieldCheck className="h-10 w-10 mx-auto text-red-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Rigorous Vetting</h3>
              <p className="text-gray-600">Background checks, license verification, and 4.8+ minimum rating</p>
            </div>
            <div className="text-center">
              <Star className="h-10 w-10 mx-auto text-red-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">5+ Years Experience</h3>
              <p className="text-gray-600">Average industry experience of our professional drivers</p>
            </div>
            <div className="text-center">
              <Clock className="h-10 w-10 mx-auto text-red-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Punctuality Guarantee</h3>
              <p className="text-gray-600">95% on-time arrival rate with real-time tracking</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="h-12 w-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Book</h3>
              <p className="text-gray-600">Select service type and time via app or website</p>
            </div>
            <div className="text-center p-4">
              <div className="h-12 w-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Match</h3>
              <p className="text-gray-600">We assign the perfect driver for your needs</p>
            </div>
            <div className="text-center p-4">
              <div className="h-12 w-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enjoy</h3>
              <p className="text-gray-600">Your professional driver arrives ready to serve</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CreditCard className="h-6 w-6 mr-2 text-red-600" />
                Payment Options
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Competitive hourly/distance rates
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Online payments (cards/UPI) or cash
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Corporate billing available
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
              <p className="text-gray-600 mb-2">
                Currently serving: Bangalore, Karnataka
              </p>
              <p className="text-gray-600">
                24/7 availability with advance booking
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Customer Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-medium text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Book Your Driver?</h2>
          <Link
            to="/booking"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fleet;