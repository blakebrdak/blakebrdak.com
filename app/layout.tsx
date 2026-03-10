import type { Metadata } from 'next';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@fontsource/commit-mono/400.css';
import '@fontsource/commit-mono/700.css';

import './globals.css';
import { MANTINE_THEME } from './consts';

export const metadata: Metadata = {
  title: 'Blake Brdak | SWE',
  description:
    'Software engineer building elegant solutions to complex problems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
      <body>
        <MantineProvider forceColorScheme="dark" theme={MANTINE_THEME}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
