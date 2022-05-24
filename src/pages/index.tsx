import {
  Box,
  Flex,
  Spinner,
  Text
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w={'100%'} justify={'center'} h={'100vh'} alignItems={'center'}>
      <Box textAlign={'center'}>
        <Spinner />
        <Text>We are loading!</Text>
      </Box>
    </Flex>
  )
}
