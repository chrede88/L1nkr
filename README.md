# L1nkr - Simple LinkTree Hugo Theme
![L1nkr - Simple LinkTree Hugo Theme](https://raw.githubusercontent.com/chrede88/l1nkr/main/images/screenshot.png)

<p align="center">
  <img src="https://github.com/Chrede88/L1nkr/actions/workflows/testBuild.yml/badge.svg" alt="Main Branch Build">
  <img src="https://github.com/Chrede88/L1nkr/actions/workflows/exampleSite.yml/badge.svg" alt="Main Branch Build">
</p>

L1nkr is a simple LinkTree type [Hugo](https://gohugo.io) theme. The theme is designed mobile-first, with a very intuitive interface. Get your L1nkr site up and running quickly by using the [L1nkr template](https://github.com/Chrede88/L1nkrTemplate).

## Features

- Simple LinkTree theme, designed for mobile-first.
- Automatic dark mode (based on system setttings).
- Emoji support for a fun design.
- More than 40 supported brand links.

---

## Installation

1) Make sure you have Hugo and Go isntalled on your local machine. Read the instructions [here](https://gohugo.io/installation/).
2) Follow this link to the theme [template](https://github.com/Chrede88/L1nkrTemplate).
3) Follow the installation instructions in the template repo. They are listed below for reference.

### Template installation instructions (Only for reference) 
1) Use this template by pressing `Use this template`.
2) Clone your version of the template to your local computer:
```shell
git clone https://github.com/<username>/<reponame>
```
3) Change the module name to match your github repo in `go.mod`.
4) Modify `config/_default/hugo.yaml` and `config/_default/params.yaml` according to the Configuration below.
5) In a terminal/commandline window, move to the newly created folder using `cd`.
6) Build a local version of your site by executing `hugo server`. You can see the site by navigating to `localhost:1313` (actual URL will be outputted in the CLI) in a browser.
7) Add a new image to the `assets/` folder, using the same name as you specified in `params.yaml`.
8) Add a new `icon.png` file to update the favicon. The png file should be 512px by 512px in size.

---

## Configuration

All configuration is done in the two configuration files under `config/_default/`. The URL and site title can be set in `hugo.yaml`, all other parameters are set in `params.yaml`.

`hugo.yaml`:
```yaml
baseURL: 'https://username.github.io/L1nkr'
title: 'L1nkr'
```

`params.yaml`:
```yaml
author:
  name: "L1nkr"
  image: "author.jpeg"
  greeting: "A simple LinkTree theme for Hugo :evergreen_tree:"

links:
  - github: https://github.com/username/
  - facebook: https://facebook.com/

columns: 3
```

Links are defined by the name (i.e. "github" or "facebook"). The names must match one of the supported links, see list below.

### Supported Links
| **Support Links** | **Support Links** | **Support Links** | **Support Links** |
| --- | --- | --- | --- |
| bandcamp | bitbucket | bluesky| codepen |
| dev | discord | dribbble | email |
| etsy | facebook | flickr | foursquare |
| github | gitlab | instagram | keybase |
| kickstarter | link | linkedin | mastodon |
| medium | orcid | patreon | pinterest |
| reddit | signal | skype | slack |
| snapchat | soundcloud | spotify | stack-exchange |
| stack-overflow | strava | telegram | tiktok |
| tumblr | twitch | untappd | website |
| whatsapp | x-twitter | youtube | |

## Update the Theme Version

This guide is left here for reference. Please check the [template](https://github.com/Chrede88/L1nkrTemplate#readme) repo for the most up-to-date documentation.

The theme version used to build the site is defined in `go.mod` file.

The best practice is to update to released and tested versions. To update to a specific version execute the following command in a terminal/commandline (at the root path of your site repo):

```shell
  hugo mod get github.com/Chrede88/L1nkr@vX.Y.Z
```
Replace X,Y & Z with the corresponding version numbers. You can find the releases [here](https://github.com/Chrede88/L1nkr/releases). Please check if any breaking changes are listed under the release you want to update to, before proceeding.

### Danger Zone
If you like to live on the edge, you can get the lastest commit by using the following command:
```shell
  hugo mod get -u github.com/Chrede88/L1nkr
```
This might break your site, as these commits might not have been tested yet.