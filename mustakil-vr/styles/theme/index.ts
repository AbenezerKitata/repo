import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const styles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.800")(props),
        lineHeight: "base",
        scroll: "smooth",
      },
    }),
  },
};

const overrides = {
  styles,

  // Other foundational style overrides go here
  components: {
    // Other components go here
  },
};

export default extendTheme(overrides);
