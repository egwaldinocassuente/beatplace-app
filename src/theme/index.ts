import { extendTheme } from "@chakra-ui/react";

export const AppTheme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "#fff",
                color: "#313143",
            },
        },
    },

    fonts: {
        heading: `"Poppins", sans-serif;`,
        body: `"Poppins", sans-serif;`,
    },

    colors: {
        gray: {
            100: "#fff",
            200: "#f1f1f1",
            300: "#ddd",
            400: "#555",
            500: "#111",
            600: "#7A7B7A",
            700: "#484848",
        },

        red: {
            100: "#FF2A00",
            200: "#dd0000",
            300: "#ff0000",
        },

        blue: {
            100: "#0A52CC",
        },
    },

    radii: {
        none: 0,
        200: "6px",
        full: "9999px",
    },
});
