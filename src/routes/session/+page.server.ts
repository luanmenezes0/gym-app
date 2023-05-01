import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase } }) => {
  const { data } = await supabase.from('exercises').select('*');

  return {
    exercises: data as Exercise[]
  };
}) satisfies PageServerLoad;

interface Exercise {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}
