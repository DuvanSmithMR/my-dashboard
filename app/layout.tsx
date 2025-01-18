import './globals.css';
import ReduxProvider from '../store/ReduxProvider';
import type { Metadata } from 'next';

export const metadata : Metadata = {
  title: 'Duvan Smith',
  description: 'App Next.js con Redux y TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}