import { partidos } from '../Partidos'
import { cargoPol } from '../Cargos';

function Select({setNumero, setCargo}) {
    return(
        <div className='Select'>
            <select onChange={e => setNumero(e.target.value)}>
                    {partidos.map(({ partido, numPart }) => (
                        <option key={partido} value={numPart}>{partido}</option>
                    ))}
            </select>

            <select id="cargo" onChange={e => setCargo(e.target.value)}>
                        {cargoPol.map(({ cargopolitico }) => (
                        <option key={cargopolitico}>{cargopolitico}</option>
                        ))}
            </select>
        </div>
    )
}

export default Select;