import { ReactComponent as PinIcon } from "../pin.svg";
import styles from "./RequestGeoUI.module.css";
import { PERMISSION_STATUS } from "../containers/Geolocation";

function RequestGeoUI(props) {
  const { requestPermission, status } = props;
  return (
    <div className={styles.box}>
      <PinIcon className={styles.icon} />
      <p>
        Olá, para exibirmos as informações corretamente precisaremos da sua
        localização.
      </p>
      {status === PERMISSION_STATUS.DENIED && (
        <p className={styles.alert}>
          Remova essa APP de sua blocklist nas configurações do navegador.
        </p>
      )}
      <br />
      {status === PERMISSION_STATUS.PROMPT && (
        <button onClick={requestPermission}>Ativar minha localização</button>
      )}
    </div>
  );
}

export default RequestGeoUI;
