import React from 'react';
import { ContainerScroll } from './ui/container-scroll-animation';

// This component is no longer used in the app
// Keeping it for reference but it's been replaced by ScrollDemo
const EmailStats: React.FC = () => {
  return (
    <section id="email-stats" className="mt-0">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-black dark:text-white text-center">
              Email Isn't Dead. It's <span className="text-[#26a269]">Dominating.</span>
            </h2>
            <p className="text-lg mt-2 text-center text-muted-foreground">
              Email marketing is expected to hit <strong>$13.7B</strong> in revenue by 2025 — and that's just the beginning.
            </p>
          </>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-10 h-full">
          {/* Left Side - Bullet Points */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✅</span>
                <span>Direct line to decision-makers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✅</span>
                <span>Unmatched personalization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✅</span>
                <span>One of the most trusted & measurable marketing channels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✅</span>
                <span>Still growing year after year</span>
              </li>
            </ul>
            
            <p className="text-center italic text-muted-foreground mt-6">
              So if email is booming… how do you actually make it work?
            </p>
          </div>
          
          {/* Right Side - Image */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://i.imgur.com/bxOf3E1.jpeg"
              alt="Email Marketing Revenue Growth"
              className="rounded-xl shadow-lg max-w-[500px] w-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "/images/email-marketing-growth-chart.png";
              }}
            />
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Source: Statista, Global Industry Analysts (2022)
            </p>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default EmailStats;
