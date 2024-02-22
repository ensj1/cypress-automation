const valid_users = require('../fixtures/login.json')
import { saveFakeUsers } from '../utils/generator'


describe('Test fetching api', () => {

    let fakeUsers = []

    before('Get fake users before tests run', function () {
        fakeUsers = saveFakeUsers(5)
        cy.log(fakeUsers)
        expect(fakeUsers).to.not.be.empty
    })
    valid_users.forEach((user) => {
        it("get error in scope of missed password field", function () {
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

    fakeUsers.forEach(function (emails_data) {
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