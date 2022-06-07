import { bg } from './CoresBG'

function BackgroundGradient({setBackgroung, setRotacaoBackground, rotacaoBackground}) {

    return(
        <div className='BackgroundGradient'>

            <h3>BACKGROUND</h3>

            <div className='rotacaoBG'>
                <span>Girar</span>
                <input
                style={{marginTop:'5px'}}
                onChange={e => setRotacaoBackground(e.target.value)}
                value={rotacaoBackground}
                min={0}
                max={360}
                type="range" 
                />
            </div>
                
            <div className='seletorBG'>
                {bg.map(({ cores }) => (
                    <button style={{backgroundImage:`linear-gradient(${cores})`}} key={cores} value={cores} onClick={e => setBackgroung(e.target.value)}/>
                ))}
            </div>

        </div>
    )


}

export default BackgroundGradient;