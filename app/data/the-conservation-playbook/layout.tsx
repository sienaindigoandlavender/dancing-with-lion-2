import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Conservation Playbook — Five Mechanisms, Ten Models, Four Success Stories | Dancing with Lions',
  description: 'Every working conservation programme in Africa shares the same structural DNA. Every failure is missing the same pieces. Rwanda gorillas, Namibia conservancies, Lion Guardians, Gorongosa restoration, African Parks network — scored, compared, and mapped. Investment-grade cultural intelligence by Dancing with Lions.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
