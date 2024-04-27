import {
    Flex, Box, Button, Avatar, Text
} from "@chakra-ui/react";

export default function User() {

    return (
        <Flex gap={4}>
            <Avatar size="lg"></Avatar>
            <Flex
                justify="space-between"
                align="center"
                w="full"
            >
                <Flex
                    direction="column"
                    gap={0}
                >
                    <Text>
                        user name
                    </Text>
                    <Text>
                        suggested for you
                    </Text>
                </Flex>
                <Box>
                    <Button bgColor="transparent">switch</Button>
                </Box>
            </Flex>
        </Flex>
    );
};