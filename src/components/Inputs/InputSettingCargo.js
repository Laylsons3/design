function InputSettingCargo({ setTamanhoCargo, tamanhoCargo, setCorCargo, corCargo, handleClick, setDistanciaVerticalCargo, distanciaVerticalCargo, setDistanciaHorizontalCargo, distanciaHorizontalCargo }) {
    return(
        <div className="InputSetting">


<span style={{textAlign:'center'}}>CARGO</span>

<div className='flex-row'>
    <span>Tamanho</span>
    <input 
        style={{
            position:'absolute',
            right:'0'
        }}
        onChange={e => setTamanhoCargo(e.target.value)}
        value={tamanhoCargo}
        min={10}
        max={30}
        type="range" 
        />
</div>

<div className='flex-row'>
    <span>Cor</span>
    <input 
        style={{
            position:'absolute',
            left:'53px',
            bottom:'-5px',
            transform:'scale(.5)'
        }}
        onChange={e => setCorCargo(e.target.value)}
        value={corCargo}
        type="color"
        />

    <input 
        disabled
        value={corCargo} 
        type="text"
        onClick={handleClick} 
        style={{
            width:'70px',
            textAlign:'center',
            textTransform:'uppercase',
            color:'#00000088',
            position:'absolute',
            right:'8px',
            top:'-1px'
        }}
        />
    
</div>

<div className='flex-row'>
    <span>Dist Vertic.</span>
    <input 
        style={{
            position:'absolute',
            right:'0'}}
        onChange={e => setDistanciaVerticalCargo(e.target.value)}
        value={distanciaVerticalCargo}
        min={10}
        max={280}
        type="range" 
        />
</div>

<div className='flex-row'>
    <span>Dist Horiz.</span>
    <input 
        style={{
            position:'absolute',
            right:'0'}}
        onChange={e => setDistanciaHorizontalCargo(e.target.value)}
        value={distanciaHorizontalCargo}
        min={10}
        max={500}
        type="range" 
        />
</div>


        </div>
    )
}

export default InputSettingCargo;