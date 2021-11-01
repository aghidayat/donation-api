// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    // if (req.method !== 'POST') {
    //     res.status(405).send({ message: 'Only POST requests allowed' });
    //     return;
    // }

    const request = req.body;

    const resp = await fetch('https://api.xendit.co/v2/invoices', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' +
                Buffer.from(
                    'xnd_development_q9F8uv2g3IkUKe2tGqgxZRmBipufboFnNiIyvB1zi2XGla4aU5vcUyjFy9nSDaHa' +
                    ':'
                ).toString('base64'),
        },
        body: JSON.stringify({
            external_id: request.external_id,
            amount: request.amount,
            payer_email: request.payer_email,
            description: request.description,
            success_redirect_url: request.success_redirect_url
        }),
    });
    const data = await resp.json();
    res.status(200).json(data);
}