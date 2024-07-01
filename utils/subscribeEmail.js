// utils/subscribeEmail.js

export async function subscribeEmail(email) {
    const apiKey = '';
    const apiUrl = 'https://api.brevo.com/v3/contacts';
    const listId = 2;
  
    const data = {
      email: email,
      listIds: [listId]
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error subscribing to email:', error.message);
      throw new Error('Échec de l\'inscription à la newsletter. Veuillez réessayer.');
    }
}
  