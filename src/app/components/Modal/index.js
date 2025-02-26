var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useContext } from "react";
import { MainContent, ModalContainer, NeighbourhoodInfo, NeighbourhoodName, ChartContainer, ActionButton, TopInfos, FlexRow, } from "./style";
import { BarChart } from "@mui/x-charts/BarChart";
import { GeneralContext } from "../../../context/GeneralContext";
import { ToastContainer, toast } from "react-toastify";
export var Modal = function (_a) {
    var neighbourhood = _a.neighbourhood, usedPopulationData = _a.usedPopulationData, onClose = _a.onClose;
    var _b = useContext(GeneralContext), theme = _b.theme, setFavs = _b.setFavs, favs = _b.favs;
    var isDarkMode = theme === "dark";
    var notify = function (param) {
        return toast(param, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            progress: undefined,
            theme: isDarkMode ? "dark" : "light",
            style: { background: "#44c26c", color: "white" },
        });
    };
    var xAxisElements = usedPopulationData.map(function (element) { return element.ano; });
    var yAxisValues = usedPopulationData.map(function (element) { return element.populacao; });
    return (React.createElement(ModalContainer, { "$isDarkMode": isDarkMode },
        React.createElement(TopInfos, null,
            React.createElement(MainContent, null,
                React.createElement(NeighbourhoodName, { "$isDarkMode": isDarkMode }, neighbourhood.name),
                React.createElement(NeighbourhoodInfo, { "$isDarkMode": isDarkMode }, neighbourhood.setor),
                React.createElement(NeighbourhoodInfo, { "$isDarkMode": isDarkMode }, neighbourhood.zona)),
            React.createElement(FlexRow, null,
                React.createElement(ActionButton, { style: { top: "50px" }, "$isDarkMode": isDarkMode, onClick: function () {
                        notify("Copiado para o clipboard");
                        navigator.clipboard.writeText(location.origin + "/" + neighbourhood.id);
                    } }, "Compartilhar"),
                React.createElement(ActionButton, { "$isDarkMode": isDarkMode, onClick: onClose }, "Fechar"))),
        React.createElement(ChartContainer, null,
            React.createElement(BarChart, { xAxis: [
                    {
                        id: "barCategories",
                        data: xAxisElements,
                        scaleType: "band",
                    },
                ], series: [
                    {
                        data: yAxisValues,
                        color: "#6c58ff",
                    },
                ], width: 380, sx: {
                    ".MuiChartsAxis-tickLabel > tspan": {
                        fill: isDarkMode ? "white" : "black",
                    },
                } })),
        React.createElement(ActionButton, { "$isDarkMode": isDarkMode, onClick: function () {
                if (favs.some(function (element) { return element.id === neighbourhood.id; })) {
                    notify("Este bairro já está nos favoritos");
                    return;
                }
                notify("Adicionado aos favoritos");
                return setFavs(__spreadArray(__spreadArray([], favs, true), [neighbourhood], false));
            } }, "Adicionar aos favoritos"),
        React.createElement(ToastContainer, null)));
};
