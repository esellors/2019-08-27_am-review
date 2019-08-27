import React, { Component } from 'react';
import Axios from 'axios';

export default class Update extends Component {
   constructor(props) {
      super(props);
      this.state = {
          id: null,
          name: '',
          phone: '',
          email: ''
      }
   }
   componentDidMount() {
      const {updateEntries} = this.props;

      Axios
         .get('/api/entries')
         .then(res => updateEntries(res.data))
         .catch(err => console.log(err))
   }
   handleInput = e => {
      this.setState({ [e.target.name]: e.target.value})
   }
   handleSubmit = e => {
      const operation = e.target.name;
      const {updateEntries} = this.props;
      const {id, name, phone, email} = this.state;

      switch(operation) {
         case 'add':
            Axios
               .post('/api/entries/add', {name, phone, email})
               .then(res => updateEntries(res.data))
               .catch(err => console.log(err))
            break;
         case 'edit':
            Axios
               .put(`/api/entries/${id}`, {name, phone, email})
               .then(res => updateEntries(res.data))
               .catch(err => console.log(err))
            break;
         case 'delete':
            Axios
               .delete(`/api/entries/${id}`)
               .then(res => updateEntries(res.data))
               .catch(err => console.log(err))
            break;
         default:
            break;
      }

   }
   render() {
      return (
         <div className='inner-container'>
            <div>
               <h2>Add</h2>
               <input
                  name='name'
                  placeholder='name'
                  onChange={this.handleInput}
               />
               <input
                  name='phone'
                  placeholder='phone'
                  onChange={this.handleInput}
               />
               <input
                  name='email'
                  placeholder='email'
                  onChange={this.handleInput}
               />
               <button name='add' onClick={this.handleSubmit}>Add</button>
            </div>
            <div>
               <h2>Edit</h2>
               <input
                  name='id'
                  placeholder='id'
                  onChange={this.handleInput}
               />
               <input
                  name='name'
                  placeholder='name'
                  onChange={this.handleInput}
               />
               <input
                  name='phone'
                  placeholder='phone'
                  onChange={this.handleInput}
               />
               <input
                  name='email'
                  placeholder='email'
                  onChange={this.handleInput}
               />
               <button name='edit' onClick={this.handleSubmit}>Edit</button>
            </div>
            <div>
               <h2>Delete</h2>
               <input
                  name='id'
                  placeholder='id'
                  onChange={this.handleInput}
               />
               <button name='delete' onClick={this.handleSubmit}>Delete</button>
            </div>
         </div>
      )
   }
}
