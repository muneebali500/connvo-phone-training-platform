import React from "react";
import Button from "../common/button";

interface PricingTierProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  isPopular?: boolean;
  isEnterprise?: boolean;
  buttonText: string;
  onButtonClick?: () => void;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  period,
  features,
  isPopular = false,
  isEnterprise = false,
  buttonText,
  onButtonClick,
}) => {
  return (
    <li
      className={`relative rounded-2xl p-8 ${
        isEnterprise
          ? "bg-gradient-to-br from-purple-600 to-purple-800 text-white"
          : isPopular
          ? "gradient-bg text-white transform scale-105"
          : "bg-gray-50"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="text-3xl font-bold mb-4">
        {price}
        {period && (
          <span
            className={`text-lg ${
              isEnterprise
                ? "opacity-80"
                : isPopular
                ? "text-lg opacity-80"
                : "text-gray-600"
            }`}
          >
            {period}
          </span>
        )}
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span
              className={`mr-2 ${
                isEnterprise
                  ? "text-purple-300"
                  : isPopular
                  ? "text-yellow-300"
                  : "text-green-500"
              }`}
            >
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={
          isEnterprise ? "secondary" : isPopular ? "secondary" : "primary"
        }
        className="w-full"
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </li>
  );
};

export default PricingTier;
