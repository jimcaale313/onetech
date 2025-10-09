import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, CheckCircle, Facebook, Instagram, Link } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mvgwbeko");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-white p-12 rounded-xl shadow-lg max-w-2xl mx-auto"
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-purple">Thank you!</h2>
            <p className="mt-4 text-lg text-gray-700">Your message has been sent successfully. We'll get back to you soon!</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">We'd love to hear from you. Send us a message!</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold text-brand-purple mb-6 font-heading">Contact Information</h3>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start">
                  <MapPin className="flex-shrink-0 h-6 w-6 text-brand-orange mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>Omar Hashi Building, Ground Floor, Opposite Premier Bank HQ, Hargeisa, Somaliland</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="flex-shrink-0 h-6 w-6 text-brand-orange mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>info@onetech.biz / onetechstationary@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="flex-shrink-0 h-6 w-6 text-brand-orange mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+252 63 900 1718 / 63 900 1719 / 63 900 1720</p>
                  </div>
                </li>
              </ul>
              <h3 className="text-2xl font-bold text-brand-purple mb-6 mt-10 font-heading">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="https://www.tiktok.com/@onetechandstationary" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-brand-orange transition-colors duration-300">
                  <Link className="h-8 w-8" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61580678278696" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-brand-orange transition-colors duration-300">
                  <Facebook className="h-8 w-8" />
                </a>
                <a href="https://www.instagram.com/onetech127?igsh=MWR1MjQxOG0wY2lyeg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-brand-orange transition-colors duration-300">
                  <Instagram className="h-8 w-8" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6 h-full">
              <div>
                <Label htmlFor="name" className="font-semibold">Full Name</Label>
                <Input id="name" type="text" name="name" placeholder="John Doe" className="mt-2" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="font-semibold">Email Address</Label>
                <Input id="email" type="email" name="email" placeholder="you@example.com" className="mt-2" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Label htmlFor="message" className="font-semibold">Message</Label>
                <Textarea id="message" name="message" placeholder="How can we help you today?" className="mt-2" rows={5} required />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
              <Button type="submit" disabled={state.submitting} className="w-full bg-brand-orange hover:bg-orange-500 text-white font-bold py-3 text-lg disabled:bg-orange-300">
                {state.submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;