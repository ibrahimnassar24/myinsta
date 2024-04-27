import {
    Flex, Box, Avatar, Text, Image, Container
} from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

export default function Post() {

    return (
        <Container
            bgColor="post"
            p={5}
        >
            <Flex
                direction="column"
                gap={5}
            >


                <Box>
                    <PostHeader />
                </Box>

                <Box w="full">
                    <PostBody />
                </Box>

                <Box>
                    <PostFooter />
                </Box>

            </Flex>
        </Container>
    );
};