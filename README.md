trouble
===

Collect useful troubleshooting details with a single command

Installation and usage
---

On modern versions of NPM, use `npx` to download and run directly: `npx @nicktomlin/trouble <args>`

OR `npm i -g @nicktomlin/trouble` and `trouble <args>`

```shell
$ trouble
trouble - collect information for troubleshooting issues with open source node packages

Usage:
    trouble [<dependency-names>]

    $ trouble clipboardy global-npm package-that-does-not-exist

Options:
    -h | help print this help text
```

Use Case
---

For your open source projects, you could add the following to your Github Issue template, replacing `my-module` with the name of your npm module:

```bash
# get system information and version information for `my-module`
$ npx @nicktomlin/trouble my-module
npx: installed 32 in 5.778s

The following information has been copied to your clipboard:

**Node Version** v8.1.4 (NPM: 5.3.0)
**Operating System**: macOS Sierra

my-module@1.2.3
```

Requirements
---

- Node 6+

Windows support is currently untested

Contributing
---

Please see [CONTRIBUTING.md](CONTRIBUTING.md)
