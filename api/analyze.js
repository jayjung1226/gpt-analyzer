export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // ✅ CORS 허용
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // ✅ 사전 요청 응답
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }
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
      model: "ft:gpt-3.5-turbo-0125:beflex-inc:tax-v2:BEvcOeC8",
      messages: req.body.messages
    })
  });

  const data = await response.json();
  res.status(200).json(data);
  // 나머지 GPT 프록시 코드
}
