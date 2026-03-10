import { MainContent } from './components/main-content';
import { Header } from './components/header';
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Container,
} from '@mantine/core';

export default function Home() {
  return (
    <AppShell padding="md">
      <AppShellHeader style={{ background: 'transparent', border: 'none' }}>
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <Container
          h={{
            base: 'auto',
            sm: 'calc(100vh - 60px - var(--mantine-spacing-md) * 2)',
          }}
          pt={{ base: 'xl', sm: 0 }}
        >
          <MainContent />
        </Container>
      </AppShellMain>
    </AppShell>
  );
}
