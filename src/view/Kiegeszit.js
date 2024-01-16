import {useState} from 'react';
import MondatKiegeszit from './MondatKiegeszit';

function Kiegeszit (props) {
  const [mondat, setMondat] = useState (props.model.jelenlegiMondat);
  const [gombAktiv, setGombAktiv] = useState ('inaktiv');
  const [helyes, setHelyes] = useState ('❌');
  const setInaktiv = () => {
    setGombAktiv ('inaktiv');
    setHelyes ('❌');
  };
  return (
    <div>
      <h2>{props.model.fejlec}</h2>
      <MondatKiegeszit
        mondat={mondat}
        gombAktiv={gombAktiv}
        helyes={helyes}
        onChange={value => {
          if (props.model.helyes (value)) {
            setGombAktiv ('aktiv');
            setHelyes ('✔');
          } else {
            setInaktiv ();
          }
        }}
        gombOnClick={() => {
          props.model.jelenlegiMondatIndexetLeptet ();
          setMondat (props.model.jelenlegiMondat);
          setInaktiv ();
        }}
      />
    </div>
  );
}

export default Kiegeszit;
