import React from "react";
import { Button, Box, Flex, Text, Heading, Container } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const EnableFeatureTemplate = ({
  children,
  buttons,
  icon: Icon,
  breadcrumb,
  ...props
}) => {
  return (
    <Container sx={{ flex: 1 }}>
      <Box
        mx={["0", "auto"]}
        display="block"
        width="fit-content"
        mb={[2, 3, 5]}
      >
        <img src="https://via.placeholder.com/100x100" alt="" />
      </Box>

      <div>
        <Heading
          fontSize={["md", "xl"]}
          lineHeight={["md", "xl"]}
          fontFamily="heading"
          fontWeight="semibold"
          color="black"
          textAlign={["left", "center"]}
          mb={{ base: 1, md: 2 }}
        >
          You can Enable this
        </Heading>

        <Text
          color="black"
          fontSize={{ base: "xs", sm: "lg" }}
          lineHeight={{ base: "xs", sm: "lg" }}
          my={{ base: 1, md: 2 }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
          consequuntur ad, similique aut fugit voluptatem voluptatum soluta
          aliquam minus.
        </Text>
        <Text color="richBlack">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          optio itaque fuga iste accusamus modi quisquam, adipisci vero placeat
          nostrum iusto rerum repudiandae minus velit animi molestiae, in eaque
          dolorem.
        </Text>
      </div>

      {/* 
        There are two different sets of buttons because <Button /> does not allow for responsive sizes 
        Desktop version:
      */}
      <Flex
        display={["none", "flex"]}
        justifyContent="center"
        mt={4}
        gap={1}
        flexDirection="row-reverse"
      >
        <Button size="sm" children="Button" />
        <Button variant="outline" size="sm" children="button" id="desktop1" />
      </Flex>

      {/* Mobile version: */}
      <Flex
        display={["flex", "none"]}
        justifyContent="center"
        mt={2}
        gap={1}
        flexDirection="column"
      >
        <Button children="Button" />
        <Button variant="outline" children="button" id="mobile1" />
      </Flex>
    </Container>
  );
};

const meta = {
  title: "Enable feature",
  args: {},
  component: EnableFeatureTemplate,
} as Meta<typeof EnableFeatureTemplate>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};
export const Hover: Story = {
  parameters: { pseudo: { hover: ["#mobile1", "#desktop1"] } },
};
