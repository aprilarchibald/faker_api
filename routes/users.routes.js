const { faker } = require('@faker-js/faker');

const createUser = (req, res) =>{
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: 1
    }
    return newUser;
}

const createCompany = (req, res) =>{
    const newCompany = {
        _id: 2,
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
    return newCompany;
}

const newUser = createUser();
const newCompany = createCompany();

module.exports = (app) =>{
app.get("/api/users/new", (req, res) =>{
    res.json(newUser)
})

app.get("/api/companies/new", (req, res) =>{
    res.json(newCompany)
})

app.get("/api/user/company", (req, res) =>{
    res.json({newUser, newCompany})
})
}

//get one user
// app.get("/api/users/new/:index", (req, res) => {
//     //const {index} = req.params
//     res.json(users[req.params.index])
// })

//create a user
// app.post("/api/users", (req, res) => {
    // users.push(req.body)
    // res.json({status : 200})
// })