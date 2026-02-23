import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Vertical Migration — Transhumance in the Atlas | Dancing with Lions',
  description: 'The agdal is a 4,500-year-old ecological governance system. Close the mountain in spring. Open it in summer. Repeat for millennia. At Igourdane, 500 families made the journey in the 1980s. In 2018, 17 did.',
  openGraph: {
    title: 'The Vertical Migration — Transhumance in the Atlas',
    description: '4,500 years of vertical migration in the Atlas Mountains. 6 named agdals, 3,000+ rock engravings, and a 97% collapse in one generation.',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
