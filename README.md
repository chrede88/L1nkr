# L1nkr - Simple LinkTree Hugo Theme
![L1nkr - Simple LinkTree Hugo Theme](https://raw.githubusercontent.com/chrede88/l1nkr/main/images/screenshot.png)
L1nkr is a simple LinkTree type [Hugo](https://gohugo.io) theme. The theme is designed mobile-first, with an very intuative interface. Get your L1nkr site online in less than 30min, using the [Github template]().

## Features

- Simple LinkTree theme, design for mobile-first.
- Automatically dark mode (based on system setttings).
- Emoji support for a fun design.
- More than 30 supported brand links.

---

## Installation


---

## Configuration

All configuration is done in the two configuration files under `config/_default/`. The URL and site title can be set in `hugo.yaml`, all other parameters are set in `params.yaml`.

`hugo.yaml`:
```yaml
baseURL: 'https://chrede88.github.io/L1nkr'
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
```

Links are defined by the name (i.e. "github" or "facebook"). The names must match one of the supported links, see list below.

### Supported Links

| github | gitlab | facebook | x-twitter |
| mastodon | linkedin | instagram | reddit |
| telegram | whatsapp | signal | codepen |
| dev | discord | orcid | slack |
| stack-overflow | stack-exchange | twitch: | patreon |
| soundcloud | dribbble | tiktok | youtube |
| keybase | flickr | tumblr | kickstarter |
| snapchat | | | |