"use client";
import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05,      // Más bajo = más suave y lento (0.1 era muy rápido)
        duration: 1.2,   // Duración del movimiento
        smoothWheel: true,
        wheelMultiplier: 1, // Sensibilidad de la ruedita
        touchMultiplier: 2, // Sensibilidad en móviles
      }}
    >
      {children}
    </ReactLenis>
  );
};