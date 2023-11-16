export function usePrinter(content: string) {
    function setPrint() {
        const closePrint = () => {
            document.body.removeChild(this);
        };
        this.contentWindow.onbeforeunload = closePrint;
        this.contentWindow.onafterprint = closePrint;
        this.contentWindow.print();
    }
    const send = () => {
        const hideFrame = document.createElement("iframe");
        hideFrame.onload = setPrint;
        hideFrame.style.display = "none"; // hide iframe
        hideFrame.innerHTML = content;
        document.body.appendChild(hideFrame);
    }

    return { send }
}
