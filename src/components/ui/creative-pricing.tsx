import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: number;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
}

function CreativePricing({
    tag = "Simple Pricing",
    title = "Make Short Videos That Pop",
    description = "Edit, enhance, and go viral in minutes",
    tiers,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
}) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 relative">
            <div className="text-center space-y-4 mb-16">
                <div className="font-body text-sm text-primary uppercase tracking-wider">
                    {tag}
                </div>
                <h2 className="font-heading text-[48px] md:text-[64px] font-700 leading-[1.2] tracking-tight text-blue">
                    {title}
                </h2>
                <p className="font-body text-sm text-muted-foreground max-w-[480px] mx-auto">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className="relative group transition-all duration-300 flex flex-col"
                    >
                            <div
                                className={cn(
                                    "absolute inset-0 bg-blue",
                                "rounded-[8px]",
                                "transition-all duration-300",
                                "group-hover:shadow-raised"
                            )}
                        />

                        <div className="relative p-8 flex flex-col flex-1">
                            {tier.popular && (
                                <div
                                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground 
                                    font-body text-xs px-4 py-1 rounded-full"
                                >
                                    Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <div
                                    className={cn(
                                        "w-10 h-10 rounded-[8px] mb-4",
                                        "flex items-center justify-center",
                                        "bg-white/10",
                                    )}
                                >
                                    {tier.icon}
                                </div>
                                <h3 className="font-heading text-2xl font-700 text-primary-foreground">
                                    {tier.name}
                                </h3>
                                <p className="font-body text-sm text-primary-foreground/70 mt-1">
                                    {tier.description}
                                </p>
                            </div>

                            <div className="mb-6">
                                <span className="font-heading text-4xl font-700 text-primary-foreground">
                                    ${tier.price}
                                </span>
                                <span className="font-body text-sm text-primary-foreground/70 ml-1">
                                    /month
                                </span>
                            </div>

                            <div className="space-y-3 mb-8 flex-1">
                                {tier.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <Check className="w-4 h-4 text-primary-foreground shrink-0" />
                                        <span className="font-body text-sm text-primary-foreground">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={cn(
                                    "w-full h-12 font-body text-sm relative",
                                    tier.popular
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                        : "bg-background text-foreground hover:bg-accent"
                                )}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export { CreativePricing }
export type { PricingTier }
