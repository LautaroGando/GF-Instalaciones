export {};

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region?: string;
          target: string;
          onFormReady?: ($form: HTMLElement) => void; // <- acá definís onFormReady
        }) => void;
      };
    };
  }
}
