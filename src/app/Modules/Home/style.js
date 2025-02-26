var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
export var PADDING_MAP = 15;
export var MainContainer = styled.main(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n\n  ", "\n"], ["\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var $isDarkMode = _a.$isDarkMode;
    return $isDarkMode && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      .leaflet-layer,\n      .leaflet-control-zoom-in,\n      .leaflet-control-zoom-out,\n      .leaflet-control-attribution {\n        filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);\n      }\n    "], ["\n      .leaflet-layer,\n      .leaflet-control-zoom-in,\n      .leaflet-control-zoom-out,\n      .leaflet-control-attribution {\n        filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);\n      }\n    "])));
});
var templateObject_1, templateObject_2;
