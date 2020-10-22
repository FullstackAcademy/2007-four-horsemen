
const {db} =require('../server/db');
const {User, Order, Product,Shipment,Cart,Customer,Payment}=require('../server/db/').models;



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
const products = await Promise.all([
  Product.create({
    id:1,
    model: 'Aventador S',
    description: 'Following the Miura, Islero, Countach and Urraco, today’s most iconic Lamborghini reflects the heritage of the historic S models into the Aventador S. The exclusive design and a V12 engine that develops an extraordinary 740 hp combine with the most sophisticated technology available, LDVA (Lamborghini Dinamica Veicolo Attiva, Lamborghini Active Vehicle Dynamics).',
    price: 425000,
    image: 'download.jpeg'
  }),
  Product.create({
    id:2,
    model: 'Aventador S Roadster',
    description: 'The icon that inherited the legacy of the historic S models of the Miura, Islero, Countach and Urraco returns with the Aventador S Roadster. The 740 hp V12 engine and the exclusive open-top Lamborghini design combines with the most sophisticated technology available in LDVI (Lamborghini Dinamica Veicolo Attiva, Lamborghini Active Vehicle Dynamics).',
    price: 450000,
    image: 'download.jpeg'
  }),
  Product.create({
    id:3,
    model: 'Aventador SVJ',
    description: 'Lamborghini created the Aventador SVJ to embrace challenges head-on, combining cutting-edge technology with extraordinary design, while always refusing to compromise. In a future driven by technology, it’s easy to lose the genuine thrill of driving. But in the future shaped by Lamborghini, this won’t be left behind, because there will always be a driver behind the wheel. ',
    price: 475000,
    image: 'download.jpeg'
  }),
  Product.create({
    id:4,
    model: 'Aventador SVJ Roadster',
    description: 'Limited to a mere 800 examples, the SVJ Roadster is the most iconic form of the Aventador family. Its Lamborghini aerodynamics represent the most futuristic ever designed: the ALA 2.0 system and aero-vectoring ensure the minimum drag on straightaways and the optimal aerodynamic load when cornering. The 770 hp naturally aspirated V12 engine inspires awe. ',
    price: 475000,
    image: 'download.jpeg'
  }),
  Product.create({
    id:5,
    model: 'Huracan Evo',
    description: 'The Huracán EVO is the evolution of the most successful V10-powered Lamborghini ever. The result of fine-tuning and refining existing features, combined with new design solutions that increase performance, the car stands out for its ability to anticipate and cater to the driver’s behavior, expectations and desires.',
    price: 200000,
    image: 'download.jpeg'
  }),
  Product.create({
    id:6,
    model: 'Huracan Evo Spyder',
    description: 'The Huracán EVO Spyder lets one experience the thrill of extreme driving. Colors, smells and sounds meld with a seductive design and ultra-light materials. The 640 hp naturally aspirated V10 engine roars with authority, as the exhaust announces the presence of a formidable machine. The aerodynamic lines of the super sports car, perfectly streamlined, slice through the air.',
    price: 220000,
    image: 'download.jpeg'
  }),
  Product.create({
    id:7,
    model: 'Huracan Evo RWD',
    description: 'The Huracán EVO RWD bears the evolution of the predictive technology employed in the best-loved Lamborghini V10 model, distilled to deliver pure, unfiltered driving excitement. Here, driving skills and mechanics make the difference: this “return to rear-wheel drive” embraces the origins of mechanical purity—the true essence of a Lamborghini.',
    price: 250000,
    image: 'download.jpeg'
  }),
  Product.create({
    id:8,
    model: 'Huracan Evo RWD Spyder',
    description: 'The Huracán EVO RWD Spyder is dedicated to those who believe in the pure pleasure and excitement of driving, an experience heightened by the adrenaline that comes from open-top performance. Discovering new roads with the wind in your hair, heart racing with the sound of the engine, gives you an unparalleled feeling of freedom as you accelerate toward new emotions. The magic unfolds as you “return to rear-wheel drive” and immerse yourself in the tactile sensations and the mechanical purity of a Lamborghini.',
    price: 250000,
    image: ''
  }),
  Product.create({
    id:9,
    model: 'Urus',
    description: 'The soul of a super sports car and the functionality of an SUV: Lamborghini Urus is the first Super Sport Utility Vehicle in the world. With extreme proportions, breathtaking design, extraordinary driving dynamics and heart-pounding performance, Urus represents freedom in its quintessential state. You can experience any road, from track to the sand, ice, gravel or rocks, thus unlocking any road. You can explore any new terrain, thus expressing yourself.',
    price: 200000,
    image: 'download.jpeg'
  }),
  Product.create({
    id:10,
    model: 'Urus Pearl Capsule',
    description: 'The Urus Pearl Capsule offers a selection of exclusive pearl paints and style elements that embrace the bright colors of Lamborghini tradition. This new realm of customization showcases the inimitable style and exhilarating performance of the world’s first Super Sport Utility Vehicle. Take the freedom of Urus to a higher level by forging new paths as an expression of yourself. Unlock any road, unlock your personality.',
    price: 230000,
    image: 'download.jpeg'
  }),
  Product.create({
    id:11,
    model: 'Urus Graphite Capsule',
    description: 'The Urus Graphite Capsule presents Lamborghini drivers all the possibilities to go anywhere with inimitable character and style. Sporting a powerful look and a dynamic stance, these exclusive configurations combine sophisticated satin-effect matte colors with contrasting bright-colored details that express new and alluring interpretations of your personality.It’s time to reveal yourself to the fullest. Venture into new challenges and declare your most authentic self aboard the world’s first Super SUV. Unlock any road … unlock your personality.',
    price: 250000,
    image: 'download.jpeg'
  }),
  Product.create({
    id:12,
    model: 'Sian FKP 37',
    description: 'The Sián FKP 37 is the first super sports car powered by a V12 engine and hybrid technology based on supercapacitors. Its powerful V12 engine, coupled with electric boost, creates an unrivaled gem of engineering and technology. Sián—lightning in Bolognese—is a name that captures the car’s true character, foremost its speed, which exceeds 220 mph (350 km/h).',
    price: 3150000,
    image: 'download.jpeg'
  }),
  Product.create({
    id:13,
    name: 'Sian Roadster',
    description: 'The first open-top hybrid Lamborghini super sports car to feature a supercapacitor, the Sián Roadster roars with electrified intensity, resonating with the inimitable V12 sound from the most powerful Lamborghini engine to date. Limited to only 19 examples, the Sián Roadster advances hybrid technology with the world’s first use of a supercapacitor in a materials-science application unique to the industry.',
    price: 3500000,
    image: 'download.jpeg'
  }),

])

  
  const orders = await Promise.all([
    Order.create({
      status: 'PROCESSING',
      name: 'Lary',
      email: 'lary@email.com',
      quantity:1,
      date:11/24/2020,
      isDebit: false

    }),
    User.create({
      name: 'Peter',
      email: 'peter@email.com',
      password: 'password',
    }),
    User.create({
      name: 'Oscar',
      email: 'oscar@email.com',
      quantity:1,
      date:08/23/2020,
      isDebit: true
    }),
    User.create({
      name: 'Quinwei',
      email: 'quinwei@email.com',
      quantity:1,
      date:10/24/2020,
      isDebit: false

    }),
    User.create({
      name: 'Laziz',
      email: 'laziz@email.com',
      quantity:1,
      date:09/15/2020,
      isDebit: true
    })
  ])

  const shipments = await Promise.all([
    Shipment.create({
      tracking_num:'11111',
      shipment_date:09/23/2020,
    }),
    Shipment.create({
        tracking_num:'22222',
        shipment_date:11/24/2020,
    }),
    Shipment.create({
        tracking_num:'33333',
        shipment_date:10/15/2020,
    }),
   
  ])
  const carts = await Promise.all([
    Cart.create({
      session_id:'12345',
      created_date:11/11/2020,
      //orderId:1,
    //   carId:1,
    //   price: 475000,
    })])

    const payments = await Promise.all([
        Payment.create({
         payment_type:'credit',
         payment_date:11/24/2020,
        }),
        Payment.create({
            payment_type:'debit',
            payment_date:08/23/2020,
           }),
        Payment.create({
            payment_type:'bitcoin',
            payment_date:10/24/2020,
           }),
        Payment.create({
            payment_type:'debit',
            payment_date:09/15/2020,
           }),
    ])

