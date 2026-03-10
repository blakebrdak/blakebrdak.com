import { Flex, Image, Stack, Text } from '@mantine/core';
import { LinkWithIcon } from './link-with-icon';

export function MainContent() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      align={{ base: 'start', sm: 'center' }}
      justify="center"
      gap="xl"
      h="100%"
    >
      <Image
        h={256}
        w={256}
        bd="1px solid rgb(73, 72, 72)"
        src="/me.jpeg"
        alt="Blake Brdak"
        radius="md"
        style={{
          boxShadow: '0 0 50px -12px rgb(93, 93, 93)',
        }}
      />
      <Stack gap="s" align="start" justify="start">
        <Text size="xl" fw={700}>
          Hi, I’m{' '}
          <Text span c="blue.4" fw={700}>
            Blake!
          </Text>
        </Text>
        <Text size="md">
          I build elegant solutions to complex problems. I’m passionate about
          beautiful software, smooth user experience, and continuous learning.
        </Text>
        <Text size="md">
          I’m currently a software engineer at{' '}
          <LinkWithIcon
            href="https://www.nutshell.com"
            label="Nutshell CRM"
            color="#FE5800"
          />
          !
        </Text>
        <Text size="md">
          You can find me on{' '}
          <LinkWithIcon
            href="https://www.linkedin.com/in/blake-brdak"
            label="LinkedIn"
            color="blue.4"
          />{' '}
          and{' '}
          <LinkWithIcon
            href="https://www.instagram.com/blakebrdak"
            label="Instagram"
            color="blue.4"
          />
          , or shoot me an email at{' '}
          <LinkWithIcon
            href="mailto:bbrdak@umich.edu"
            label="bbrdak@umich.edu"
            color="blue.4"
          />
          .
        </Text>
      </Stack>
    </Flex>
  );
}
