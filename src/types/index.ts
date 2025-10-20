export interface NavigationLink {
  href: string;
  label: string;
}

export interface Testimonial {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

export interface PricingTier {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
