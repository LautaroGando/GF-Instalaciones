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
          <p className="font-textFont font-light">{error}</p>
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

export const popUpSignInError = (error: string) => {
  Swal.fire({
    html: ReactDOMServer.renderToString(
      <>
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-[50px] h-[50px]"
            src="/assets/images/popUp/logoSignUp.svg"
            alt="Imagen de GF"
          />
          <h2 className="font-textFont">Error al iniciar sesión.</h2>
          <p className="font-textFont font-light">{error}</p>
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

export const popUpLogout = (onConfirm: () => void) => {
  Swal.fire({
    html: ReactDOMServer.renderToString(
      <div className="flex flex-col items-center gap-3">
        <img
          className="w-[50px] h-[50px]"
          src="/assets/images/popUp/logoSignUp.svg"
          alt="Imagen de GF"
        />
        <h2 className="font-textFont">¿Seguro que deseas cerrar sesión?</h2>
        <p className="font-textFont font-light">
          Puedes iniciar sesión más tarde si así lo deseas.
        </p>
      </div>
    ),
    width: 400,
    heightAuto: true,
    background: "#A79351",
    color: "#FAFAFA",
    timerProgressBar: true,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "Si, cerrar sesión",
    confirmButtonColor: "#A79351",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#A79351",
    didOpen: (popup) => {
      popup.style.borderRadius = "0";
    },
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
      Swal.fire({
        html: ReactDOMServer.renderToString(
          <>
            <div className="flex flex-col items-center gap-3">
              <img
                className="w-[50px] h-[50px]"
                src="/assets/images/popUp/logoSignUp.svg"
                alt="Imagen de GF"
              />
              <h2 className="font-textFont">Cerraste sesión con éxito.</h2>
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
      window.location.href = "/";
    }
  });
};

export const popUpDeleteUser = (onConfirm: () => void) => {
  Swal.fire({
    html: ReactDOMServer.renderToString(
      <div
        data-ignored-click-outside-popup
        className="flex flex-col items-center gap-3"
      >
        <img
          className="w-[50px] h-[50px]"
          src="/assets/images/popUp/logoSignUp.svg"
          alt="Imagen de GF"
        />
        <h2 className="font-textFont">
          ¿Seguro que deseas eliminar al usuario?
        </h2>
        <p className="font-textFont font-light">
          Los cambios no podrán rehacerse.
        </p>
      </div>
    ),
    width: 400,
    heightAuto: true,
    background: "#A79351",
    color: "#FAFAFA",
    timerProgressBar: true,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "Si, eliminar",
    confirmButtonColor: "#A79351",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#A79351",
    didOpen: (popup) => {
      popup.style.borderRadius = "0";
    },
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
      Swal.fire({
        html: ReactDOMServer.renderToString(
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-[50px] h-[50px]"
              src="/assets/images/popUp/logoSignUp.svg"
              alt="Imagen de GF"
            />
            <h2 className="font-textFont">Usuario eliminado con éxito.</h2>
          </div>
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
    }
  });
};

export const popUpDeleteUserError = (error: string) => {
  Swal.fire({
    html: ReactDOMServer.renderToString(
      <>
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-[50px] h-[50px]"
            src="/assets/images/popUp/logoSignUp.svg"
            alt="Imagen de GF"
          />
          <h2 className="font-textFont">Error al eliminar el usuario.</h2>
          <p className="font-textFont font-light">{error}</p>
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

export const popUpEditUser = () => {
  Swal.fire({
    html: ReactDOMServer.renderToString(
      <>
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-[50px] h-[50px]"
            src="/assets/images/popUp/logoSignUp.svg"
            alt="Imagen de GF"
          />
          <h2 className="font-textFont">Datos modificados con éxito.</h2>
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

export const popUpEditUserError = (error: string) => {
  Swal.fire({
    html: ReactDOMServer.renderToString(
      <>
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-[50px] h-[50px]"
            src="/assets/images/popUp/logoSignUp.svg"
            alt="Imagen de GF"
          />
          <h2 className="font-textFont">Error al modificar datos.</h2>
          <p className="font-textFont font-light">{error}</p>
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
