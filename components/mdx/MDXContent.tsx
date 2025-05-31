import { MDXRemote } from 'next-mdx-remote/rsc'
import { cn } from '@/lib/utils'

interface MDXContentProps {
  source: string
  className?: string
}

export function MDXContent({ source, className }: MDXContentProps) {
  return (
    <article className={cn(
      'prose prose-lg dark:prose-invert max-w-none',
      // Base styles
      'bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-red-100 dark:border-red-900/30',
      // Headings
      'prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold',
      // Paragraphs
      'prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed',
      // Links
      'prose-a:text-red-600 hover:prose-a:text-red-700 dark:prose-a:text-red-400 dark:hover:prose-a:text-red-300',
      // Strong text
      'prose-strong:text-gray-900 dark:prose-strong:text-white',
      // Inline code
      'prose-code:text-red-600 dark:prose-code:text-red-400 prose-code:bg-red-50 dark:prose-code:bg-red-900/10 prose-code:rounded-md prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none',
      // Code blocks
      'prose-pre:bg-[#0d1117] dark:prose-pre:bg-[#0d1117] prose-pre:border-0 prose-pre:shadow-lg prose-pre:p-0 prose-pre:my-8',
      '[&_pre]:!bg-[#0d1117] [&_pre]:overflow-x-auto [&_pre]:scrollbar-thin [&_pre]:scrollbar-thumb-gray-700 [&_pre]:scrollbar-track-gray-900',
      '[&_pre_code]:!text-gray-200 dark:[&_pre_code]:!text-gray-200 [&_pre_code]:!bg-transparent [&_pre_code]:p-6 [&_pre_code]:block',
      // Code block language tag
      '[&_pre]:relative',
      '[&_pre]:before:absolute [&_pre]:before:top-3 [&_pre]:before:right-6 [&_pre]:before:px-3 [&_pre]:before:py-1.5',
      '[&_pre]:before:text-xs [&_pre]:before:font-mono [&_pre]:before:text-gray-400 [&_pre]:before:bg-gray-800/50',
      '[&_pre]:before:rounded-md [&_pre]:before:content-[attr(data-language)]',
      // Syntax highlighting
      '[&_pre_.line--highlighted]:bg-gray-800/50 [&_pre_.line--highlighted]:shadow-[2px_0_0_0_#f43f5e_inset]',
      '[&_pre_.word--highlighted]:bg-gray-800/50 [&_pre_.word--highlighted]:rounded',
      // Line numbers
      '[&_pre>code]:counter-reset-[line]',
      '[&_pre>code_._]:before:text-gray-500 [&_pre>code_._]:before:mr-6 [&_pre>code_._]:before:inline-block [&_pre>code_._]:before:w-4 [&_pre>code_._]:before:text-right',
      // Blockquotes
      'prose-blockquote:border-red-500 prose-blockquote:bg-red-50 dark:prose-blockquote:bg-red-900/10 prose-blockquote:py-1 prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300',
      // Lists
      'prose-li:text-gray-700 dark:prose-li:text-gray-300',
      // Images
      'prose-img:rounded-xl prose-img:shadow-sm prose-img:border prose-img:border-red-100 dark:prose-img:border-red-900/30',
      // Custom spacing
      'prose-p:my-4 prose-headings:mt-8 prose-headings:mb-4',
      className
    )}>
      <MDXRemote source={source} />
    </article>
  )
} 