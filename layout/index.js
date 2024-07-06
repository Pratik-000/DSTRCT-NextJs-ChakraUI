import SearchBar from '@/components/searchBar'
import Graph from '@/components/graph/graph'
import { CiCalendar } from "react-icons/ci";
import { LuFileInput } from "react-icons/lu";
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from "../variables/charts";

import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Stack,
    Button,
    Container,
    Image,
} from '@chakra-ui/react'
import {
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi'
import PatientCard from '@/components/card/patientCard';
import { FaRegBell, FaUser } from 'react-icons/fa';
import { GiLoveInjection } from "react-icons/gi";
import { FaCalendar } from "react-icons/fa";
import Table from '@/components/table/table';
import { MdOutlineDarkMode, MdOutlineDashboard } from "react-icons/md";
import { HiOutlineDocumentReport, HiOutlineUsers } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import RightSideBox from '@/components/card/rightSideBox';

const LinkItems1 = [
    { name: 'Dashboard', icon: MdOutlineDashboard, router: "/" },
    { name: 'Patients', icon: HiOutlineUsers, router: "/Patients" },
    { name: 'Appointments', icon: CiCalendar, router: "/Appointments" },
    { name: 'Tasks', icon: CiCalendar, router: "/Tasks" },
    { name: 'Chat', icon: IoChatbubbleEllipsesOutline, router: "/Chat" },

]
const LinkItems2 = [
    { name: 'Reports', icon: HiOutlineDocumentReport, router: "/Reports" },
    { name: 'Staff', icon: HiOutlineUsers, router: "/Staff" },
    { name: 'Notifications', icon: FaRegBell, router: "/Notifications" },
    { name: 'Dark mode', icon: MdOutlineDarkMode, router: "/DarkMode" },
]

const LinkItems3 = [
    { name: 'Support', icon: BiSupport, router: "/Support" },
    { name: 'Settings', icon: IoMdSettings, router: "/Settings" },
]



const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <span>
                    <svg width="133" height="24" viewBox="0 0 133 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2299 13.9837L19.4392 10.7743C19.4392 8.57365 18.8891 6.46465 17.8804 4.63074L10.4072 11.5537V23.0615H11.8285C16.8259 23.0615 20.9064 19.0269 20.9064 13.9837H16.2299Z" fill="#0756FF" />
                        <path d="M4.67647 9.07785L1.46713 12.2872C1.46713 14.4879 2.0173 16.5969 3.02595 18.4308L10.4991 11.5078V0H9.07785C4.08045 0 0 4.0346 0 9.07785H4.67647Z" fill="#0756FF" />
                        <path d="M39.0997 15.26L45.3572 2.24853H49.293V20.6769H44.8759V11.4763L40.4588 20.6769H37.7406L33.3236 11.4763V20.6769H28.9065V2.24853H32.8422L39.0997 15.26Z" fill="black" />
                        <path d="M65.0387 10.9591C65.3785 11.803 65.5484 12.7829 65.5484 13.8445C65.5484 13.9806 65.5484 14.1439 65.5201 14.28C65.5201 14.4434 65.4918 14.5795 65.4635 14.7156C65.4635 14.8789 65.4351 15.015 65.4068 15.1511H55.8082C55.9781 15.6683 56.3179 16.131 56.7992 16.5666C57.3089 16.9749 57.9318 17.1927 58.6963 17.1927C59.0927 17.1927 59.4325 17.1654 59.6873 17.0565C59.9704 16.9749 60.1969 16.866 60.3385 16.7571C60.565 16.6482 60.7066 16.4849 60.8482 16.3216L65.0954 16.621C64.9255 17.1654 64.6423 17.6826 64.2742 18.1998C63.9062 18.717 63.4531 19.1525 62.9151 19.5608C62.3489 19.9692 61.7259 20.2686 61.0181 20.5136C60.2819 20.7313 59.4608 20.8674 58.5547 20.8674C57.592 20.8674 56.7143 20.6769 55.8648 20.323C55.0154 19.9692 54.2792 19.452 53.628 18.8259C53.0051 18.1998 52.4954 17.4376 52.099 16.5938C51.7309 15.75 51.561 14.8245 51.561 13.8445C51.561 12.8374 51.7309 11.9118 52.099 11.068C52.4954 10.2242 53.0051 9.46199 53.6563 8.83592C54.3075 8.20985 55.0437 7.69265 55.9214 7.33879C56.7709 6.98492 57.7053 6.79437 58.6963 6.79437C59.659 6.79437 60.565 6.9577 61.3862 7.31156C62.2073 7.63821 62.9435 8.10096 63.5664 8.72704C64.1893 9.32589 64.6706 10.0881 65.0387 10.9591ZM55.8082 12.6468H61.6127C61.4428 12.0752 61.103 11.558 60.6217 11.1225C60.112 10.6869 59.4891 10.4692 58.6963 10.4692C57.9318 10.4692 57.3089 10.6869 56.7992 11.1225C56.3179 11.558 55.9781 12.0752 55.8082 12.6468Z" fill="black" />
                        <path d="M77.0979 2.11242H81.2035V20.568H79.6462C78.7401 20.568 77.919 20.0508 77.5509 19.2614C77.2111 19.5336 76.8713 19.7786 76.4749 19.9692C76.1352 20.1869 75.7104 20.3502 75.2291 20.4863C74.7477 20.6497 74.1815 20.7041 73.5868 20.7041C72.7091 20.7041 71.888 20.5408 71.0952 20.2141C70.3024 19.8603 69.5945 19.3703 68.9999 18.7715C68.4053 18.1454 67.9239 17.4376 67.5559 16.5938C67.2161 15.75 67.0462 14.8245 67.0462 13.8445C67.0462 12.8374 67.2161 11.9118 67.5559 11.068C67.9239 10.2514 68.4053 9.51644 68.9999 8.89036C69.5945 8.29151 70.3024 7.80154 71.0952 7.47489C71.888 7.12102 72.7091 6.9577 73.5868 6.9577C74.0965 6.9577 74.6062 7.01214 75.0309 7.12102C75.4556 7.2299 75.8237 7.36601 76.1352 7.52933C76.5033 7.71987 76.8147 7.91042 77.0979 8.12818V2.11242ZM76.3617 16.1583C76.9563 15.5594 77.2394 14.7972 77.2394 13.8445C77.2394 12.8646 76.9563 12.1024 76.3617 11.5035C75.7671 10.9047 75.0309 10.6053 74.1815 10.6053C73.332 10.6053 72.6242 10.9047 72.0296 11.5035C71.4349 12.1024 71.1518 12.8646 71.1518 13.8445C71.1518 14.7972 71.4349 15.5594 72.0296 16.1583C72.6242 16.7571 73.332 17.0565 74.1815 17.0565C75.0309 17.0565 75.7671 16.7571 76.3617 16.1583Z" fill="black" />
                        <path d="M83.4169 10.9047V6.9577H88.6267V20.568H84.5211V10.9047H83.4169ZM88.7117 6.14108H84.4362V2.03076H88.7117V6.14108Z" fill="black" />
                        <path d="M99.294 13.5451L104.476 20.568H99.7471L95.4716 14.5523V20.568H91.366V5.97775H90.2617V2.03076H95.4716V12.5107L99.294 7.0938H103.994L99.294 13.5451Z" fill="black" />
                        <path d="M105.399 10.9047V6.9577H110.609V20.568H106.504V10.9047H105.399ZM110.694 6.14108H106.419V2.03076H110.694V6.14108Z" fill="black" />
                        <path d="M124.816 10.1425C125.099 10.823 125.241 11.558 125.241 12.3746V20.568H123.683C122.777 20.568 121.956 20.0508 121.588 19.2614C121.22 19.5336 120.852 19.7786 120.427 19.9692C120.059 20.1869 119.606 20.3502 119.125 20.4863C118.615 20.6497 118.077 20.7041 117.454 20.7041C115.925 20.7041 114.764 20.3502 113.971 19.6425C113.15 18.9348 112.754 18.0093 112.754 16.9204C112.754 16.2399 112.867 15.6411 113.15 15.0694C113.433 14.525 113.886 14.0351 114.538 13.654C115.189 13.2457 116.038 12.919 117.114 12.7012C118.19 12.4835 119.521 12.3746 121.107 12.3746C121.107 11.6941 120.937 11.2041 120.597 10.8502C120.257 10.4964 119.804 10.3058 119.294 10.3058C118.898 10.3058 118.587 10.3875 118.36 10.5236C118.134 10.6869 117.935 10.823 117.794 10.9863C117.624 11.1769 117.511 11.3947 117.454 11.6396L113.348 11.3402C113.462 10.6869 113.688 10.0608 114 9.51644C114.283 8.9448 114.708 8.48205 115.189 8.07374C115.699 7.66543 116.293 7.36601 117.001 7.14824C117.709 6.90325 118.53 6.79437 119.436 6.79437C120.286 6.79437 121.05 6.93048 121.758 7.20268C122.466 7.47489 123.089 7.8832 123.598 8.37317C124.108 8.86314 124.533 9.46199 124.816 10.1425ZM121.107 15.2872V14.7156C120.257 14.7156 119.521 14.7428 118.983 14.8517C118.417 14.9333 117.964 15.0422 117.652 15.2055C117.341 15.3689 117.143 15.5594 117.029 15.7772C116.916 15.9677 116.859 16.2127 116.859 16.4577C116.859 16.8388 117.001 17.1382 117.284 17.4104C117.596 17.6554 117.992 17.7915 118.53 17.7915C119.295 17.7915 119.917 17.5465 120.399 17.111C120.88 16.6482 121.107 16.0494 121.107 15.2872Z" fill="black" />
                        <path d="M128.065 18.7715C128.065 17.9367 128.301 17.356 128.773 17.0293C129.244 16.6845 129.82 16.5121 130.5 16.5121C131.16 16.5121 131.727 16.6845 132.199 17.0293C132.671 17.356 132.906 17.9367 132.906 18.7715C132.906 19.5699 132.671 20.1506 132.199 20.5136C131.727 20.8584 131.16 21.0308 130.5 21.0308C129.82 21.0308 129.244 20.8584 128.773 20.5136C128.301 20.1506 128.065 19.5699 128.065 18.7715Z" fill="black" />
                    </svg>

                </span>

                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems1.map((link) => (
                <NavItem key={link.name} icon={link.icon} router={link.router}>
                    {link.name}
                </NavItem>
            ))}
            <Text className='side-bar-part' fontSize="md" fontFamily="monospace" >
                Other
            </Text>
            {LinkItems2.map((link) => (
                <NavItem key={link.name} icon={link.icon} router={link.router}>
                    {link.name}
                </NavItem>
            ))}
            <div>
                <div className='flex support'>
                    <div>
                        <BiSupport />
                    </div>
                    <span>Support</span>
                </div>
                <div className='flex settings'>
                    <div>
                        <IoMdSettings />
                    </div>
                    <span>Settings</span>
                </div>
            </div>
        </Box>
    )
}

