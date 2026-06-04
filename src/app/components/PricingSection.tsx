import { Pencil, Star, Sparkles } from "lucide-react";
import { CreativePricing } from "@/components/ui/creative-pricing";
import type { PricingTier } from "@/components/ui/creative-pricing";

const tiers: PricingTier[] = [
  {
    name: "Starter",
    icon: <Pencil className="w-6 h-6 text-primary" />,
    price: 29,
    description: "For individuals getting started",
    color: "primary",
    features: [
      "1 Workspace",
      "10 Projects",
      "5GB Storage",
      "Basic Support",
    ],
  },
  {
    name: "Pro",
    icon: <Star className="w-6 h-6 text-primary" />,
    price: 79,
    description: "For serious creators & teams",
    color: "primary",
    features: [
      "5 Workspaces",
      "Unlimited Projects",
      "100GB Storage",
      "Priority Support",
      "Custom Branding",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    price: 149,
    description: "For organizations at scale",
    color: "primary",
    features: [
      "Unlimited Workspaces",
      "Advanced Analytics",
      "1TB Storage",
      "24/7 Dedicated Support",
      "SSO & SAML",
      "Custom Integrations",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 scroll-mt-14">
      <CreativePricing
        tag="Simple Pricing"
        title="Find Your Perfect Plan"
        description="No hidden fees. No surprises. Cancel anytime."
        tiers={tiers}
      />
    </section>
  );
}
