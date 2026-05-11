import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

const anchorEase = (t) => 1 - Math.pow(1 - t, 4);

export function SmoothScroll({ children }) {
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  if (reducedMotion) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.055,
        smoothWheel: true,
        wheelMultiplier: 0.88,
        touchMultiplier: 1.1,
        stopInertiaOnNavigate: true,
        allowNestedScroll: true,
        anchors: {
          offset: -88,
          duration: 1.55,
          easing: anchorEase,
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}
