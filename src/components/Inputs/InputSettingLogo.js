function InputSettingLogo({setOpacidadeLogo, opacidadeLogo, setTamanhoLogo, tamanhoLogo, setDistanciaVerticalLogo, distanciaVerticalLogo, setDistanciaHorizontalLogo, distanciaHorizontalLogo}) {
    return(
        <div className="InputSetting">

            <span style={{textAlign:'center'}}>LOGO</span>

            <div className='flex-row'>
                <span>Opacidade</span>
                <input 
                onChange={e => setOpacidadeLogo(e.target.value)}
                value={opacidadeLogo}
                type="range"
                style={{position:'absolute',right:'0'}}
                />
            </div>

            <div className='flex-row'>
                    <span>Tamanho</span>
                    <input 
                        style={{
                            position:'absolute',
                            right:'0'
                        }}
                        onChange={e => setTamanhoLogo(e.target.value)}
                        value={tamanhoLogo}
                        min={0}
                        max={100}
                        type="range" 
                        />
            </div>

            <div className='flex-row'>
                <span>Dist Vertic.</span>
                <input 
                    style={{
                        position:'absolute',
                        right:'0'
                    }}
                    onChange={e => setDistanciaVerticalLogo(e.target.value)}
                    value={distanciaVerticalLogo}
                    min={-80}
                    max={400}
                    type="range" 
                    />
            </div>

            <div className='flex-row'>
                <span>Dist Horiz.</span>
                <input 
                    style={{
                        position:'absolute',
                        right:'0'
                    }}
                    onChange={e => setDistanciaHorizontalLogo(e.target.value)}
                    value={distanciaHorizontalLogo}
                    min={-40}
                    max={350}
                    type="range" 
                    />
            </div>
        
            
            
        </div>
    )
}

export default InputSettingLogo;