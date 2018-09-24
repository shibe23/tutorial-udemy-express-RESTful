const bcrypt = require('bcrypt');

async function run() {
  const salt = await bcrypt.getSalt(10);
  const hashed = await bcrypt.hash('1234', salt);
  console.log(salt); // $2aadfs...
  console.log(hashed);// $2aadfs...VrMbu/eYg
}

run();