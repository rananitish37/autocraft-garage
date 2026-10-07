import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User, Phone, Mail, Car, Hash, Calendar, Clock, MessageSquare,
  CheckCircle, ChevronDown, AlertCircle
} from 'lucide-react';
import { services } from '../../data/services';
import { businessInfo } from '../../data/businessInfo';

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '2:00 PM', '2:30 PM', '3:00 PM',
  '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM',
];

const vehicleYears = Array.from({ length: 25 }, (_, i) => String(new Date().getFullYear() - i));

const initialForm = {
  fullName: '', phone: '', email: '',
  vehicleMake: '', vehicleModel: '', vehicleYear: '', registrationNumber: '',
  service: '', preferredDate: '', preferredTime: '', message: '',
};

const InputField = ({ icon: Icon, label, required, children, error }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-1.5">
      {label}{required && <span className="text-orange-500 ml-1">*</span>}
    </label>
    <div className={`relative ${error ? 'ring-1 ring-red-500/50 rounded-xl' : ''}`}>
      {Icon && (
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none z-10">
          <Icon className="w-4 h-4" />
        </div>
      )}
      {children}
    </div>
    {error && (
      <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
        <AlertCircle className="w-3 h-3" /> {error}
      </p>
    )}
  </div>
);

const inputClass = (hasIcon) =>
  `w-full bg-garage-800 border border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 rounded-xl py-3 text-white placeholder-gray-500 text-sm transition-colors ${hasIcon ? 'pl-10 pr-4' : 'px-4'}`;

const selectClass = (hasIcon) =>
  `w-full bg-garage-800 border border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 rounded-xl py-3 text-white text-sm appearance-none transition-colors cursor-pointer ${hasIcon ? 'pl-10 pr-10' : 'px-4 pr-10'}`;

