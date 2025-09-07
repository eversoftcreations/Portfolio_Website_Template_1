
export function getBasiclayoutOverflowElement (): Element | null {
    const targetElement = document.querySelector<Element>("#basic-layout-overflow-element");
    return targetElement;
}

export function getBasicLayoutOverflowElementChild (): Element | null {
    const targetElement = document.querySelector<Element>("#basic-layout-overflow-element > div");
    return targetElement;
}