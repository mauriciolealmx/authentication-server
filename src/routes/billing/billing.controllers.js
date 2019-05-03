const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeKey);

const CURRENCY = 'usd';

/**
 * @method POST
 * @route "/stripe"
 * @description Creates a Stripe Charge object.
 */
exports.makeCharge = async ({ body, user }, res) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: CURRENCY,
    description: `Buying a meal for ${'$5'}`,
    source: body.id
  });

  user.credits += charge.amount;
  const updatedUser = await user.save();

  res.status(200).send(updatedUser);
};
