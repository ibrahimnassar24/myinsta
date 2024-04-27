import {
    Flex, Box
} from "@chakra-ui/react";
import SideBar from "../components/SideBar/SideBar";
import SuggestedUsers from "../components/SuggestedUsers/SuggestedUsers";
import PostFeed from "../components/PostFeed/PostFeed";

export default function BasicLayout() {

    return (
        <>
            <Flex h="100vh">
                
                {/* right section */}
                <Box
                    w={{base: "30px", lg: "18vw"}}
                >
                    <SideBar />
                </Box>

                {/* middle section */}
                <Flex
                    direction="column"
                    flex={1}
                    bgColor="blackAlpha.200"
                >
                    <Box
                        p={10}
                    >

                    </Box>
                    
                    <Box  h="full">
                        <PostFeed />
                    </Box>

                </Flex>

                <Box
                    display={{base: "none", lg: "block"}}
                    pe="15%"
                    w="31vw"
                >
                    <SuggestedUsers />
                </Box>
            </Flex>
        </>
    );
};