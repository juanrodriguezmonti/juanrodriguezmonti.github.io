import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chapter 2: Project Setup - FastAPI Book',
  description: 'Setting up your FastAPI development environment and project structure.',
};

export default function Chapter2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 