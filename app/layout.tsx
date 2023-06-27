import Link from 'next/link';
import Head from './head';
import '../styles/globals.css';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          alt="logo"
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">
            Sean&rsquo;s Blog
          </h1>
        </Link>
        <p className="text-slate-300">🤟🏻 Welcome to me tech blog! 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-200 mt-12 py-12 text-center text-slate-500">
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
