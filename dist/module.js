import {jsxs as $hgUW1$jsxs, jsx as $hgUW1$jsx} from "react/jsx-runtime";
import $hgUW1$react from "react";



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




export {$61c0033574a5c878$export$931cbfb6bfb85fc as Dropdown};
//# sourceMappingURL=module.js.map
