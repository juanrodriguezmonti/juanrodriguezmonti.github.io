import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chapter 9: Deployment Strategies - FastAPI Book',
  description: 'Deploying FastAPI applications to production.',
};

export default function Chapter9Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 