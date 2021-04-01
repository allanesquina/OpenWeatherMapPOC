import { useEffect, useState, createContext } from "react";
import RequestGeoUI from "../components/RequestGeoUI";

export const PERMISSION_STATUS = {
  DENIED: "denied",
  GRANTED: "granted",
  PROMPT: "prompt",
};

export const GeolocationContext = createContext({});

// Get the current status of geolocation permission
function handlePermissinos() {
  return navigator.permissions
    .query({ name: "geolocation" })
    .then(function (result) {
      return result.state.toLocaleLowerCase();
    });
}

function Geolocation(props) {
  const [permission, setPermission] = useState(null);
  const [coord, setCoord] = useState(false);

  useEffect(() => {
    // If we have permission without user location then get user location.
    if (permission === PERMISSION_STATUS.GRANTED && !coord) {
      return getUserLocation();
    }
    handlePermissinos().then((result) => setPermission(result));
  }, [coord, permission]);

  // Request/get user location.
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoord(position.coords);
      },
      () => {
        setPermission(PERMISSION_STATUS.DENIED);
      }
    );
  };

  const handleClick = () => setPermission(PERMISSION_STATUS.GRANTED);

  if (permission === PERMISSION_STATUS.DENIED) {
    return <RequestGeoUI status={permission} requestPermission={handleClick} />;
  }

  // If permission is granted and we have the user location then render the weather comp.
  if (permission === PERMISSION_STATUS.GRANTED && coord) {
    return (
      <GeolocationContext.Provider value={coord}>
        {props.children}
      </GeolocationContext.Provider>
    );
  }

  // If permission is prompt, request permission.
  if (permission === PERMISSION_STATUS.PROMPT) {
    return <RequestGeoUI status={permission} requestPermission={handleClick} />;
  }

  return null;
}

export default Geolocation;
