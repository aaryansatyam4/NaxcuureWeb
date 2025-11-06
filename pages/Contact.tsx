import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

const Contact = () => {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    setSubmitted(false);

    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://formspree.io/f/xblpnada", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-light-bg">
      <PageHero 
        title={t.contact.title}
        subtitle={t.contact.p1}
        backgroundImage="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto items-start">
              <AnimatedSection>
                <div className="space-y-8 text-lg font-sans">
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-2">Address</h3>
                    <p className="text-gray-700 leading-relaxed">{t.contact.address}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-2">Phone</h3>
                    <p className="text-gray-700">{t.contact.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-2">Email</h3>
                    <p className="text-gray-700">{t.contact.email}</p>
                  </div>
                </div>
                <div className="mt-10 rounded-lg overflow-hidden shadow-lg h-72 bg-gray-200">
                    <img src="https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-full object-cover" alt="Map"/>
                </div>
              </AnimatedSection>

              <AnimatedSection delay="200ms">
                <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-gray-200/60 h-full">
                  <h2 className="text-3xl font-serif text-primary mb-8">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-sans mb-1">{t.contact.formName}</label>
                      <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 bg-light-bg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-sans" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-sans mb-1">{t.contact.formEmail}</label>
                      <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 bg-light-bg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-sans" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-sans mb-1">{t.contact.formMessage}</label>
                      <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-4 py-3 bg-light-bg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-sans" required></textarea>
                    </div>
                    <div>
                      <button type="submit" disabled={submitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300 font-sans disabled:opacity-50">
                        {submitting ? 'Submitting...' : t.contact.formSubmit}
                      </button>
                    </div>
                    {submitted && <p className="text-green-600">{t.contact.formSuccess}</p>}
                    {error && <p className="text-red-600">{t.contact.formError}</p>}
                  </form>
                </div>
              </AnimatedSection>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
