'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import chapterContent from '../content/chapter-8.json';
import { useEffect, useState } from 'react';
import CodeBlock from '@/app/components/CodeBlock';
import ExportPDFButton from '@/app/components/ExportPDFButton';

interface Section {
  title: string;
  content: string;
}

interface ChapterContent {
  title: string;
  sections: Section[];
}

interface ChapterData {
  en: ChapterContent;
  es: ChapterContent;
}

export default function Chapter8Page() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const content = (chapterContent as ChapterData)[lang];

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage') as 'en' | 'es' || 'en';
    setLang(savedLang);
  }, []);

  const handleLanguageChange = (newLang: string) => {
    setLang(newLang as 'en' | 'es');
    localStorage.setItem('preferredLanguage', newLang);
  };

  const renderContent = (content: string) => {
    const parts = content.split('```');
    return parts.map((part, index) => {
      if (index % 2 === 0) {
        // Texto normal: renderiza párrafos sin <br /> por cada línea
        return part.split('\n\n').map((paragraph, pIndex) => (
          <p key={pIndex} className="mb-4">
            {paragraph}
          </p>
        ));
      } else {
        // Bloque de código
        const [language, ...code] = part.split('\n');
        return (
          <div key={index} className="my-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
            <CodeBlock code={code.join('\n')} language={language} />
          </div>
        );
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Language Switcher */}
        <div className="flex justify-end mb-4">
          <select
            value={lang}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 text-sm"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>

        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300">
                {lang === 'en' ? 'Home' : 'Inicio'}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/fastapi-book" className="hover:text-gray-700 dark:hover:text-gray-300">
                {lang === 'en' ? 'Book' : 'Libro'}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-700 dark:text-gray-300">{content.title}</li>
          </ol>
        </nav>

        {/* Chapter Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium mb-4">
            {lang === 'en' ? 'Chapter' : 'Capítulo'} 8
          </span>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.title}
          </h1>
        </div>

        {/* Chapter Content */}
        <div id="main-content" className="max-w-4xl mx-auto space-y-12">
          <div className="flex justify-end mb-4">
            <ExportPDFButton chapterNumber={8} lang={lang} />
          </div>
          {content.sections.map((section: Section, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {section.title}
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                {renderContent(section.content)}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 max-w-4xl mx-auto">
          <Link
            href="/fastapi-book/chapter-7"
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{lang === 'en' ? 'Previous Chapter' : 'Capítulo Anterior'}</span>
          </Link>
          <Link
            href="/fastapi-book/chapter-9"
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <span>{lang === 'en' ? 'Next Chapter' : 'Siguiente Capítulo'}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
} 