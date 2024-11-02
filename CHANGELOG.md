# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [1.9.2] - 2024-11-02

### Added
- New icon `SSH-key`
- New icon `Certifications`

## [1.9.1] - 2024-10-28

### Added
- New icon `PGP-key`.

## [1.9.0] - 2024-10-27

### Added
- Added default `ai.txt`. The default is to disallow LLM training on everything.
  Change this by adding a `./static/ai.txt` file to your repo.

### Hugo
- Bumped to v0.136.5

### Go
- Bumped to v1.23.2

## [1.8.6] - 2024-03-19

### Hugo
- Support for Hugo v0.124.0

### Go
- Support for Go v1.22.1

## [1.8.5] - 2024-01-26

### Hugo
- Support for Hugo v0.122.0

## [1.8.4] - 2024-01-06

### Hugo
- Added support for Hugo v0.121.2

## [1.8.3] - 2023-12-23

### Changed
- updating Bluesky icon

## [1.8.2] - 2023-12-18

### Added
- Added 404

## [1.8.1] - 2023-12-05

### Hugo
- Added support for Hugo v0.121.0

## [1.8.0] - 2023-11-25

### Added
- New monochromatic color scheme option. Set `monochrome: true` in `params.yaml`.

### Breaking Change

- Please note the breaking change in `v1.7.0` if you're updating from an older version!

## [1.7.0] - 2023-11-20
### Breaking Change
- Module name changed!
  Name changed from `github.com/Chrede88/L1nkr` to `github.com/chrede88/L1nkr`. Update the module name in your site config: `./config/_default/hugo.yaml` and in `go.mod`.

## [1.6.0] - 2023-11-11

### Added
- Support for icon name in link. Set `icontext: true` in `params.yaml`.

### Changed
- Updated icons to follow the general style convention. All supported icons now conform to the same style template.
- Updated promotional images for the theme.

## [1.5.3] - 2023-11-09

### Golang
- Support for Go v1.21.4

## [1.5.2] - 2023-11-08

### Hugo
- Support for Hugo v0.120.4

## [1.5.1] - 2023-11-07

### Changed
- Change the tooltip behaviour

## [1.5.0] - 2023-11-07

### Added
- New feature: Tooltips for icons.

## [1.4.0] - 2023-11-06

### Added
- Support for site healthcheck, at URL/healthcheck.json

## [1.3.4] - 2023-11-02

### Hugo
- Support for Hugo v0.120.3

## [1.3.3] - 2023-10-31

### Hugo
- Support for Hugo v0.120.2

## [1.3.2] - 2023-10-30

### Changed
- Convert author image to `.webp`.

### Hugo
- Support for Hugo v0.120.0

### Dependencies
- Bump tailwindcss to v3.3.5
- Bump setup-node to v4

## [1.3.1] - 2023-10-22

### Fixed
- Fixed a text wraping issue for greeting message.

## [1.3.0] - 2023-10-20

### Added
- Support for emoji next to the author image (Github style)
- More supported link icons, total at 48.
- Added support for custom link icons.

## [1.2.0] - 2023-10-14

### Added
- OpenGraph & Twitter Cards

### Changed
- Improved Lighthouse score

### Fixed
- Changelog

## [1.1.0] - 2023-10-13

### Added
- More icons, now 43 in total

## [1.0.0] - 2023-10-12

### Added
- Simple LinkTree theme, design for mobile-first
- Automatic dark mode (based on system setttings)
- Emoji support for a fun design
- More than 30 supported brand links

[unreleased]: https://github.com/Chrede88/L1nkr/compare/v1.9.2...HEAD
[1.9.2]: https://github.com/Chrede88/L1nkr/compare/v1.9.1...v1.9.2
[1.9.1]: https://github.com/Chrede88/L1nkr/compare/v1.9.0...v1.9.1
[1.9.0]: https://github.com/Chrede88/L1nkr/compare/v1.8.6...v1.9.0
[1.8.6]: https://github.com/Chrede88/L1nkr/compare/v1.8.5...v1.8.6
[1.8.5]: https://github.com/Chrede88/L1nkr/compare/v1.8.4...v1.8.5
[1.8.4]: https://github.com/Chrede88/L1nkr/compare/v1.8.3...v1.8.4
[1.8.3]: https://github.com/Chrede88/L1nkr/compare/v1.8.2...v1.8.3
[1.8.2]: https://github.com/Chrede88/L1nkr/compare/v1.8.1...v1.8.2
[1.8.1]: https://github.com/Chrede88/L1nkr/compare/v1.8.0...v1.8.1
[1.8.0]: https://github.com/Chrede88/L1nkr/compare/v1.7.0...v1.8.0
[1.7.0]: https://github.com/Chrede88/L1nkr/compare/v1.6.0...v1.7.0
[1.6.0]: https://github.com/Chrede88/L1nkr/compare/v1.5.3...v1.6.0
[1.5.3]: https://github.com/Chrede88/L1nkr/compare/v1.5.2...v1.5.3
[1.5.2]: https://github.com/Chrede88/L1nkr/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/Chrede88/L1nkr/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/Chrede88/L1nkr/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/Chrede88/L1nkr/compare/v1.3.4...v1.4.0
[1.3.4]: https://github.com/Chrede88/L1nkr/compare/v1.3.3...v1.3.4
[1.3.3]: https://github.com/Chrede88/L1nkr/compare/v1.3.2...v1.3.3
[1.3.2]: https://github.com/Chrede88/L1nkr/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/Chrede88/L1nkr/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/Chrede88/L1nkr/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/Chrede88/L1nkr/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/Chrede88/L1nkr/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Chrede88/L1nkr/releases/tag/v1.0.0
