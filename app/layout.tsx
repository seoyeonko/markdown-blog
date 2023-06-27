import Link from 'next/link';
import Head from './head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <Link href="/">
          <h1>Sean&rsquo;s Blog</h1>
        </Link>
        <p>🤟🏻 Welcome to me tech blog! 💻</p>
        <br />
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Developed by Sean</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <Head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
