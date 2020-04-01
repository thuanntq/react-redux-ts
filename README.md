# Guide

-   React
-   Redux
-   Typescript

_Recommend use `yarn` package manager_

## Clone from git

-   Clone project from git

```bash

git clone https://github.com/thuanntq/react-redux-ts.git

#or

git clone git@github.com:thuanntq/react-redux-ts.git

```

-   run yarn install

```bash

yarn

# or

npm install

```

## Started

### Create project

```bash

# create project react with template typescript

yarn create react-app my-app --template typescript

# or

npx create-react-app my-app --template typescript

```

### Install package

```bash

# install typescript, redux, react-reduxt, typescript for react redux with exact version

yarn add typescript redux react-redux @types/react-reduxt -E

# or

npm install --save typescript redux react-redux @types/react-reduxt -E

```

```bash
root
    |- reducers
    |    |_ news
    |    |    |_ entryReducer.js
    |    |    |_ entryIdsReducer.js
    |_ selectors
    |    |_ news
    |    |    |_ entrySelector.js
    |    |   |_ entryIdsSelector.js
    |_ actions
    |    |_ news
    |    |    |_ entryAction.js
    |_ apis
    |    |_ news
    |    |    |_ entryApi.js
    |_ sagas
    |    |_ news
    |_ object
    |    |_ news
```

.
├── ...
├── docs                    # Documentation files (alternatively `doc`)
│   ├── TOC.md              # Table of contents
│   ├── faq.md              # Frequently asked questions
│   ├── misc.md             # Miscellaneous information
│   ├── usage.md            # Getting started guide
│   └── ...                 # etc.
└── ...
