class User{
    #varsta;
    _email;
    constructor(id,nume){
        //setam proprietatile
        this.id=id;
        this.nume=nume;
    }

    set email(myemail){
        this._email=myemail;
    }
    get email(){
        return this._email;
    }

    set varsta(age){
        this.#varsta=age;
    }
    get email(){
        return this.#varsta;
    }

    datePersonale(){
        console.log(`Salut numele meu este ${this.nume},adresa de mail este
            ${this._email},varsta este ${this.#varsta}`)
    }
    mananca (claorii){
        console.log(`Mananca ${claorii} pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} pe zi`);
    }
}
export {User}
