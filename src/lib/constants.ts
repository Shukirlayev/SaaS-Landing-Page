export const ANIMATION_DURATIONS = {
  FAST: 3,
  MEDIUM: 10,
  SLOW: 15,
  VERY_SLOW: 19,
} as const;

export const SCROLL_TRANSFORM_RANGES = {
  DEFAULT: [150, -150],
  LARGE: [200, -200],
  SMALL: [100, -100],
} as const;

export const NAVIGATION_LINKS = [
  { href: '#about', label: 'Biz haqimizda' },
  { href: '#features', label: 'Xususiyatlar' },
  { href: '#customers', label: 'Mijozlar' },
  { href: '#pricing', label: 'Narxlar' },
  { href: '#help', label: 'Yordam' },
] as const;

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com',
  instagram: 'https://instagram.com/Shukirlayev_',
  linkedin: 'https://linkedin.com',
  youtube: 'https://youtube.com',
} as const;
