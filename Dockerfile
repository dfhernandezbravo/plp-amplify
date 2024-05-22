# hadolint ignore=DL3007
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/new-relic-builder:latest as newrelic
RUN /tmp/get-new-relic-js.sh

FROM ghcr.io/cencosud-cencommerce/dpt-images/utils/docker-images/node:18.18-alpine3.18
WORKDIR /app

COPY . ./

COPY --from=newrelic /tmp/newrelic.js .
ARG NPM_TOKEN
ARG NEXT_PUBLIC_BFF_WEB_URL
ARG NEXT_PUBLIC_API_KEY_BFF_WEB
ARG NEXT_PUBLIC_MAX_COUNT_PRODUCTS_PLP

ENV NPM_TOKEN=$NPM_TOKEN
ENV NEXT_PUBLIC_BFF_WEB_URL=$NEXT_PUBLIC_BFF_WEB_URL
ENV NEXT_PUBLIC_API_KEY_BFF_WEB=$NEXT_PUBLIC_API_KEY_BFF_WEB
ENV NEXT_PUBLIC_MAX_COUNT_PRODUCTS_PLP=$NEXT_PUBLIC_MAX_COUNT_PRODUCTS_PLP

RUN npm config set -- //gitlab.com/api/v4/packages/npm/:_authToken=glpat-8ASRwMRojB3hcxaFgx3J

RUN echo "NEXT_PUBLIC_MAX_COUNT_PRODUCTS_PLP --$NEXT_PUBLIC_MAX_COUNT_PRODUCTS_PLP"
RUN echo "npm config set -- //gitlab.com/api/v4/packages/npm/:_authToken=glpat-8ASRwMRojB3hcxaFgx3J"

RUN npm config set -- //node-registry.bit.cloud/:_authToken=f91ccd4c-0f9a-4ee7-ba17-40404dd9b05a

RUN NODE_ENV='' yarn install && \
  yarn build

# CMD ["sh", "-c", "pm2-runtime dist/src/main.js"]
EXPOSE 8080
CMD [ "yarn", "start", "-p", "8080"]
