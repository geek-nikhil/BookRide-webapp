import { motion, useAnimation } from 'framer-motion';
import { Users, Shield, Clock, Briefcase, HeartHandshake, Gem, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 10, -10, 0],
      transition: { repeat: Infinity, duration: 8, ease: "easeInOut" }
    });
  }, [controls]);

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Minimal Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-amber-400">Journey</span> & Values
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building trust through exceptional driver services since 2020
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Story - Unique Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-100 rounded-lg z-0"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    How It All Began
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Back in 2020, amidst the buzzing traffic and rapid urban growth of Bengaluru, our founder noticed a critical gap in an otherwise thriving transportation ecosystem. Ride-hailing apps had revolutionized commuting, and fleet-based services were on the rise — but one key service was glaringly missing:
                    </p>
                    <p>A reliable, professional driver service for people who prefer using their own vehicles.</p>
                    <p>
                      Families, working professionals, senior citizens, and corporate clients often found themselves struggling to locate trustworthy chauffeurs for short- or long-term needs. Despite owning vehicles, they were dependent on informal, unverified sources or costly private agencies that lacked consistency and professionalism.
                    </p>
                    <p>
                      This need gave birth to a new idea — a platform that focuses solely on providing vetted, trained drivers on an on-demand and subscription basis. No fleets, no shared rides — just a dependable driver for your own car, whenever you need one.

                      And so, Drivers on Call was launched — with a mission to make everyday commuting safer, more convenient, and more personal
                      <span className="font-semibold"> </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/howitsbegin.jpeg"
                alt="Team meeting"
                className="rounded-lg shadow-xl w-full"
              />
              <motion.div
                animate={controls}
                className="absolute -bottom-6 -right-6 bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg"
              >
                <span className="font-bold">Since 2020</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our unique approach to driver services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="h-8 w-8 text-amber-600" />,
                title: "Specialized in Personal Vehicles",
                description: "We train drivers specifically for private car handling, unlike fleet drivers",
                delay: 0.1
              },
              {
                icon: <Gem className="h-8 w-8 text-amber-600" />,
                title: "Premium Verification Process",
                description: "5-stage screening including defensive driving tests and background checks",
                delay: 0.2
              },
              {
                icon: <HeartHandshake className="h-8 w-8 text-amber-600" />,
                title: "Long-Term Matching",
                description: "We remember your preferences for repeat bookings",
                delay: 0.3
              },
              {
                icon: <Shield className="h-8 w-8 text-amber-600" />,
                title: "Insurance Coordination",
                description: "Assistance with insurance documentation for peace of mind",
                delay: 0.4
              },
              {
                icon: <Clock className="h-8 w-8 text-amber-600" />,
                title: "Flexible Commitment",
                description: "No long-term contracts - book as needed",
                delay: 0.5
              },
              {
                icon: <Users className="h-8 w-8 text-amber-600" />,
                title: "Community Building",
                description: "Regular meetups between drivers and clients for better rapport",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                }}
                className="bg-white p-8 rounded-xl border border-gray-200"
              >
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Approach - New Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://driversoncall.co/images/Our Driver Community.jpeg?auto=format&fit=crop&q=80&w=2069"
                alt="Driver training"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg">
                <span className="font-bold">500+ Trained Professionals</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Driver Community</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                    <ArrowRight className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Training</h3>
                    <p className="text-gray-600">
                      Monthly workshops on defensive driving, customer service, and new vehicle technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                    <ArrowRight className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Career Development</h3>
                    <p className="text-gray-600">
                      Clear progression paths from junior to senior chauffeur roles
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                    <ArrowRight className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Support System</h3>
                    <p className="text-gray-600">
                      24/7 support line for drivers facing any operational challenges
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Facts - New Content */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">By The Numbers</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Key metrics that define our operations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "3000+", label: "Monthly Trips", borderColor: "border-amber-400" },
              { value: "94%", label: "Repeat Clients", borderColor: "border-blue-400" },
              { value: "<30min", label: "Average Response", borderColor: "border-emerald-400" },
              { value: "12+", label: "Cities Served", borderColor: "border-purple-400" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border-t-4 ${item.borderColor} pt-8 pb-6`}
              >
                <p className="text-4xl font-bold mb-2">{item.value}</p>
                <p className="text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Distinct Style */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Know More?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Our team is happy to discuss how we can meet your specific driver service needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium"
                onClick={() => window.location.href = 'https://driversoncall.co/#/contact'}
              >
                Contact Our Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-lg font-medium"
                onClick={() => window.open('/images/Brochure DriversOnCall.pdf', '_blank')}
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;