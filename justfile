# Lists recipes
default:
  @just --list --unsorted

# Exec command in container
exec +args="bash":
  docker run --rm -it \
    -v {{justfile_directory()}}:/usr/app \
    -e WEB_PORT=$WEB_PORT \
    -p $WEB_PORT:$WEB_PORT \
    -p $BS_UI_PORT:$BS_UI_PORT \
    $APP_NAME \
    {{args}}

# Watch and serve generated pages on port :$WEB_PORT (set in .env)
watch:
  just clean
  just exec npx snowpack dev

# Clean generated files
clean:
   [ ! -e _site ] || rm -r _site

# Build a local docker image used for development
build-local-image:
	docker build -t $APP_NAME -f ./build/dev/Dockerfile .