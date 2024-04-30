import {
    Flex, Box
} from "@chakra-ui/react";
import PostFeed from "../components/PostFeed/PostFeed";
import SuggestedUsers from "../components/SuggestedUsers/SuggestedUsers";

export default function HomePge() {

    return (
        <Flex h="100vh">
            <Flex
                direction="column"
                flex={1}
                bgColor="blackAlpha.200"
            >
                {/* stories section */}
                <Box
                    p={10}
                >

                </Box>

                {/* post feed section */}
                <Box h="full">
                    <PostFeed />
                </Box>

            </Flex>

            {/* suggested users section */}
            <Box
                display={{ base: "none", lg: "block" }}
                pe="15%"
                w="31vw"
            >
                <SuggestedUsers />
            </Box>
        </Flex>
    );
};