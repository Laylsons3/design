function InputSettingNumero({ fonteNumero, setFonteNumero, setCorNumero, corNumero, setCorSombraNumero, corSombraNumero, handleClick, setTamanhoNumero, setDistanciaVerticalNumero, distanciaVerticalNumero, setDistanciaHorizontalNumero, distanciaHorizontalNumero }) {
    return(
        <div className="InputSetting">

            
            
            <span style={{textAlign:'center'}}>NUMERO</span>

            <div className='flex-row'>
                <span>Fonte</span>
                <select value={fonteNumero} style={{position:'absolute',right:'0',top:'0'}} onChange={e => setFonteNumero(e.target.value)}>
                    <option style={{fontFamily:'Arial'}}>Arial</option>
                    <option style={{fontFamily:'Bahnschrift'}}>Bahnschrift</option>
                    <option style={{fontFamily:'Bebas Neue'}}>Bebas Neue</option>
                    <option style={{fontFamily:'Book Antiqua'}}>Book Antiqua</option>
                    <option style={{fontFamily:'Bookman Old Style'}}>Bookman Old Style</option>
                    <option style={{fontFamily:'Calibri'}}>Calibri</option>
                    <option style={{fontFamily:'Cambria'}}>Cambria</option>
                    <option style={{fontFamily:'Candara'}}>Candara</option>
                    <option style={{fontFamily:'Consolas'}}>Consolas</option>
                    <option style={{fontFamily:'Comic Sans MS'}}>Comic Sans MS</option>
                    <option style={{fontFamily:'Ink Free'}}>Ink Free</option>
                    <option style={{fontFamily:'Impact'}}>Impact</option>
                    <option style={{fontFamily:'Montserrat'}}>Montserrat</option>
                    <option style={{fontFamily:'Verdana'}}>Verdana</option>
                    <option style={{fontFamily:'Roboto'}}>Roboto</option>
                </select>
            </div>

            <div className='flex-row'>
            <span>Cor</span>
            <input 
            style={{
                position:'absolute',
                left:'53px',
                bottom:'-5px',
                transform:'scale(.5)'}}
            onChange={e => setCorNumero(e.target.value)}
            type="color"
            value={corNumero}
            />
            <input 
            style={{
                position:'absolute',
                left:'25px',
                bottom:'-5px',
                transform:'scale(.5)'}}
            onChange={e => setCorSombraNumero(e.target.value)}
            type="color"
            value={corSombraNumero}
            />                        
            <input 
            disabled
            value={corNumero} 
            type="text"
            onClick={handleClick} 
            style={{
                width:'70px',
                textAlign:'center',
                textTransform:'uppercase',
                color:'#00000088',
                position:'absolute',
                right:'8px',
                top:'-1px'}}
            />
            </div>

            <div className='flex-row'>
                <span>Tamanho</span>
                <input 
                onChange={e => setTamanhoNumero(e.target.value)}
                min={60}
                max={185}
                type="range" 
                />
            </div>

            <div className='flex-row'>
                <span>Dist Vertic.</span>
                <input 
                style={{position:'absolute',right:'0px',}}
                onChange={e => setDistanciaVerticalNumero(e.target.value)}
                value={distanciaVerticalNumero}
                min={10}
                max={430}
                type="range" 
                />
            </div>

            <div className='flex-row'>
                <span>Dist Horiz.</span>
                <input style={{position:'absolute',right:'0px'}}
                onChange={e => setDistanciaHorizontalNumero(e.target.value)}
                value={distanciaHorizontalNumero}
                min={10}
                max={200}
                type="range" 
                />
            </div>
        
            
            
        </div>
    )
}

export default InputSettingNumero;