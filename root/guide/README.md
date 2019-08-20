# SDD Specification

::: tip
[[toc]]
:::

## 1. Introduction

### 1.1 Purpose

<!-- Identify the product whose software requirements are specified in this document, including the revision or release number. Describe if this document describes only part of the system or a single subsystem. -->

This project requires an common hub for the office authorities to perform create, edit & update to the **UPCOMING / CURENT project** tasks. a part of the project shoud be a **PWA**(_can serve webpage offline, push notifications_). the initial build will be consider as **`v0.1`**

### 1.2 Product Scope

<!-- Provide a short description of the software being specified and its purpose. If a separate vision and scope document is available, refer to it rather than duplicating its contents here. -->

this product is it's initial phase so it is onsider to be in version **`0.1`**
::: warning NOTE:

- verify employe skillset
- asigne product to the employ
- view availabel employe with required skillset
- view ongoing / negotiating projects
- perform CRU(read, create, update ) the project
- load pages offline.
  :::

### 1.3 References

<!-- List down any relevant documents referenced in this document. For eg. UI Prototype, FRS
Provide enough information so that a reader could access a copy of each reference, including title, version number, data and location. -->

this is the initial version of this project, the location of this project will be mentioned in the later versions

## 2. Overall Description

### 2.1 Product Models ( Database Design )

<!-- Provide a class diagram of all the models and how they relate to each other. Refer to page 3,4 for a sample diagram. -->
#### db class diagram
![relationship diagram](/images/relationship.png)
#### logic diagram
![relationship diagram](/images/logic.png)

### 2.2 Design and Implementation Constraints

<!-- Describe any items or issues that will limit the options available to the developers. These might include: corporate or regulatory policies; hardware limitations; interfaces to other applications; specific technologies, tools, and databases to be used;  language requirements; communications protocols; security considerations; design conventions or programming standards (for example, if the customer’s organization will be responsible for maintaining the delivered software). -->

#### SKILL REQUIRED

