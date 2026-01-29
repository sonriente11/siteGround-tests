Project installation 
1. Open the project in Visual Studio Code
2. Install dependencies: npm install
3. Run all tests in the Email suite: npm test email
4. Optional:
   *add "--ui" - to run the tests in headed mode 
   *add "--debug" - to run the tests in debug mode

------------------------
 Requirements:
Create a solution for a test automation and implement the following tests for the web
application:
https://sqqadevs.com/?demoToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJzdF9u
YW1lIjoiUSIsImxhc3RfbmFtZSI6IkEiLCJlbWFpbCI6InEuYUBzaXRlZ3JvdW5kLmNvbSIsImRvb
WFpbiI6IiIsImxhbmciOiJlbiIsImV4cCI6MTk3MDEyNTA3NzJ9.MXA6ZIdl85XojUPStcz3JqyEct0b
pKeOk_EEfOh7z7o

Application Description and Features:
The application is a demo version of a web application responsible for managing web hosting
services. The application can only be accessed if a JWT token is provided as a value for the
parameter - demoToken. The token uses the HS256 algorithm with the following information:
{
"first_name": "Q",
"last_name": "A",
"email": "q.a@siteground.com",
"domain": "",
"lang": "en",
"exp": 19701250772
}
The token is not validated for a valid signature.

Example of initial access URL:
https://sqqadevs.com/?demoToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJzdF9u
YW1lIjoiUSIsImxhc3RfbmFtZSI6IkEiLCJlbWFpbCI6InEuYUBzaXRlZ3JvdW5kLmNvbSIsImRvb
WFpbiI6IiIsImxhbmciOiJlbiIsImV4cCI6MTk3MDEyNTA3NzJ9.MXA6ZIdl85XojUPStcz3JqyEct0b
pKeOk_EEfOh7z7o

The application does not manage real hosting services. The initial data (demo data) is initialized
by the Application and is stored in the browser's localStorage. The result of working with it is
also saved in the browser's localStorage.
Automate the following cases:
TC#1 Add an email account.
1. Load the home page - https://sqqadevs.com/?demoToken=<token>
2. From the left navigation, select Email -> Accounts.
3. Click on the Select Domain dropdown and check that only the following values are
available: qa-automation-tools.com, store.qa-automation-tools.com,
parked-qa-automation-tools.com, site-tools-demo.net
4. Select site-tools-demo.net
5. Enter Account Name - test_account
6. Click on Generate in the Enter Password input field
7. Verify that Password is populated
8. Click on Create button
9. Check that the successful message “Email account <account name> is created” is
displayed.
10. Verify that account exists in the “Manage Email accounts” list
TC#2 Add an empty email Forwarder.
1. Load the home page - https://sqqadevs.com/?demoToken=<token>
2. From the left navigation, select Email -> Forwarders.

3. Click on the Select Domain dropdown and check that only the following values are
available: qa-automation-tools.com, store.qa-automation-tools.com,
parked-qa-automation-tools.com, site-tools-demo.net
4. Select site-tools-demo.net
5. Leave inputs empty
6. Click on Create button
7. Validate that the following error “Required field” appears for the “Forward all messages
sent to:” input.