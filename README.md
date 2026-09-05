# 🚀 Backend API Automation Testing — Jest

Automated API testing framework built with **JavaScript, Jest, and Node.js** for validating backend REST APIs through **functional, negative, schema, and database-level testing**.

This project is designed to provide a structured and maintainable approach to API automation testing, with test scenarios organized into several validation groups:

- ✅ Positive Scenarios
- ❌ Negative Scenarios
- 📋 JSON Schema Validation
- 🗄️ Database Validation

The API under test is executed locally from a **separate backend repository**, allowing this automation project to be maintained independently from the application source code.

---

## 📌 Project Overview

This project focuses on automated validation of backend REST APIs using Jest.

The automation framework validates the API from multiple perspectives:

```text
                    ┌─────────────────────────┐
                    │     API Automation      │
                    │       Test Suite        │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     Local Backend API   │
                    │   Separate Repository   │
                    └────────────┬────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
              ▼                  ▼                  ▼
        Positive Tests     Negative Tests      Schema Tests
                                                    │
                                                    ▼
                                            Database Validation
```

---

# 🔄 Test Execution Flow

The automation flow can be represented as:

```text
Start Test
    │
    ▼
Load Environment
    │
    ▼
Prepare Test Data
    │
    ▼
Send HTTP Request
    │
    ▼
Receive API Response
    │
    ├───────────────┐
    │               │
    ▼               ▼
Functional       Schema
Validation       Validation
    │               │
    └───────┬───────┘
            ▼
     Database Validation
            │
            ▼
       Test Assertion
            │
            ▼
      Allure Reporting
```

---

# 🛠️ Technology Stack

| Technology  | Purpose                      |
| ----------- | ---------------------------- |
| Node.js     | JavaScript runtime           |
| JavaScript  | Programming language         |
| Jest        | Test framework               |
| REST API    | System under test            |
| JSON Schema | Response contract validation |
| MySQL       | Database validation          |
| dotenv      | Environment configuration    |
| Faker.js    | Dynamic test data generation |
| Allure      | Test reporting               |
| ESLint      | Code quality                 |
| Prettier    | Code formatting              |
| Git         | Version control              |
| GitHub      | Source code repository       |

---

# ⚙️ Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git
- Backend API repository
- Database server
- Java Runtime Environment for Allure CLI, if Allure CLI is used

Check Node.js:

```bash
node --version
```

Check npm:

```bash
npm --version
```

---

# 📥 Installation

Clone the automation repository:

```bash
git clone <https://github.com/fairuzhrabbani/jest-kopling-to-cvt.git>
```

Navigate into the project:

```bash
cd jest-kopling-to-cvt
```

Install dependencies:

```bash
npm install
```

---

# 🖥️ Backend Setup

The API automation project does not contain the backend application itself.

The backend application is maintained in a separate repository.

Example:

```text
Workspace/
│
├── backend-api-kopling-to-cvt/
│   └── Backend Application
│
└── jest-kopling-to-cvt/
    └── API Automation Tests
```

First, clone the backend repository:

```bash
git clone <https://github.com/fairuzhrabbani/backend-api-kopling-to-cvt.git>
```

Navigate into the backend:

```bash
cd backend-api-kopling-to-cvt
```

Install dependencies:

```bash
npm install
```

Start the backend:

```bash
npm run dev
```

The API should then be available locally, for example:

```text
http://localhost:3000
```

The automation framework will use this local API as the System Under Test (SUT).

---

# 📊 Allure Reporting

This project uses Allure to provide detailed test execution reports.

Generate the Allure report:

Or, if configured in `package.json`:

```bash
npm run allure:clean
```

```bash
npm run allure:generate
```

```bash
npm run allure:open
```

Example report structure:

```text
Allure Report
│
├── Test Case ID
├── Epic
├── Feature
├── Story
├── Severity
├── Priority
├── Tags
├── BugId
├── Request
├── Request Headers
├── Response Headers
├── Response Body
├── Database Result
└── Execution Status
```

<p align="center">
  <img src="docs/images/Backend-API-Store-Jest.png" alt="Allure Report" width="850">
  <img src="docs/images/Backend-API-Store-Jest1.png" alt="Allure Report" width="850">
</p>
---

# 🤝 Development Guidelines

To maintain code quality, this project follows:

### ESLint

```bash
npm run lint
```

### Prettier

```bash
npm run format
```

### Test

```bash
npm test
```

---

# 📂 Separation Between Backend and Automation

One of the key design decisions in this project is separating the backend application and automation test suite.

```text
┌──────────────────────────────┐
│      Backend Repository      │
│                              │
│ Express / API / Database     │
└──────────────┬───────────────┘
               │
               │ HTTP
               ▼
┌──────────────────────────────┐
│    Automation Repository     │
│                              │
│ Jest / API Client / Schema   │
│ Database Validation / Allure │
└──────────────────────────────┘
```

---

# 👨‍💻 Author

**Fairuz Hanif Rabbani**

QA Engineer | Software Quality Assurance | API Automation

---

# 📄 License

This project is intended for learning, portfolio, and automation testing purposes.

---
