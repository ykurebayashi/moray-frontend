export var useMapFunctions = function (_a) {
    var neighbourhood = _a.neighbourhood, setNeighbourhood = _a.setNeighbourhood, geoJsonRef = _a.geoJsonRef;
    var handleClick = function (event) {
        var eventValue = event.sourceTarget.feature;
        if (neighbourhood === eventValue) {
            return setNeighbourhood(null);
        }
        return setNeighbourhood(eventValue);
    };
    var handleMouseOver = function (event) {
        if (!geoJsonRef.current)
            return;
        geoJsonRef.current.resetStyle();
        var eventValue = event.target;
        eventValue.setStyle({ color: "green" });
    };
    var onEachFeatureFunctions = function (_, layer) {
        layer.on({
            mouseover: function (event) {
                handleMouseOver(event);
            },
            click: handleClick,
        });
    };
    return { onEachFeatureFunctions: onEachFeatureFunctions };
};
