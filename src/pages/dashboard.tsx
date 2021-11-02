import {
  Box,
  Code,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';

export default function Player() {
  const [server, setServer] = useState('http://xcui.vitvabc.xyz:80');
  const [username, setUsername] = useState('287994000027');
  const [password, setPassword] = useState('287994000027');
  const [response, setResponse] = useState({ a: 'a' });
  const testLink = useMemo(
    () =>
      `${
        server +
        '/player_api.php?username=' +
        username +
        '&password=' +
        password
      }`,
    [server, username, password]
  );

  useEffect(() => {
    fetch(testLink)
      .then((resRawData) => resRawData.json())
      .then((data) => {
        setResponse(data);
      });
  }, [server, username, password]);

  return (
    <Flex
      align="center"
      justify="center"
      placeContent="center"
      direction="column"
    >
      <Heading>Savilflix player</Heading>
      <Stack>
        <Input
          value={server}
          onChange={(event) => setServer(event.currentTarget.value)}
        />
        <Input
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
        <Input
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <Text>{testLink}</Text>
      </Stack>
      <Code overflow="scroll" width="100%">
        {JSON.stringify(response)}
      </Code>
    </Flex>
  );
}
