'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, wellness tips, and be the first to know about new product launches.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={subscribed}
                className="flex-1 h-12 rounded-full border-2 border-white/20 bg-white/10 px-6 py-2 text-white placeholder:text-white/60 focus:border-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="h-12 px-8 rounded-full bg-white text-primary font-bold transition-all hover:bg-white/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-50"
              >
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
            
            <p className="mt-4 text-xs text-white/60">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
