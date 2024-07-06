import { Box, Button, Icon, Text, VStack, HStack, Divider, Select, Flex } from '@chakra-ui/react';
import { FaFileExcel } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineMail } from 'react-icons/md';

const RightSideBox = () => {
    return (
        <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
            {/* Title and Button */}
            <HStack justifyContent="space-between" mb={4}>
                <Text fontSize="xl" fontWeight="bold">Tasks</Text>
                <Button className='task-button' colorScheme="#000000">Today</Button>
            </HStack>

            {/* Email Section */}

            <VStack align="start" spacing={2} mb={4}>
                <div className='flex justify-between email-box'>
                    <div className='flex gap-5'>
                        <div>
                            <MdOutlineMail />
                        </div>
                        <div>
                            <div>
                                <span>Reminder Email</span>

                            </div>
                            <div>
                                <span>Reminder Email</span>
                            </div>
                        </div>
                        <div>
                        <Button className='task-button' colorScheme="#000000"><IoIosArrowDown /></Button>
                        </div>
                    </div>

                </div>
            </VStack>


            <Divider mb={4} />

            {/* Description Section */}
            <VStack align="start" spacing={2} mb={4}>
                <Text fontSize="lg" fontWeight="bold">Description</Text>
                <Text fontSize="md">Send a reminder email to all nurses to ensure they will attend on time for the operation</Text>
            </VStack>

            {/* Attachment Section */}
            <Flex align="start" gap={5} spacing={2}>
                <Box p={2} borderWidth={1} borderRadius="md" w="full" display="flex" alignItems="center">
                    <Icon as={FaFileExcel} mr={2} />
                    <Text>Operation Info.xls</Text>
                </Box>
                <Box p={2} borderWidth={1} borderRadius="md" w="full" display="flex" alignItems="center">
                    <Icon as={FaFileExcel} mr={2} />
                    <Text>Operation Info.xls</Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default RightSideBox;
