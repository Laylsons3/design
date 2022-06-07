function InputText({setNomeCandidato, setNumeroCandidato, setInfo}) {
    return(
        <div>
            <input type="text" placeholder="Nome do candidato" onChange={(e) => setNomeCandidato(e.target.value)} />
            <input type="text" placeholder="Número do candidato" onChange={(e) => setNumeroCandidato(e.target.value)} maxLength="6"/>
            <textarea placeholder="Informações de rodapé" onChange={(e) => setInfo(e.target.value)} maxLength="200" rows="4" />
        </div>
    )
}

export default InputText;