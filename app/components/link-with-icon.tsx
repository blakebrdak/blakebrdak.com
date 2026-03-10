import { Text } from '@mantine/core';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Props {
  href: string;
  label: string;
  color: string;
}

export function LinkWithIcon(props: Props) {
  return (
    <Text span c={props.color} fw={700}>
      <Link
        target="_blank"
        href={props.href}
        style={{
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        {props.label}
        <ExternalLink size={16} />
      </Link>
    </Text>
  );
}
