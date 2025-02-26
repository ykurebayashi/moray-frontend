import { SingleNeighbourhoodType } from "../../../hooks/useGetAppInfo";

type UseMapFunctionsProps = {
  neighbourhood: SingleNeighbourhoodType | null;
  setNeighbourhood: React.Dispatch<
    React.SetStateAction<SingleNeighbourhoodType | null>
  >;
  geoJsonRef: React.MutableRefObject<any>;
};

export const useMapFunctions = ({
  neighbourhood,
  setNeighbourhood,
  geoJsonRef,
}: UseMapFunctionsProps) => {
  const handleClick = (event) => {
    const eventValue = event.sourceTarget.feature;

    if (neighbourhood === eventValue) {
      return setNeighbourhood(null);
    }
    return setNeighbourhood(eventValue);
  };

  const handleMouseOver = (event) => {
    if (!geoJsonRef.current) return;
    geoJsonRef.current.resetStyle();

    const eventValue = event.target;
    eventValue.setStyle({ color: "green" });
  };

  const onEachFeatureFunctions = (_, layer) => {
    layer.on({
      mouseover: (event) => {
        handleMouseOver(event);
      },
      click: handleClick,
    });
  };

  return { onEachFeatureFunctions };
};
