# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. It is a fork from [ShellHub](https://github.com/shellhub-io/shellhub/), all thanks to them and Docusaurus.

Please make sure to first run these two commands:
```bash
conda env create -f environment.yml
conda activate droid-docs
```
This will put you in the conda environment for working on the documentation. You can run all the commands below after.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
