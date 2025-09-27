# Components Directory

This directory contains shared HTML components for the Pawvaro website.

## Files

- `header.html` - Shared header component with navigation
- `footer.html` - Shared footer component with contact info and social links
- `load-components.js` - JavaScript loader for dynamically loading components

## Usage

To use these components in an HTML page:

1. Add the component loader script to your HTML head:
```html
<script src="./components/load-components.js" defer></script>
```

2. Add placeholder divs where you want the components to load:
```html
<div id="header-placeholder"></div>
<!-- Your page content -->
<div id="footer-placeholder"></div>
```

The components will automatically load when the page loads.

## Benefits

- **DRY Principle**: No more duplicated header/footer code
- **Easy Updates**: Change header/footer once, updates everywhere
- **Consistent Navigation**: All pages use the same navigation structure
- **Maintainable**: Centralized component management

## File Structure

```
components/
├── header.html          # Navigation and logo
├── footer.html          # Contact info and social links
├── load-components.js   # Component loader
└── README.md           # This file
```
