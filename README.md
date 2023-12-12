# Maciaszek Portfolio

This project uses Jekyll to build a static portfolio website.

## Dependencies

- Ruby (version 3+)
- RubyGems

## Installation

Install gems:

```sh
gem install jekyll bundle
```

## Working on the project

The easiest way is to run `serve` process and get access to preview in the browser:

```sh
bundle exec jekyll serve --livereload
```

You can now open `localhost:4000` in the browser.

## Build for production (manually)

Once the website is ready for production, it can be built:

```sh
bundle exec jekyll build
```

The command will create a `_site` directory with all files required for the website to be deployed.

## Build for production (github actions)

The github repo should be setup in a way that the project is automatically built and deployed whenever a new commit is pushed to the `main` branch. 

[See the guide here](https://jekyllrb.com/docs/continuous-integration/github-actions/)
