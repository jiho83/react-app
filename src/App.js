/*import logo from './logo.svg';*/
import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:'read',
            selected_content_id:2,
            subject:{title:'web', sub:'world wide web'},
            welcome:{title:'welcome', desc:'welcome, React..'},
            contents:[
                {id:1, title:'html', desc:'html test'},
                {id:2, title:'css', desc:'css test'},
                {id:3, title:'javascript', desc:'js test!!!!!'}
            ]
        }
    }
    render() {
        var _title, _desc = null;
        if(this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if(this.state.mode === 'read') {
            var i = 0;
            while(i < this.state.contents.length){
                var data = this.state.contents[i];
                if(data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i = i + 1;
            }

        }
    return (
        <div className="App">
            <Subject
                title={this.state.subject.title}
                sub={this.state.subject.sub}
                onChangePage = {function(){
                    this.setState({mode:'welcome'});
                }.bind(this)}
            >
            </Subject>
            <TOC
                onChangePage = {function(id){
                    this.setState({
                        mode:'read',
                        selected_content_id:Number(id)
                        /*test*/
                    })
                }.bind(this)}
                data={this.state.contents}
            ></TOC>
            <Content title={_title} desc={_desc}></Content>
        </div>
    );
  }
}

/*  function App() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
}*/

export default App;
