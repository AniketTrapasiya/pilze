'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = {
      email: (e.target as any).email.value,
      firstName: (e.target as any)['first-name'].value,
      lastName: (e.target as any)['last-name'].value,
      phone: (e.target as any).phone.value,
      inquiryType: (e.target as any)['inquiry-type'].value,
      message: (e.target as any).message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Thank you for your message! We will get back to you soon.');
        (e.target as HTMLFormElement).reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="pt-24 pb-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="text-lg text-white/80 max-w-md leading-relaxed">
              Have questions about wholesale, partnerships, or just want to say hello? We&apos;d love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-white/80">
                    Ahmedabad<br />
                    Gujarat, India<br />
                    382350
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-white/80">
                    +91 7069678982
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-white/80">
                    pilzeexotic@gmail.cm
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 text-gray-900 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                  <input id="first-name" required className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                  <input id="last-name" required className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" type="email" required className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                <input id="phone" type="tel" required className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="+91 1234567890" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="inquiry-type" className="text-sm font-medium">Inquiry Type</label>
                <select id="inquiry-type" required className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="">Select inquiry type</option>
                  <option value="general">General Inquiry</option>
                  <option value="promotional">Promotional</option>
                  <option value="dealers">Dealers</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" required className="flex min-h-[120px] w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="How can we help you?" />
              </div>
              
              <button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
