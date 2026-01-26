import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chapter 8: Documentation - FastAPI Book',
  description: 'Documenting FastAPI applications.',
};

export default function Chapter8Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 