import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function SplitScreen() {
  const isWide = useBreakpointValue({
    base: false,
    lg: true, 
  })
  return (
    <Stack minH={'94.1vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '20%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#a1887f',
                zIndex: -1,
              }}>
              TaosBank
            </Text>
            <br />{' '}
            <Text color={'#795548'} as={'span'}>
              Banco Digital
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Este banco foi projetado pensando em você, que quer o melhor para o seu dinheiro.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'#795548'}
              color={'white'}
              _hover={{
                bg: '#795548',
              }}>
              Entrar
            </Button>
            <Button rounded={'full'}>Cadastrar-se</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        {!isWide && (
          ''
        )}
        {isWide && (
          <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'src/assets/banco-digital.jpg'
          }
        />
        )}
        
      </Flex>
    </Stack>
  );
}