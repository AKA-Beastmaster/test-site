class calculator{
    constructor(PreviousOperationtextelement, CurrentOperationtextelement) {
        this.PreviousOperationtextelement = PreviousOperationtextelement
        this.CurrentOperationtextelement = CurrentOperationtextelement
        this.clear
    }

    clear(){
        this.PreviousOperationtextelement = ''
        this.CurrentOperationtextelement = ''
        this.operation = undefined
    }

    delete(){

    }

    appendnumber(number){

    }

    chooseoperation(operation){

    }

    compute(){

    }

    updatedisplay(){

    }
}

const numberbuttons = document.querySelectorAll('[data-number]')
const operatorbuttons = document.querySelectorAll('[data-operator]')
const clearbutton = document.querySelector('[data-clear]')
const equalbutton = document.querySelector('[data-equal]')
const delbutton = document.querySelector('[data-del]')
const PreviousOperationtextelement = document.querySelector('[data-previous-operation]')
const CurrentOperationtextelement = document.querySelector('[data-current-operation]')
