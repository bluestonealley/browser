"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";

export default function CTA() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-[1280px] mx-auto px-4 text-center">
        <h2 className="font-heading text-[64px] font-700 text-blue leading-[1.2]">
          Ready to browse differently?
        </h2>
        <p className="font-body text-sm text-primary-foreground/80 max-w-[480px] mx-auto mt-4 leading-relaxed">
          Join millions who have already switched. Free on macOS, Windows, and iOS.
        </p>
        <MagneticButton>
          <RippleButton
            className="!bg-primary-foreground !text-primary !rounded-[8px] font-body text-sm mt-10 px-8 py-4 shadow-raised"
            rippleColor="rgba(245,158,11,0.2)"
          >
            Download free
          </RippleButton>
        </MagneticButton>
      </div>
    </section>
  );
}
