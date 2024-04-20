import { Box, Text } from "@/components";

export const Colors = () => {
  return (
    <div className="d-flex flex-row w-[400px]">
      <Text as="p" className="text-gray-black">
        Primary
      </Text>
      <Box className="bg-primary-100 text-gray-white p-4 m-2 align-center">
        Primary 100 - *-primary-100
      </Box>
      <Box className="bg-primary-200 text-gray-black p-4 m-2">
        Primary 200 - *-primary-200
      </Box>
      <Text as="p" className="text-gray-black">
        Secondary
      </Text>
      <Box className="bg-secondary-100 text-gray-white p-4 m-2 ">
        Secondary 100 - *-secondary-100
      </Box>
      <Box className="bg-secondary-200 text-gray-black p-4 m-2 ">
        Secondary 200 - *-secondary-100
      </Box>
      <Text as="span" className="text-gray-black" size="lg" weight="semibold">
        Note:- *
      </Text>
      <Text as="span" className="text-gray-black">
        represents color for background(bg), text(text) etc.
      </Text>
    </div>
  );
};
