import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message } = await req.json()

    // Get OpenAI API key from environment variables
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY')
    
    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured')
    }

    // ABV Boards context for the AI
    const systemPrompt = `You are Tindo, a helpful customer service assistant for ABV Boards Zimbabwe, a furniture board cutting and hardware supply company based in Gweru.

Company Information:
- Name: ABV Boards Zimbabwe
- Location: Gweru, Zimbabwe
- Tagline: "Cutting Through with Precision and Style"
- Services: Precision cutting, edge banding, PVC boards, melamine, chipboard, quartz countertops, furniture hardware
- Years of experience: 10+
- Projects completed: 500+
- Turnaround time: 24 hours

Contact Information:
- WhatsApp: +263 780 555 268 or +263 718 456 811
- For quotes and inquiries

Always be helpful, professional, and knowledgeable about woodworking and furniture making. If customers need specific quotes or want to place orders, direct them to contact via WhatsApp. Keep responses concise but informative.`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to get AI response')
    }

    const aiResponse = data.choices[0]?.message?.content || 'I apologize, but I cannot provide a response right now. Please contact us directly via WhatsApp.'

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message,
        response: "I'm experiencing technical difficulties. Please contact us directly via WhatsApp at +263 780 555 268 for immediate assistance."
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})