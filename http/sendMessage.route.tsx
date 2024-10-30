import axios from 'axios'

export const sendMessageRoute = async (data: { name: string; email: string; phone: string; message: string }) => {
  try {
    console.log('Dados sendo enviados:', data)

    // Atualize a URL para o seu backend na nuvem
    const response = await axios.post('https://backend-p1qvhqjxz-lucas-projects-2c06066a.vercel.app/mail', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Verifica se a resposta está OK
    if (response.status === 200) {
      console.log('Mensagem enviada com sucesso:', response.data)
      return response.data
    } else {
      console.error('Erro no envio da mensagem:', response.statusText)
      throw new Error(`Erro ao enviar mensagem: ${response.statusText}`)
    }
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error)
    throw error
  }
}
