import React, { useRef, useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { WelcomeOffer, ProcessStep, FeatureCard } from "@/types";
import { Users, CreditCard, Trophy, Gamepad, Video, Award } from "lucide-react";

// Components
import Navigation from "./Navigation";
import Carousel from "./Carousel";
import ProcessSteps from "./ProcessSteps";
import FeatureCards from "./FeatureCard";
import RegisterCTA from "./RegisterCta";
import Footer from "./Footer";
import cup from "../../assets/images/bonus-1.png";
import diamond from "../../assets/images/bonus-2.png";
import triangle from "../../assets/images/bonus-3.png";

const LandingPage: React.FC = () => {
  const { darkMode } = useTheme();
  const [processVisible, setProcessVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  const processRef = useRef(null);
  const cardsRef = useRef(null);

  // Welcome offers for carousel
  const welcomeOffers: WelcomeOffer[] = [
    {
      title: "3000€",
      description: "no Casino e Casino ao vivo + 100 Rodadas Grátis na",
      color: "bg-purple-600",
      image: diamond,
      url: "https://leon211.casino/registration",
    },
    {
      title: "3000€",
      description: "no Casino e Casino ao vivo + 100 Rodadas Grátis na",
      color: "bg-blue-600",
      image: cup,
      url: "https://leon211.casino/registration",
    },
    {
      title: "3000€",
      description: "no Casino e Casino ao vivo + 100 Rodadas Grátis na",
      color: "bg-green-600",
      image: triangle,
      url: "https://leon211.casino/registration",
    },
  ];

  // Process steps
  const processSteps: ProcessStep[] = [
    {
      icon: <Users size={32} />,
      title: "Registe-se",
      description:
        "Junte-se à família Leon, completando onosso processo de registorápido e fácil.",
      color: "bg-blue-500",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Deposite",
      description:
        "Conte com processamentos/métodos de pagamentos rápidos e variados!",
      color: "bg-green-500",
    },
    {
      icon: <Trophy size={32} />,
      title: "Jogue",
      description: "A sua aventura pessoalna Leon começa a partirdaqui!",
      color: "bg-purple-500",
    },
  ];

  // Feature cards
  const featureCards: FeatureCard[] = [
    {
      icon: <Gamepad size={48} />,
      title: "Slots",
      description: "Mais de 4.500 jogosàsua escolha!",
      color: "bg-gradient-to-br from-pink-500 to-orange-400",
    },
    {
      icon: <Video size={48} />,
      title: "Jogos ao vivo",
      description:
        "Sinta a emoçãode jogar num excelente casino online, com os nossos dealers ao vivo!",
      color: "bg-gradient-to-br from-blue-500 to-teal-400",
    },
    {
      icon: <Award size={48} />,
      title: "Serviço de excelência",
      description: `Pagamentos rápidos, atendimento ao cliente 24 horas por dia, 7 dias por semana`,
      color: "bg-gradient-to-br from-purple-500 to-indigo-400",
    },
  ];

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = "../../assets/images/bg.png";
    img.onload = () => {
      setBgLoaded(true);
    };
    img.onerror = () => {
      setBgLoaded(true); // Show anyway to avoid a blank screen
    };
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const processObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProcessVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (processRef.current) {
      processObserver.observe(processRef.current);
    }

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    return () => {
      if (processRef.current) processObserver.unobserve(processRef.current);
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
    };
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      // Calculate position as percentage of window
      const x = (e.clientX / window.innerWidth) * 10;
      const y = (e.clientY / window.innerHeight) * 10;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen">
      {!bgLoaded && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div
        className={`fixed inset-0 w-full h-full bg-cover bg-center z-0 __bg ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: "transform 0.2s ease-out, opacity 0.3s ease",
        }}
      >
        <div
          className={`absolute inset-0 ${
            darkMode ? "bg-black/50" : "bg-white/10"
          }`}
        ></div>
      </div>

      <Navigation />

      <main className="pt-32 pb-16 relative z-10">
        <Carousel items={welcomeOffers} darkMode={darkMode} />

        <div ref={processRef}>
          <ProcessSteps
            steps={processSteps}
            darkMode={darkMode}
            isVisible={processVisible}
          />
        </div>

        <div ref={cardsRef}>
          <FeatureCards
            cards={featureCards}
            darkMode={darkMode}
            isVisible={cardsVisible}
          />
        </div>

        <RegisterCTA darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default LandingPage;
