import Link from 'next/link'

export default function Header() {
    return (
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/mail">Mail</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/status">Status</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
