import {jsxs as $hgUW1$jsxs, jsx as $hgUW1$jsx} from "react/jsx-runtime";
import $hgUW1$react from "react";
import {createRoot as $hgUW1$createRoot} from "react-dom/client";
import {flushSync as $hgUW1$flushSync} from "react-dom";



const $61c0033574a5c878$export$931cbfb6bfb85fc = (props)=>{
    const [active, setActive] = (0, $hgUW1$react).useState(props.defaultSelected);
    const [show, setShow] = (0, $hgUW1$react).useState(false);
    const closeDropdown = (0, $hgUW1$react).useCallback((e)=>{
        e.preventDefault();
        const target = e.target;
        if (show && !target.classList.contains("button")) setShow(false);
    }, [
        show
    ]);
    (0, $hgUW1$react).useEffect(()=>{
        document.addEventListener("click", closeDropdown);
        return ()=>{
            document.removeEventListener("click", closeDropdown);
        };
    }, [
        closeDropdown
    ]);
    if (!props.list) return null;
    const handleSelect = (e)=>{
        e.preventDefault();
        setActive(e.target.getAttribute("data-id"));
        setShow(false);
        if (props?.onSelect) props.onSelect(e.target.getAttribute("data-id"));
    };
    const toggleShow = (e)=>{
        e.preventDefault();
        setShow(!show);
    };
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("article", {
        className: "wrapper",
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)("button", {
                onClick: toggleShow,
                className: [
                    "button",
                    "active"
                ].join(" "),
                children: props.list.find((item)=>item.id === active)?.label
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("ul", {
                className: [
                    "ul",
                    show ? "show" : "hide"
                ].join(" "),
                children: props.list.map((item)=>/*#__PURE__*/ (0, $hgUW1$jsx)("li", {
                        children: /*#__PURE__*/ (0, $hgUW1$jsx)("button", {
                            onClick: handleSelect,
                            className: [
                                "button",
                                item.id === active ? "active" : ""
                            ].join(" "),
                            "data-id": item.id,
                            children: item.label || item.id
                        })
                    }, item.id))
            })
        ]
    });
};
var $61c0033574a5c878$export$2e2bcd8739ae039 = $61c0033574a5c878$export$931cbfb6bfb85fc;


function $58d51f2d1f7ba7d0$export$dfbb4c7cd62d88d3(content) {
    function setPrint() {
        const closePrint = ()=>{
            document.body.removeChild(this);
        };
        this.contentWindow.onbeforeunload = closePrint;
        this.contentWindow.onafterprint = closePrint;
        this.contentWindow.print();
    }
    const send = ()=>{
        const hideFrame = document.createElement("iframe");
        hideFrame.onload = setPrint;
        hideFrame.style.display = "none"; // hide iframe
        hideFrame.innerHTML = content;
        document.body.appendChild(hideFrame);
    };
    return {
        send: send
    };
}




const $c1af7eb07f6992fc$export$b817cffffbc22d24 = (reactNode)=>{
    const div = document.createElement("div");
    const root = (0, $hgUW1$createRoot)(div);
    (0, $hgUW1$flushSync)(()=>{
        root.render(reactNode);
    });
    return div.innerHTML;
};




export {$61c0033574a5c878$export$931cbfb6bfb85fc as Dropdown, $58d51f2d1f7ba7d0$export$dfbb4c7cd62d88d3 as usePrinter, $c1af7eb07f6992fc$export$b817cffffbc22d24 as useNodeToString};
//# sourceMappingURL=module.js.map
