trouble
===

Allow users to easily collect troubleshooting from your [github issue templates](https://github.com/NickTomlin/protractor-flake/blob/master/.github/ISSUE_TEMPLATE#L12) and anywhere else open source is done:

```bash
# get system information and version information for `my-module`
$ npx @nicktomlin/trouble my-module
npx: installed 32 in 5.778s

The following information has been copied to your clipboard:

**Node Version** v8.1.4 (NPM: 5.3.0)
**Operating System**: macOS Sierra

my-module@1.2.3
```

Modern versions of NPM can use `npx` to download and run directly: `npx @nicktomlin/trouble <args>`

Older versions of npm will need to install and run `npm i -g @nicktomlin/trouble` and `trouble <args>`

```shell
$ trouble
trouble - collect information for troubleshooting issues with open source node packages

Usage:
    trouble [<dependency-names>]

    $ trouble clipboardy global-npm package-that-does-not-exist

Options:
    -h | help print this help text
```

Requirements
---

- Node 6+

Windows support is currently untested

Contributing
---

Please see [CONTRIBUTING.md](CONTRIBUTING.md)
