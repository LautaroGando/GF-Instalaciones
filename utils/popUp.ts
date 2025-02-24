import { IUserSignUp } from "@/interfaces/IAuth";
import Swal from "sweetalert2";

export const popUpSignUp = (values: IUserSignUp) => {
  Swal.fire({
    html: `
      <div class="flex flex-col items-center gap-3">
        <img class="w-[50px] h-[50px]" src="/assets/images/popUp/logoSignUp.svg" alt="Imagen de GF" />
        <h2 class="font-textFont">Bienvenido ${values.fullName} a GF Instalaciones.</h2>
        <p class="font-textFont font-light">Inicia sesión para tener acceso total a la web.</p>
      </div>
    `,
    width: 400,
    heightAuto: true,
    background: "#A79351",
    color: "#FAFAFA",
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 3000,
    didOpen: (popup) => {
      popup.style.borderRadius = "0";
      popup.style.position = "fixed";
      popup.style.bottom = "0";
      popup.style.right = "0";
    },
  });
};
