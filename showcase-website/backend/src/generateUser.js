import * as fs from "fs";
import { generateUsersWithFaker } from "./faker.js";

const generateUsers = (count) => {
    const json = JSON.stringify(generateUsersWithFaker(count))

    fs.writeFileSync('users.json', json);
}

generateUsers(1000);