class Routes{
    constructor(){
        this.apiUrl = 'http://bemorefitapi20180608115137.azurewebsites.net/api';
    }

    getLoginRoute = () => this.apiUrl.concat("/auth/login");
    
    getRegisterRoute = () => this.apiUrl.concat("/auth/register");
}

export default new Routes();