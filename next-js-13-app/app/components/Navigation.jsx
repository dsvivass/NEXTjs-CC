import Link from 'next/link'

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Blog',
    route: '/blog',
  },
  {
    label: 'Contact',
    route: '/contact',
  },
]

const Navigation = () => {
    return (
        <header>
          <nav>
            <ul>
              {links.map(({ label, route }) => (
                <li key={label}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
}

export default Navigation