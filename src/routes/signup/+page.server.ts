import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';

export const actions: Actions = {
  signup: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();

    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const password = formData.get('password') as string;

    const { error } = await supabase.auth.signUp({
      email,
      password
    });

    const { error: userError } = await supabase
      .from('users')
      .insert({ name, email });

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return fail(400, {
          error: 'Invalid credentials.',
          values: {
            email
          }
        });
      }
      return fail(500, {
        error: 'Server error. Try again later.',
        values: {
          email
        }
      });
    }

    throw redirect(303, '/session');
  },

  signout: async ({ locals: { supabase } }) => {
    await supabase.auth.signOut();
    throw redirect(303, '/login');
  }
};
