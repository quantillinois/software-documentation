# Quant API 

## Overview
The Quant API will be the premier interface for anything and everything Quant related. It should be structured as follows:
- Interface Layer : (GraphQL Interface)
- Cross Cutting Concerns Layer : (Authorization, Authentication, Logging, Permissions ... )
- Business Logic Layer : (Point System, Blog Publisher, Recruitment Service, Hermes, Job Board Backend, etc)
- Data Layer : (Digital Ocean Database)
By consildating functionality into a single GraphQL API, this will allow us to set the stage for future projects and automate all club infrastructure so that the software division can focus on other projects. 

## Deliverables
- (Data Layer) Design a secure Database model on Digital Ocean to store club data. This should be easily extensible as we integrate more services into the API. Make sure to design with GraphQL in mind.
- (Cross Cutting Concerns Layer) Create a cross cutting concerns layer for the API that handles authorization, authentication, logging and permissions. Essentially, before any request reaches the business logic layer or the data layer, the cross cutting concerns layer should ensure that the request is valid.
- (Interface Layer) Layout a skeleton for the GraphQL API interface. This skeleton should be able to at least request information about some sort of "person" where the user or an exec member can request information from the quant form.

## Constraints
This project should probably be completed in Node.js or Python due to their compatabilities with GraphQL. The interface must also be GraphQL and not REST.

## Resources
https://graphql.org/graphql-js/authentication-and-express-middleware/
