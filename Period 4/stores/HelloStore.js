import { observable, action } from "mobx";

class HelloStore {
    
    @observable buttonPressedCounter = 0;
    @observable helloList = [];
    @observable currentText = "";
    @observable lastText = "";

    @action
    getNewData(){
        //Fetch data to undList
    }

    @action
    incrementButtonPressed(){
        this.buttonPressedCounter = this.buttonPressedCounter + 1;
    }

    @action
    setHelloList(listArg){
        this.helloList = listArg;
    }

    @action
    setCurrentText(textArg){
        this.lastText = this.currentText;
        this.currentText = textArg;
    }
    
    
}

let helloStore = new HelloStore();
export default helloStore;