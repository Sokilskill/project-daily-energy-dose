import axios from 'axios';

export const fetchExercises = async ({ bodyPart, equipment, target }) => {
  try {
    const { data } = await axios.get(`/exercises`, {
      params: { bodyPart, equipment, target },
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error.message;
  }
};
