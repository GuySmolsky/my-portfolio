import { keyframes } from "@mui/system";

// Pulse animation for the eye icon
export const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

// Shimmer effect for loading or coming soon cards
export const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

// Bounce effect for status badges
export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-3px); }
  60% { transform: translateY(-2px); }
`;

// Glow effect for tech tags
export const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.3); }
  50% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.6); }
`;

// Float animation (ADD THIS)
export const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
`;
