import {
    Flex, Box,
    Text,
    InputGroup,
    InputRightAddon,
    Button,
    Input
} from "@chakra-ui/react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaComment, FaRegComment } from "react-icons/fa";
import { BsShare, BsShareFill } from "react-icons/bs";
import { useState } from "react";
import { isAsyncThunkAction } from "@reduxjs/toolkit";

export default function PostFooter() {

    const [isLiked, setIsLiked] = useState(false);
    const [isCommented, setIsCommented] = useState(false);
    const [isShared, setIsShared] = useState(false);
    const size = "24px";

    return (
        <Flex
            direction="column"
        >
            {/* buttons section */}
            <Flex gap={5}>

                <Box
                    cursor="pointer"
                    onClick={() => setIsLiked(s => !s)}
                >
                    {
                        isLiked
                            ? <MdFavorite size={size} />
                            : <MdFavoriteBorder size={size} />
                    }
                </Box>
                <Box
                    cursor="pointer"
                    onClick={() => setIsCommented(s => !s)}
                >
                    {
                        isCommented
                            ? <FaComment size={size} />
                            : <FaRegComment size={size} />
                    }
                </Box>
                <Box
                    cursor="pointer"
                    onClick={() => setIsShared(s => !s)}
                >
                    {
                        isShared
                            ? <BsShareFill size={size} />
                            : <BsShare size={size} />
                    }
                </Box>
            </Flex>

            <Flex gap={2}>
                <Text as="span">
                    24
                </Text>
                <Text as="span">
                    Likes
                </Text>
            </Flex>

            <Flex gap={2}>
                <Text as="span">
                    profile name
                </Text>
                <Text as="span">
                    description
                </Text>
            </Flex>

            <Flex gap={2}>
                <Text as="span" cursor="pointer">
                    show all
                </Text>
                <Text as="span">
                    11
                </Text>
                <Text as="span">
                    comments
                </Text>
            </Flex>

            <Box>
                <InputGroup>
                    <Input 
                    type="text"
                    placeholder="write a comment"
                    />
                                        <InputRightAddon>
                    <Button variant="ghost">Add</Button>
                    </InputRightAddon>
                </InputGroup>
            </Box>
        </Flex>
    );
};