// Types for animation elements
export interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  animationDuration: number;
}

export interface Candy {
  id: number;
  left: number;
  top: number;
  rotate: number;
  size: number;
  animationDuration: number;
  type: number;
}

// Generate random stars for the background
export const generateStars = (count: number = 50): Star[] => {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 0.5 + Math.random() * 2,
      animationDuration: 3 + Math.random() * 7,
    });
  }
  return stars;
};

// Generate random candy elements for the background
export const generateCandies = (count: number = 25): Candy[] => {
  const candies: Candy[] = [];
  for (let i = 0; i < count; i++) {
    candies.push({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      rotate: Math.random() * 360,
      size: 1 + Math.random() * 3,
      animationDuration: 15 + Math.random() * 30,
      type: Math.floor(Math.random() * 5),
    });
  }
  return candies;
};

// CSS animation keyframes as template literals for styled-components or CSS-in-JS
export const animationKeyframes = `
    @keyframes twinkle {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.8; }
    }
    
    @keyframes float {
      0% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(10deg); }
      100% { transform: translateY(0) rotate(0deg); }
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes moveCloud {
      0% { transform: translateX(-5%); }
      100% { transform: translateX(5%); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
