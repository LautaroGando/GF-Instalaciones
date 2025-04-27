declare module "written-number" {
  function writtenNumber(
    value: number,
    options?: { lang?: "es" | "en" | "fr" | string }
  ): string;

  export default writtenNumber;
}
