

# README

### set it up 

1. `$ npm install`
1. `$ cp .env.example .env`
1. `$ createdb proctoring_system_development`
1. `$ createdb proctoring_system_test`
1. `$ npm run db:migrate`
1. `$ npm db:migrate:test`
1. rollback to a specific version:
    * `$ MIGRATE_TO=<TIMESTAMP OF MIGRATION> yarn db:migrate`
1. `$ nodemon start`
    * `$ npm global add nodemon` if you don't have it... this will restart your server on *most* changes


### Tests, test coverage & reports, and linter
Tests (also runs linter on success)
* `$ npm test`

Test coverage and reports
* `$ npm run coverage` - runs tests and reports coverage
* `$ npm run report` - generates coverage artifacts
* `$ open coverage/lcov-report/index.html`

Linter alone
1. `$ npm run lint`

### [curl docs](./curl.md)




