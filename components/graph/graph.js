// components/PatientChart.js
import dynamic from 'next/dynamic';
import { Box, Text, VStack, HStack, Icon, Select } from "@chakra-ui/react";
import { MdKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"
import { RiArrowDownSLine, RiArrowUpSFill } from 'react-icons/ri';
import { FaAngleDown } from 'react-icons/fa';

// Dynamically import react-apexcharts with SSR disabled
const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const Graph = ({ title, totalPatients, percentage, chartData, chartOptions }) => {
    return (
        <Box border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm" w="100%">
            <HStack justify="space-between">
                <VStack align="start">
                    <Text fontSize="lg" fontWeight="bold">{title}</Text>
                    <Text fontSize="sm" color="gray.500">Total Patients</Text>
                    <HStack>
                        <Text fontSize="3xl" fontWeight="bold">{totalPatients}</Text>
                        <HStack>
                            <div className="flex graph chart">
                                <Icon as={percentage >= 0 ? MdOutlineKeyboardDoubleArrowUp : MdKeyboardDoubleArrowDown} w={4} h={4} color={percentage >= 0 ? "green.500" : "red.500"} />
                                <Text fontSize="md" color={percentage >= 0 ? "green.500" : "red.500"}>
                                    {percentage >= 0 ? `${percentage}%` : `${Math.abs(percentage)}%`}
                                </Text>
                            </div>
                        </HStack>
                    </HStack>
                </VStack>
                <Box position="relative" display="inline-block">
                    <Select
                        size="sm"
                        w="150px"
                        pr="5"
                    // Custom arrow component
                    >
                        <option value="last12months">Last 12 months</option>
                        <option value="last6months">Last 6 months</option>
                        <option value="last3months">Last 3 months</option>
                    </Select>
                </Box>
            </HStack>
            <Chart options={chartOptions} series={chartData} type="line" height="350" />
        </Box>
    );
};

export default Graph;
