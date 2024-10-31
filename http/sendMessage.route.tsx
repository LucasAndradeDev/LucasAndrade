export const sendMessageRoute = async (data: { name: string; email?: string; phone: string; message: string }) => {
  try {
    console.log('Dados sendo enviados:', data);

    const response = await fetch('https://backend-ebon-tau.vercel.app/mail', {
      method: 'POST',
      mode: 'cors', // Use o modo padrão "cors"
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Mensagem enviada com sucesso:', responseData);
      return responseData;
    } else {
      console.error('Erro no envio da mensagem:', response.statusText);
      throw new Error(`Erro ao enviar mensagem: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    throw error;
  }
};
