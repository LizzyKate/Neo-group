import React from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface RegisterCTAProps {
  darkMode: boolean;
}

const RegisterCTA: React.FC<RegisterCTAProps> = ({ darkMode }) => {
  return (
    <section
      className={`${darkMode ? "bg-gray-800" : "bg-white"} py-16 shadow-inner`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Ready to Start Your Adventure?
        </h2>
        <p
          className={`text-lg mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Join thousands of players already enjoying our platform. Sign up now
          and claim your welcome bonus!
        </p>
        <Link href="https://leon211.casino/registration" target="_blank">
          <Button variant="gradient" size="lg">
            Register Now & Claim Bonus
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default RegisterCTA;
