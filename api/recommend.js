import Anthropic from '@anthropic-ai/sdk';
import { SYSTEM_PROMPT } from '../lib/claude-config.js';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Campo messages é obrigatório.' });
  }

  try {
    const stream = await client.messages.stream({
      model: 'claude-opus-4-8',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
      thinking: { type: 'adaptive' },
    });

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('X-Accel-Buffering', 'no');

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        res.write(event.delta.text);
      }
    }

    res.end();
  } catch (error) {
    console.error('Erro na API Claude:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Erro ao conectar com o assistente.' });
    }
  }
}
