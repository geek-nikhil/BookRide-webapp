import { motion, useAnimation } from 'framer-motion';
import { Plane, Briefcase, Car, Clock, Heart, Calendar, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('standard');
  const [activeTripType, setActiveTripType] = useState('outstation');
  const [duration, setDuration] = useState(1);
  const [distance, setDistance] = useState(300);
  const [overnight, setOvernight] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -5, 0],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
    });
  }, [controls]);

  const pricingPlans = {
    standard: [
      { 
        title: "Round Trip", 
        price: " From ₹450/ 4hours", 
        icon: <Clock className="h-6 w-6" />,
        details: ["City limits", "Daytime service", "Includes waiting time"],
        bookingLink: "https://www.driversoncall.co/#/booking"
      },
      { 
        title: "Out Station packages", 
        price: "₹1200+", 
        icon: <Car className="h-6 w-6" />,
        details: ["₹1200 for 12 hours(up to 300km)", "₹1999 for 1 day (up to 500km)"],
        bookingLink: "https://www.driversoncall.co/#/booking"
      },
      { 
        title: "One Way Pick up/drop",  
        price: "₹350/hour", 
        icon: <ArrowRight className="h-6 w-6" />,
        details: ["Single destination", "No return trip", "Point-to-point"],
        bookingLink: "https://www.driversoncall.co/#/booking"
      },
      { 
        title: "Airport Transfer", 
        price: "From ₹550", 
        icon: <Plane className="h-6 w-6" />,
        details: ["₹550 on Sundays", "All terminals", "Flight tracking"],
        bookingLink: "https://www.driversoncall.co/#/contact"
      }
    ],
    additional: [
      { 
        title: "Extra Time", 
        price: "₹25/15min", 
        icon: <Clock className="h-6 w-6" />,
        details: ["After initial period", "Charged in 15min blocks", "Round up to nearest 15min"],
        bookingLink: "https://www.driversoncall.co/#/booking"
      },
      { 
        title: "Late Night/Early Morning", 
        price: "₹50-100", 
        icon: <Heart className="h-6 w-6" />,
        details: ["₹50 after 9pm", "₹100 after 11pm", "₹100 before 5:30am"],
        bookingLink: "https://www.driversoncall.co/#/booking"
      },
      { 
        title: "Different Locations", 
        price: "₹100", 
        icon: <Car className="h-6 w-6" />,
        details: ["Pickup ≠ Dropoff", "Additional charge", "Within city limits"],
        bookingLink: "https://www.driversoncall.co/#/contact"
      }
    ]
  };

  const services = [
    {
      icon: <Plane className="h-12 w-12" />,
      title: "Airport Transfers",
      description: "Reliable and comfortable airport pickup and drop-off services available 24/7.",
      pricing: "From ₹550",
      detailsLink: "https://www.driversoncall.co/#/contact",
      bookingLink: "https://www.driversoncall.co/#/contact"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Corporate Travel",
      description: "Professional transportation solutions for business executives and corporate events.",
      pricing: "Custom packages available",
      detailsLink: "https://www.driversoncall.co/#/contact",
      bookingLink: "https://www.driversoncall.co/#/contact"
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "Event Transportation",
      description: "Conferences, corporate meetings, special events. Valet parking for a premium experience.",
      pricing: "Custom packages available",
      detailsLink: "https://www.driversoncall.co/#/contact",
      bookingLink: "https://www.driversoncall.co/#/contact"
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Hourly Hire",
      description: "Flexible hourly booking options for your convenience.",
      pricing: "From ₹350/2hrs",
      detailsLink: "https://www.driversoncall.co/#/booking",
      bookingLink: "https://www.driversoncall.co/#/booking"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Monthly Hire",
      description: "Perfect for businesses, extended trips, or temporary replacements, 24/7 support.",
      pricing: "Custom quotes available",
      detailsLink: "https://www.driversoncall.co/#/contact",
      bookingLink: "https://www.driversoncall.co/#/contact"
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Out Station packages",
      description: "Explore the city with our experienced chauffeurs.",
      pricing: "From ₹450/4hrs",
      detailsLink: "https://www.driversoncall.co/#/booking",
      bookingLink: "https://www.driversoncall.co/#/booking"
    }
  ];

  // Calculation functions
  const calculateBasePrice = () => {
    if (activeTripType === 'one-way') {
      if (duration <= 2) return 350;
      if (duration <= 4) return 650;
      return 650 + (duration - 4) * 125;
    } else if (activeTripType === 'round-trip') {
      if (duration <= 4) return 450;
      if (duration <= 6) return 650;
      if (duration <= 8) return 850;
      if (duration <= 10) return 1050;
      return 1050 + (duration - 10) * 125;
    } else { // outstation
      if (duration === 1) return 1200;
      return 1200 * duration;
    }
  };

  const calculateExtraDistance = () => {
    const includedKm = activeTripType === 'outstation' ? 300 * duration : 19;
    return distance > includedKm ? Math.round((distance - includedKm) * 7.5) : 0;
  };

  const calculateTotalPrice = () => {
    const base = calculateBasePrice();
    const extraDistance = calculateExtraDistance();
    const nightCharge = overnight ? 500 : 0;
    return base + extraDistance + nightCharge;
  };

  return (
    <>
   

      <div className="overflow-x-hidden bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="text-amber-400">Services</span> & Pricing
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium chauffeur services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions for all your transportation needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                  className="bg-white p-8 rounded-xl border border-gray-200 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
                  <div className="text-amber-600 mb-6 group-hover:text-amber-700 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-gray-900">{service.pricing}</span>
                    <Link
                      to={service.detailsLink}
                      className="text-amber-600 font-medium hover:text-amber-700 flex items-center"
                    >
                      Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  <Link
                    to={service.bookingLink}
                    className="w-full bg-amber-600 text-white px-4 py-2 rounded-md text-center hover:bg-amber-700 transition-colors block"
                  >
                    Book Now
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Pricing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Clear breakdown of all service charges
              </p>
            </motion.div>

            {/* Pricing Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg bg-white p-1 shadow-sm border border-gray-200">
                {[
                  { id: 'standard', label: 'Standard Rates' },
                  { id: 'additional', label: 'Additional Charges' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-amber-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingPlans[activeTab].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        {plan.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-2">{plan.title}</h3>
                    <motion.p 
                      animate={controls}
                      className="text-3xl font-bold text-center text-amber-600 mb-6"
                    >
                      {plan.price}
                    </motion.p>
                    <ul className="space-y-3">
                      {plan.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <Link
                      to={plan.bookingLink}
                      className="w-full bg-amber-600 text-white px-4 py-2 rounded-md text-center hover:bg-amber-700 transition-colors block"
                    >
                      Book Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Book Your Driver?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get instant pricing or speak with our service team
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="https://www.driversoncall.co/#/booking"
                    className="inline-block bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-600 transition-colors"
                  >
                    Get Instant Quote
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="https://www.driversoncall.co/#/contact"
                    className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    Call for Assistance
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;