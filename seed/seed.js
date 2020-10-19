const db =require('../server/db');
const {User, Model, Order, Lambo}=require('../server/db/models');

async function seed(){
await db.sync({force:true})
console.log("It works!")

const users =await Promise.all([
    User.create({name: 'Lary', email: 'lary@email.com', password: 'password'}),
    User.create({name: 'Peter', email: 'peter@email.com', password: 'password'}),
    User.create({name: 'Oscar', email: 'oscar@email.com', password: 'password', isAdmin:true}),
    User.create({name: 'Quinwei', email: 'quinwei@email.com', password: 'password', isAdmin:true}),
    User.create({name: 'Laziz', email: 'laziz@email.com', password: 'password', isAdmin:true}),
    User.create({name: 'Dmitry', email: 'dmitry@email.com', password: 'password', isAdmin:true})
])
const lamobos = await Promise.all([
    Lambo.create({
    id:1,
    model: 'Avendator S',
    description: 'good Car!',
    price: 2000,
    image: ''
  }),
    Lambo.create({
    id:2,
    model: 'Avendator S Roadster',
    description: 'good Car!',
    price: 2000,
    image: ''
  }),
  Lambo.create({
    id:3,
    model: '',
    description: '',
    price: 2000,
    image: ''
  }),
  Lambo.create({
    id:4,
    model: '',
    description: '',
    price: 2000,
    image: ''
  }),
  Lambo.create({
    id:5,
    model: '',
    description: '',
    price: 2000,
    image: ''
  }),
  Lambo.create({
    id:6,
    model: '',
    description: '',
    price: 2000,
    image: ''
  }),
  Lambo.create({
    id:7,
    model: '',
    description: '',
    price: 2000,
    image: ''
  }),
  Lambo.create({
    id:8,
    model: '',
    description: '',
    price: 2000,
    image: ''
  }),
  Lambo.create({
    id:9,
    model: '',
    description: '',
    price: 2000,
    image: ''
  }),
  Lambo.create({
    id:10,
    model: '',
    description: '',
    price: 2000,
    image: ''
  }),
  Lambo.create({
    id:11,
    model: '',
    description: '',
    price: 2000,
    image: ''
  }),
  Lambo.create({
    id:12,
    model: '',
    description: '',
    price: 2000,
    image: ''
  }),
  Lambo.create({
    id:13,
    model: '',
    description: '',
    price: 2000,
    image: ''
  }),

])
}