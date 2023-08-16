import { theme } from 'styles/theme';
import Swal from 'sweetalert2';

const showSwal = (title, confirmButtonText) => {
  Swal.fire({
    title: title,
    confirmButtonText: confirmButtonText,
    showCancelButton: false,
    confirmButtonColor: theme.color.brown,
    background: theme.color.lightgray,
    padding: '10px',
  });
};

export default showSwal;
