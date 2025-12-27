'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutFull() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Nice to Meet You!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Curious about what makes Pilze worth being your go-to functional friend?
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                A drink with benefits, minus the guilt
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We&apos;re here to disrupt the beverage lineup with something modern, mindful, and truly refreshing. Picture this: a crisp, hydrating boost infused with adaptogens and botanicals that&apos;s as good for your body as it is for your vibe.
              </p>
              <p className="text-xl font-semibold text-primary">
                It&apos;s crafted for those who want more from what they drink.
              </p>
            </div>
          </motion.div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Natural Fruit & Flavors",
                description: "Crafted with natural fruit juice and pure flavors"
              },
              {
                title: "Low Cal, Minus the Sugar",
                description: "Calories from fruit juice with natural sweeteners"
              },
              {
                title: "Packed with Adaptogens",
                description: "It's the real wellness boost"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md text-center"
              >
                <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Adaptogens Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Adaptogens & Botanicals
            </h2>
            <p className="text-gray-700 text-center leading-relaxed mb-8">
              Adaptogens are plant-based substances that help your body adapt to stress, promoting balance and well-being. From ancient Ayurveda to modern wellness, these ingredients have stood the test of time.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  name: "Ashwagandha",
                  description: "Keeps you steady and centered through daily stress"
                },
                {
                  name: "Lion's Mane",
                  description: "Sharpens mental clarity and cognitive function"
                },
                {
                  name: "Reishi",
                  description: "Promotes calm and supports immune health"
                },
                {
                  name: "Cordyceps",
                  description: "Fuels natural energy and vitality"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background-secondary"
                >
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Brand Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 md:p-12 shadow-lg text-white mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Inspired by the past, crafted for today
            </h2>
            <p className="text-lg text-white/90 leading-relaxed text-center mb-8">
              Every can of Pilze bridges the gap between ancient roots and modern wellness
            </p>
          </motion.div>

          {/* Journey Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              The journey to wellness wasn&apos;t easy
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The journey to a healthier life isn&apos;t always easy. We get it—because we&apos;ve been there too. Between balancing busy days and craving that perfect functional pick-me-up, we realized most options were either packed with sugar or lacked any real benefits.
              </p>
              <p>
                That&apos;s why we created Pilze.
              </p>
              <p>
                But here&apos;s the thing—formulating drinks that are genuinely good for you wasn&apos;t easy either. We faced countless challenges, from getting the flavors just right to ensuring each sip delivers real functional benefits. Some days, it felt impossible. But we were determined to make it happen—for you, and for anyone who believes that wellness shouldn&apos;t be a compromise.
              </p>
              <p>
                We wanted something more thoughtful—a drink that&apos;s refreshing, sophisticated, and does more than just taste good. A boost that hydrates, clears the mind, enhances focus, and feels like a little ritual of wellness in every sip. No gimmicks, no empty promises. Just functional ingredients rooted in nature, crafted to support you through the chaos and calm of everyday life.
              </p>
              <p>
                Pilze is our way of making wellness effortless, joyful, and a little more functional. It&apos;s for the early risers, the night owls, the dreamers, the doers—for anyone who believes that small choices can spark big changes.
              </p>
              <p className="text-lg font-semibold text-primary">
                Thanks for being part of our journey. Here&apos;s to feeling good, one sip at a time.
              </p>
              <p className="text-right italic">
                Sincerely,<br />
                <span className="font-bold">Team Pilze</span>
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              href="/products"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-lg font-bold text-white transition-all hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Explore Our Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
