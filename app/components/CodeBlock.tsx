'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      customStyle={{ marginTop: 0, marginBottom: 0, borderRadius: '0.5rem', padding: '1rem', background: '#2d2d2d' }}
      codeTagProps={{ style: { fontSize: '0.875rem', lineHeight: 1.5, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' } }}
      showLineNumbers={false}
      wrapLongLines={true}
    >
      {code}
    </SyntaxHighlighter>
  );
} 