const NavItem = ({ icon, children, router, ...rest }) => {
    return (
        <Box
            as="a"
            href={router}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <>
            <Flex
                ml={{ base: 0, md: 60 }}
                px={{ base: 4, md: 4 }}
                height="20"
                alignItems="center"
                bg={useColorModeValue('white', 'gray.900')}
                borderBottomWidth="1px"
                borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
                justifyContent={{ base: 'space-between', md: 'flex-end' }}
                {...rest}>
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onOpen}
                    variant="outline"
                    aria-label="open menu"
                    icon={<FiMenu />}
                />

                <Text
                    display={{ base: 'flex', md: 'none' }}
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold">
                    Logo
                </Text>



                <HStack spacing={{ base: '0', md: '6' }}>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        Dashboard
                    </Flex>
                    <Stack spacing={4}>
                        <SearchBar />
                    </Stack>
                    <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                                <HStack>
                                    <Avatar
                                        size={'xs'}
                                        src={
                                            'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=40&w=40&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                        }
                                    />
                                    <VStack
                                        display={{ base: 'none', md: 'flex' }}
                                        alignItems="flex-start"
                                        spacing="1px"
                                        ml="2">
                                        <Text fontSize="sm">Justina Clark</Text>
                                        <Text fontSize="xs" color="gray.600">
                                            Admin
                                        </Text>
                                    </VStack>
                                    <Box display={{ base: 'none', md: 'flex' }}>
                                        <FiChevronDown />
                                    </Box>
                                </HStack>
                            </MenuButton>
                            <MenuList
                                bg={useColorModeValue('white', 'gray.900')}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Settings</MenuItem>
                                <MenuItem>Billing</MenuItem>
                                <MenuDivider />
                                <MenuItem>Sign out</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </HStack>
            </Flex>
        </>
    )
}

