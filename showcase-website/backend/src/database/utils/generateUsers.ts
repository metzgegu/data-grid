import { faker } from "@faker-js/faker";

const generateUserWithFaker = () => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    birthdate: faker.date.past(),
    address: faker.location.streetAddress(),
    phone: faker.phone.number(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

const generateUsersWithFaker = (count: number) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(generateUserWithFaker());
  }
  return users;
};

export { generateUsersWithFaker };
