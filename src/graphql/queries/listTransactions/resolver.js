import Transaction from 'models/Transaction.js';

async function resolver(args) {
  try {
    const transactions = await Transaction.find({}).exec();
    console.log('list transactions', JSON.stringify(transactions));
    return transactions;
  } catch (error) {
    throw new Error(error);
  }
}

export default resolver;
