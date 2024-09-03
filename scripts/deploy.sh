#!/usr/bin/env bash

set -euo pipefail

set -a
source .env
set +a

graph deploy access-manager-$NETWORK \
  --version-label $(npm pkg get version | sed 's/"//g') \
  --node https://subgraphs.alchemy.com/api/subgraphs/deploy \
  --deploy-key $SUBGRAPH_DEPLOY_KEY \
  --network $NETWORK