- Basic understanding of javaScript
- Basic understanding of REST full API using [NODEJS](https://nodejs.org/en/docs/)
- material ui framework such as [Vuetify](https://vuetifyjs.com/)
- Basic understanding of [VueJS](https://vuejs.org)
- Basic idea on [PWA](https://developers.google.com/web/tools/workbox/)

#### TOOLS USED

- [NUXTJS](https://nuxtjs.org/)
- [NODEJS](https://nodejs.org/en/docs/)/[EXPRESS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

::: tip NOTE:
everything in NUXTJS is **SSR** so some components which uses client side features like browser window object won't work. so in order user the **client side render** for a specefic component wrap that component with `no-ssr` tag

```vue
<no-ssr>
    <YourComponent/>
</no-ssr>
```

:::

::: warning
NUXTJS provide the vue for this application, node/express provide the backend logic,

PWA is implemented using the help of [Nuxt PWA](https://pwa.nuxtjs.org/) which uses [workbox](https://developers.google.com/web/tools/workbox/)
:::

### 2.3 Assumptions

<!-- List any assumed factors that could possibly affect the requirements stated in the SRS -->

## 3. External Interface Requirements

### 3.1 Software Interfaces

<!-- Describe the connections between this product and other specific software components (name and version), including databases, operating systems, tools, libraries, and integrated commercial components. Identify the data items or messages coming into the system and going out and describe the purpose of each. Identify data that will be shared across software components. If the data sharing mechanism must be implemented in a specific way, specify this as an implementation constraint -->

- should have NodeJS installed on the system
- should have mongoDB installed
- if unex based kernal then ok but if it is on windows then node **module** folder should be deleted and the following command should be performed

```sh
cd <project folder name> && npm i
```

- **OS:** linux ubuntu <Badge text="v16.0.4"/>
- **OS type:** 64-bit
- **DB:** MongoDB <Badge text="v3.6.13"/>

#### **EMPLOYE TABLE**

| key         | type         |
| ----------- | ------------ |
| \_id        | **ObjectID** |
| Name        | text         |
| designation | text         |
| role        | text         |
| level       | text         |

#### **SKILLS**

| key             | type         |
| --------------- | ------------ |
| \_id            | **ObjectID** |
| employe         | **ObjectID** |
| primarySkills   | list         |
| secondarySkills | list         |

#### **EMPLOES PROJECTS**

| key         | type         |
| ----------- | ------------ |
| \_id        | **ObjectID** |
| employe     | **ObjectID** |
| productName | **ObjectID** |
| startDate   | Date         |
| endDate     | Date         |

#### **PRODUCTS**

| key            | type |
| -------------- | ---- |
| name           | text |
| description    | text |
| EstimatedStart | date |
| EstimatedEnd   | date |
| status         | text |

### 3.2 Hardware Interfaces

<!-- Describe each interface between the software product and the hardware components of the system. This may include the supported device types, the nature of the data and control interactions between the software and the hardware, and communication protocols to be used. -->

- A Computer running **OS:** UNEX based (linux)

## 4. Non-functional Requirements

### 4.1 Performance Requirements

<!-- If there are performance requirements for the product under various circumstances, state them here, to help understand the intent and make suitable design choices. You may need to state performance requirements for individual functional requirements or features. -->

this system contains an common **DB** and Backend Servere and two seperate front end client, one could be an PWA and another could be an normal local app.

### 4.2 Security Requirements

<!-- Specify any requirements regarding security or privacy issues surrounding the use of the product or protection of the data used or created by the product. Define any user identity authentication requirements. Refer to any external policies or regulations containing security issues that affect the product. Define any security or privacy certifications that must be satisfied -->

curently thier is no security or privacy issues as I Recognise

## 5. System Features

<!-- Provide a breakdown of all the system components (feature specific) and how they are to be
implemented. A high level overview should suffice unless the component is complex enough to
warrant a more detailed approach. In which case, provide detailed flows based on the test
cases provided and how each case is handled. Eg. UML Diagram -->

### Controllers Used

- Get All Users with their skillsets
- Get All Users without Any Product asigned
- Get All User With their Products
- Get All Product Minimal Details with it's status
- Get One Product Details with it's status
- Update Status Of A Product
- Create Product
- Update Users With new Products
- Post Request With Required SkillSet
- Get Users Based On Their SkillSet

## 5.1 Authorization and Authentication module

### Regester

- Client validates the users data and send it to the server
- server receivs the data from the client and validate it
- if server finds any error in those datas then it will send an error status and an error message to the client
- if server validation went well then it will check for the users with the same user name
- then it will search for the users with the same email address if it finds any then it will send error message to the client
- if their is no error then it will encript the user's password and insert that user to the DataBase and send 200 status

### Login

- Client Validates the user data and send it to the server
- server receives the data and find the users based on the email address
- if server can't be find using based on the email address then it will search user based on the userName
- if the server still can't find the user based on their email address then it will send an error status along with the error message
- if the server find the user then it will take the non-sensative data of the user, turn it into __jwt__ and send it through __coockies__ with ___httponly___ flag

### Description & Outline
we use JSONWEBTOKEN & cookie to for authendication
and we use numerical level based authendication for authoriation

## 5.2 Configuration module
- express
- bcryptjs
- mongoose
- mongodb
- cookie-paprser
- jasonwebtoken

## 5.3 Generator module
### Login modules
this module performs the login Authendication & authorization part
the authendication is based on the user name or the user email and the authorization is based on the numaric which are as 0, 1, 2 these donot define the priority of the employe but the roll which they play
- 0 - ADMIN
- 1 - HR
- 2 - ADMIN-2

### ADMIN
- they can create, edit, update the employe skills and employe projects
- can post an request to the hr for an employe with the mentioned skills
### 1-HR
- can view the required employe for the task
- can asign employe with the appropreate skillset
### SALES
- they can create and edit the Project
- view the product status


## 5.4 Error handling module

### example Class & Methods
error handeling is done through the following manner
first if we detect any error we mention what kind of error it is and use our custome error hander class called ErrHandle to create an objet and throw it. and our error handeler function will catch it and send it to the client.

```js
// this would be our Error Class
class ErrHandle {
    private status;
    private message;
}
```

```js
// error handeler function
import express from express();
let app = express();
app.use((err,req,res,next)=>{
    let { status, message } = err;
    res.status(status).json({error:{message});
});
```

```js
// example
const MyFunc = () => {
    try {
        // our code
    } catch (error) {
        const err = ErrHandle(404, "error message");
        throw(err);
    }
}
```

## 5.6	File handler module
the only file which is being handeled by us curently is the image files so we use multer for it and accept only .png, .jpg, .jpeg formate files




<!-- 5.1	System Feature 1
5.2	System Feature 2
…
5.N	System Feature N	 -->







