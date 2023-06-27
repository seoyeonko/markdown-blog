import Link from 'next/link';
import Head from './head';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">Sean&rsquo;s Blog</h1>
        </Link>
        <p className="text-slate-300">🤟🏻 Welcome to me tech blog! 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-500">
        <br />
        <h3>Developed by Sean</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <Head />
      <body>
        <div className="mx-auto max-w-4xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
