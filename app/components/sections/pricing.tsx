"use client";

import { useState } from "react";
import ContactModal from "../ui/contact-form";
import PricingTier from "../ui/home/pricing-tier";
import { pricingTiers } from "@/app/constants/pricing-tiers";

const PricingSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      <section id="pricing" className="py-10 md:py-20 bg-white">
        <div className="main-container">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-heading">Simple Pricing</h2>
            <p className="section-subheading">
              Choose the plan that fits your training needs. All plans include
              access to all modes.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier) => (
              <PricingTier
                key={tier.name}
                name={tier.name}
                price={tier.price}
                period={tier.period}
                features={tier.features}
                isPopular={tier.isPopular}
                isEnterprise={tier.isEnterprise}
                buttonText={tier.buttonText}
                onButtonClick={
                  tier.isEnterprise ? handleContactClick : undefined
                }
              />
            ))}
          </ul>
        </div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default PricingSection;
