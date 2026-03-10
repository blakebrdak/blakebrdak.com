'use client';

import { MainContent } from './components/main-content';
import { Header } from './components/header';
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Container,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <AppShell padding="md" header={{ height: isMobile ? 35 : 70 }}>
      <AppShellHeader
        style={{
          background: 'transparent',
          border: 'none',
          position: isMobile ? 'relative' : 'fixed',
          padding: 0,
        }}
      >
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <Container
          h={{
            base: 'auto',
            sm: 'calc(100vh - 60px - var(--mantine-spacing-md) * 2)',
          }}
          pb="64px"
        >
          <MainContent />
        </Container>
      </AppShellMain>
    </AppShell>
  );
}
