function MondatKiegeszit (props) {
  const MONDAT = props.mondat.mondat.split (' ');
  return (
    <div className="mondat-kiegeszit">
      <div>
        {MONDAT.map (
          (elem, index) =>
            elem !== '_'
              ? elem + ' '
              : <input
                  key={index}
                  type="text"
                  onChange={event => props.onChange (event.target.value)}
                />
        )}
        (
        {props.mondat.alap}
        )
        {' '}
        {props.helyes}
      </div>
      <button className={props.gombAktiv} onClick={props.gombOnClick}>
        Tovább
      </button>
    </div>
  );
}

export default MondatKiegeszit;
