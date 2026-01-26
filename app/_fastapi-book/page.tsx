'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FastAPIBookPage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLang(savedLang);
  }, []);

  const handleLanguageChange = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem('preferredLanguage', newLang);
  };

  const chapters = [
    {
      number: 1,
      title: {
        en: 'Introduction to FastAPI',
        es: 'Introducción a FastAPI',
      },
      description: {
        en: 'Learn the basics of FastAPI and its key features.',
        es: 'Aprende los conceptos básicos de FastAPI y sus características principales.',
      },
    },
    {
      number: 2,
      title: {
        en: 'Project Setup',
        es: 'Configuración del Proyecto',
      },
      description: {
        en: 'Setting up your FastAPI development environment and project structure.',
        es: 'Configuración del entorno de desarrollo FastAPI y estructura del proyecto.',
      },
    },
    {
      number: 3,
      title: {
        en: 'Basic Routing',
        es: 'Enrutamiento Básico',
      },
      description: {
        en: 'Learn how to create and manage routes in FastAPI applications.',
        es: 'Aprende a crear y gestionar rutas en aplicaciones FastAPI.',
      },
    },
    {
      number: 4,
      title: {
        en: 'Request and Response Models',
        es: 'Modelos de Solicitud y Respuesta',
      },
      description: {
        en: 'Working with request and response models in FastAPI applications.',
        es: 'Trabajando con modelos de solicitud y respuesta en aplicaciones FastAPI.',
      },
    },
    {
      number: 5,
      title: {
        en: 'Authentication and Authorization',
        es: 'Autenticación y Autorización',
      },
      description: {
        en: 'Implementing authentication and authorization in FastAPI applications.',
        es: 'Implementación de autenticación y autorización en aplicaciones FastAPI.',
      },
    },
    {
      number: 6,
      title: {
        en: 'Database Integration',
        es: 'Integración con Base de Datos',
      },
      description: {
        en: 'Integrating databases with FastAPI applications.',
        es: 'Integración de bases de datos con aplicaciones FastAPI.',
      },
    },
    {
      number: 7,
      title: {
        en: 'Testing',
        es: 'Pruebas',
      },
      description: {
        en: 'Testing FastAPI applications.',
        es: 'Pruebas de aplicaciones FastAPI.',
      },
    },
    {
      number: 8,
      title: {
        en: 'Documentation',
        es: 'Documentación',
      },
      description: {
        en: 'Documenting FastAPI applications.',
        es: 'Documentación de aplicaciones FastAPI.',
      },
    },
    {
      number: 9,
      title: {
        en: 'Deployment Strategies',
        es: 'Estrategias de Despliegue',
      },
      description: {
        en: 'Deploying FastAPI applications to production.',
        es: 'Despliegue de aplicaciones FastAPI en producción.',
      },
    },
    {
      number: 10,
      title: {
        en: 'Best Practices',
        es: 'Mejores Prácticas',
      },
      description: {
        en: 'Best practices for building FastAPI applications.',
        es: 'Mejores prácticas para construir aplicaciones FastAPI.',
      },
    },
  ];

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
            <li className="text-gray-700 dark:text-gray-300">
              {lang === 'en' ? 'FastAPI Book' : 'Libro de FastAPI'}
            </li>
          </ol>
        </nav>

        {/* Book Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {lang === 'en' ? 'FastAPI Book' : 'Libro de FastAPI'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {lang === 'en'
              ? 'A comprehensive guide to building modern web applications with FastAPI'
              : 'Una guía completa para construir aplicaciones web modernas con FastAPI'}
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {chapters.map((chapter) => (
            <Link
              key={chapter.number}
              href={`/fastapi-book/chapter-${chapter.number}`}
              className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">
                  {lang === 'en' ? 'Chapter' : 'Capítulo'} {chapter.number}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {chapter.title[lang as 'en' | 'es']}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {chapter.description[lang as 'en' | 'es']}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 