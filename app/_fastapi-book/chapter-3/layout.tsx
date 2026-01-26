import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chapter 3: Basic Routing - FastAPI Book',
  description: 'Learn how to create and manage routes in FastAPI applications.',
};

export default function Chapter3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 