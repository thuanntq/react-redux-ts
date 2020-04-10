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
.
├── ...
├── docs                    # Documentation files (alternatively `doc`)
│   ├── TOC.md              # Table of contents
│   ├── faq.md              # Frequently asked questions
│   ├── misc.md             # Miscellaneous information
│   ├── usage.md            # Getting started guide
│   └── ...                 # etc.
└── ...

```

## Tạo alias cho git 

```bash

git config --global alias.co checkout

git config --global alias.br branch

git config --global alias.ci commit

git config --global alias.st status

```

## Quy tắc đánh tag version 
Phiên bản phần mềm gồm 3 thành phần chính: `MAJOR.MINOR.PATCH`

- `MAJOR`: Phiên bản chính - Đánh số khi có những thay đổi không tương thích với phiên bản cũ

- `MINOR`: Phiên bản phụ - Đánh số khi thêm tính năng mới nhưng vẫn đảm bảo tương thích với các phiên bản cũ

- `PATCH`: Phiên bản vá - Đánh số cho nhưng bản vá lỗi, sửa lỗi nhỏ

