describe('Test fetching api', () => {
    it("get error in scope of invalid body", () => {
        cy.fixture('profile').then(function (data) {
            cy.log('data from example is: ', { email: data.email })
            cy.request({
                method: "POST",
                url: "https://reqres.in/api/login",
                body: { email: data.email },
                failOnStatusCode: false
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).eq("Missing password")
            })
        })

    })
    it("check valid status code on login endpoint", () => {
        cy.fixture('login').then(function (data) {
            cy.request({
                method: "POST",
                url: "https://reqres.in/api/login",
                body: data
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.token).not.empty
            })
        })

    })
})