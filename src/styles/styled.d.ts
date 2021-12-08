import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            danger: string;
            success: string;
            warning: string;
            grey500: string;
            grey400: string;
            grey300: string;
            grey200: string;
            grey100: string;
            white: string;
        },
    }
}