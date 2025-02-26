var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { keyframes } from "styled-components";
import { PADDING_MAP } from "../../Modules/Home/style";
var slideUp = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"], ["\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"])));
export var ModalContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  right: 0;\n  top: 10vh;\n  min-width: 380px;\n  width: 30%;\n  height: calc(100% - 10vh - ", "px);\n  margin-top: ", "px;\n  z-index: 1300;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background: ", ";\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid white;\n  padding: ", "px;\n  animation: ", " 1s ease-out;\n"], ["\n  position: absolute;\n  right: 0;\n  top: 10vh;\n  min-width: 380px;\n  width: 30%;\n  height: calc(100% - 10vh - ", "px);\n  margin-top: ", "px;\n  z-index: 1300;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background: ", ";\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid white;\n  padding: ", "px;\n  animation: ", " 1s ease-out;\n"])), 2 * PADDING_MAP, PADDING_MAP, function (_a) {
    var $isDarkMode = _a.$isDarkMode;
    return $isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)";
}, PADDING_MAP, slideUp);
export var MainContent = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
export var NeighbourhoodName = styled.h2(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 1.375rem;\n  font-weight: 400;\n"], ["\n  color: ", ";\n  font-size: 1.375rem;\n  font-weight: 400;\n"])), function (_a) {
    var $isDarkMode = _a.$isDarkMode;
    return ($isDarkMode ? "white" : "#1f1f1f");
});
export var NeighbourhoodInfo = styled.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  font-size 0.875rem;\n  font-weight: 400;\n"], ["\n  color: ", ";\n  font-size 0.875rem;\n  font-weight: 400;\n"])), function (_a) {
    var $isDarkMode = _a.$isDarkMode;
    return $isDarkMode ? "rgba(155, 155, 155)" : "#5e5e5e";
});
export var ChartContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 400px;\n"], ["\n  height: 400px;\n"])));
export var ActionButton = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 10px;\n  color: ", ";\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.2);\n    border-radius: 4px;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n  }\n"], ["\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 10px;\n  color: ", ";\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.2);\n    border-radius: 4px;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n  }\n"])), function (_a) {
    var $isDarkMode = _a.$isDarkMode;
    return $isDarkMode ? "rgba(155, 155, 155)" : "#5e5e5e";
});
export var TopInfos = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  padding: 15px 10px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  padding: 15px 10px;\n"])));
export var FlexRow = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
