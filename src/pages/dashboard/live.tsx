import {
    Box,
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
  
  export default function LiveCategories() {
    const [server, setServer] = useState('http://xcui.vitvabc.xyz:80');
    const [username, setUsername] = useState('287994000027');
    const [password, setPassword] = useState('287994000027');
    const [response, setResponse] = useState([]);
    const testLink = useMemo(
      () =>
        `${
          server +
          '/player_api.php?username=' +
          username +
          '&password=' +
          password +
          '&action=get_live_categories'
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
        <VStack>
          {response.map((item) => (
            <Box>
              <Text>{item.category_name}</Text>
            </Box>
          ))}
        </VStack>
      </Flex>
    );
  }
  