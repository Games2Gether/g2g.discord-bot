# Contributing

**This contributing guidelines are based on [AngularJS Contributing rules](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md)**

We'd love for you to contribute to our source code and to make the G2G.Discord-Bot better! Here are the guidelines we'd like you to follow:

* [Code of Conduct](#coc)
* [Setup](#setup)
* [Conventions](#conventions)

## <a name="coc"></a> Code of Conduct

Help us keep G2G.Discord-Bot open and inclusive. Please read and follow our [Code of Conduct][coc].

## <a name="setup"></a> Setup
To get ready to work on the codebase, please do the following:

1. Fork & clone the repository, and make sure you're on the **master** branch
2. Run `npm install`
3. Setup your **private** bot token in the [default config file](https://github.com/Games2Gether/g2g.discord-bot/blob/master/src/config/default.json). **DO NOT COMMIT THIS TOKEN**.
3. Code your heart out!
4. Ensure your code is alright & respect the current [conventions](#conventions)!
5. [Submit a pull request](https://github.com/Games2Gether/g2g.discord-bot/compare)

## <a name="conventions"></a>Conventions

### Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to more readable messages that are easy to follow when looking through the project history.

Each commut message must be of the form: `<type>(<scope>): <subject>`

#### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing or correcting existing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

#### Scope
The scope could be anything specifying place of the commit change. For example `commands`, `webhooks`, `events`, etc...

You can use `*` when the change affects more than a single scope.

#### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end
