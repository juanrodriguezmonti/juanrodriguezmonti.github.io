import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const rehypePrettyCodeOptions = {
  theme: {
    dark: 'github-dark',
    light: 'github-light'
  },
  keepBackground: true,
  defaultLang: 'plaintext',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{type: 'text', value: ' '}]
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('line--highlighted')
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word--highlighted']
  },
  filterMetaString: (string) => string.replace(/filename="[^"]*"/, '')
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
})

export default withMDX(nextConfig)