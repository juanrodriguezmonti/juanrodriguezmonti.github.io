import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chapter 7: Testing - FastAPI Book',
  description: 'Testing FastAPI applications.',
};

export default function Chapter7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 