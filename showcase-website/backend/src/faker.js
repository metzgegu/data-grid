import { faker } from '@faker-js/faker';

const generateUserWithFaker = () => {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        birhdate: faker.date.past(),
        address: faker.location.streetAddress(),
        phone: faker.phone.number(),
    };
}

const generateUsersWithFaker = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push(generateUserWithFaker());
    }
    return users;
}

export { generateUserWithFaker, generateUsersWithFaker };