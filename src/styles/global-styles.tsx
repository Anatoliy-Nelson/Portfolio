import { createGlobalStyle } from 'styled-components'
import { theme } from 'styles/theme'
import '@fontsource/plus-jakarta-sans/300.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/800.css'

export const GlobalStyles = createGlobalStyle`
    /* Темная тема по умолчанию */
    body.dark-theme {
      --color-primaryBg: #0A192F;
      --color-secondaryBg: #112240;
      --color-accent: #64FFDA;
      --color-secondary: #5CA6E0;
      --color-font: #CCD6F6;
      --color-fontSecondary: #8892B0;
      --color-border: #233554;
      --color-hover: #64FFDA;
      --shadow-main: -1px -2px 2.6px 0px rgba(100, 255, 218, 0.2), 1px 4px 4px 0px rgba(35, 53, 84, 0.3);
      --shadow-card: 0 8px 32px 0 rgba(35, 53, 84, 0.2);
    }
    
    /* Светлая тема */
    body.light-theme {
      --color-primaryBg: #FFFFFF;
      --color-secondaryBg: #F8F9FA;
      --color-accent: #0A192F;
      --color-secondary: #64FFDA;
      --color-font: #2D3748;
      --color-fontSecondary: #718096;
      --color-border: #E2E8F0;
      --color-hover: #0A192F;
      --shadow-main: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
      --shadow-card: 0 4px 16px rgba(0, 0, 0, 0.1);
    }
    
    /* Устанавливаем тему по умолчанию (темная) */
    body {
      --color-primaryBg: #0A192F;
      --color-secondaryBg: #112240;
      --color-accent: #64FFDA;
      --color-secondary: #5CA6E0;
      --color-font: #CCD6F6;
      --color-fontSecondary: #8892B0;
      --color-border: #233554;
      --color-hover: #64FFDA;
      --shadow-main: -1px -2px 2.6px 0px rgba(100, 255, 218, 0.2), 1px 4px 4px 0px rgba(35, 53, 84, 0.3);
      --shadow-card: 0 8px 32px 0 rgba(35, 53, 84, 0.2);
    }
    
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        @media ${theme.media.tablet} {
            &:hover {
                all: unset;
            }
        }
    }

    html, body {
        min-width: 360px;

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
            -webkit-text-fill-color: var(--color-font);
            -webkit-box-shadow: 0 0 0 1000px var(--color-secondaryBg) inset;
            transition: background-color 5000s ease-in-out 0s;
            background: -webkit-linear-gradient(
                    rgba(255, 255, 255, 0) 0%,
                    rgba(0, 174, 255, 0.04) 50%,
                    rgba(255, 255, 255, 0) 51%,
                    rgba(0, 174, 255, 0.03) 100%
            );
        }
    }

    body {
        font-family: 'Plus Jakarta Sans', sans-serif;
        color: var(--color-font);
        line-height: 1.2;
        background-color: var(--color-primaryBg);

        &:focus-visible {
            outline: 1px solid var(--color-font);
        }
    }

    a {
        text-decoration: none;
        color: var(--color-font);
    }

    ul {
        list-style: none;
    }

    button, input, textarea {
        all: unset;

        &:focus-visible {
            outline: 1px solid var(--color-font);
        }
    }

    section {
        padding-bottom: 100px;
        @media ${theme.media.mobile} {
            padding-bottom: 70px;
        }
    }

    section:nth-last-of-type(odd) {
        background-color: var(--color-primaryBg);
    }

    section:nth-last-of-type(even) {
        background-color: var(--color-secondaryBg);
    }

`
