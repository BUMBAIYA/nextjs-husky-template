# Nextjs Husky Template

This is a [Next.js](https://nextjs.org/) project template bootstraped with [Tailwindcss](https://tailwindcss.com), [Pretiier](https://prettier.io/), [Prettier-tailwindcss-plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss), [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged)

## Why

Linting and code formatting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a lint process on a whole project is slow, and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

1. Prettier - Code is formatted on save - Same code formatting throughtout the codebase - No need to discuss code style in code review

2. Prettier-tailwindcss-plugin - Formats tailwindcss classes - Each contributer will have same tailwindcss class sequence

3. Husky - Create a pre commmit hook - Run a script on staged code before committing.

4. Lint-staged - Ensure no errors go into the repository and enforce code style.

## Getting Started

### Step 1 - Clone and Install Dependencies

```bash
git clone https://github.com/BUMBAIYA/nextjs-husky-template.git
```

Important: Install dependencies before changing files.

Run this command in project root folder

```bash
yarn
```

### Step 2 - Create new git repo

Delete the `.git` folder from the repo

Note: Enable show hidden folder to show `.git` folder on windows

Initialize new local repo run this from project root

```bash
git init .
```

Important: Edit the name in `package.json` file as your project name

### Step 3 - Enable Git hooks

```bash
npx husky install
```

### Step 4 - Add and Commit

```bash
git add .
git commit -m "Initial commit"
```

## Step - 5 You are all set for your usual development after following all the steps

## Customize Code Styles

To set code style of your liking edit `prettier.config.js`

Note: After changing code styles run this commands to format the codebase as your code style

```bash
npx prettier --write *
npx prettier --write ./src
```

## Add pre commit hook

```bash
npx husky add .husky/pre-commit "# New Hook"
```

or [refer](https://typicode.github.io/husky/getting-started.html#create-a-hook)

To add new lint stage edit `.lintstagedrc.json` or [refer](https://github.com/okonet/lint-staged#readme)
