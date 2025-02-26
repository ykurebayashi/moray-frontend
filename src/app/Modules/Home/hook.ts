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
  const handleClick = (event: { sourceTarget: { feature: any } }) => {
    const eventValue = event.sourceTarget.feature;

    if (neighbourhood === eventValue) {
      return setNeighbourhood(null);
    }
    return setNeighbourhood(eventValue);
  };

  const handleMouseOver = (event: { target: any }) => {
    if (!geoJsonRef.current) return;
    geoJsonRef.current.resetStyle();

    const eventValue = event.target;
    eventValue.setStyle({ color: "green" });
  };

  const onEachFeatureFunctions = (
    _: any,
    layer: {
      on: (arg0: {
        mouseover: (event: any) => void;
        click: (event: { sourceTarget: { feature: any } }) => void;
      }) => void;
    }
  ) => {
    layer.on({
      mouseover: (event) => {
        handleMouseOver(event);
      },
      click: handleClick,
    });
  };

  return { onEachFeatureFunctions };
};
