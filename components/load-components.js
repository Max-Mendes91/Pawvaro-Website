// Simple component loader for shared HTML components
class ComponentLoader {
    constructor() {
        this.components = new Map();
    }

    async loadComponent(componentName, targetElement) {
        try {
            const response = await fetch(`./components/${componentName}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentName}: ${response.status}`);
            }
            const html = await response.text();
            targetElement.innerHTML = html;
            this.components.set(componentName, html);
        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
            // Fallback: show error message
            targetElement.innerHTML = `<div class="component-error">Failed to load ${componentName}</div>`;
        }
    }

    async loadAllComponents() {
        // Load header
        const headerElement = document.getElementById('header-placeholder');
        if (headerElement) {
            await this.loadComponent('header', headerElement);
        }

        // Load footer
        const footerElement = document.getElementById('footer-placeholder');
        if (footerElement) {
            await this.loadComponent('footer', footerElement);
        }
    }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const loader = new ComponentLoader();
    loader.loadAllComponents();
});
