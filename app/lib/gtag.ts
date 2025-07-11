export const GA_MEASUREMENT_ID = process.env.GA_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
