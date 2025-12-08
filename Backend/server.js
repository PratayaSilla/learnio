const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app');
const prisma = require('./src/config/database');

const PORT = process.env.PORT || 4000;

process.on('SIGINT', async () => {
  console.log('\nShutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\nShutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});