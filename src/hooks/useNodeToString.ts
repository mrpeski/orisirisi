import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { ReactNode, createElement } from 'react'

export const useNodeToString = (reactNode: ReactNode) => {
    const div = document.createElement('div');
    const root = createRoot(div);
    flushSync(() => {
        root.render(createElement(reactNode));
    });
    return div.innerHTML
}
