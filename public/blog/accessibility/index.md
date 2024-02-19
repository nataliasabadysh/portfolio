---
title: "Accessibility for Frontend Developers"
date: "2024-16-02"
spoiler: "Accessibility standards and legal compliance"
---

## Accessibility = Better User Experience <br/>What Constitutes Good Accessibility on a Website?

Depending on how users evaluate the website,
manual testing can be beneficial for understanding the
relationships between design elements before implementing the feature.

## Accessibility in Frontend Development

Depending on the complexity of the application, adhering to the following accessibility standards is crucial to ensure inclusivity and legal compliance:

- Color contrast for visual clarity
- Intuitive navigation systems
- Focus indicators for keyboard navigation
- Landmarks for assistive technologies
- Content layout compatibility and quality (Zoom in/out at 200% & 400%)
- Screen render support
- Understandable content for all users
- Effective form handling (labels, id, name, input types)
- Accessible media (audio and video)
- Image, text contrast
- Readable typography
- Proper behavior of external/internal links
- Error flow
- Logical tab order (flow), and many more...

For detailed standards and guidelines, refer to the [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/).

# Automating Accessibility (a11y) Testing

Frontend architectures have numerous layers and design patterns that we employ to keep applications maintainable, structured, and flexible for growth, such as the Atomic Design methodology. But can we automate a11y testing within these complex systems?

[//]: # "Discussion about a11y testing automation follows..."

# Exploring Atomic Design with Accessibility

## Atoms

Components that are isolated and capable of interacting with other components.

- Color contrast for visual clarity
- Focusable elements for keyboard navigation
- HTML semantics and landmarks for structure
- Informative content for understanding
- Typography for readability

## Molecules

Considerations for a seamless user experience.

- Navigational flow for ease of movement
- Layout landmarks for orientation
- Informative content for context
- Tables/fonts for information hierarchy
- Focus flow for logical navigation

## Organisms

Combining molecules to create sections of the interface.

- Navigational flow to guide the user
- Layout landmarks to define areas
- Informative content to educate and inform
- Tables/fonts for structured data presentation
- Focus flow to ensure keyboard navigability
- Content layout for visual and structural hierarchy

## Pages

The assembly of organisms to form complete interfaces.

- Navigational flow for overall user journey
- Layout landmarks for comprehensive structure
- Informative content for complete understanding
- Tables/fonts for consistent data display
- Focus flow for intuitive interaction
- Content layout for inclusive access

## In our UI, we can use end-to-end (e2e) testing to automatically check accessibility.

[axe-core](https://www.npmjs.com/package/axe-core)
[jest-axe](https://www.npmjs.com/package/jest-axe)
[jest-axe](https://www.npmjs.com/package/jest-axe)

[Playwright-e2e test](https://www.npmjs.com/package/playwright)

## Set up CI in GitLab

[Accessibility testing](https://docs.gitlab.com/ee/ci/testing/accessibility_testing.html)

- use Pa11y framework

```yml
stages:
  - accessibility

variables:
  a11y_urls: "https://about.gitlab.com https://gitlab.com/users/sign_in"

include:
  - template: "Verify/Accessibility.gitlab-ci.yml"
```
