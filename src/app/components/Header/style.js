var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
export var MainHeader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 10vh;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 5%;\n  align-items: center;\n  position: absolute;\n  z-index: 1302;\n  width: 100%;\n"], ["\n  height: 10vh;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 5%;\n  align-items: center;\n  position: absolute;\n  z-index: 1302;\n  width: 100%;\n"])));
export var OptionPill = styled.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: ", ";\n  border: none;\n  min-width: 100px;\n  height: 30px;\n  box-shadow: 0px 0px 8px 1px white;\n  cursor: pointer;\n  padding: 0 10px;\n  border-radius: 20px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n  color: ", ";\n  position: relative;\n\n  ", "\n"], ["\n  background: ", ";\n  border: none;\n  min-width: 100px;\n  height: 30px;\n  box-shadow: 0px 0px 8px 1px white;\n  cursor: pointer;\n  padding: 0 10px;\n  border-radius: 20px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n  color: ", ";\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var $isDarkMode = _a.$isDarkMode;
    return ($isDarkMode ? "#1f1f1f" : "white");
}, function (_a) {
    var $isDarkMode = _a.$isDarkMode;
    return ($isDarkMode ? "white" : "#1f1f1f");
}, function (_a) {
    var $selected = _a.$selected;
    return $selected && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background: rgba(107, 88, 255, 0.5);\n    "], ["\n      background: rgba(107, 88, 255, 0.5);\n    "])));
});
export var PillsContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  gap: 20px;\n  max-width: 50%;\n  overflow-x: scroll;\n  align-items: center;\n  padding: 20px;\n"], ["\n  display: flex;\n  gap: 20px;\n  max-width: 50%;\n  overflow-x: scroll;\n  align-items: center;\n  padding: 20px;\n"])));
export var DropdownMenu = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 70%;\n  width: 200px;\n  border-radius: 20px;\n  max-height: 300px;\n  overflow-y: scroll;\n  background: ", ";\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid white;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"], ["\n  position: absolute;\n  top: 70%;\n  width: 200px;\n  border-radius: 20px;\n  max-height: 300px;\n  overflow-y: scroll;\n  background: ", ";\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid white;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"])), function (_a) {
    var $isDarkMode = _a.$isDarkMode;
    return $isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)";
});
export var FavoriteOption = styled.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  cursor: pointer;\n"], ["\n  color: ", ";\n  cursor: pointer;\n"])), function (_a) {
    var $isDarkMode = _a.$isDarkMode;
    return ($isDarkMode ? "white" : "black");
});
export var CloseButton = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  color: ", ";\n  cursor: pointer;\n"], ["\n  background: none;\n  border: none;\n  color: ", ";\n  cursor: pointer;\n"])), function (_a) {
    var $isDarkMode = _a.$isDarkMode;
    return ($isDarkMode ? "white" : "black");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
