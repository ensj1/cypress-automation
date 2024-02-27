import { faker } from '@faker-js/faker';
import { times } from "lodash"

export const createFakeUser = () => ({
    email: faker.internet.email(),
    password: faker.internet.password()
})

export const createSeedUsers = (numberOfUsers) =>
    times(numberOfUsers, () => createFakeUser())

export const saveFakeUsers = (numberOfUsers) => {
    const seedUsers = createSeedUsers(numberOfUsers)

    cy.writeFile("cypress/fixtures/incorrect_email.json", seedUsers)
    cy.readFile("cypress/fixtures/incorrect_email.json", { timeout: 6000 }).then((text) => {
        expect(text).to.not.be.empty
    })
    return seedUsers
}