import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Loader2, AlertCircle } from 'lucide-react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/cedarshinglellc@gmail.com';

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  address: '',
  service: 'Inspection',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          service: formData.service,
          message: formData.message || 'No additional details provided.',
          _subject: `New Quote Request: ${formData.service}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch {
      setError('Unable to send your request right now. Please call us or email cedarshinglellc@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-slate-50 min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Get Your Free Quote</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Protect your investment today. Fill out the form below or call us directly to schedule your professional cedar roof assessment.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16">

          <div className="bg-primary-900 rounded-3xl p-10 sm:p-12 text-white shadow-xl">
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <p className="text-primary-100 mb-12 text-lg">
              We respond to all inquiries within 24 hours. For immediate assistance, please call us.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-primary-800/50 p-3 rounded-lg border border-primary-700/50">
                  <Phone className="h-6 w-6 text-primary-300" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-200 text-sm tracking-wide uppercase mb-1">Call Us Directly</h4>
                  <a href="tel:5551234567" className="text-2xl font-semibold hover:text-primary-200 transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-primary-800/50 p-3 rounded-lg border border-primary-700/50">
                  <Mail className="h-6 w-6 text-primary-300" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-200 text-sm tracking-wide uppercase mb-1">Email Us</h4>
                  <a href="mailto:cedarshinglellc@gmail.com" className="text-lg font-semibold hover:text-primary-200 transition-colors break-all">
                    cedarshinglellc@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-primary-800/50 p-3 rounded-lg border border-primary-700/50">
                  <MapPin className="h-6 w-6 text-primary-300" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-200 text-sm tracking-wide uppercase mb-1">Service Area</h4>
                  <p className="text-lg">Serving the local region and surrounding suburbs.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-primary-800/50 p-3 rounded-lg border border-primary-700/50">
                  <Clock className="h-6 w-6 text-primary-300" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-200 text-sm tracking-wide uppercase mb-1">Business Hours</h4>
                  <p className="text-lg">Mon-Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-primary-800/50">
              <p className="text-primary-200 italic">
                "A little care goes a long way—protect your cedar roof and enjoy its beauty for decades."
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 sm:p-12 shadow-sm border border-slate-100">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
                <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Request Sent!</h3>
                <p className="text-slate-600">Thank you for reaching out. We will contact you shortly with your free quote.</p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-sm font-semibold text-primary-700 hover:text-primary-600 transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4 text-red-800">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">Street Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    placeholder="123 Main St, City, State"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 bg-white"
                  >
                    <option value="Inspection">Professional Inspection</option>
                    <option value="Cleaning">Cedar Roof Cleaning</option>
                    <option value="Repair">Roof Repair</option>
                    <option value="Treatment">Preservative Treatment / Stain</option>
                    <option value="Other">Other / Unsure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    placeholder="Tell us a bit about the age or condition of your roof..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors mt-8 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Request Free Quote'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
