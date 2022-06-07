function Dasboard() {
    const { user } = useAuth();
    
    return (
        <h1>Dash: {user?.displayName}</h1>
    )
}

export default Dasboard;