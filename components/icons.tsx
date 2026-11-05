import React from 'react';

type IconProps = { className?: string; strokeWidth?: number };

const Icon = ({ className, strokeWidth = 1.75, children }: IconProps & { children: React.ReactNode }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const MenuIcon = (p: IconProps) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h10" /></Icon>;
export const CloseIcon = (p: IconProps) => <Icon {...p}><path d="M6 18 18 6M6 6l12 12" /></Icon>;
export const GlobeIcon = (p: IconProps) => (
  <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></Icon>
);
export const ChevronDownIcon = (p: IconProps) => <Icon {...p}><path d="m6 9 6 6 6-6" /></Icon>;
export const ArrowUpRightIcon = (p: IconProps) => <Icon {...p}><path d="M7 17 17 7M8 7h9v9" /></Icon>;
export const ArrowRightIcon = (p: IconProps) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;
export const ArrowLeftIcon = (p: IconProps) => <Icon {...p}><path d="M19 12H5M11 18l-6-6 6-6" /></Icon>;
export const SearchIcon = (p: IconProps) => <Icon {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Icon>;
export const CheckIcon = (p: IconProps) => <Icon {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></Icon>;
export const MegaphoneIcon = (p: IconProps) => (
  <Icon {...p}><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1ZM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" /></Icon>
);
export const ShieldCheckIcon = (p: IconProps) => (
  <Icon {...p}><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z" /><path d="m8.8 12.2 2.2 2.2 4.3-4.4" /></Icon>
);
export const LightBulbIcon = (p: IconProps) => (
  <Icon {...p}><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1.1 2V16h5v-.2c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3Z" /></Icon>
);
export const UsersIcon = (p: IconProps) => (
  <Icon {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.2A6.5 6.5 0 0 1 21.5 20" /></Icon>
);
export const HeartIcon = (p: IconProps) => (
  <Icon {...p}><path d="M12 20s-7.5-4.4-7.5-10.1A4.4 4.4 0 0 1 12 7.1a4.4 4.4 0 0 1 7.5 2.8C19.5 15.6 12 20 12 20Z" /></Icon>
);
export const ChatBubbleIcon = (p: IconProps) => (
  <Icon {...p}><path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.1A8 8 0 1 1 20 12Z" /><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth={2.5} /></Icon>
);
export const SendIcon = (p: IconProps) => <Icon {...p}><path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" /></Icon>;
export const SpinnerIcon = ({ className }: IconProps) => (
  <svg className={`animate-spin ${className ?? ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4Z" />
  </svg>
);
export const MapPinIcon = (p: IconProps) => (
  <Icon {...p}><path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></Icon>
);
export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}><path d="M5 4h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.1 6.1l1.4-2.3L20 15.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></Icon>
);
export const MailIcon = (p: IconProps) => (
  <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></Icon>
);
export const TabletIcon = (p: IconProps) => (
  <Icon {...p}><circle cx="12" cy="12" r="8" /><path d="M6.5 17.5 17.5 6.5" /></Icon>
);
export const CapsuleIcon = (p: IconProps) => (
  <Icon {...p}><path d="M10.5 20.5a5 5 0 0 1-7-7l6-6a5 5 0 0 1 7 7l-6 6Z" /><path d="m7 10.5 6.5 6.5" /></Icon>
);
export const SachetIcon = (p: IconProps) => (
  <Icon {...p}><path d="M6 3h12l-1 3v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6L6 3Z" /><path d="M7 6h10M10 12h4M12 10v4" /></Icon>
);
export const FlaskIcon = (p: IconProps) => (
  <Icon {...p}><path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" /><path d="M7 15h10" /></Icon>
);
export const AwardIcon = (p: IconProps) => (
  <Icon {...p}><circle cx="12" cy="9" r="6" /><path d="m8.5 14 -1.5 7 5-2.5 5 2.5-1.5-7" /></Icon>
);
export const SparkleIcon = (p: IconProps) => (
  <Icon {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></Icon>
);
export const TrendingUpIcon = (p: IconProps) => <Icon {...p}><path d="m3 17 6-6 4 4 8-8M15 7h6v6" /></Icon>;
export const BookIcon = (p: IconProps) => (
  <Icon {...p}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" /><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" /></Icon>
);
export const BriefcaseIcon = (p: IconProps) => (
  <Icon {...p}><rect x="3" y="7" width="18" height="13" rx="2.5" /><path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7M3 13h18" /></Icon>
);
export const MicroscopeIcon = (p: IconProps) => (
  <Icon {...p}><path d="M6 21h12M9 17h6M12 17a5 5 0 0 0 5-5M10 4l4 2-3 6-4-2 3-6ZM8.5 11 7 14" /></Icon>
);
export const AtomIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="1.5" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(120 12 12)" />
  </Icon>
);
export const GlobeGridIcon = GlobeIcon;
