import Account from 'models/Account.js';

async function resolver(args) {
  try {
    const account = await Account.findById(args?.id).exec();
    console.log('get account', JSON.stringify(account));
    return account;
  } catch (error) {
    throw new Error(error);
  }
}

export default resolver;
