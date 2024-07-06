import { useState } from 'react';
import {
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Table as ChakraTable, // Rename the imported Table component alias
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Checkbox,
    IconButton,
    Button,
} from '@chakra-ui/react'; // Ensure you import from '@chakra-ui/react'


import { IoChevronDownCircleOutline, IoChevronUpCircleOutline } from 'react-icons/io5';
import { FaSortAmountDown } from 'react-icons/fa';
import { CiCalendar, CiClock2 } from 'react-icons/ci';
import { RiExpandUpDownFill } from 'react-icons/ri';
import Image from 'next/image';

const Table = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (index) => {
        setTabIndex(index);
    };

    return (
        <Box p={4}>
            <Box display="flex" width="58%" justifyContent="space-between" alignItems="center" mb={4}>
                <Box>
                    <h2>Appointments</h2>
                </Box>
                <Box className='table-title-box'>
                    <Button className='today-btn' leftIcon={<FaSortAmountDown />} color='black' colorScheme='white' variant='solid'>
                        Most Recent
                    </Button>
                    <Button className='today-btn' leftIcon={<CiCalendar />} color='black' colorScheme='white' variant='solid'>
                        12May,24
                    </Button>
                </Box>
            </Box>

            <Tabs index={tabIndex} onChange={handleTabChange}>
                <TabList className='table-tab'>
                    <Tab color={"#0756FF"} bg={"#CDDDFF"}>All</Tab>
                    <Tab>Urgent</Tab>
                    <Tab>Follow-Up</Tab>
                    <Tab>New Patient</Tab>
                    <Tab>Completed</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        {/* Use the renamed ChakraTable component */}
                        <ChakraTable variant="striped" colorScheme="gray">
                            <Thead>
                                <Tr className='table-heading'>

                                    <Th className='flex '>
                                        <span>
                                            Patient
                                        </span>
                                        <div>
                                            <RiExpandUpDownFill />
                                        </div>
                                    </Th>
                                    <Th className='flex '>
                                        <span>
                                            Date
                                        </span>
                                        <div>
                                            <RiExpandUpDownFill />
                                        </div>
                                    </Th>
                                    <Th className='flex '>
                                        <span>
                                            Time
                                        </span>
                                        <div>
                                            <RiExpandUpDownFill />
                                        </div>
                                    </Th>
                                    <Th className='flex '>
                                        <span>
                                            Type
                                        </span>
                                        <div>
                                            <RiExpandUpDownFill />
                                        </div>
                                    </Th>
                                    <Th className='flex '>
                                        <span>
                                            Status
                                        </span>
                                        <div>
                                            <RiExpandUpDownFill />
                                        </div>
                                    </Th>
                                    <Th className='flex '>
                                        <span>
                                            Doctor
                                        </span>
                                        <div>
                                            <RiExpandUpDownFill />
                                        </div>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {/* Replace with dynamic data mapping */}
                                <Tr className='table-data'>

                                    <Td className='table-data-row-1'>
                                        <img className='table-data-profile' src='https://s3-alpha-sig.figma.com/img/bcb8/4747/80a72bd698ae8958c20f6413befd5b01?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhloFzXUGGPsdo84vEz14wqmQbj1G3MBGfmfVT7GI3RWrXDGyAuxY2gl5GL~9YqhcUyZjrhRHSefVL0XSAZZvogGEYz5gxo8xoxCvjD22TiuHjnpMYRGoQCuqzY1wBNfKtT54j92MKL6C8l7lcyD5xrCd2c5vkAFhE4Ddj4I~2HmJR8nAG3yEXKIM0C1J~CR9ouypmSlW4jajMb~jl5ix1uZpV8ENWyG8UM83tE4G2lFjxV4iUxpJbLm6M09cSfyCO2cP9ZW~wS-FDa1fnfb4rO5isGECZ1yHQ64TR1eWvcBRvrI8~3Lb0VxY93BS7SSyvFXgoM7FsWsNz1f-zyp2g__' />
                                        <span>Adwaith M.aref</span></Td>
                                    <Td className='table-data-row-2'>
                                        <span><CiCalendar /></span>
                                        16May,2024</Td>
                                    <Td className='table-data-row-3'>
                                        <span><CiClock2 /></span>
                                        02:00-03:00</Td>
                                    <Td className='table-data-row-4'>Follow-Up</Td>
                                    <Td className='table-data-row-5'>
                                        <span>Completed</span>
                                    </Td>
                                    <Td className='table-data-row-6'>Omar Ryad</Td>
                                </Tr>
                            </Tbody>
                        </ChakraTable>
                    </TabPanel>
                    {/* Add more TabPanels for each tab */}
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default Table;