const Layout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>  <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Container maxW='1900px'>
                <div className=' welcome-name'>

                    <Box className='profile-name' ml={{ base: 0, md: 60 }} p="4">
                        <h1>Welcome Back, Dr. Omar</h1>
                    </Box>
                    <div className='rgt-btn'>
                        <Stack direction='row' spacing={4}>
                            <Button className='today-btn' leftIcon={<CiCalendar />} color='black' colorScheme='white' variant='solid'>
                                Today
                            </Button>
                            <Button leftIcon={<LuFileInput />} colorScheme='blue' variant='solid'>
                                Export
                            </Button>
                        </Stack>

                    </div>

                </div>
            </Container>

            <Container maxW='1900px'>
                <Box className='patent-card' ml={{ base: 0, md: 60 }}>
                    <PatientCard icons={FaUser} cardTitle='Patient' bgColor='rgb(191, 191, 247)' iconColor='blue' comparisonText='Compared To Last Week' colorScheme='black' patients={1500} percentage={15} />
                    <PatientCard icons={FaCalendar} cardTitle='Appointments' bgColor='#E6FFEB' iconColor='green' comparisonText='Compared To Last Week' colorScheme='black' patients={1500} percentage={-12.6} />
                    <PatientCard icons={GiLoveInjection} cardTitle='Diagnoses' bgColor='#FFE6E6' iconColor='#800000' comparisonText='Compared To Last Week' colorScheme='black' patients={1500} percentage={15} />
                    <PatientCard icons={FaCalendar} cardTitle='Tasks' bgColor='#FFF5EC' iconColor='orange' comparisonText='Compared To Last Week' colorScheme='black' patients={1500} percentage={-15} />
                </Box>
            </Container>
            <div >
                <div>
                    <Container>
                        <Flex justify="left" align="center" pt={10} bg="gray.50">
                            <Box width="50%">
                                <Graph
                                    title="Patients"
                                    totalPatients={1500}
                                    percentage={15}
                                    chartData={lineChartDataTotalSpent}
                                    chartOptions={lineChartOptionsTotalSpent}
                                />
                            </Box>
                        </Flex>
                    </Container>

                    <Container maxW='1900px'>
                        <Table />
                    </Container>
                </div>
                <div>
                    <Container maxW='1900px'>
                        <RightSideBox />
                    </Container>
                </div>
            </div>

        </Box>

        </>
    )
}

export default Layout