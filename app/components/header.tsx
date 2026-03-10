import { Text } from '@mantine/core';

import styles from './header.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <Text size="lg" fw={700}>
        Blake Brdak
      </Text>
    </div>
  );
}
