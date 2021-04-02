# Eleventy starter kit

Project to start quickly with eleventy. The only tools you need to have installed
on the host is Docker, [just](https://github.com/casey/just) and your favorite IDE :computer:

## Getting started

1. The first time the project is launched, the development docker image needs to be built with `just build-local-image`
2. Lauch eleventy in serve mode with: `just watch`
3. See the results at http://localhost:8080
> The port is overridable in `.env` by changing the value of `WEB_PORT`
4. Code your site in `./src` => Happy Coding :tada:

## Available commands

All commands are executed with just.

* **exec \<cmd\>** execute the command in the docker container.
> If the \<cmd\> is omitted, the command use by
default is bash which allow to have a bash instance inside the container
* **watch** watch and serve the project
* **clean** clean the generated files


## LICENSE

[MIT](https://github.com/craft-framework/craft/blob/master/LICENSE) (c) 2020, Nicolas Talle.

## Author

![Irwin Lourtet](https://fr.gravatar.com/userimage/111772713/5a25fd0dd13eff4f50c08b7db868f6c6.jpg)
[Irwin Lourtet](https://github.com/ilourt)