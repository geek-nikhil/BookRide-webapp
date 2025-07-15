import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, User, Mail, Phone, Car } from 'lucide-react';

type ServiceType = 'one-way' | 'round-trip' | 'outstation' | null;

interface FormData {
  name: string;
  phone: string;
  email: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  vehicleType: string;
  duration: string;
  distance: string;
}

const pricingConfig = {
  'one-way': {
    'city-limits': {
      '2': 350,
      '4': 650,
      extraPerHour: 125,
      perKm: 7.50,
      baseKm: 19,
      nightCharge: 200
    },
    'outside-city': {
      '100km': { '3': 850, '6': 1450 },
      '180km': { '6': 1450 },
      '250km': { '9': 1850 }
    }
  },
  'round-trip': {
    options: [
      { hours: 4, price: 450 },
      { hours: 6, price: 650 },
      { hours: 8, price: 850 },
      { hours: 10, price: 1050 }
    ],
    perKm: 7.50,
    baseKm: 19,
    perMin: 2.15,
    nightCharge: 200
  },
  'outstation': {
    options: [
      { hours: 7, price: 750 },
      { hours: 9, price: 950 },
      { hours: 12, price: 1250 },
      { hours: 24, price: 1750 }
    ],
    extraPerHour: 60,
    maxKm: 300,
    nightCharge: 200
  }
};

