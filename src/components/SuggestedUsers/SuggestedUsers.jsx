import {
    Flex, Box, Avatar,
    VStack,
    Text,
    Button
} from "@chakra-ui/react";
import User from "./User";

export default function SuggestedUsers() {

    return (
        <Flex

            direction="column"
        >
            <Box>
                <User />
            </Box >

            <Flex
                direction="column"
                gap={3}
            >
                <Flex
                    justify="space-between"
                    align="center"
                    p={2}
                >
                    <Text>Suggested users</Text>
                    <Button variant="chost">see all</Button>
                </Flex>

                <Flex
                    direction="column"
                    p={4}
                    gap={3}
                >

                </Flex>

            </Flex>
        </Flex >
    );
};