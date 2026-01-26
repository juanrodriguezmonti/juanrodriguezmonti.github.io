import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chapter 5: Authentication and Authorization - FastAPI Book',
  description: 'Implementing authentication and authorization in FastAPI applications.',
};

export default function Chapter5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 