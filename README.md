# _Styled wotd_

> GitHub Action to generate styled Word of the Day

[![GitHub marketplace](https://img.shields.io/badge/marketplacegithub-styled--wotd-blue?logo=github)](https://github.com/marketplace/actions/styled-wotd)

[![management: perfekt👌](https://img.shields.io/badge/management-perfekt👌-red.svg)](https://github.com/lekterable/perfekt)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/AlexRogalskiy/github-action-wotd)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

<!-- [![Become a sponsor](https://img.shields.io/badge/sponsor-AlexRogalskiy-181717.svg?logo=github)](https://github.com/sponsors/AlexRogalskiy)-->

[![DeepScan grade](https://deepscan.io/api/teams/11946/projects/15929/branches/326929/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11946&pid=15929&bid=326929)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/github-action-wotd)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/github-action-wotd)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/github-action-wotd?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/github-action-wotd)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/github-action-wotd)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/github-action-wotd)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/github-action-wotd)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/github-action-wotd)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/github-action-wotd/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/github-action-wotd)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/github-action-wotd)
[![Renovatebot](https://badgen.net/badge/renovate/enabled/green?cache=300)](https://renovatebot.com/)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/github-action-wotd)
[![Hits-of-Code](https://hitsofcode.com/github/alexrogalskiy/github-action-wotd?branch=master)](https://hitsofcode.com/github/alexrogalskiy/github-action-wotd?branch=master/view?branch=master)
![CI](https://github.com/AlexRogalskiy/github-action-wotd/workflows/CI/badge.svg)
[![CircleCI](https://circleci.com/gh/AlexRogalskiy/github-action-wotd.svg?style=shield)](https://circleci.com/gh/AlexRogalskiy/github-action-wotd)

<!--[![codecov](https://codecov.io/gh/AlexRogalskiy/github-action-wotd/branch/master/graph/badge.svg)](https://codecov.io/gh/AlexRogalskiy/github-action-wotd)-->

[![GitHub Super-Linter](https://github.com/AlexRogalskiy/github-action-wotd/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][repo]
[![Public workflows that use this action.][total_usages]][search_results]
[![Licence][license_id]][license_content]

## _Table of contents_

<!--ts-->
   * [<em>Styled wotd</em>](#styled-wotd)
      * [<em>Table of contents</em>](#table-of-contents)
      * [<em>Description</em>](#description)
      * [<em>Inputs</em>](#inputs)
         * [language](#language)
         * [pattern](#pattern)
         * [width](#width)
         * [height](#height)
         * [backgroundColor](#backgroundcolor)
         * [fontColor](#fontcolor)
         * [opacity](#opacity)
         * [colorPattern](#colorpattern)
         * [name](#name)
         * [path](#path)
      * [<em>Outputs</em>](#outputs)
         * [image](#image)
      * [<em>Examples</em>](#examples)
      * [<em>Visitor stats</em>](#visitor-stats)
      * [<em>Licensing</em>](#licensing)
      * [<em>Authors</em>](#authors)
      * [<em>Versioning</em>](#versioning)
      * [<em>Contribution</em>](#contribution)
      * [<em>Acknowledgement</em>](#acknowledgement)
      * [<em>Forks</em>](#forks)
      * [<em>Development Support</em>](#development-support)
<!--te-->

## _Description_

<p align="center" style="text-align:center;">
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
    </a>
    <a href="https://www.repostatus.org/#active">
        <img src="https://img.shields.io/badge/Project%20Status-Active-brightgreen" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/created/AlexRogalskiy/github-action-wotd" alt="Project created status" />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/updated/AlexRogalskiy/github-action-wotd" alt="Project updated status" />
    </a>
</p>

Creates _**Styled Wotd**_ by language and input color parameters.

## _Inputs_

### `language`

**Optional** Word's language (default **random**)

### `pattern`

**Optional** Word's image background pattern (default **random**)

### `width`

**Optional** Word's image width (default **100%**)

### `height`

**Optional** Word's image height (default **100%**)

### `backgroundColor`

**Optional** Word's image background color (default **%23FFFFFF**)

### `fontColor`

**Optional** Word's image font color (default **%230A83DC**)

### `opacity`

**Optional** Word's image background opacity (default **0.3**)

### `colorPattern`

**Optional** Word's image text color (default **%23FFE0E9**)

### `name`

**Optional** Word's image name (default **word**)

### `path`

**Optional** Word's image path (default **images**)

## _Outputs_

### `image`

Generated word image (stored in the `path` directory)

## _Examples_

```yml
- name: Create styled wotd
  uses: alexrogalskiy/github-action-wotd@master
  with:
    language: 'french'
    pattern: 'wiggle'
    name: 'word'
    path: 'images'
```

Running locally:

- `npm run start:action --action github-action-wotd --language 'french' --pattern 'wiggle' --name word --path images`

## _Visitor stats_

[![GitHub page hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAlexRogalskiy%2Fgithub-action-wotd&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

![GitHub stars](https://img.shields.io/github/stars/AlexRogalskiy/github-action-wotd?style=social)
![GitHub forks](https://img.shields.io/github/forks/AlexRogalskiy/github-action-wotd?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AlexRogalskiy/github-action-wotd?style=social)

## _Licensing_

_**Styled Wotd**_ is distributed under LGPL version 3 or later,
[[License](https://github.com/AlexRogalskiy/github-action-wotd/blob/master/LICENSE)]. LGPLv3 is additional
permissions on top of GPLv3.

![license](https://user-images.githubusercontent.com/19885116/48661948-6cf97e80-ea7a-11e8-97e7-b45332a13e49.png)

## _Authors_

_**Styled Wotd**_ is maintained by the following GitHub team-members:

- [![Author](https://img.shields.io/badge/author-AlexRogalskiy-FB8F0A)](https://github.com/AlexRogalskiy)

with community support please contact with us if you have some question or proposition.

## _Versioning_

The project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on
this repository][tags].

## _Contribution_

[![Contributors Display](https://badges.pufler.dev/contributors/AlexRogalskiy/github-action-wotd?size=50&padding=5&bots=true)](https://badges.pufler.dev)

Please read
[CONTRIBUTING.md](https://github.com/AlexRogalskiy/github-action-wotd/blob/master/.github/CONTRIBUTING.md)
for details on our code of conduct, and the process for submitting pull requests to us
([emoji key](https://allcontributors.org/docs/en/emoji-key)).

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind are welcome!

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Github contributors](https://img.shields.io/github/all-contributors/AlexRogalskiy/github-action-wotd)

See also the list of [contributors][contributors] who participated in this project.

## _Acknowledgement_

[![Stargazers repo roster for @AlexRogalskiy/github-action-wotd](https://reporoster.com/stars/AlexRogalskiy/github-action-wotd)][stars]

## _Forks_

[![Forkers repo roster for @AlexRogalskiy/github-action-wotd](https://reporoster.com/forks/AlexRogalskiy/github-action-wotd)][forkers]

## _Development Support_

Like _**Styled Word**_ ? Consider buying me a coffee :\)

[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/alexrogalskiy)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=buy%20me%20a%20coffee)](https://www.buymeacoffee.com/AlexRogalskiy)
[![KoFi](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/alexrogalskiy)

---

[![forthebadge](https://img.shields.io/badge/made%20with-%20javascript-C1282D.svg?logo=javascript&style=for-the-badge)](https://www.javascript.com/)
[![forthebadge](https://img.shields.io/badge/powered%20by-%20github-7116FB.svg?logo=github&style=for-the-badge)](https://github.com/)
[![forthebadge](https://img.shields.io/badge/build%20with-%20%E2%9D%A4-B6FF9B.svg?logo=heart&style=for-the-badge)](https://forthebadge.com/)

[repo]: https://github.com/AlexRogalskiy/github-action-wotd
[tags]: https://github.com/AlexRogalskiy/github-action-wotd/tags
[issues]: https://github.com/AlexRogalskiy/github-action-wotd/issues
[pulls]: https://github.com/AlexRogalskiy/github-action-wotd/pulls
[wiki]: https://github.com/AlexRogalskiy/github-action-wotd/wiki
[stars]: https://github.com/AlexRogalskiy/github-action-wotd/stargazers
[forkers]: https://github.com/AlexRogalskiy/github-action-wotd/network/members
[contributors]: https://github.com/AlexRogalskiy/github-action-wotd/graphs/contributors
[license_id]: https://img.shields.io/github/license/AlexRogalskiy/github-action-wotd
[license_content]: https://github.com/AlexRogalskiy/github-action-wotd/blob/master/LICENSE
[total_usages]:
  https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-wotd%26badge%3Dtrue
[search_results]:
  https://github.com/search?o=desc&q=AlexRogalskiy/github-action-wotd+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
