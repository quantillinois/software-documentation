---
sidebar_position: 4
---

# Development

## Version Control 
Every Quant Software project will have two repositories, the public version of the repository and the private version of the repository where the private is a fork of the public version. You can think of these as prod and dev repositories respectively. Thus **ALL DEVELOPMENT WILL OCCUR ON THE PRIVATE REPOSITORIES**. When a stable project version has been acheived, then a pull request will be sent from the private repository to the public repository to push code to production.

## Testing
Do to Quant's infancy, we do not require rigorous unit testing. However, highly important or complicated projects will not pass the final code review without relevant tests for proof of concept. These test suites should include high code coverage (~95%), unit tests, and integration tests to account for edge cases. 

## Security
**DO NOT POST CREDENTIALS ON PUBLIC RESPOSITORIES**
**DO NOT COMMIT UNNESSACARY INFORMATION**