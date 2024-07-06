// components/PatientCard.js
import { Box, Text, Icon, VStack, HStack } from "@chakra-ui/react";
import { MdKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"

const PatientCard = ({ patients, iconColor, icons, percentage, comparisonText, bgColor, cardTitle }) => {
  return (
    <Box
      border="1px"
      borderColor="gray.100"
      borderRadius="md"
      p={4}
      boxShadow="sm"
      w="350px"
      h="175px"
      bg="white"
    >
      <HStack justify="space-between">
        <Text fontSize="lg" fontWeight="bold">{cardTitle}</Text>
        <div className="card-icon">
          <Icon as={icons} w={10} h={10} borderRadius="md" background={bgColor} p={2}  color={iconColor} />
        </div>
      </HStack>
      <VStack align="start" mt={4}>
        <div className="flex card-numbers">
          <Text className="" fontSize="3xl" fontWeight="bold">
            {patients.toLocaleString()}
          </Text>
          <div className="flex graph">
            <Icon as={percentage >= 0 ? MdOutlineKeyboardDoubleArrowUp : MdKeyboardDoubleArrowDown} w={4} h={4} color={percentage >= 0 ? "green.500" : "red.500"} />
            <Text fontSize="md" color={percentage >= 0 ? "green.500" : "red.500"}>
              {percentage >= 0 ? `${percentage}%` : `${Math.abs(percentage)}%`}
            </Text>
          </div>
        </div>
        <HStack>

          <Text fontSize="sm" color="gray.500">
            {comparisonText}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default PatientCard;
