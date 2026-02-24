import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Cacao Equation — From Sacred Drink to $169 Billion Industry | Dancing with Lions',
  description: 'West Africa grows 70% of the world\'s cacao. Neither Côte d\'Ivoire nor Ghana had a single cacao tree before colonialism. Prices surged 400% to $12,900/ton in 2025. The Olmec drank it 3,500 years ago. Europe turned it into chocolate. Africa grows it. The margins stay north.',
  openGraph: {
    title: 'The Cacao Equation',
    description: 'West Africa grows 70% of the world\'s cacao but captures less than 6% of the $169B chocolate market. Prices surged 400% in 2024.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
