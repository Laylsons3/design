import Image from 'next/image';

function context() {
    


    return(
        <div style={{textAlign:'center'}}>

            <Image 
            src="/fundo-verde.jpg"
            width={400}
            height={260}
            alt="Imagem" />

        </div>
    )
}

export default context