import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chapter 4: Request and Response Models - FastAPI Book',
  description: 'Working with request and response models in FastAPI applications.',
};

export default function Chapter4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 