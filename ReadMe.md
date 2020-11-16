### ReadMe
#### What is included in the package:

There is only one spec file under integration folder, which have a simple test, navigating to example.com

In the Cypress.json only `"experimentalSourceRewriting": true` is present

#### Steps to reproduce:
- ##### to get the crash:
set `"experimentalSourceRewriting": true`  and
run the cypress from terminal: npx cypress run

- ##### not to get the crash:
set `"experimentalSourceRewriting": false` and
run the cypress from terminal: npx cypress run
