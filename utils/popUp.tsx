import { IUserSignUp } from "@/interfaces/IAuth";
import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";

export const popUpSignUp = (values: IUserSignUp) => {
  Swal.fire({
    html: ReactDOMServer.renderToString(
      <>
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-[50px] h-[50px]"
            src="/assets/images/popUp/logoSignUp.svg"
            alt="Imagen de GF"
          />
          <h2 className="font-textFont">
            Bienvenido {values.fullName} a GF Instalaciones.
          </h2>
          <p className="font-textFont font-light">
            Inicia sesión para tener acceso total a la web.
          </p>
        </div>
      </>
    ),

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

export const popUpSignIn = () => {
  Swal.fire({
    html: ReactDOMServer.renderToString(
      <>
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-[50px] h-[50px]"
            src="/assets/images/popUp/logoSignUp.svg"
            alt="Imagen de GF"
          />
          <h2 className="font-textFont">Inicio de sesión exitoso.</h2>
          <p className="font-textFont font-light">
            ¡Infórmate a través de nuestro blog!
          </p>
        </div>
      </>
    ),

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

export const popUpSignUpError = (error: string) => {
  Swal.fire({
    html: ReactDOMServer.renderToString(
      <>
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-[50px] h-[50px]"
            src="/assets/images/popUp/logoSignUp.svg"
            alt="Imagen de GF"
          />
          <h2 className="font-textFont">Error al registrarse.</h2>
          <p className="font-textFont font-light">
            {error}
          </p>
        </div>
      </>
    ),

    width: 400,
    heightAuto: true,
    background: "#FF8383",
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
