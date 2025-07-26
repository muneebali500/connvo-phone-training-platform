export const pricingTiers = [
  {
    name: "Starter Pass",
    price: "$9",
    period: "/week",
    features: ["5 practice sessions", "Basic feedback", "All training modes"],
    buttonText: "Get Started",
  },
  {
    name: "Pro Monthly",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited sessions",
      "Advanced analytics",
      "Priority support",
      "Custom scenarios",
    ],
    isPopular: true,
    buttonText: "Start Free Trial",
  },
  {
    name: "Growth Monthly",
    price: "$79",
    period: "/month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Progress tracking",
      "Advanced reporting",
    ],
    buttonText: "Choose Growth",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Growth",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
    ],
    isEnterprise: true,
    buttonText: "Contact Us",
  },
];
