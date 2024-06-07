// This is your test secret API key.
const stripe = require('stripe')('sk_test_51PMLWzAHauJOQVmCMzjCdQJsYgF833SAFm3Yu9pkVnU4MNlg5U05bivhr1HQQlzOLx4mr9ahdYVIssEMSXxJzGOQ00IqrU8sTo');
const express = require('express');
const app = express();
app.use(express.static('public'));
//Change our domain
const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '{{price_1PNnJ1AHauJOQVmCeuOA7G9m}}',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });

    res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));