import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
    return (
        <div>
            <InputGroup className='flex search-bar gap-4'>
                <InputLeftElement style={{ marginTop: "8px" }} pointerEvents='none' color='gray.300' fontSize='1.2em'>
                    <FiSearch className='search-icon' />
                </InputLeftElement>
                <Input className='search-input' style={{ marginLeft: "20px" }} variant='outline' placeholder='Search' />

            </InputGroup>
        </div>
    )
}

export default SearchBar