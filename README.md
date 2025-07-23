# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

Setup Node.js first before starting:

1. Install NVM (Node.js Version Manager) by running:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

2. Reload environment:

```bash
source ~/.bashrc
# or 
source ~/.zshrc
```

3. Install Node.js through NVM:
```bash
nvm install node
```

4. Go to the repo folder, install dependencies

```bash
npm install
```

### Local Development

```
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm run build
```

<!-- This command generates static content into the `build` directory and can be served using any static contents hosting service. -->
