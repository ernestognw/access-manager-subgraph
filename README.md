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

### Live deployments

| Network | Queries (HTTP)                                                                                                                                                 |
|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mainnet | [https://api.thegraph.com/subgraphs/name/ernestognw/access-manager-mainnet](https://api.thegraph.com/subgraphs/name/ernestognw/access-manager-mainnet)         |
| Sepolia | [https://api.thegraph.com/subgraphs/name/ernestognw/access-manager-sepolia](https://api.thegraph.com/subgraphs/name/ernestognw/access-manager-sepolia)         |
| Goerli | [https://api.thegraph.com/subgraphs/name/ernestognw/access-manager-goerli](https://api.thegraph.com/subgraphs/name/ernestognw/access-manager-goerli)            |
