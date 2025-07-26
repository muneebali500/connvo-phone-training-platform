import Card from "../ui/common/card";
import { features } from "@/app/constants/features";

const FeaturesSection = () => {
  return (
    <section id="modes" className="py-10 md:py-20 bg-gray-50">
      <div className="main-container">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-heading">Training Modes</h2>
          <p className="section-subheading">
            Choose from three specialized training modes designed to improve
            your communication skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2 text-gray-600">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
