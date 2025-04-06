import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GlowingEffect } from "./ui/glowing-effect";
import { ArrowRight } from "lucide-react";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="final-cta"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Urgency Warning Box - Now ABOVE the white card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mb-10 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6 text-center shadow-sm"
          >
            <div className="flex flex-col items-center space-y-4 text-gray-800 dark:text-gray-200">
              <span className="text-yellow-500 text-2xl">⚠️</span>
              <p className="font-medium">We're almost full</p>
              
              <p>We only take on a few clients at a time — that's how we keep results strong and personal.</p>
              
              <p className="font-semibold">
                <span>Right now, </span>
                <span className="text-teal-600 dark:text-teal-400 font-bold italic">
                  one spot is open.
                </span>
              </p>
              
              <p>After that, we're fully booked for the quarter.</p>
              
              <p className="font-medium">
                If that sounds like what you've been looking for — let's talk before it's gone.
              </p>
            </div>
          </motion.div>

          {/* Frosted Glass Card */}
          <div className="relative backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Want a Smarter Way to Get More Clients?
            </h2>

            {/* CTA Button with Glow Effect */}
            <div className="mb-6 text-center">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3SqRGx0SD40mEaoR1UqvTm-gBnZ9kuxqOKR2MpWKhb-9-eU8nR6yyhgwMX-M0OuodgIfYACrOO?gv=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold bg-teal-500 hover:bg-teal-600 rounded-full shadow-md transition-all duration-300 text-lg hover:scale-[1.03] after:content-[''] after:absolute after:inset-0 after:rounded-full after:ring-2 after:ring-teal-500/30 after:animate-ping"
                >
                  Book a Free Strategy Call
                  <ArrowRight size={20} />
                </a>
                <GlowingEffect disabled={false} glow={true} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
