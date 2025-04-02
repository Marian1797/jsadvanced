export class Student{
    nota1;
    nota2;
    constructor(id,nume,prenume,vasrta){
        this.id=id;
        this.nume=nume;
        this.prenume=prenume;
        this.vasrta=vasrta;
    }
    salut(){
        console.log(`Buna ziua,numele meu este ${this.nume} si am varsta de ${this.vasrta} ani`)
    }
    examen(nota1,nota2){
        this.nota1=nota1;
        this.nota2=nota2;
        console.log(`Am fost la examen si am luat notele:${this.nota1} si ${this.nota2}`)
    }
    calcMedia(){
        let media=(this.nota1 + this.nota2)/2
        console.log(`Media pentru studentul ${this.nume} ${this.prenume} este ${media}`)
    }
}

