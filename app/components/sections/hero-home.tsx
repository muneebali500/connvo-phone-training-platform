import Link from "next/link";
import Button from "../ui/common/button";

const HeroSection = () => {
  return (
    <section
      id="hero-home"
      className="gradient-bg min-h-[600px] md:min-h-[700px] flex items-center justify-center pt-16"
    >
      <div className="main-container text-center">
        <div className="animate-[var(--animate-float)] mb-8">
          <div className="text-6xl md:text-8xl mb-6">📞</div>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-white">
          Master Communication
          <br />
          <span className="text-yellow-300">with AI Training</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Practice cold calling, interviews, and small talk with AI-powered
          phone conversations.
          <strong> No login required, just call!</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="tel:+1234567890">
            <Button
              variant="secondary"
              size="lg"
              className="hidden md:block px-8 py-4 hover:scale-105 shadow-lg"
            >
              📞 Call Now to Practice
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
