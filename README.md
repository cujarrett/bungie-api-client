<p align="center">
  <a href="https://circleci.com/gh/cujarrett/destiny-insights-backend/tree/main"><img alt="Circle CI" src="https://circleci.com/gh/cujarrett/destiny-insights-backend/tree/main.svg?style=svg"></a>
  <a href="https://discord.gg/jAA5U52"><img alt="Chat on Discord" src="https://img.shields.io/discord/460598989939802115?label=Discord"></a>
  <a href="https://github.com/semantic-release/semantic-release"><img alt="Project uses semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"></a>
  <a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?"></a>
</p>

## What

It's an implementation of interacting with
[Bungie's OAuth 2 API](https://github.com/Bungie-net/api), specifically the
portion of the API dealing with the games mod, armor, and weapon inventory. This
was done to learn and build out a backend for my serverless Twitter
[destiny-insights-bot](https://github.com/cujarrett/destiny-insights-bot).

## Use

It's intended for personal use. Don't abuse the API.

### [/mods](https://api.destinyinsights.com/mods)

This endpoint makes a call to Bungie's API to retrieve the current mods sale. It
also calls the backend database to retrieve the last sold date (in the last
year) as well as how many times the mod was sold in the last year.

This endpoint leverages the static data in the `cached-mods.json` file to save
calls and processing time. If the mods for sale are not contained within, more
timely calls are made to Bungie's API to get the info without the cached known
mods.

### [/xur](https://api.destinyinsights.com/xur)

This endpoint makes a call to Bungie's API to retrieve the current mods sale. It
also calls the backend database to retrieve the last sold date (in the last
year) as well as how many times the mod was sold in the last year.

This endpoint leverages the static data in the `cached-exotics.json` file to save
calls and processing time. If the mods for sale are not contained within, more
timely calls are made to Bungie's API to get the info without the cached known
mods.

<p align="center">
  Made with :heart:, JavaScript, and GitHub.
</p>
