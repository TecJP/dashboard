import { FormatCurrency } from "@/utils/FormatCurrency";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

type CardProps = {
  title: string;
  amount: string;
  description: string;
  lastMonthAmount: string;
}

export function Card({ title, amount, description, lastMonthAmount }: CardProps) {
  return (
    <Box
      w="100%"
      h="100%"
      bg="teal.50"
      boxShadow="md"
      rounded="15"
      overflow="hidden"
      mb="2"
      mr="2"
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
    >
      <Box
        bg="teal.400"
        w="0.8rem"
      >
      </Box>
      <Flex w="100%" mt="2" mb="2" direction="column">
        <Heading
          pr="4"
          pl="2"
          fontSize="20px"
          fontWeight="500"
        >
          {title}
        </Heading>
        <Text
          pr="4"
          pl="2"
          fontSize="30px"
          fontWeight="500"
        >
          {FormatCurrency(amount)}
        </Text>
        <Text
          pr="4"
          pl="2"
          fontSize="15px"
          fontWeight="500"
        >
          {description}
        </Text>
        <Text
          pr="4"
          pl="2"
          display="flex"
          alignItems="center"
        >
          {FormatCurrency(lastMonthAmount)}
          {Number(amount).toFixed(2) < Number(lastMonthAmount).toFixed(2) ?
            <ArrowUpIcon w={5} h={5} m="0.5" p="0" color="green" />
            :
            <ArrowDownIcon w={5} h={5} m="0.5" p="0" color="red" />}
        </Text>
      </Flex>
    </Box>
  );
}