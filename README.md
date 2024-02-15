# Cypress automation setup

## For displaying mocha reports in the Jenkins:

https://www.jenkins.io/doc/book/security/configuring-content-security-policy/

- Manage Jenkins->
- Manage Nodes->
- Click settings(gear icon)->
- Click Script console on left and type in the following command:
  `System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")`
