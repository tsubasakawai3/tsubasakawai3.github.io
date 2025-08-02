FROM mcr.microsoft.com/devcontainers/javascript-node:22

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node.
# RUN nvm install "16"
# ENV PATH=/usr/local/nvm/versions/node/v16.20.0/bin:$PATH

# [Optional] Uncomment if you want to install more global npm packages
# RUN npm install -g @angular/cli react-scripts