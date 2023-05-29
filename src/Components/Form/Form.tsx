import React, { Component, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

type FormProps = {
  selectedCnt: string,
  selectedType: string,
  fetchResults: (event: MouseEvent<HTMLButtonElement>, formState: {selectedCnt : string, selectedType : string}) => void
}

type FormState = {
  selectedCnt: string
  selectedType: string
}

class Form extends Component<FormProps, FormState> {
  state = {
    selectedCnt: 'United States',
    selectedType: ''
  }

  // handleChange = (event: any) => {
  //   console.log(event.target.name)
  //   console.log(event.target.value)
  //   if (event.target.name === 'country') {
  //     console.log(this.state)
  //   } else {
  //     console.log(this.state)
  //   }
  // }

  render() {
      return (
          <form className='dropdown-menu'>
            <label className='continent-label'>
              Continent:
              <select className='country' name='country' onChange={event => this.setState({selectedCnt : event.target.value})}>
                <option value="United States">United States</option>
                <option value='africa'>Africa</option>
                <option value='america'>Americas</option>
                <option value='asia'>Asia</option>
                <option value='australia'>Australia</option>
                <option value='europe'>Europe</option>
                <option value='world-wide'>Any Location</option>
              </select>
            </label>
            <label>
                Song Type:
                <select className='song-type' name='song-type' onChange={event => this.setState({selectedType : event.target.value})}>
                  <option value='calling-song' >Calling Song</option>
                  <option value='courtship-song' >Courtship Song</option>
                  <option value='dawn-song' >Dawn Song</option>
                  <option value='disturbance-song' >Disturbance Song</option>
                  <option value='duet-song' >Duet Song</option>
                  <option value='flight-song'>Flight Song</option>
                  <option value='rivalry-song' >Rivalry Song</option>
                  <option value='all-songs'>Any Song</option>
                </select>
            </label>
            <button 
            className="shrinky-link" 
            onClick={(event) =>{
              console.log(this.state)
              this.props.fetchResults(event, this.state)
              }}>

            <Link to="/results">
              Search
            </Link>
            </button>

          </form>
  
      )
  }

}

export default Form;