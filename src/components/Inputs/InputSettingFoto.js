function InputSettingFoto({setTamanhoImagemCandidato, tamanhoImagemCandidato}) {
    return(
        <div className="InputSetting">

            <span>FOTO</span>

            <div className='flex-row'>

                <span>Tamanho</span>
                <input 
                onChange={e => setTamanhoImagemCandidato(e.target.value)}
                value={tamanhoImagemCandidato}
                type="range"
                min={75}
                max={200}
                />
        
            </div>
            
        </div>
    )
}

export default InputSettingFoto;