const { db } = require('../server/db');
const {
  User,
  Order,
  Product,
  Shipment,
  Cart,
} = require('../server/db/').models;

async function seed() {
  await db.sync({ force: true });
  try {
    const [user1,user2,user3,user4,user5,user6] = await Promise.all([
      User.create({
        name: 'Lary',
        address: 'Fulton',
        phoneNum: 222333222,
        username: 'lary77',
        email: 'lary@email.com',
        hasAccount: true,
        password: 'password',
      }),
      User.create({
        name: 'Peter',
        address: 'Fulton',
        phoneNum: 222333222,
        email: 'peter@email.com',
        hasAccount: false,
      }),
      User.create({
        name: 'Oscar',
        address: 'Queens',
        phoneNum: 222333222,
        username: 'oscar77',
        email: 'oscar@email.com',
        password: 'password',
        hasAccount: true,
        isAdmin: true,
      }),
      User.create({
        name: 'Quinwei',
        address: 'Queens',
        phoneNum: 222333222,
        username: 'qin88',
        email: 'quinwei@email.com',
        password: 'password',
        hasAccount: true,
        isAdmin: true,
      }),
      User.create({
        name: 'Laziz',
        address: 'Brooklyn',
        phoneNum: 222333222,
        username: 'lathis26',
        email: 'laziz@email.com',
        password: 'password',
        hasAccount: true,
        isAdmin: true,
      }),
      User.create({
        name: 'Dmitry',
        address: 'Manhattan',
        phoneNum: 222333222,
        username: 'dakul1',
        email: 'dmitry@email.com',
        password: 'password',
        hasAccount: true,
        isAdmin: true,
      }),
    ]);
    const products = await Promise.all([
      Product.create({
        name: 'Aventador S',
        description:
          'Following the Miura, Islero, Countach and Urraco, today’s most iconic Lamborghini reflects the heritage of the historic S models into the Aventador S. The exclusive design and a V12 engine that develops an extraordinary 740 hp combine with the most sophisticated technology available, LDVA (Lamborghini Dinamica Veicolo Attiva, Lamborghini Active Vehicle Dynamics).',
        price: 425000,
        image: 'download.jpeg',
      }),
      Product.create({
        name: 'Aventador S Roadster',
        description:
          'The icon that inherited the legacy of the historic S models of the Miura, Islero, Countach and Urraco returns with the Aventador S Roadster. The 740 hp V12 engine and the exclusive open-top Lamborghini design combines with the most sophisticated technology available in LDVI (Lamborghini Dinamica Veicolo Attiva, Lamborghini Active Vehicle Dynamics).',
        price: 450000,
        image:
          'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/s_roadster/overview/08_27_aven_s_rds_over_m.jpg',
      }),
      Product.create({
        name: 'Aventador SVJ',
        description:
          'Lamborghini created the Aventador SVJ to embrace challenges head-on, combining cutting-edge technology with extraordinary design, while always refusing to compromise. In a future driven by technology, it’s easy to lose the genuine thrill of driving. But in the future shaped by Lamborghini, this won’t be left behind, because there will always be a driver behind the wheel. ',
        price: 475000,
        image:
          'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/overview/08_27_aven_svj_over_m.jpg',
      }),
      Product.create({
        name: 'Aventador SVJ Roadster',
        description:
          'Limited to a mere 800 examples, the SVJ Roadster is the most iconic form of the Aventador family. Its Lamborghini aerodynamics represent the most futuristic ever designed: the ALA 2.0 system and aero-vectoring ensure the minimum drag on straightaways and the optimal aerodynamic load when cornering. The 770 hp naturally aspirated V12 engine inspires awe. ',
        price: 475000,
        image:
          'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj_roadster/overview/09_07_aven_svj_rds_over_m.jpg',
      }),
      Product.create({
        name: 'Huracan Evo',
        description:
          'The Huracán EVO is the evolution of the most successful V10-powered Lamborghini ever. The result of fine-tuning and refining existing features, combined with new design solutions that increase performance, the car stands out for its ability to anticipate and cater to the driver’s behavior, expectations and desires.',
        price: 200000,
        image:
          'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/evo/09_28/s/huracan_evo_s_02_m.jpg',
      }),
      Product.create({
        name: 'Huracan Evo Spyder',
        description:
          'The Huracán EVO Spyder lets one experience the thrill of extreme driving. Colors, smells and sounds meld with a seductive design and ultra-light materials. The 640 hp naturally aspirated V10 engine roars with authority, as the exhaust announces the presence of a formidable machine. The aerodynamic lines of the super sports car, perfectly streamlined, slice through the air.',
        price: 220000,
        image:
          'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/evo_spyder/09_28/s/huracan_evo_s_s_02_m.jpg',
      }),
      Product.create({
        name: 'Huracan Evo RWD',
        description:
          'The Huracán EVO RWD bears the evolution of the predictive technology employed in the best-loved Lamborghini V10 model, distilled to deliver pure, unfiltered driving excitement. Here, driving skills and mechanics make the difference: this “return to rear-wheel drive” embraces the origins of mechanical purity—the true essence of a Lamborghini.',
        price: 250000,
        image:
          'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/evo_rwd/10_22/s/huracan_evo_rwd_s_2_m.jpg',
      }),
      Product.create({
        name: 'Huracan Evo RWD Spyder',
        description:
          'The Huracán EVO RWD Spyder is dedicated to those who believe in the pure pleasure and excitement of driving, an experience heightened by the adrenaline that comes from open-top performance. Discovering new roads with the wind in your hair, heart racing with the sound of the engine, gives you an unparalleled feeling of freedom as you accelerate toward new emotions. The magic unfolds as you “return to rear-wheel drive” and immerse yourself in the tactile sensations and the mechanical purity of a Lamborghini.',
        price: 250000,
        image:
          'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/evo_rwd_spyder/10_22/s/huracan_evo_s_s_2_m.jpg',
      }),
      Product.create({
        name: 'Urus',
        description:
          'The soul of a super sports car and the functionality of an SUV: Lamborghini Urus is the first Super Sport Utility Vehicle in the world. With extreme proportions, breathtaking design, extraordinary driving dynamics and heart-pounding performance, Urus represents freedom in its quintessential state. You can experience any road, from track to the sand, ice, gravel or rocks, thus unlocking any road. You can explore any new terrain, thus expressing yourself.',
        price: 200000,
        image:
          'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/urus/restyle_09_25/09_25_urus_overview_01_m.jpg',
      }),
      Product.create({
        name: 'Urus Pearl Capsule',
        description:
          'The Urus Pearl Capsule offers a selection of exclusive pearl paints and style elements that embrace the bright colors of Lamborghini tradition. This new realm of customization showcases the inimitable style and exhilarating performance of the world’s first Super Sport Utility Vehicle. Take the freedom of Urus to a higher level by forging new paths as an expression of yourself. Unlock any road, unlock your personality.',
        price: 230000,
        image:
          'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/gateway_urus/high_gloss/restyle_09_25/09_25_pearl_s_02_m.jpg',
      }),
      Product.create({
        name: 'Urus Graphite Capsule',
        description:
          'The Urus Graphite Capsule presents Lamborghini drivers all the possibilities to go anywhere with inimitable character and style. Sporting a powerful look and a dynamic stance, these exclusive configurations combine sophisticated satin-effect matte colors with contrasting bright-colored details that express new and alluring interpretations of your personality.It’s time to reveal yourself to the fullest. Venture into new challenges and declare your most authentic self aboard the world’s first Super SUV. Unlock any road … unlock your personality.',
        price: 250000,
        image:
          'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/gateway_urus/graphite/overview/graphite_overview_01_m.jpg',
      }),
      Product.create({
        name: 'Sian FKP 37',
        description:
          'The Sián FKP 37 is the first super sports car powered by a V12 engine and hybrid technology based on supercapacitors. Its powerful V12 engine, coupled with electric boost, creates an unrivaled gem of engineering and technology. Sián—lightning in Bolognese—is a name that captures the car’s true character, foremost its speed, which exceeds 220 mph (350 km/h).',
        price: 3150000,
        image:
          'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/overview/SIAN_FKP_37_01-overview2_M.jpg',
      }),
    ]);

    const [order1] = await Promise.all([
      Order.create({
        total: 1000000,
        session_id: '123456',
        order_date: '12/04/2019',
        shipping_date: '1800 St',
        order_status: 'processing',
      }),
    ]);
      
    await user4.setOrders(order1)
    
  } catch (err) {
    console.log(err);
  }
}
module.exports = seed;
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!');
      console.error(err);
      db.close();
    });
}
