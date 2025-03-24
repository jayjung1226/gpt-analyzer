// api/analyze.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const apiKey = process.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "ft:gpt-3.5-turbo-0125:beflex-inc:tax-v1:BEcDeh6s",
      messages: req.body.messages
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