const BookAppointment = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.vehicleMake.trim()) newErrors.vehicleMake = 'Vehicle make is required';
    if (!form.service) newErrors.service = 'Please select a service';
    if (!form.preferredDate) newErrors.preferredDate = 'Please select a date';
    if (!form.preferredTime) newErrors.preferredTime = 'Please select a time';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    // Simulate API call — replace this with:
    // await fetch('/api/appointments', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    await new Promise(resolve => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  // ── Success State ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-garage-950 px-4 pt-20">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          <h2 className="text-3xl font-black text-white mb-3">Appointment Request Received!</h2>
          <p className="text-gray-400 mb-2 text-lg">
            Thank you, <span className="text-white font-semibold">{form.fullName}</span>!
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We'll contact you shortly on <span className="text-orange-400 font-semibold">{form.phone}</span> to confirm your appointment for <span className="text-white font-semibold">{form.service}</span> on <span className="text-white font-semibold">{form.preferredDate}</span> at <span className="text-white font-semibold">{form.preferredTime}</span>.
          </p>
          <div className="bg-garage-900 border border-gray-800 rounded-2xl p-6 mb-8 text-left space-y-3">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Booking Summary</p>
            <div className="flex justify-between text-sm"><span className="text-gray-400">Vehicle</span><span className="text-white font-medium">{form.vehicleMake} {form.vehicleModel}</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-400">Service</span><span className="text-white font-medium">{form.service}</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-400">Date</span><span className="text-white font-medium">{form.preferredDate}</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-400">Time</span><span className="text-white font-medium">{form.preferredTime}</span></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => { setSubmitted(false); setForm(initialForm); }}
              className="flex-1 px-4 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-xl text-sm font-semibold transition-colors"
            >
              Book Another
            </button>
            <Link
              to="/"
              className="flex-1 px-4 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-xl text-sm font-bold text-center transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-garage-950">
      {/* Page Hero */}
      <div className="relative pt-32 pb-16 bg-garage-900 border-b border-gray-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Book appointment"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-garage-900/70 to-garage-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">Schedule a Visit</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Book an <span className="text-orange-500">Appointment</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Fill in the details below and our team will confirm your appointment within a few hours.
          </p>
          <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-300">Book Appointment</span>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              {/* Section 1: Customer Details */}
              <div className="bg-garage-900 border border-gray-800 rounded-2xl p-7">
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs font-black">1</div>
                  Customer Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField icon={User} label="Full Name" required error={errors.fullName}>
                    <input type="text" name="fullName" value={form.fullName} onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={inputClass(true)} />
                  </InputField>
                  <InputField icon={Phone} label="Phone Number" required error={errors.phone}>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass(true)} />
                  </InputField>
                  <div className="sm:col-span-2">
                    <InputField icon={Mail} label="Email Address" error={errors.email}>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass(true)} />
                    </InputField>
                  </div>
                </div>
              </div>

              {/* Section 2: Vehicle Details */}
              <div className="bg-garage-900 border border-gray-800 rounded-2xl p-7">
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs font-black">2</div>
                  Vehicle Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField icon={Car} label="Vehicle Make" required error={errors.vehicleMake}>
                    <input type="text" name="vehicleMake" value={form.vehicleMake} onChange={handleChange}
                      placeholder="e.g. Maruti, Hyundai, Tata"
                      className={inputClass(true)} />
                  </InputField>
                  <InputField icon={Car} label="Vehicle Model" error={errors.vehicleModel}>
                    <input type="text" name="vehicleModel" value={form.vehicleModel} onChange={handleChange}
                      placeholder="e.g. Swift, i20, Nexon"
                      className={inputClass(true)} />
                  </InputField>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Vehicle Year</label>
                    <div className="relative">
                      <select name="vehicleYear" value={form.vehicleYear} onChange={handleChange}
                        className={selectClass(false)}>
                        <option value="">Select year</option>
                        {vehicleYears.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  <InputField icon={Hash} label="Registration Number" error={errors.registrationNumber}>
                    <input type="text" name="registrationNumber" value={form.registrationNumber} onChange={handleChange}
                      placeholder="e.g. HR 26 AB 1234"
                      className={inputClass(true)} />
                  </InputField>
                </div>
              </div>

              {/* Section 3: Service */}
              <div className="bg-garage-900 border border-gray-800 rounded-2xl p-7">
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs font-black">3</div>
                  Service Required
                </h3>
                <InputField label="Select Service" required error={errors.service}>
                  <div className="relative">
                    <select name="service" value={form.service} onChange={handleChange}
                      className={`${selectClass(false)} ${!form.service ? 'text-gray-500' : 'text-white'}`}>
                      <option value="">Choose a service...</option>
                      {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Other">Other / Not Listed</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </InputField>
              </div>

              {/* Section 4: Appointment */}
              <div className="bg-garage-900 border border-gray-800 rounded-2xl p-7">
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs font-black">4</div>
                  Appointment Preferences
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField icon={Calendar} label="Preferred Date" required error={errors.preferredDate}>
                    <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange}
                      min={today}
                      className={`${inputClass(true)} [color-scheme:dark]`} />
                  </InputField>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Preferred Time<span className="text-orange-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none z-10" />
                      <select name="preferredTime" value={form.preferredTime} onChange={handleChange}
                        className={`${selectClass(true)} ${!form.preferredTime ? 'text-gray-500' : 'text-white'} ${errors.preferredTime ? 'border-red-500/50' : ''}`}>
                        <option value="">Select time slot</option>
                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                    {errors.preferredTime && (
                      <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.preferredTime}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 5: Message */}
              <div className="bg-garage-900 border border-gray-800 rounded-2xl p-7">
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs font-black">5</div>
                  Additional Information
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-gray-500" />
                    Describe the issue or any other details
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    rows={4}
                    placeholder="e.g. I hear a grinding noise when braking, check engine light is on..."
                    className="w-full bg-garage-800 border border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm resize-none transition-colors"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-orange-500 hover:bg-orange-400 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-orange-500/25 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </>
                )}
              </button>
              <p className="text-center text-gray-500 text-xs">
                By submitting, you agree to be contacted by our team. No payment required.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact info */}
            <div className="bg-garage-900 border border-gray-800 rounded-2xl p-6 sticky top-24">
              <h3 className="text-white font-bold mb-5">Need Help?</h3>
              <div className="space-y-4 mb-6">
                <a href={`tel:${businessInfo.phone}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call us directly</p>
                    <p className="text-sm font-semibold">{businessInfo.phone}</p>
                  </div>
                </a>
                <a href={businessInfo.social.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <p className="text-sm font-semibold">Send a message</p>
                  </div>
                </a>
              </div>

              <div className="border-t border-gray-800 pt-5">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Opening Hours</p>
                <p className="text-gray-300 text-sm mb-1">{businessInfo.hours.weekdays}</p>
                <p className="text-gray-500 text-sm">{businessInfo.hours.weekend}</p>
              </div>

              <div className="border-t border-gray-800 mt-5 pt-5">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Why Book Online?</p>
                <ul className="space-y-2">
                  {['Quick 2-minute form', 'Confirmed within 2 hours', 'No payment needed', 'Easy rescheduling'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
