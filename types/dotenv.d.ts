declare module 'dotenv' {
    export const config: () => { parsed: { [key: string]: string | undefined } };
}