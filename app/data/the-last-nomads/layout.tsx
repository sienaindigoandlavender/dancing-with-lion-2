import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Last Nomads — Dancing with Lions',
  description: '12 nomadic peoples across 4 continents. 30–40 million humans still move with the seasons. Amazigh, Tuareg, Bedouin, Fulani, Maasai, Sámi, Mongolian, Sahrawi, Qashqai, Dukha, Kuchi, Rabari. Morocco\'s nomads declined 97% from 1935 to 2014. Data, decline, convergent patterns.',
  openGraph: {
    title: 'The Last Nomads — Dancing with Lions',
    description: '12 peoples. 4 continents. One ancient answer to how humans relate to land. 30–40 million still move. They are disappearing — not because the lifestyle failed, but because every border was drawn for people who stay put.',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
