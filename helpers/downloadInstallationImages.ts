import JSZip from "jszip";
import { saveAs } from "file-saver";

export const downloadSingleImage = async (url: string, index: number) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `imagen-${index + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Error al descargar la imagen:", error);
  }
};

export const downloadAllImagesAsZip = async (images: string[]) => {
  const zip = new JSZip();
  const folder = zip.folder("imagenes-instalacion");

  for (let i = 0; i < images.length; i++) {
    const response = await fetch(images[i]);
    const blob = await response.blob();
    folder?.file(`imagen-${i + 1}.jpg`, blob);
  }

  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, "imagenes-instalacion.zip");
};
