## Access Manager Subgraphs

This repository contains the subgraphs for the Access Manager. The folder structure is the following:

- `src/datasources`: Event handler functions
- `src/models`: Data model abstractions to interact with entities

## Developing

Install the dependencies with:

```bash
yarn install
```

### Updating the schema

When making changes to the schema in `schema.graphql`, make sure of running the following command to update the generated types:

```bash
yarn codegen
```

## Deploying

Deploy the subgraph with:

```bash
yarn deploy
```
