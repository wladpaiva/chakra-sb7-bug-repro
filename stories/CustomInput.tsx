import React from "react";
import type { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, Input, Box } from "@chakra-ui/react";

export const CustomInput = forwardRef<ChakraInputProps, "div">((props, ref) => {
  const { value, placeholder, width: _, ...rest } = props;

  return (
    <Box display="inline-block">
      <Input
        as="span"
        // hide it but keep it measurable
        visibility="hidden"
        // position it absolutely so it doesn't affect the layout
        position="absolute"
        // move it out of the viewport
        top="-99999em"
        left="-99999em"
        // make it unselectable
        pointerEvents="none"
        // never wrap
        whiteSpace="nowrap"
        width="auto"
        {...rest}
      >
        {value || placeholder}
      </Input>
      <Input
        value={value}
        placeholder={placeholder}
        boxSizing="content-box"
        ref={ref}
        {...rest}
      />
    </Box>
  );
});
