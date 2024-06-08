import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function useSwal() {
  const success = (title: string, text: string) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "success",
      confirmButtonText: "Tamam",
    });
  };

  const wargning = (title: string, text: string) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "warning",
      confirmButtonText: "Tamam",
    });
  };

  return {
    success,
    wargning,
  };
}
