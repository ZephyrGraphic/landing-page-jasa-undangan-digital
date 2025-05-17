/**
 * Utility function to scroll to a specific section with smooth behavior
 * and proper offset for fixed navbar
 */
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    // Calculate offset for navbar
    const navbarHeight = document.querySelector("header")?.offsetHeight || 0
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - navbarHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}
