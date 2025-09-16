import { keyframes } from "@mui/system";

// Glitch animation keyframes
export const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

// Pulse animation
export const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(0, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0); }
`;

// Floating animation
export const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
`;

// Neon glow animation
export const neonGlow = keyframes`
  0%, 100% { 
    text-shadow: 
      0 0 5px #00ffff,
      0 0 10px #00ffff,
      0 0 15px #00ffff;
  }
  50% { 
    text-shadow: 
      0 0 2px #00ffff,
      0 0 5px #00ffff,
      0 0 8px #00ffff;
  }
`;
