import Link from 'next/link';

// import { AreaHeader } from './styled';

function Header() {
    return(
        <div>
                <div className="cabecalho">
                    <div className='container-cabecalho'>
                        <h1>Design online</h1>
                        <div className='menu-1'>
                            <Link className='link' href="/soudesigner"><a>Sou Designer</a></Link>
                            <a>Contratar Designer</a>
                        </div>
                    </div>
                    <div className='menu-p'>
                        <div>
                            <Link href="/"><a>INICIO</a></Link>
                            <a>TUTORIAIS</a>
                            <a>SOBRE</a>
                            <a>CONTATO</a>
                            <a>DÚVIDAS</a>
                        </div>

                        {/* <nav>
                            <ul>
                                <li>Inicio</li>
                                <li>Mais</li>
                                <li>Sobre</li>
                            </ul>
                        </nav> */}

                    </div>

                    </div>
        </div>
    )
}

export default Header