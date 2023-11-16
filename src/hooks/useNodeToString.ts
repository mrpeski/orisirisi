import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { ReactNode } from 'react'

export const useNodeToString = (reactNode: ReactNode) => {
    const div = document.createElement('div');
    const root = createRoot(div);
    flushSync(() => {
        root.render(reactNode);
    });
    return div.innerHTML
}
