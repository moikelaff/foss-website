import DocumentFixes from './DocumentFixes'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DocumentFixes />
      {children}
    </>
  )
}