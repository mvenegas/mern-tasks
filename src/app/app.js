import React, { Component } from 'react';

class App extends Component {    
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            tasks: [],
            _id: ''
        }
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.fetchTasks();
    }

    addTask (e) {         
        e.preventDefault();

        if (this.state.title == ''){
            alert('enter name');
            return;
        }

        if (this.state.description == ''){
            alert('enter Phone number');
            return;
        }

        if (this.state._id){
            fetch(`api/task/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                M.toast({html: 'Contact Updated'});
                this.setState({title: '', description: '', _id: ''});
                this.fetchTasks();
            })
        }else {
            fetch('api/task', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res=> res.json())
                .then(data => {
                    //console.log(data)
                    M.toast({html: 'Contact saved'});
                    this.setState({title: '', description: ''})
                    this.fetchTasks();
                })
                .catch(err => console.error(err));
        }  
        
        //e.preventDefault();
    }

    deleteTask(id){
        if (confirm('Are you sure you want to deleted it?')){
            fetch(`api/task/${id}`, {
                method: 'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                M.toast({html: 'Contact deleted'});
                this.fetchTasks();
            })
        }
    }

    editTask(id){
        fetch(`/api/task/${id}`)
            .then(res => res.json())
            .then(data => {
                //this.setState({tasks: data});
                //console.log(data);
                this.setState(
                    {
                        title: data.title,
                        description: data.description,
                        _id: data._id
                    });
            })
    }

    fetchTasks(){
        fetch('/api/task') // x default is GET
            .then(res => res.json())
            .then(data => {
                this.setState({tasks: data});
                //console.log(this.state.tasks);
            })
            .catch(err => console.error(err));
    }

    handleChange(e) {        
        const {name, value} = e.target;
        this.setState ({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                {/* Navigation */}
                {/* TODO: Luego cambiar por rutas */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Contact List (Demo MERN)</a>                        
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-file col s12">
                                                <input type="text" name="title" placeholder="Name" onChange={this.handleChange} value={this.state.title} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-file col s12">
                                                <textarea name="description" placeholder="Phone number" className="materialize-textarea" onChange={this.handleChange} value={this.state.description}></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task => {
                                            return (
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button className="btn light-blue darken-4">
                                                            <i className="material-icons" onClick={() => this.editTask(task._id)}>edit</i>
                                                        </button>
                                                        <button className="btn light-blue darken-4" style={{margin: '4px'}} onClick={()=> this.deleteTask(task._id)}>
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                    </td>
                                                    
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;