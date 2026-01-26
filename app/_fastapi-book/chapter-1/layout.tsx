import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chapter 1: Introduction to FastAPI - FastAPI Book',
  description: 'Learn the basics of FastAPI and its key features.',
};

export default function Chapter1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 