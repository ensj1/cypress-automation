const valid_users = require('../fixtures/login.json')
const incorrect_emails = require('../fixtures/incorrect_email.json')

describe('Test fetching api', () => {
    valid_users.forEach((user) => {
        it("get error in scope of missed password field", () => {
            cy.request({
                method: "POST",
                url: "https://reqres.in/api/login",
                body: { email: user.email },
                failOnStatusCode: false
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).eq("Missing password")
            })
        })
        it("get error in scope of missed user field", () => {
            cy.request({
                method: "POST",
                url: "https://reqres.in/api/login",
                body: { password: user.password },
                failOnStatusCode: false
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).eq("Missing email or username")
            })
        })
    })
    incorrect_emails.forEach((emails_data) => {
        it(`check error message and 400 error code for user ${emails_data.email}`, () => {
            cy.request({
                method: "POST",
                url: "https://reqres.in/api/login",
                body: emails_data,
                failOnStatusCode: false
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).eq("user not found")
            })
        })
    })

    it(`check getting 404 for missed users 🙋`, () => {
        cy.fixture('missed_user').then((user) => {
            cy.request({
                method: "GET",
                url: `https://reqres.in/api/users/${user.name}`,
                failOnStatusCode: false
            }).should((response) => {
                expect(response.status).to.eq(404)
            })
        })
    })
    it("check valid status code on login endpoint and getting token ✔️", () => {
        cy.fixture('login').then(function (data) {
            data.forEach((user) => {
                cy.request({
                    method: "POST",
                    url: "https://reqres.in/api/login",
                    body: user
                }).should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.token).not.empty
                })
            })
        })
    })
})