import { ReactNode } from 'react'
export interface LayoutProps {
    children?: ReactNode
}
export default function Layout({ children }:LayoutProps) {
    return (
        <>
            <div>头</div>
            <main>{children}</main>
            <div>底部</div>
        </>
    )
}