//   await Promise.all([
//     Products[0].addModel(models[0]),
//     Products[1].addModel(models[0]),
//     Products[2].addModel(models[0]),
//     Products[3].addModel(models[0]),
//     Products[4].addModel(models[1]),
//     Products[5].addModel(models[1]),
//     Products[6].addModel(models[1]),
//     Products[7].addModel(models[1]),
//     Products[8].addModel(models[2]),
//     Products[9].addModel(models[2]),
//     Products[10].addModel(models[2]),
//     Products[11].addModel(models[3]),
//     Products[12].addModel(models[3]),
   
//   ])
  
  
  
  await Promise.all([
    orders[0].addCar(products[0]),
    orders[1].addCar(products[2]),
    orders[2].addCar(products[4]),
    orders[3].addCar(products[5])
  ])
  
  await Promise.all([
    orders[0].setUser(users[3]),
    orders[1].setUser(users[2]),
    orders[2].setUser(users[4]),
    orders[3].setUser(users[5])
  ])

  //   const orders = await Promise.all([
  //     Order.create({
  //       status: 'PROCESSING',
  //       name: 'Lary',
  //       email: 'lary@email.com',
  //       isDebit: false
  //     }),
  //     Order.create({
  //       status: 'APPROVED',
  //       name: 'Oscar',
  //       email: 'oscar@email.com',
  //       isDebit: true
  //     }),
  //     Order.create({
  //       status: 'APPROVED',
  //       name: 'Quinwei',
  //       email: 'quinwei@email.com',
  //       isDebit: false
  //     }),
  //     Order.create({
  //       status: 'APPROVED',
  //       name: 'Laziz',
  //       email: 'laziz@email.com',
  //       isDebit: true
  //     })
  //   ])
  //   const orderedcars = await Promise.all([
  //     OrderedCar.create({
  //       orderId:1,
  //       carId:1,
  //       price: 475000,
  //     })])

  //   await Promise.all([
  //     Products[0].addModel(models[0]),
  //     Products[1].addModel(models[0]),
  //     Products[2].addModel(models[0]),
  //     Products[3].addModel(models[0]),
  //     Products[4].addModel(models[1]),
  //     Products[5].addModel(models[1]),
  //     Products[6].addModel(models[1]),
  //     Products[7].addModel(models[1]),
  //     Products[8].addModel(models[2]),
  //     Products[9].addModel(models[2]),
  //     Products[10].addModel(models[2]),
  //     Products[11].addModel(models[3]),
  //     Products[12].addModel(models[3]),

  //   ])

  //   await Promise.all([
  //     orders[0].addCar(lambos[0]),
  //     orders[1].addCar(lambos[2]),
  //     orders[2].addCar(lambos[4]),
  //     orders[3].addCar(lambos[5])
  //   ])

  //   await Promise.all([
  //     orders[0].setUser(users[3]),
  //     orders[1].setUser(users[2]),
  //     orders[2].setUser(users[4]),
  //     orders[3].setUser(users[5])
  //   ])
}

async function syncAndSeed() {
  console.log('seeding...');
  try {
    // await db.sync({force:true})
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    await db.close();
    console.log('connection closed');
  }
}

if (module === require.main) {
  syncAndSeed();
}
