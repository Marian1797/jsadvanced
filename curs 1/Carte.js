class Carte {
    constructor(titluCarte, autorCarte, edituraCarte, anCarte, pretCarte){
        this.titlu= titluCarte;
        this.autor= autorCarte;
        this.editura= edituraCarte;
        this.an= anCarte;
        this.pret= pretCarte;
    }
    obtineTitlu(){
        console.log(`Titlul cartii este ${this.titlu}`)
    }
    afiseazaInfo(){
        console.log(`Datalii despre aceasta carte sunt: ${this.titlu},${this.autor},${this.pret}`)
    }
    deschideCartea(){
        console.log('Am deschis la pagina 15')
    }
}

export {Carte};