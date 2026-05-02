import { HeroContent } from "@/components/sub/hero-content";
import Spline from "@splinetool/react-spline";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>

      <HeroContent />
    </div>
  );
};
