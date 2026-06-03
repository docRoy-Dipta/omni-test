import { createClient } from '@supabase/supabase-js'

const supabase = createClient('NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_ANON_KEY')

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  
  // Mapping form values to schema
  const { data, error } = await supabase
    .from('contact_inquiries')
    .insert([
      { 
        name: `${formData.get('first_name')} ${formData.get('last_name')}`, 
        email: formData.get('email'),
        company: formData.get('company'),
        service: formData.get('service'),
        message: formData.get('message'),
        status: 'NEW' // Default value
      },
    ]);

  if (error) console.error('Error inserting data:', error);
  else console.log('Successfully inserted:', data);
}