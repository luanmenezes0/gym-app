import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase } }) => {
  const { data } = await supabase.from('exercises').select('*');

  const exercises = data as Exercise[] | null;

  return {
    exercises,
    muscles: [...new Set(exercises?.map((exercise) => exercise.muscle))],
    equipments: [...new Set(exercises?.map((exercise) => exercise.equipment))]
  };
}) satisfies PageServerLoad;

interface Exercise {
  id: number;
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}
