import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chapter 10: Best Practices - FastAPI Book',
  description: 'Best practices for building FastAPI applications.',
};

export default function Chapter10Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 