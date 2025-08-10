import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'https://countries.trevorblades.com/',
    documents: "src/graphql/queries/*.graphql",
    generates: {
        "src/graphql/queries/generated/": {
            preset: "client",
            plugins: []
        }
    }
};

export default config;
