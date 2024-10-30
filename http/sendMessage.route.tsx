import axios from 'axios'

export const sendMessageRoute = async (data: { name: string; email: string; phone: string; message: string }) => {
  try {
    console.log('Dados sendo enviados:', data)

    // Envia a solicitação para o backend
    const response = await axios.post('http://localhost:5000/mail', data, {
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
