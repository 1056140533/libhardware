import { ReactNode } from 'react'
import { Header } from '@/components/Header'
export interface LayoutProps {
  children?: ReactNode
}
export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <div>底部</div>
    </>
  )
}
