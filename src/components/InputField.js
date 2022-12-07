import { Button, ButtonGroup } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
import { 
    IconButton, 
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, 
} from '@chakra-ui/react';
import "./input.css";

const InputField = () => {
    return(
        <div className="searchField">
            <FormControl className='inputForm'>
                <Input placeholder="search by city" size="md" width="auto" style={{ marginRight : 10 }} />
                <IconButton 
                    aria-label='Search database'
                    type='submit' 
                    icon={<SearchIcon />} />
            </FormControl>
        </div>
    ); 
}

export default InputField;
