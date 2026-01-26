import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chapter 6: Database Integration - FastAPI Book',
  description: 'Integrating databases with FastAPI applications.',
};

export default function Chapter6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 