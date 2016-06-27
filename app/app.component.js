import {Component} from '@angular/core'

var AppComponent = Component({
    selector: 'app',
    template:`
        <input (keypress)='keyPressed($event)'>
        <ul>
            <li *ngFor='let item of getFilteredItems()'>
            <button (click)='removeItem(item.id)'>X</button>
                {{item.text}}
            <input type='checkbox' (change)='item.completed = !item.completed' [checked]='item.completed'>
            Completed?
            </li>
        </ul>
        <button (click)="filter = 'ALL'">All</button>
        <button (click)="filter = 'COMPLETED'">Completed</button>
        <button (click)="filter = 'UNCOMPLETED'">Uncompleted</button>
    `,
    styleUrls:["../styles.css"]
}).Class({
    constructor(){
        this.todoItems = [];
        this.filter = 'ALL';
    },
    keyPressed(event){
        if(event.keyCode === 13){
            this.addItem(event.target.value);
            event.target.value = '';
        }
    },
    getId(){
        return this.todoItems.reduce((prev, cur) =>{
            console.log(cur, prev);
            return (cur.id > prev ? cur.id : prev);
        }, -1) + 1
    },
    addItem(item){
        console.log('adding', item);
        this.todoItems.push({
            id: this.getId(),
            text: item,
            completed: false
        })
    },
    getFilteredItems(){
        switch(this.filter){
            case 'ALL':
                return this.todoItems;
            case 'COMPLETED':
                return this.todoItems.filter((item, index) => {
                    return item.completed;
                })
            case 'UNCOMPLETED':
                return this.todoItems.filter((item, index) => {
                    return !item.completed;
                })
            default:
                throw "Invalid Filter";
        }
    },
    removeItem(id){
        console.log(id)
        for(let i in this.todoItems){
            if (this.todoItems[i].id === id){

                var item = this.todoItems.splice(i, 1)[0];
                console.log('removing', item.text, item.id);
                return;
            }
        }
    }
});

export default AppComponent;