const BookingForm: React.FC = () => {
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    vehicleType: '',
    duration: '4',
    distance: '',
  });

  const [nightTrip, setNightTrip] = useState(false);
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    setPrice(calculatePrice());
  }, [formData, serviceType, nightTrip]);

  const calculatePrice = () => {
    if (!serviceType) return 0;

    let basePrice = 0;
    let additionalCharges = 0;

    if (serviceType === 'one-way') {
      if (!formData.distance || parseInt(formData.distance) <= 19) {
        basePrice = pricingConfig['one-way']['city-limits'][formData.duration as keyof typeof pricingConfig['one-way']['city-limits']] || 350;
      } else {
        const distance = parseInt(formData.distance);
        if (distance <= 100) {
          basePrice = pricingConfig['one-way']['outside-city']['100km'][formData.duration as keyof typeof pricingConfig['one-way']['outside-city']['100km']] || 850;
        } else if (distance <= 180) {
          basePrice = pricingConfig['one-way']['outside-city']['180km']['6'] || 1450;
        } else {
          basePrice = pricingConfig['one-way']['outside-city']['250km']['9'] || 1850;
        }
      }
    } 
    else if (serviceType === 'round-trip') {
      const selectedOption = pricingConfig['round-trip'].options.find(
        opt => opt.hours === parseInt(formData.duration)
      );
      basePrice = selectedOption?.price || pricingConfig['round-trip'].options[0].price;
    } 
    else if (serviceType === 'outstation') {
      const selectedOption = pricingConfig['outstation'].options.find(
        opt => opt.hours === parseInt(formData.duration)
      );
      basePrice = selectedOption?.price || pricingConfig['outstation'].options[0].price;
    }

    if (nightTrip) {
      additionalCharges += serviceType === 'one-way' ? 
        pricingConfig['one-way']['city-limits'].nightCharge : 
        serviceType === 'round-trip' ? 
        pricingConfig['round-trip'].nightCharge : 
        pricingConfig['outstation'].nightCharge;
    }

    return basePrice + additionalCharges;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;
    setFormData(prev => ({ ...prev, time }));
    const hours = parseInt(time.split(':')[0]);
    setNightTrip(hours >= 22 || hours < 6);
  };

  const handleServiceSelect = (type: ServiceType) => {
    setServiceType(type);
    const defaultDuration = type === 'one-way' ? '2' : 
                         type === 'round-trip' ? '4' : '7';
    setFormData(prev => ({ ...prev, duration: defaultDuration }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formPayload = {
        'form-name': 'booking',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        pickupLocation: formData.pickupLocation,
        dropoffLocation: formData.dropoffLocation || 'N/A',
        date: formData.date,
        time: formData.time,
        vehicleType: formData.vehicleType,
        duration: formData.duration,
        distance: formData.distance || 'N/A',
        serviceType: serviceType || '',
        totalPrice: price.toString(),
        nightTrip: nightTrip.toString(),
        'bot-field': ''
      };

      const formDataEncoded = new URLSearchParams();
      Object.entries(formPayload).forEach(([key, value]) => {
        formDataEncoded.append(key, value);
      });

      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmissionSuccess(true);
      } else {
        const response = await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formDataEncoded.toString(),
        });

        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }

        setSubmissionSuccess(true);
      }

      setFormData({
        name: '',
        phone: '',
        email: '',
        pickupLocation: '',
        dropoffLocation: '',
        date: '',
        time: '',
        vehicleType: '',
        duration: serviceType === 'one-way' ? '2' : 
                serviceType === 'round-trip' ? '4' : '7',
        distance: '',
      });

    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit booking. Please try again or call us directly at +91-9876543210');
    } finally {
      setIsLoading(false);
    }
  };

  if (submissionSuccess) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
        <p className="text-lg mb-4">Thank you for your booking. We will contact you shortly.</p>
        <button 
          onClick={() => setSubmissionSuccess(false)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <a 
          href="tel:080-62179711" 
          className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
        >
          <Phone className="h-5 w-5" />
          Call Now for Instant Booking
        </a>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Your Ride</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div
          className={`p-4 border rounded-lg cursor-pointer transition-all ${
            serviceType === 'one-way' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
          }`}
          onClick={() => handleServiceSelect('one-way')}
        >
          <h3 className="font-semibold text-gray-800">One Way</h3>
          <p className="text-sm text-gray-600 mt-1">Point to point transfer within or outside city</p>
          <p className="text-blue-600 font-medium mt-2">From ₹350</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer transition-all ${
            serviceType === 'round-trip' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
          }`}
          onClick={() => handleServiceSelect('round-trip')}
        >
          <h3 className="font-semibold text-gray-800">Round Trip</h3>
          <p className="text-sm text-gray-600 mt-1">Multiple stops with return to origin</p>
          <p className="text-blue-600 font-medium mt-2">From ₹450</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer transition-all ${
            serviceType === 'outstation' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
          }`}
          onClick={() => handleServiceSelect('outstation')}
        >
          <h3 className="font-semibold text-gray-800">Outstation</h3>
          <p className="text-sm text-gray-600 mt-1">Long distance trips (up to 300km)</p>
          <p className="text-blue-600 font-medium mt-2">From ₹750</p>
        </div>
      </div>

      {serviceType && (
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          name="booking" 
          method="POST" 
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="booking" />
          <div className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <input
                className="pl-10 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-500" />
              </div>
              <input
                className="pl-10 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                className="pl-10 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="pl-10 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              name="pickupLocation"
              placeholder="Pickup Location"
              value={formData.pickupLocation}
              onChange={handleInputChange}
              required
            />
          </div>

          {serviceType === 'one-way' && (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-500" />
              </div>
              <input
                className="pl-10 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="dropoffLocation"
                placeholder="Dropoff Location"
                value={formData.dropoffLocation}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-500" />
              </div>
              <input
                className="pl-10 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Clock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                className="pl-10 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleTimeChange}
                required
              />
            </div>
          </div>

          {serviceType === 'one-way' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Distance (km)
                </label>
                <input
                  type="number"
                  name="distance"
                  min="1"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.distance}
                  onChange={(e) => {
                    handleInputChange(e);
                    const distance = parseInt(e.target.value);
                    let newDuration = '2';
                    if (distance > 19) {
                      if (distance <= 100) {
                        newDuration = '3';
                      } else if (distance <= 180) {
                        newDuration = '6';
                      } else {
                        newDuration = '9';
                      }
                    }
                    setFormData(prev => ({ ...prev, duration: newDuration }));
                  }}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.distance && parseInt(formData.distance) > 19 ? 
                    `₹7.50/km after 19km` : 'Within city limits (≤19km)'
                  }
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (hours)
                </label>
                <select
                  name="duration"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                >
                  {!formData.distance || parseInt(formData.distance) <= 19 ? (
                    <>
                      <option value="2">2 hours (₹350)</option>
                      <option value="4">4 hours (₹650)</option>
                    </>
                  ) : (
                    parseInt(formData.distance) <= 100 ? (
                      <>
                        <option value="3">3-5 hours (₹850)</option>
                        <option value="6">6-8 hours (₹1450)</option>
                      </>
                    ) : (
                      parseInt(formData.distance) <= 180 ? (
                        <option value="6">6-8 hours (₹1450)</option>
                      ) : (
                        <option value="9">9-10 hours (₹1850)</option>
                      )
                    )
                  )}
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  {!formData.distance || parseInt(formData.distance) <= 19 ? 
                    'Extra hours: ₹125/hour' : 
                    'Fares include specified duration'
                  }
                </p>
              </div>
            </div>
          )}

          {(serviceType === 'round-trip' || serviceType === 'outstation') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Package
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {pricingConfig[serviceType].options.map(option => (
                  <button
                    type="button"
                    key={option.hours}
                    className={`p-3 border rounded-md text-center transition-colors ${
                      formData.duration === option.hours.toString() ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      duration: option.hours.toString()
                    }))}
                  >
                    <p className="font-medium">{option.hours} hours</p>
                    <p className="text-sm">₹{option.price}</p>
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {serviceType === 'round-trip' ? 
                  '₹2.10/min for extra time beyond selected duration' : 
                  '₹125/hour for extra time beyond selected duration'
                }
              </p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['hatchback', 'sedan', 'SUV', 'premium'].map(type => (
                <button
                  type="button"
                  key={type}
                  className={`p-3 border rounded-md flex items-center justify-center space-x-2 ${
                    formData.vehicleType === type ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, vehicleType: type }))}
                >
                  <Car className="h-5 w-5 text-gray-600" />
                  <span className="capitalize">{type}</span>
                </button>
              ))}
            </div>
          </div>

          {nightTrip && (
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
              <p>Night trip charges (₹200) apply for trips between 10PM - 6AM</p>
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Price Estimate</h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600">
                  {serviceType === 'one-way' && `One Way (${formData.duration}hrs)`}
                  {serviceType === 'round-trip' && `Round Trip (${formData.duration}hrs)`}
                  {serviceType === 'outstation' && `Outstation (${formData.duration}hrs)`}
                  {nightTrip && ' + Night Charges'}
                </p>
                {serviceType === 'one-way' && formData.distance && (
                  <p className="text-sm text-gray-500">
                    {parseInt(formData.distance) > 19 ? 
                      `${formData.distance}km (long distance)` : 
                      'City limits (≤19km)'
                    }
                  </p>
                )}
              </div>
              <p className="text-xl font-bold text-blue-600">
                ₹{price.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting...' : 'Confirm Booking'}
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;