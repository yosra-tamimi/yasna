import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

// Import Component
import Header from './Header';
import AddStep from './AddStep'
import Counter from './Counter'

class App extends Component{
    state = {
        steps : []
    }
    addCounter(text){
        this.setState(prevState => {
            return {
                steps : [
                    ...prevState.steps,
                    { key: Date.now() , text }
                ]
            }
        })
    }
    runCounter(key,text){
        let counters = this.state;
        let item = counters.find(item => item.key === key);
        item.text = text ;
        let newCounter = counters.filter(item => item.key !== key)
        this.setState({
            counters : [
                ...newCounter,
                item
            ]
        })
    }
    render(){
            let counters  = this.state.steps;
            console.log("c",counters)
            return(
                <div className="App">
                    <div className="container col-10"> 
                        <Header />
                        <main>
                            <div className="main">
                                <div className="add-step col-8">
                                    <AddStep add={this.addCounter.bind(this)} />
                                    <br />
                                    <p>This Only Accepts Numbers Like 1, 2, -5, 3.8, 310</p>
                                </div >
                                {
                                    counters.map(item => <Counter 
                                        key = {item.key}
                                        item = {item} 
                                        run={this.runCounter.bind(this)} />)
                                }
                                
                            </div>
                        </main>
                    </div>
                </div>
            )
        

    }

}

export default App;