
import { motion, useAnimation } from 'framer-motion';
import { ChevronRight, Shield, Clock, Award, Car, Phone, Star, Check, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
    });
  }, [controls]);

  return (

    <>
   
    
    <div className="overflow-x-hidden">
      {/* Hero Section with professional driver background */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/driver.jpeg")',
            backgroundAttachment: 'fixed',
            willChange: 'transform'
          }}
        />
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            {/* Main text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                On-Demand <span className="text-blue-400">Driver Service</span> for Your Vehicle
              </h1>
                <p className="text-xl md:text-2xl mb-8 font-light">
                  Book professional drivers in just a few clicks.
                </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Book a Driver
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                
                  <a 
                            href="tel:080-62179711" 
                            className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
                          >
                            <Phone className="h-5 w-5" />
                            Call Now 
                          </a>
                
              </div>
            </motion.div>
      
            {/* Floating Driver Badges */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute z-10 bg-white rounded-full shadow-sm border border-gray-200 flex items-center px-3 py-1.5"
                style={{
                  right: `${Math.random() * 30 + 5}%`,
                  top: `${Math.random() * 40 + 30}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: Math.random() * 6 + 6,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-blue-500 rounded-full p-1.5 mr-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700">Driver #{i+1000}</span>
              </motion.div>
            ))}
            
            {/* Floating Stats (Right Side) */}
            <motion.div 
              className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
                <div className="flex flex-col gap-6">
                  {[
                    { icon: "check", value: "98%", label: "Satisfaction", color: "bg-green-500" },
                    { icon: "clock", value: "24/7", label: "Availability", color: "bg-blue-500" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.7 + i * 0.2 }}
                    >
                      <div className={`${stat.color} rounded-full p-2 mr-4`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                          {stat.icon === "check" ? (
                            <path d="M9 12L11 14L15 10M12 3C13.1819 3 14.3522 3.23279 15.4442 3.68508C16.5361 4.13738 17.5282 4.80031 18.364 5.63604C19.1997 6.47177 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3Z" />
                          ) : (
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                          )}
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-gray-500 text-sm">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
   

  
 
  
  
  </section>
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Smart City Driver Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get a professional driver in just 3 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="h-12 w-12 text-blue-600 mb-4" />,
                title: "1. Book Through web/call",
                description: "Request a driver instantly through our call or website"
              },
              {
                icon: <Car className="h-12 w-12 text-blue-600 mb-4" />,
                title: "2. Driver Arrives",
                description: "Our verified professional arrives at your location"
              },
              {
                icon: <Check className="h-12 w-12 text-blue-600 mb-4" />,
                title: "3. Enjoy Your Ride",
                description: "Sit back while our driver takes you safely to your destination"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="flex justify-center">
                  <div className="bg-blue-100 p-4 rounded-full">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 mt-6">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


            {/* Why Choose Us Section */}
            <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What makes our driver service stand out
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-blue-600 mb-4" />,
                title: "Verified Professionals",
                description: "All drivers undergo rigorous background checks and training"
              },
              {
                icon: <Clock className="h-12 w-12 text-blue-600 mb-4" />,
                title: "24/7 Availability",
                description: "Service available round the clock for your convenience"
              },
              {
                icon: <Award className="h-12 w-12 text-blue-600 mb-4" />,
                title: "5+ Years Experience",
                description: "Our drivers have extensive experience in professional driving"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="flex justify-center">
                  <div className="bg-blue-100 p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 mt-6">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "10,000+", label: "Trips Completed", icon: <Car className="h-8 w-8 mx-auto mb-4 text-blue-400" /> },
              { value: "500+", label: "Verified Drivers", icon: <Users className="h-8 w-8 mx-auto mb-4 text-blue-400" /> },
              { value: "30 min", label: "Average Arrival Time", icon: <Clock className="h-8 w-8 mx-auto mb-4 text-blue-400" /> },
              { value: "4.8/5", label: "Customer Rating", icon: <Star className="h-8 w-8 mx-auto mb-4 text-blue-400" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-gray-800"
              >
                {stat.icon}
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional drivers for all your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-12 w-12 text-blue-600 mb-4" />,
                title: "Hourly Driver Service",
                description: "Book by the hour for meetings, events, or personal use",
                price: "Starting at ₹450/ 4 hrs"
              },
              {
                icon: <Shield className="h-12 w-12 text-blue-600 mb-4" />,
                title: "Corporate Solutions",
                description: "Dedicated drivers for your business needs",
                price: "Custom packages"
              },
              {
                icon: <Clock className="h-12 w-12 text-blue-600 mb-4" />,
                title: "Airport Transfers",
                description: "Reliable pickups and drops for all flights",
                price: "From ₹550/trip"
              },
              
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <div className="flex justify-center">
                  <div className="bg-blue-100 p-4 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 mt-6">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-blue-600 font-bold">{service.price}</p>
              </motion.div>
              
            ))}
          </div>
            
          
        </div>
      </section>

      {/* Driver Assurance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Driver Verification Process</h2>
              <ul className="space-y-4">
                {[
                  "Rigorous background checks and police verification",
                  "Minimum 5 years of driving experience",
                  "Defensive driving training certification",
                  "Regular health check-ups",
                  "GPS-tracked for your safety",
                  "Customer rating system for quality control"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <Check className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/Drivers On Call verification.jpg" 
                alt="Driver verification process" 
                className="rounded-xl shadow-xl w-full"
              />
              <motion.div
                animate={controls}
                className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  <span className="font-bold">500+ Verified Drivers</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Professional Driver Today?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Book by instant call or book online to get started
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/booking"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Book Now
                </Link>
              </motion.div>
              {/* <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/download"
                  className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Download App
                </Link>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
