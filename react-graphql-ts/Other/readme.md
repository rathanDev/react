npm create vite@latest react-graphql-ts -- --template react-ts

npm i graphql graphql-request

vite build

# Generate typed graphql query
npm install -D @graphql-codegen/cli
npx graphql-codegen init
npx graphql-codegen


# Cancels graphql request when component is unmounted - handles using a cache - on mounted flag required
npm install @tanstack/react-query




