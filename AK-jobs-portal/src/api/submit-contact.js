export async function post({ request }) {
    const formData = await request.formData();
    
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
  
    // Example: Output the form data to the console (for debugging)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // You can replace this with sending the data via email, saving it to a database, etc.
  
    // Respond with a success message (this will be returned to the user after form submission)
    return {
      body: JSON.stringify({ message: 'Thank you for contacting us! We will get back to you soon.' })
    };
  }

  