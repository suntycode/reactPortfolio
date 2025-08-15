export const breakpoints = {
  xs: '475px',
  sm: '640px', 
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};
export const responsiveSpacing = {
  sectionPadding: 'py-6 sm:py-8 md:py-12 lg:py-16',
  containerPadding: 'px-4 sm:px-6 lg:px-8 xl:px-12',
  sectionMargin: 'my-8 sm:my-12 md:my-16 lg:my-20',
  cardPadding: 'p-3 xs:p-4 sm:p-6',
  buttonPadding: 'px-3 xs:px-4 sm:px-6 py-2 sm:py-3'
};
export const responsiveText = {
  h1: 'text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl',
  h2: 'text-xl xs:text-2xl sm:text-3xl lg:text-4xl',
  h3: 'text-lg xs:text-xl sm:text-2xl lg:text-3xl',
  h4: 'text-base xs:text-lg sm:text-xl',
  body: 'text-sm xs:text-base sm:text-lg',
  small: 'text-xs xs:text-sm',
  button: 'text-sm xs:text-base'
};
export const responsiveGrid = {
  skills: 'grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7',
  features: 'grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4',
  cards: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'
};
export const responsiveGaps = {
  small: 'gap-2 xs:gap-3 sm:gap-4',
  medium: 'gap-4 sm:gap-6 md:gap-8',
  large: 'gap-6 sm:gap-8 md:gap-12 lg:gap-16'
};
export const useResponsive = () => {
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  const isDesktop = window.innerWidth >= 1024;
  return {
    isMobile,
    isTablet, 
    isDesktop,
    breakpoint: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  };
};
