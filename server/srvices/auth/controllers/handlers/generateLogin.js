import cryptu from 'crypto'
export default  function(){
    try {
        const login = cryptu.randomBytes(4).toString('hex')
        return login
    } catch (error) {
        console.log(error)
    }
}