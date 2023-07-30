export const metadata = {
  title: 'DFO',
  description: 'DFO Tay Ninh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
