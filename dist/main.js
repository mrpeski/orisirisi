var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
var $8zHUo$react = require("react");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Dropdown", () => $7d60e25e1894b401$export$931cbfb6bfb85fc);


const $7d60e25e1894b401$export$931cbfb6bfb85fc = (props)=>{
    const [active, setActive] = (0, ($parcel$interopDefault($8zHUo$react))).useState(props.defaultSelected);
    const [show, setShow] = (0, ($parcel$interopDefault($8zHUo$react))).useState(false);
    const closeDropdown = (0, ($parcel$interopDefault($8zHUo$react))).useCallback((e)=>{
        e.preventDefault();
        const target = e.target;
        if (show && !target.classList.contains("button")) setShow(false);
    }, [
        show
    ]);
    (0, ($parcel$interopDefault($8zHUo$react))).useEffect(()=>{
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
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("article", {
        className: "wrapper",
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("button", {
                onClick: toggleShow,
                className: [
                    "button",
                    "active"
                ].join(" "),
                children: props.list.find((item)=>item.id === active)?.label
            }),
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("ul", {
                className: [
                    "ul",
                    show ? "show" : "hide"
                ].join(" "),
                children: props.list.map((item)=>/*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("li", {
                        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("button", {
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
var $7d60e25e1894b401$export$2e2bcd8739ae039 = $7d60e25e1894b401$export$931cbfb6bfb85fc;




//# sourceMappingURL=main.js.map
