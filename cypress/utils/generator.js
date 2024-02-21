import { faker } from '@faker-js/faker';
import { times } from "lodash"

const createFakeUser = () => ({
    email: faker.internet.email(),
    password: faker.internet.password()
})

export const createSeedUsers = (numberOfUsers) =>
    times(numberOfUsers, () => createFakeUser())

export const saveFakeUsers = (numberOfUsers) => {
    const seedUsers = createSeedUsers(numberOfUsers)
    // const path = cy.task('getPath')
    // cy.log(path)

    cy.writeFile("cypress/fixtures/incorrect_email.json", seedUsers, { timeout: 6000 })
    return seedUsers
}