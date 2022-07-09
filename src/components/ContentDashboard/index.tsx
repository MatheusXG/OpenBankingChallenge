import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat as ChakraStat,
  StatProps as ChakraStatProps,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

import {
  FiDollarSign,
  FiArrowUp,
  FiArrowDown,
} from 'react-icons/fi';
import TableTransactions from '../TableTransactions';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
  bg?: string;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon, bg } = props;
  return (
    <ChakraStat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}      
      bg={bg}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} >
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </ChakraStat>
  );
}

export default function Content() {
  
    return (
    <>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Controle de transações da sua conta.
        </chakra.h1>
        <SimpleGrid pb={20} columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            bg={'white'}
            title={'Entrada'}
            stat={'R$ 12.800,00'}
            icon={<FiArrowUp size={'3em'} color='#33CC95'/>}
          />
          <StatsCard
            bg={'white'}
            title={'Saída'}
            stat={'R$ 3.138,00'}
            icon={<FiArrowDown size={'3em'} color='red' />}
          />
          <StatsCard
            bg={'#33CC95'}
            title={'Total'}
            stat={'R$ 9.662,00'}
            icon={<FiDollarSign size={'3em'} />}
          />
        </SimpleGrid>

        <TableTransactions />

      </Box>
      
     
    </>
  );
}