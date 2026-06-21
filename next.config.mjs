import nextra from 'nextra'

const withNextra = nextra({
  search: {
    codeblocks: false
  }
})

export default withNextra({
  reactStrictMode: true,
  // SSR deploy: produce a self-contained server bundle in .next/standalone
  // that smbCloud rsyncs and runs under PM2 (nextjs-ssr flow).
  output: 'standalone'
})
