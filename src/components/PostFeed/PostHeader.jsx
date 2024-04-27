import {
    Flex, Box, Avatar, Text
} from "@chakra-ui/react";
import { IoIosMore } from "react-icons/io";

export default function PostHeader() {

    return (
        <Flex gap={3}>
            <Avatar size="md" />

            <Flex justify="space-between" align="center" flex={1}>
                <Flex gap={5}>
                    <Box>
                        <Text as="span">
                            user name
                        </Text>
                    </Box>
                    <Box>
                        <Text as="span">
                            3h
                        </Text>
                    </Box>
                </Flex>
                <Box
                    aria-label="more"
                    cursor="pointer"
                >
                    <IoIosMore />
                </Box>
            </Flex>
        </Flex>
    );
};