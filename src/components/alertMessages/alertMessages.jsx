import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const messageNotification = (code) => {
  switch (code) {
    case 409:
      toast.error('This user already exists!', {
        position: 'top-center',
        theme: 'dark',
      });
      break;
    case 400:
      toast.error('Bad Request!', {
        position: 'top-center',
        theme: 'dark',
      });
      break;
    case 401:
      toast.error('Failed Login! Please try again!', {
        position: 'top-center',
        theme: 'dark',
      });
      break;

    case 403:
      toast.error('Forbidden!', {
        position: 'top-center',
        theme: 'dark',
      });
      break;

    case 404:
      toast.error('Paige not found!', {
        position: 'top-center',
        theme: 'dark',
      });
      break;
    case 408:
      toast.error('Request Timeout!', {
        position: 'top-center',
        theme: 'dark',
      });
      break;
    default:
      toast.error('Registration failed. Please try again later!', {
        position: 'top-center',
        theme: 'dark',
      });
      break;
  }
};
