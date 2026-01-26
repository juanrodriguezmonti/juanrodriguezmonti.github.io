'use client'

import { useEffect, useRef } from 'react'

// Configura tu App ID de Cusdis aquí (obténlo en https://cusdis.com)
const CUSDIS_APP_ID = '1c7356c7-6acc-41db-99f0-a5c4eaddd3af'

interface CusdisProps {
  pageId?: string
  pageUrl?: string
  pageTitle?: string
}

export default function Cusdis({
  pageId,
  pageUrl,
  pageTitle,
}: CusdisProps) {
  const commentsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!commentsRef.current || !CUSDIS_APP_ID) return

    // Limpiar cualquier contenido previo
    commentsRef.current.innerHTML = ''

    // Crear el div con los atributos exactamente como Cusdis lo espera
    const cusdisDiv = document.createElement('div')
    cusdisDiv.id = 'cusdis_thread'
    cusdisDiv.setAttribute('data-host', 'https://cusdis.com')
    cusdisDiv.setAttribute('data-app-id', CUSDIS_APP_ID)
    
    // Cusdis necesita pageId o pageUrl para identificar la página
    // Usamos pageId como identificador principal
    if (pageId) {
      cusdisDiv.setAttribute('data-page-id', String(pageId))
    }
    // pageUrl como respaldo
    if (pageUrl) {
      cusdisDiv.setAttribute('data-page-url', String(pageUrl))
    }
    if (pageTitle) {
      cusdisDiv.setAttribute('data-page-title', String(pageTitle))
    }
    
    commentsRef.current.appendChild(cusdisDiv)

    // Función para cargar el script
    const loadCusdis = () => {
      // Remover script existente si hay uno
      const existingScript = document.querySelector('script[src="https://cusdis.com/js/cusdis.es.js"]')
      if (existingScript) {
        existingScript.remove()
      }

      // Cargar el script de Cusdis
      const script = document.createElement('script')
      script.src = 'https://cusdis.com/js/cusdis.es.js'
      script.async = true
      script.defer = true
      
      // El script de Cusdis se inicializa automáticamente al cargar
      
      // El script debe estar en el body según la documentación de Cusdis
      document.body.appendChild(script)
    }

    // Pequeño delay para asegurar que el DOM esté listo
    // Esto es importante para que Cusdis pueda encontrar el div
    const timer = setTimeout(loadCusdis, 100)

    return () => {
      clearTimeout(timer)
      // Cleanup: remover el div y el script
      if (commentsRef.current) {
        commentsRef.current.innerHTML = ''
      }
      const scriptToRemove = document.querySelector('script[src="https://cusdis.com/js/cusdis.es.js"]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [pageId, pageUrl, pageTitle])

  if (!CUSDIS_APP_ID) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
        <p>Comments are disabled.</p>
        <p className="mt-2">
          <a href="https://cusdis.com" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline">
            Get your free Cusdis ID →
          </a>
        </p>
        <p className="mt-2 text-xs">Then add it to <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">components/cusdis.tsx</code></p>
      </div>
    )
  }

  return <div ref={commentsRef} className="mt-8" />
}
