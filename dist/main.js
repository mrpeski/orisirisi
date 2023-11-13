require("./main.css");
var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
var $8zHUo$react = require("react");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Dropdown", () => $7d60e25e1894b401$export$931cbfb6bfb85fc);


var $dc55a04402270530$exports = {};

$parcel$export($dc55a04402270530$exports, "active", () => $dc55a04402270530$export$89da14300d534261, (v) => $dc55a04402270530$export$89da14300d534261 = v);
$parcel$export($dc55a04402270530$exports, "button", () => $dc55a04402270530$export$2ba01fb71ed41cb6, (v) => $dc55a04402270530$export$2ba01fb71ed41cb6 = v);
$parcel$export($dc55a04402270530$exports, "hide", () => $dc55a04402270530$export$fe8985bb6374093c, (v) => $dc55a04402270530$export$fe8985bb6374093c = v);
$parcel$export($dc55a04402270530$exports, "show", () => $dc55a04402270530$export$57bf213be019eeb0, (v) => $dc55a04402270530$export$57bf213be019eeb0 = v);
$parcel$export($dc55a04402270530$exports, "ul", () => $dc55a04402270530$export$b5023c870cb34848, (v) => $dc55a04402270530$export$b5023c870cb34848 = v);
$parcel$export($dc55a04402270530$exports, "wrapper", () => $dc55a04402270530$export$cc74dcc53cfce4eb, (v) => $dc55a04402270530$export$cc74dcc53cfce4eb = v);
var $dc55a04402270530$export$89da14300d534261;
var $dc55a04402270530$export$2ba01fb71ed41cb6;
var $dc55a04402270530$export$fe8985bb6374093c;
var $dc55a04402270530$export$57bf213be019eeb0;
var $dc55a04402270530$export$b5023c870cb34848;
var $dc55a04402270530$export$cc74dcc53cfce4eb;
$dc55a04402270530$export$89da14300d534261 = `AR_Ijq_active`;
$dc55a04402270530$export$2ba01fb71ed41cb6 = `AR_Ijq_button`;
$dc55a04402270530$export$fe8985bb6374093c = `AR_Ijq_hide`;
$dc55a04402270530$export$57bf213be019eeb0 = `AR_Ijq_show`;
$dc55a04402270530$export$b5023c870cb34848 = `AR_Ijq_ul`;
$dc55a04402270530$export$cc74dcc53cfce4eb = `AR_Ijq_wrapper`;


const $7d60e25e1894b401$export$931cbfb6bfb85fc = (props)=>{
    const [active, setActive] = (0, ($parcel$interopDefault($8zHUo$react))).useState(props.defaultSelected);
    const [show, setShow] = (0, ($parcel$interopDefault($8zHUo$react))).useState(false);
    const closeDropdown = (0, ($parcel$interopDefault($8zHUo$react))).useCallback((e)=>{
        e.preventDefault();
        const target = e.target;
        if (show && !target.classList.contains((0, (/*@__PURE__*/$parcel$interopDefault($dc55a04402270530$exports))).button)) setShow(false);
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
        className: (0, (/*@__PURE__*/$parcel$interopDefault($dc55a04402270530$exports))).wrapper,
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("button", {
                onClick: toggleShow,
                className: [
                    (0, (/*@__PURE__*/$parcel$interopDefault($dc55a04402270530$exports))).button,
                    (0, (/*@__PURE__*/$parcel$interopDefault($dc55a04402270530$exports))).active
                ].join(" "),
                children: props.list.find((item)=>item.id === active)?.label
            }),
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("ul", {
                className: [
                    (0, (/*@__PURE__*/$parcel$interopDefault($dc55a04402270530$exports))).ul,
                    show ? (0, (/*@__PURE__*/$parcel$interopDefault($dc55a04402270530$exports))).show : (0, (/*@__PURE__*/$parcel$interopDefault($dc55a04402270530$exports))).hide
                ].join(" "),
                children: props.list.map((item)=>/*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("li", {
                        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("button", {
                            onClick: handleSelect,
                            className: [
                                (0, (/*@__PURE__*/$parcel$interopDefault($dc55a04402270530$exports))).button,
                                item.id === active ? (0, (/*@__PURE__*/$parcel$interopDefault($dc55a04402270530$exports))).active : ""
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
