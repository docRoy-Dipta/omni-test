import { createClient, SupabaseClient } from '@supabase/supabase-js'

interface ContactInquiry {
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string | null;
  budget: string | null;
  message: string;
  status: string;
}

interface SubmitResponse {
  data: ContactInquiry[] | null;
  error: Error | null;
}

const supabase: SupabaseClient = createClient('NEXT_PUBLIC_SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY')

async function handleSubmit(event: Event): Promise<void> {
  event.preventDefault();
  const formData = new FormData((event.target as HTMLFormElement));
  
  // Mapping form values to schema
  const { data, error }: SubmitResponse = await supabase
    .from('contact_inquiries')
    .insert([
      { 
          name: `${formData.get('firstName')} ${formData.get('lastName')}`,
          email: formData.get('email'),
          phone: formData.get('phone') ?? null,
          company: formData.get('company') ?? null,
          service: formData.get('service') ?? null,
          budget: formData.get('budget') ?? null,
          message: formData.get('message'),
          status: "NEW",
      },
    ]);


    

  if (error) console.error('Error inserting data:', error);
  else console.log('Successfully inserted:', data);
}